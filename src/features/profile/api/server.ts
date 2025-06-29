'use server';

import { logout } from '@/shared/api/auth';
import { tokenFetcher } from '@/shared/api/fetcher';
import { COOKIE_NAME } from '@/shared/const/cookie';
import { RefreshTokenError } from '@/shared/const/error';
import { cookies } from 'next/headers';

export async function uploadProfileImg(formData: FormData) {
	const cookieStore = await cookies();
	const token = cookieStore.get(COOKIE_NAME.auth.access)?.value;
	if (!token) {
		return { status: 'relogin' };
	}

	try {
		const response = await tokenFetcher<string>('/app/api/image', {
			method: 'POST',
			body: formData,
			cache: 'no-store',
		});

		// 성공시 반환받은 이미지 url 저장
		cookieStore.set(COOKIE_NAME.auth.img, response.result ?? '', {
			httpOnly: false,
			path: '/',
		});

		return { status: 'success', img: response.result };
	} catch (err) {
		if (err instanceof RefreshTokenError) {
			await logout(token);
			return { status: 'relogin' };
		} else {
			return { status: 'retry' };
		}
	}
}
