'use server';

import { COOKIE_NAME } from '@/shared/const/cookie';
import { cookies } from 'next/headers';

type AuthResult = {
	accessToken: string;
	refreshToken: string;
	userid: number;
	nickname: string | null;
};

export const storeAuth = async (result: AuthResult) => {
	const cookieStore = await cookies();

	const { access, refresh, userId, nickname } = COOKIE_NAME.auth;

	cookieStore.set(access, result.accessToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60, // 1시간
	});

	cookieStore.set(refresh, result.refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',

		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});

	cookieStore.set(userId, result.userid.toString(), {
		httpOnly: false,
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});

	cookieStore.set(nickname, result.nickname ?? '', {
		httpOnly: false,
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});
};

// 로그아웃 로직 (쿠키 삭제)
export const clearAuth = async () => {
	const cookieStore = await cookies();

	cookieStore.delete('accesstoken');
	cookieStore.delete('refreshtoken');
	cookieStore.delete('userid');
	cookieStore.delete('nickname');
};

// 로그인인지
export const isLoggedIn = async () => {
	const cookieStore = await cookies();
	const hasAccessToken = cookieStore.has('accesstoken');

	return hasAccessToken;
};
