'use server';

import { cookies } from 'next/headers';
import { COOKIE_NAME } from '../const/cookie';
import { refreshToken } from './auth';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetcherOptions extends Omit<RequestInit, 'method'> {
	method?: HttpMethod;
}

export async function fetcher(path: string, options: FetcherOptions = {}): Promise<Response> {
	const { headers, body, method = 'GET', ...rest } = options;

	const finalHeaders = {
		'Content-Type': 'application/json;charset=UTF-8',
		...headers,
	};

	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`, {
		method,
		headers: finalHeaders,
		body: body && typeof body !== 'string' ? JSON.stringify(body) : body,
		...rest, // signal 등 기타 옵션 유지
	});

	if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	}

	return response;
}

export async function authorizedFetcher<T>(path: string, options: FetcherOptions = {}, isRetry: boolean = false): Promise<T> {
	const cookieStore = await cookies();
	const { access } = COOKIE_NAME.auth;
	const accessToken = cookieStore.get(access)?.value;

	if (!accessToken) {
		throw new Error('Access token not found');
	}

	// 헤더 삽입 함수
	const buildHeaders = (token: string) => ({
		...options.headers,
		Authorization: `Bearer ${token}`,
	});

	const response = await fetcher(path, {
		...options,
		headers: buildHeaders(accessToken),
	});

	if (response.status === 401) {
		if (isRetry) {
			// 이미 한번 재시도 했는데도 실패 → 더이상 재시도 안함
			throw new Error('Token refresh failed after retry');
		}

		const refreshed = await refreshToken();

		if (!refreshed) {
			throw new Error('Token refresh failed');
		}

		// 재귀 호출로 재시도
		return authorizedFetcher<T>(path, options, true);
	}

	if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	}

	return (await response.json()) as T;
}
