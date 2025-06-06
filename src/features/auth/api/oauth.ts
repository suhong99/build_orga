'use server';

import { redirect } from 'next/navigation';

type OAuthType = 'kakao' | 'google';

export const authorize = async (type: OAuthType) => {
	const oauthURL = {
		kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`,
		google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`,
	};

	redirect(oauthURL[type]);
};
