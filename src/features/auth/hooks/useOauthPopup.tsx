import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type OAuthType = 'kakao' | 'google';

interface OAuthPopUp {
	open: (type: OAuthType) => void;
	code: string | null;
	close: () => void;
	isOpen: boolean;
}

const useOAuthPopUp = (): OAuthPopUp => {
	const popUpRef = useRef<Window | null>(null);
	const [code, setCode] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback((type: OAuthType) => {
		const width = 500;
		const height = 600;
		const left = window.screen.width / 2 - width / 2;
		const top = window.screen.height / 2 - height / 2;

		const OAUTH_URLS: Record<OAuthType, string> = {
			kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
			google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`,
		};

		const TITLE_MAP: Record<OAuthType, string> = {
			kakao: '카카오',
			google: '구글',
		};

		const url = OAUTH_URLS[type];
		const newPopUp = window.open(url, TITLE_MAP[type], `width=${width},height=${height},left=${left},top=${top}`);

		if (newPopUp) {
			popUpRef.current = newPopUp;
			setIsOpen(true);
		}
	}, []);

	const close = useCallback(() => {
		if (popUpRef.current) {
			popUpRef.current.close();
			popUpRef.current = null;
			setIsOpen(false);
		}
	}, []);

	// 부모 창에서 메시지 수신
	useEffect(() => {
		if (window.opener) return;

		const oAuthCodeListener = (event: MessageEvent) => {
			if (event.origin !== window.location.origin) return;

			const { code } = event.data;
			if (!code) return;

			setCode(code);
			setIsOpen(false);
		};

		window.addEventListener('message', oAuthCodeListener);
		return () => window.removeEventListener('message', oAuthCodeListener);
	}, []);

	// 0.7초마다 열렸는지 확인
	useEffect(() => {
		const interval = setInterval(() => {
			if (popUpRef.current && popUpRef.current.closed) {
				popUpRef.current = null;
				setIsOpen(false);
			}
		}, 700);
		return () => clearInterval(interval);
	}, []);

	return useMemo(() => ({ open, code, close, isOpen }), [open, code, close, isOpen]);
};

export default useOAuthPopUp;
