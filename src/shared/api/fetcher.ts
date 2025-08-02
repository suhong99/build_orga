'use server';

import { cookies } from 'next/headers';
import { COOKIE_NAME } from '../const/cookie';
import { refreshToken } from './auth';
import { NeedLoginError, RefreshTokenError, WrongRequestError } from '../const/error';
import { clearAuth } from '@/features/auth/utils/cookie';
import { API_FAILURE_RESPONSE } from '../const/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetcherOptions extends Omit<RequestInit, 'method'> {
	method?: HttpMethod;
}

interface ApiResponse<T> {
	isSuccess: boolean;
	responseCode: number;
	responseMessage: string;
	result: T;
}

export interface SerializableActionResponse<T> {
	success: boolean;
	result: T | null;
	message: string;
	errorCode?: string;
}

export async function fetcher(path: string, options: FetcherOptions = {}): Promise<Response> {
	const { headers, body, method = 'GET', ...rest } = options;

	const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

	const finalHeaders = {
		...(isFormData ? {} : { 'Content-Type': 'application/json;charset=UTF-8' }),
		...headers,
	};

	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`, {
		method,
		headers: finalHeaders,
		body: !isFormData && body && typeof body !== 'string' ? JSON.stringify(body) : body,
		...rest,
	});

	return response;
}

export async function tokenFetcher<T>(path: string, options: FetcherOptions = {}, isRetry: boolean = false): Promise<ApiResponse<T>> {
	const cookieStore = await cookies();
	const { access } = COOKIE_NAME.auth;
	const accessToken = cookieStore.get(access)?.value;

	// 헤더 삽입 함수
	const buildHeaders = (token?: string) => ({
		...options.headers,
		...(token ? { Authorization: `Bearer ${token}` } : {}),
	});

	const response = await fetcher(path, {
		...options,
		headers: buildHeaders(accessToken),
	});

	if (response.status === 400) {
		throw new WrongRequestError();
	}

	if (response.status === 401) {
		if (!accessToken) {
			throw new NeedLoginError();
		}

		// 토큰이 있는데도 재발급 실패 → 이미 재시도 했으면 중단
		if (isRetry) {
			await clearAuth();
			throw new RefreshTokenError();
		}

		// 첫 시도면 refresh 시도
		const refreshed = await refreshToken();
		if (!refreshed) {
			await clearAuth();
			throw new RefreshTokenError();
		}

		// refresh 성공 → 재요청
		return tokenFetcher<T>(path, options, true);
	}

	if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	}

	return (await response.json()) as ApiResponse<T>;
}

// 클라이언트 (리액트 쿼리)에서 사용할 때 직렬화 문제로 next server -> client로 에러 인스턴스가 제대로 전달되지 않음. 따라서 직렬화 가능한 fetcher를 사용
export async function serializableFetcher<T>(path: string, options: FetcherOptions = {}, isRetry = false): Promise<SerializableActionResponse<T>> {
	const cookieStore = await cookies();
	const { access } = COOKIE_NAME.auth;
	const accessToken = cookieStore.get(access)?.value;

	const buildHeaders = (token?: string) => ({
		...options.headers,
		...(token ? { Authorization: `Bearer ${token}` } : {}),
	});

	const response = await fetcher(path, {
		...options,
		headers: buildHeaders(accessToken),
	});

	if (response.status === 400) {
		return API_FAILURE_RESPONSE.badRequest;
	}

	if (response.status === 401) {
		if (!accessToken) {
			return API_FAILURE_RESPONSE.needLogin;
		}

		if (isRetry) {
			await clearAuth();
			return API_FAILURE_RESPONSE.refreshToken;
		}

		const refreshed = await refreshToken();
		if (!refreshed) {
			await clearAuth();
			return API_FAILURE_RESPONSE.refreshToken;
		}

		// 토큰 갱신 성공 → 재요청
		return serializableFetcher<T>(path, options, true);
	}

	if (!response.ok) {
		return API_FAILURE_RESPONSE.unknown;
	}

	const json = (await response.json()) as ApiResponse<T>;
	return {
		success: true,
		result: json.result,
		message: json.responseMessage ?? 'api요청에 성공하였습니다.',
	};
}
