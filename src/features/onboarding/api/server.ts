'use server';

import { logout } from '@/shared/api/auth';
import { tokenFetcher } from '@/shared/api/fetcher';
import { Keyword } from '@/shared/const/committee';
import { COOKIE_NAME } from '@/shared/const/cookie';
import { RefreshTokenError } from '@/shared/const/error';
import { cookies } from 'next/headers';

// 닉네임 중복 확인 API
export async function checkNickname(nickname: string) {
	const cookieStore = await cookies();
	const token = cookieStore.get(COOKIE_NAME.auth.access)?.value;

	if (!token) {
		throw new Error('토큰이 존재하지 않습니다.');
	}

	// 중복이 아닌 경우 {result : false}
	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/nickname/check`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			Authorization: `Bearer ${token}`,
			Accept: 'application/json;charset=UTF-8',
		},
		body: JSON.stringify({ nickname }),
		cache: 'no-store',
	});

	const data = await response.json();

	return data;
}

// 온보딩 정보 전송 API
export async function onboardUser(nickname: string, keywords: Keyword[]) {
	const cookieStore = await cookies();
	const token = cookieStore.get(COOKIE_NAME.auth.access)?.value;

	if (!token) {
		return { status: 'relogin' };
	}

	try {
		await tokenFetcher('/api/users/me/onboarding', {
			method: 'POST',
			body: JSON.stringify({ nickname, interestKeywords: keywords }),
			cache: 'no-store',
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
