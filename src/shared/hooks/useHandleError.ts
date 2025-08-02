import { useRouter } from 'next/navigation';
import { MODAL_PATH } from '../const/url';

export const useHandleError = () => {
	const router = useRouter();

	const handleErrorByCode = (code?: string, actionName?: string) => {
		switch (code) {
			case 'needLogin':
				router.push(MODAL_PATH.login, { scroll: false });
				break;
			case 'refreshToken':
				alert('세션이 만료되었습니다. 다시 로그인해주세요.');
				router.push(MODAL_PATH.login, { scroll: false });
				break;
			default:
				alert(`${actionName ?? '요청'}에 실패했습니다. 다시 시도해주세요.`);
		}
	};
	return { handleErrorByCode };
};
