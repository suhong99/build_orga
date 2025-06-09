import { storeAuth } from '@/features/auth/utils/cookie';
import { SERVER_URL } from '@/shared/const/url';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get('code') || '';

	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${SERVER_URL.oauth}google`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify({
			code,
			redirectUri: `${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}`,
		}),
	});

	if (!response.ok) {
		// TODO: 오류 처리
		console.error('소셜 로그인 실패', await response.text());
	}
	const data = await response.json();
	const result = data.result;

	await storeAuth(result);

	// 온보딩 여부에 따라 리다이렉트
	if (!result.nickname) {
		redirect('/onboarding');
	} else {
		redirect('/');
	}
}
