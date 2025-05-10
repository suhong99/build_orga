'use client';

import { SolidBtn } from '@/shared/components/SolidBtn';
import Keywords from './Keywords';
import Nickname from './Nickname';
import { useState } from 'react';
import { Keyword } from '@/shared/const/committee';

const OnboardingForm = () => {
	const [keywords, setKeywords] = useState<Keyword[]>([]);
	// TODO:  api에서 중복확인 에러 발생시 처리해주기
	const [isValidateNick, setIsValidateNick] = useState<boolean>(false);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//TODO: api를 통해 온보딩 정보 전송하기
		const formData = new FormData(e.currentTarget);
		const nickname = formData.get('nickname');

		console.log(nickname, keywords);
		alert(`${nickname} ${keywords}`);
	};

	const canSumbit = keywords.length > 0 && isValidateNick;

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-[32px] desktop:gap-12 py-12 w-[375px] desktop:w-[480px] mx-auto">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="typo-title3 desktop:typo-title2 font-bold">어떤 분인지 알려주세요</h1>
				<div className="typo-body2-normal desktop:typo-body1-normal text-label-alternative font-regular">최근 관심가는 주제는 무엇인가요?</div>
			</div>
			<Nickname isValidate={isValidateNick} setIsValidate={setIsValidateNick} />
			<Keywords keywords={keywords} setKeywords={setKeywords} />
			<SolidBtn type="submit" isDisabled={!canSumbit} size="large" label="시작하기" className="mx-auto w-full desktop:w-auto" />
		</form>
	);
};

export default OnboardingForm;
