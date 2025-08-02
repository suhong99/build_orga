'use server';

import { cookies } from 'next/headers';
import { COOKIE_MAX_AGE, COOKIE_NAME } from '../const/cookie';

export const refreshToken = async (): Promise<boolean> => {
	const cookieStore = await cookies();
	const { access, refresh } = COOKIE_NAME.auth;

	const refreshToken = cookieStore.get(refresh)?.value;

	// refresh 자체가 없는 경우
	if (!refreshToken) {
		return false;
	}

	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/reissue`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify({ refreshToken }),
	});

	if (response.status === 401) {
		// 토큰 만료 → 유저 로그아웃 유도
		return false;
	}

	if (!response.ok) {
		// 기타 예외 상황 → 서버 에러 등은 그대로 던짐
		console.error(`Failed to refresh token: ${response.status}`);
		return false;
	}

	const data = await response.json();
	const result = data.result;

	// accessToken 저장 (1시간)
	cookieStore.set(access, result.accessToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: COOKIE_MAX_AGE.auth.access,
	});

	// refreshToken 저장 (7일)
	cookieStore.set(refresh, result.refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: COOKIE_MAX_AGE.auth.refresh,
	});

	return true;
};

export const logout = async (accessToken: string) => {
	fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			Authorization: `Bearer ${accessToken}`,
		},
	}).catch(() => {
		// 실패해도 무시
		console.warn('서버측 로그아웃 실패, 쿠키 삭제만 진행합니다.');
	});
};
