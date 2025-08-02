export type RESULT_STATUS = 'success' | 'relogin' | 'refresh' | 'retry';

export type ApiFailureCase = 'badRequest' | 'needLogin' | 'refreshToken' | 'unknown';

export const API_FAILURE_RESPONSE: Record<
	ApiFailureCase,
	{
		success: boolean;
		result: null;
		message: string;
		errorCode: string;
	}
> = {
	badRequest: {
		success: false,
		result: null,
		message: '잘못된 요청입니다.',
		errorCode: 'badRequest',
	},
	needLogin: {
		success: false,
		result: null,
		message: '로그인이 필요합니다.',
		errorCode: 'needLogin',
	},
	refreshToken: {
		success: false,
		result: null,
		message: '토큰 갱신에 실패했습니다.',
		errorCode: 'refreshToken',
	},
	unknown: {
		success: false,
		result: null,
		message: '알 수 없는 오류가 발생했습니다.',
		errorCode: 'unknown',
	},
};
