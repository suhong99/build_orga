import { SERVER_URL } from '@/shared/const/url';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get('code') || '';

	const response = await fetch(`${process.env.SERVER_URL}${SERVER_URL.oauth}kakao`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify({
			code,
			redirectUri: `${process.env.KAKAO_REDIRECT_URI}`,
		}),
	});

	if (!response.ok) {
		// 오류 처리
		console.error('소셜 로그인 실패', await response.text());
		// return redirect('/auth?error=oauth');
	}

	// TODO: 로그인 성공 후 처리 (예: 토큰 저장, 사용자 정보 업데이트 등)

	const data = await response.json();
	console.log('✅ 로그인 성공:', data);

	// return redirect('/');
}
