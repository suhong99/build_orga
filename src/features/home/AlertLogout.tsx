'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const AlertLogout = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const isLoggedOut = searchParams.get('logout') === 'true';

	useEffect(() => {
		if (isLoggedOut) {
			// 1. 쿼리 제거 먼저 수행
			const current = new URLSearchParams(window.location.search);
			current.delete('logout');

			const newQuery = current.toString();
			const newUrl = `${window.location.pathname}${newQuery ? `?${newQuery}` : ''}`;

			router.replace(newUrl); // 히스토리에 남기지 않고 쿼리 제거

			// 2. alert는 그 후 실행
			alert('유저 인증이 유효하지 않습니다. 새로고침 후 다시 이용해주세요.');
		}
	}, [isLoggedOut, router]);

	return null;
};

export default AlertLogout;
