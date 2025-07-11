import { RefreshTokenError } from '@/shared/const/error';
import { getRecommenedBills } from './api';
import Content from './Content';
import ContentHeader from './ContentHeader';
import { redirect } from 'next/navigation';

const RecommendBills = async () => {
	try {
		const response = await getRecommenedBills();
		const { nickname, keywords, bills } = response;

		return (
			<Content data={bills.content}>
				<ContentHeader
					title={nickname ? `${nickname}님이 관심있는` : '당신을 위한 법안'}
					keywordList={nickname ? keywords : null}
					link="/issue"
					isLoginRequired={!nickname}
				/>
			</Content>
		);
	} catch (err) {
		if (err instanceof RefreshTokenError) {
			redirect('/modal-login');
		}

		throw err;
	}
};

export default RecommendBills;
