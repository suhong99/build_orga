'use server';

import { cookies } from 'next/headers';
import { tokenFetcher } from './fetcher';
import { COOKIE_NAME } from '../const/cookie';
import { NeedLoginError, RefreshTokenError } from '../const/error';

export const toggleScrapped = async (id: string) => {
	try {
		const cookieStore = await cookies();
		if (!cookieStore.get(COOKIE_NAME.auth.access)?.value) {
			return { status: 'Relogin' };
		}

		const response = await tokenFetcher<boolean>(`/api/bills/${id}/scraps/toggle`, { method: 'POST' });

		return {
			status: 'SUCCESS',
			result: response.result,
		};
	} catch (err) {
		if (err instanceof NeedLoginError || err instanceof RefreshTokenError) {
			return { status: 'Relogin' };
		}

		return { status: 'ERROR', message: (err as Error).message };
	}
};
