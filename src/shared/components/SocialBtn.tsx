import React from 'react';

type SocialType = 'kakao' | 'google';

interface SocialBtnProps {
	/** 소셜 버튼 타입 (구글, 카카오) */
	type: SocialType;
}

const SOCIAL_TYPE = {
	kakao: { text: '카카오', className: 'bg-[#FEDA32] border-[#FEDA32]' },
	google: { text: 'Google', className: 'bg-white border-[#E8E9EA]' },
} as const;

const SocialBtn = ({ type }: SocialBtnProps) => {
	const { text, className } = SOCIAL_TYPE[type];

	return (
		<div
			className={`flex items-center justify-center px-7 py-3 max-w-[320px] w-full box-border border rounded-[12px] typo-body2-normal  desktop:typo-body1-normal font-regular cursor-pointer ${className}`}
		>
			{text}로 로그인하기
		</div>
	);
};

export default SocialBtn;
