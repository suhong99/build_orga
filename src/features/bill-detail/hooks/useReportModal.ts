import { useRouter } from 'next/navigation';
import { MODAL_PATH } from '@/shared/const/url';
import { isLoggedIn } from '@/features/auth/utils/cookie';

export const useReportModal = () => {
	const router = useRouter();

	const openReportModal = async (commentId: number | string) => {
		const isLogin = await isLoggedIn();

		if (!isLogin) {
			router.push(MODAL_PATH.login, { scroll: false });
		} else {
			router.push(`${MODAL_PATH.reportComment}/${commentId}`);
		}
	};

	return openReportModal;
};
