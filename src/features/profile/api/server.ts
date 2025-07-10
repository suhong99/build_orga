'use server';

import { logout } from '@/shared/api/auth';
import { tokenFetcher } from '@/shared/api/fetcher';
import { Keyword } from '@/shared/const/committee';
import { COOKIE_NAME } from '@/shared/const/cookie';
import { RefreshTokenError } from '@/shared/const/error';
import { cookies } from 'next/headers';

// 프로필 수정
export async function editProfile(nickname: string, keywords: Keyword[]) {
	const cookieStore = await cookies();
	const token = cookieStore.get(COOKIE_NAME.auth.access)?.value;

	if (!token) {
		return { status: 'relogin' };
	}

	try {
		await tokenFetcher('/api/users/me/info', {
			method: 'PATCH',
			body: JSON.stringify({ nickname, interestKeywords: keywords }),
			cache: 'no-store',
		});

		cookieStore.set(COOKIE_NAME.auth.nickname, nickname, {
			httpOnly: false,
			path: '/',
		});

		return { status: 'success' };
	} catch (err) {
		if (err instanceof RefreshTokenError) {
			await logout(token);
			return { status: 'relogin' };
		} else {
			return { status: 'retry' };
		}
	}
}
