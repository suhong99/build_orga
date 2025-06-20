'use client';

import { useEffect } from 'react';

export default function OAuthCallbackPage() {
	// 팝업에서 code 받은 경우 부모에 전달
	useEffect(() => {
		if (!window.opener) return;
		const openerURL = window.opener.location.href;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get('code');

		if (code) {
			window.opener.postMessage({ code }, openerURL);
			window.close();
		}
	}, []);

	return <p>로그인 처리 중입니다...</p>;
}
