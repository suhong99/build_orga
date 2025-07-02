'use server';

import { tokenFetcher } from '@/shared/api/fetcher';
import { COOKIE_NAME } from '@/shared/const/cookie';
import { RefreshTokenError, ServerError } from '@/shared/const/error';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MyProfileInfo } from '../const/user';
import { IssueCardProps } from '@/shared/components/IssueCard';
import { BillReaction } from '@/features/bill-detail/const';

type MyProfileInfoResponse = { status: 'success'; result: MyProfileInfo } | { status: 'relogin' };

export interface MyReactions {
	aiTitle: string;
	billId: number;
	reactionType: BillReaction;
	date: string;
}

interface MyComments {
	commentId: string;
	content: string;
	createdDate: string;
	likeCount: 3;
	title: string;
}

// 내 프로필 정보
export async function myProfileInfo(): Promise<MyProfileInfoResponse> {
	const cookieStore = await cookies();
	const token = cookieStore.get(COOKIE_NAME.auth.access)?.value;

	if (!token) {
		redirect('/');
	}

	try {
		const response = await tokenFetcher<MyProfileInfo>('/api/users/me/info');
		return { status: 'success', result: response.result };
	} catch (err) {
		if (err instanceof RefreshTokenError) {
			return { status: 'relogin' };
		} else {
			throw new ServerError();
		}
	}
}

export async function getMyBookmarks({ page = 0, size = 16 }: { page: number; size?: number }) {
	const response = await tokenFetcher<{ content: IssueCardProps[]; pageNumber: number; last: boolean }>(
		`/api/users/me/bookmarks?page=${page}&size=${size}`,
	);
	return { result: response.result };
}

export async function getMyReactions({ page = 0, size = 16 }: { page: number; size?: number }) {
	const response = await tokenFetcher<{ content: MyReactions[]; pageNumber: number; last: boolean }>(
		`/api/users/me/reactions?page=${page}&size=${size}`,
	);
	return { result: response.result };
}

export async function getMyComments({ page = 0, size = 16 }: { page: number; size?: number }) {
	const response = await tokenFetcher<{ content: MyComments[]; pageNumber: number; last: boolean }>(
		`/api/users/me/comments?page=${page}&size=${size}`,
	);

	return { result: response.result };
}
