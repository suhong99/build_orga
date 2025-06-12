import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COOKIE_NAME } from './shared/const/cookie';
import { clearAuth } from './features/auth/utils/cookie';

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const cookieStore = await cookies();

	// 오타 방지용 상수값 관리
	const { access, nickname } = COOKIE_NAME.auth;
	const protectedPaths = ['/onboarding', '/mypage'];

	const hasToken = cookieStore.has(access);
	const nickValue = cookieStore.get(nickname)?.value;

	// 닉네임 없이 onboarding페이지 이탈시 토큰 제거 (로그아웃)
	if (hasToken && nickValue === '' && !(pathname === '/onboarding')) {
		await clearAuth();

		if (pathname !== '/onboarding') {
			return NextResponse.redirect(new URL('/', req.url));
		}
	}

	// 토큰없을 경우 특정 페이지 진입 불가
	if (!hasToken && protectedPaths.includes(pathname)) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.well-known|sitemap.xml|robots.txt|.*.png$|.*.svg$|.*.jpg$).*)'],
};
