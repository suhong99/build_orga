import { SERVER_URL } from '@/shared/const/url';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get('code') || '';
	console.log(code, `${process.env.SERVER_URL}${SERVER_URL.oauth}google`);

	const response = await fetch(`${process.env.SERVER_URL}${SERVER_URL.oauth}google`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify({
			code,
			redirectUri: `${process.env.GOOGLE_REDIRECT_URI}`,
		}),
	});

	if (!response.ok) {
		// 오류 처리
		console.error('소셜 로그인 실패', await response.text());
	} else {
		const data = await response.json();
		console.log('✅ 로그인 성공:', data);
	}

	console.log('✅ 로그인 성공:', response);

	// TODO: 로그인 성공 후 처리 (예: 토큰 저장, 사용자 정보 업데이트 등)

	return redirect('/');
}
