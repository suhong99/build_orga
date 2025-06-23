import { BillStatus } from '@/shared/const/bill';
import { CommitteeName } from '@/shared/const/committee';
import { tokenFetcher } from '@/shared/api/fetcher';

export interface BillHistory {
	id: number;
	stepOrder: number;
	stepName: string;
	stepResult: string;
	stepDate: string; // ISO 8601 (YYYY-MM-DD)
}

export interface BillDetalProps {
	/**이슈 아이디 */
	id: string;
	/** 카드 제목 */
	billAiTitle: string;
	/** 소속 위원회 */
	committeeName: CommitteeName;
	/** 발의자 이름 */
	representativeName: string;
	/** 발의 날짜 (YYYY.MM.DD 형태) */
	proposeDate: string;
	/** 현재 상태 */
	billStatus: BillStatus;
	/** 조회수 */
	viewCount: number;
	/** 반응 수 */
	reactionCount: number;
	/** 댓글 수 */
	commentCount: number;
	/** 북마크 여부*/
	scrapped: boolean;
	/**ai요약 */
	billAiSummary: string;
	billSummary: string;
	// 법안 진행 내역
	history: BillHistory[];
}

export const getBillDetail = async (id: string): Promise<BillDetalProps> => {
	try {
		const response = await tokenFetcher<BillDetalProps>(`/api/bills/${id}`);
		const data = response.result;
		return data;
	} catch (err) {
		throw err;
	}
};
