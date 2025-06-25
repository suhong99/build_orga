'use server';

import { logout } from '@/shared/api/auth';
import { COOKIE_MAX_AGE, COOKIE_NAME } from '@/shared/const/cookie';
import { cookies } from 'next/headers';

export type AuthResult = {
	accessToken: string;
	refreshToken: string;
	userid: number;
	nickname: string | null;
	profileImage: string;
};

export const storeAuth = async (result: AuthResult) => {
	const cookieStore = await cookies();

	const { access, refresh, userId, nickname, img } = COOKIE_NAME.auth;

	cookieStore.set(access, result.accessToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: COOKIE_MAX_AGE.auth.access,
	});

	cookieStore.set(refresh, result.refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: COOKIE_MAX_AGE.auth.refresh,
	});

	cookieStore.set(userId, result.userid.toString(), {
		httpOnly: false,
		path: '/',
	});

	cookieStore.set(nickname, result.nickname ?? '', {
		httpOnly: false,
		path: '/',
	});

	cookieStore.set(img, result.profileImage ?? '', {
		httpOnly: false,
		path: '/',
	});
};

// 로그아웃 로직 (쿠키 삭제 및 호출)
export const clearAuth = async () => {
	const cookieStore = await cookies();
	const { access, refresh, userId, nickname, img } = COOKIE_NAME.auth;
	const accessToken = cookieStore.get(access)?.value;
	if (accessToken) await logout(accessToken);

	cookieStore.delete(access);
	cookieStore.delete(refresh);
	cookieStore.delete(userId);
	cookieStore.delete(nickname);
	cookieStore.delete(img);
};

// 로그인인지
export const isLoggedIn = async () => {
	const cookieStore = await cookies();
	const hasAccessToken = cookieStore.has('accesstoken');

	return hasAccessToken;
};
