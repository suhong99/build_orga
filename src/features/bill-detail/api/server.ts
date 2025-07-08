import { CommitteeName } from '@/shared/const/committee';
import { tokenFetcher } from '@/shared/api/fetcher';
import { BillReaction } from '../const';
import { NeedLoginError, RefreshTokenError } from '@/shared/const/error';
import { CommentResponse } from '@/shared/components/Comment';

export interface BillHistory {
	id: number;
	stepOrder: number;
	stepName: string;
	stepResult: string;
	stepDate: string; // ISO 8601 (YYYY-MM-DD)
}

export interface ReactionCounts {
	excitedReactionCount: number;
	improvementReactionCount: number;
	disappointedReactionCount: number;
	likeReactionCount: number;
	userReactionType: BillReaction | null;
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
	billStatus: string;
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

export interface BillComments {
	totalcount: number;
	comments: { content: CommentResponse[]; pageNumber: number; last: boolean };
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

export const getBillReactions = async (id: string) => {
	const response = await tokenFetcher<ReactionCounts>(`/api/bills/${id}/reactions`);
	return { result: response.result };
};

export const postMyReaction = async (id: string, reactionType: BillReaction) => {
	try {
		await tokenFetcher<{
			hasReacted: boolean;
			reactionType: string;
		}>(`/api/bills/${id}/reactions`, {
			method: 'POST',
			body: JSON.stringify({ reactionType }),
		});
		return { status: 'SUCCESS' };
	} catch (err) {
		if (err instanceof NeedLoginError) {
			return { status: 'RELOGIN' };
		}

		if (err instanceof RefreshTokenError) {
			return { status: 'REFRESH' };
		}

		return { status: 'SERVER_ERROR' };
	}
};

export const getBillComments = async ({ id, page = 0, size = 16 }: { id: number | string; page: number; size?: number }) => {
	const response = await tokenFetcher<BillComments>(`/api/bills/${id}/comments?page=0&page=${page}&size=${size}`);
	return { result: response.result };
};

export const addBillComment = async (id: number | string, content: string) => {
	const response = await tokenFetcher<CommentResponse>(`/api/bills/${id}/comments`, { method: 'POST', body: JSON.stringify({ content }) });

	return { result: response.result };
};

export const deleteBillComment = async (id: number | string) => {
	await tokenFetcher(`/api/comments/${id}`, { method: 'DELETE' });
};

export const editBillComment = async (id: number | string, content: string) => {
	await tokenFetcher(`/api/comments/${id}`, { method: 'PATCH', body: JSON.stringify({ content }) });
};

export const likeBillComment = async (id: number | string) => {
	await tokenFetcher(`/api/comments/${id}/likes/toggle`, { method: 'POST' });
};
