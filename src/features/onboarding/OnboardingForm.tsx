'use client';

import { SolidBtn } from '@/shared/components/SolidBtn';
import Keywords from './Keywords';
import Nickname from './Nickname';
import { useState } from 'react';
import { Keyword } from '@/shared/const/committee';
import { onboardUser } from './api/server';
import { useRouter } from 'next/navigation';

const OnboardingForm = () => {
	const [keywords, setKeywords] = useState<Keyword[]>([]);
	const [isValidateNick, setIsValidateNick] = useState<boolean>(false);
	const canSumbit = keywords.length > 0 && isValidateNick;
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const nickname = formData.get('nickname') as string;

		const result = await onboardUser(nickname, keywords);
		switch (result.status) {
			case 'relogin':
				alert('재로그인 후 시도해주세요!');
				router.push('/');
				break;
			case 'retry':
				alert('다시 시도해 주세요!');
				break;
			case 'success':
				router.push('/');
				break;
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-[32px] desktop:gap-12 py-12 w-[375px] desktop:w-[480px] mx-auto">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="typo-title3 desktop:typo-title2 font-bold">어떤 분인지 알려주세요</h1>
				<div className="typo-body2-normal desktop:typo-body1-normal text-label-alternative font-regular">최근 관심가는 주제는 무엇인가요?</div>
			</div>
			<Nickname isValidate={isValidateNick} setIsValidate={setIsValidateNick} />
			<Keywords keywords={keywords} setKeywords={setKeywords} />
			<SolidBtn type="submit" disabled={!canSumbit} size="large" label="시작하기" className="mx-auto w-full desktop:w-auto" />
		</form>
	);
};

export default OnboardingForm;
