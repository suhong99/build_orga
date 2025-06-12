export const COOKIE_NAME = {
	auth: {
		access: 'accesstoken',
		refresh: 'refreshtoken',
		userId: 'userid',
		nickname: 'nickname',
	},
};

export const COOKIE_MAX_AGE = {
	auth: {
		access: 60 * 60, //1시간
		refresh: 60 * 60 * 24 * 7, // 7일
	},
};
