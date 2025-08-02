'use server';

import { CommitteeName } from '@/shared/const/committee';
import { SerializableActionResponse, serializableFetcher, tokenFetcher } from '@/shared/api/fetcher';
import { BillReaction } from '../const';
import { CommentResponse } from '@/shared/components/Comment';
import { isLoggedIn } from '@/features/auth/utils/cookie';
import { NeedLoginError } from '@/shared/const/error';
import { API_FAILURE_RESPONSE } from '@/shared/const/api';

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
		const isLogin = await isLoggedIn();
		if (!isLogin) {
			return { status: 'relogin' };
		}

		await tokenFetcher<{
			hasReacted: boolean;
			reactionType: string;
		}>(`/api/bills/${id}/reactions`, {
			method: 'POST',
			body: JSON.stringify({ reactionType }),
		});
		return { status: 'success' };
	} catch (err) {
		if (err instanceof Error && err.name === 'NeedLoginError') {
			return { status: 'relogin' };
		}
		if (err instanceof Error && err.name === 'RefreshTokenError') {
			return { status: 'refresh' };
		}

		return { status: 'SERVER_ERROR' };
	}
};

export const getBillComments = async ({ id, page = 0, size = 16 }: { id: number | string; page: number; size?: number }) => {
	const response = await tokenFetcher<BillComments>(`/api/bills/${id}/comments?page=${page}&size=${size}`);
	return { result: response.result };
};

export const addBillComment = async (id: number | string, content: string): Promise<SerializableActionResponse<CommentResponse>> => {
	const isLogin = await isLoggedIn();

	if (!isLogin) {
		return API_FAILURE_RESPONSE.needLogin;
	}

	return serializableFetcher<CommentResponse>(`/api/bills/${id}/comments`, {
		method: 'POST',
		body: JSON.stringify({ content }),
	});
};

export const deleteBillComment = async (id: number | string) => {
	return await serializableFetcher(`/api/comments/${id}`, { method: 'DELETE' });
};

export const editBillComment = async (id: number | string, content: string) => {
	return await serializableFetcher(`/api/comments/${id}`, { method: 'PATCH', body: JSON.stringify({ content }) });
};

export const likeBillComment = async (id: number | string) => {
	const isLogin = await isLoggedIn();

	if (!isLogin) {
		return API_FAILURE_RESPONSE.needLogin;
	}

	return await serializableFetcher(`/api/comments/${id}/likes/toggle`, { method: 'POST' });
};

export const reportBillComment = async (id: number | string, content: string) => {
	const isLogin = await isLoggedIn();

	if (!isLogin) {
		throw new NeedLoginError();
	}

	await tokenFetcher(`/api/comments/${id}/reports`, { method: 'POST', body: JSON.stringify({ content }) });
};
