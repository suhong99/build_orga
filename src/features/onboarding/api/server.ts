'use server';

import { COOKIE_NAME } from '@/shared/const/cookie';
import { cookies } from 'next/headers';

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
