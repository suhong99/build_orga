import { useRouter } from 'next/navigation';
import { MODAL_PATH } from '../const/url';

export const useHandleError = () => {
	const router = useRouter();

	const handleErrorByName = (err: Error, actionName: string) => {
		if (err.name === 'NeedLoginError') {
			router.push(MODAL_PATH.login);
		} else if (err.name === 'RefreshTokenError') {
			alert('세션이 만료되었습니다. 다시 로그인해주세요.');
			router.push(MODAL_PATH.login);
		} else {
			alert(`${actionName}에 실패했습니다. 다시 시도해주세요.`);
		}
	};
	return { handleErrorByName };
};
