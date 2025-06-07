import { clearAuth } from '@/features/auth/utils/cookie';
import { NextResponse } from 'next/server';

export async function POST() {
	await clearAuth(); // 쿠키 삭제
	return NextResponse.json({ message: 'Logged out' });
}
