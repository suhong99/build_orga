'use server';

import { tokenFetcher } from './fetcher';
import { NeedLoginError, RefreshTokenError } from '../const/error';
import { isLoggedIn } from '@/features/auth/utils/cookie';

export const toggleScrapped = async (id: string) => {
	try {
		const isLogin = await isLoggedIn();
		if (!isLogin) {
			return { status: 'relogin' };
		}

		const response = await tokenFetcher<boolean>(`/api/bills/${id}/scraps/toggle`, { method: 'POST' });

		return {
			status: 'success',
			result: response.result,
		};
	} catch (err) {
		if (err instanceof NeedLoginError || err instanceof RefreshTokenError) {
			return { status: 'relogin' };
		}

		return { status: 'ERROR', message: (err as Error).message };
	}
};
