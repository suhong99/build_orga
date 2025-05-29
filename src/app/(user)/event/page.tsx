import HuboCard from '@/features/event-home/HuboCard';
import MobileHubo from '@/features/event-home/MobileHubo';
import { EventPerson } from '@/features/event/const/data';
import React from 'react';

const page = () => {
	const HUBO: EventPerson[] = ['이재명', '김문수', '이준석'];
	return (
		<div className="flex flex-col items-center w-full">
			<h1 className="px-5 py-10 text-center typo-title2 font-bold text-accent-bg-violet desktop:px-9 desktop:py-16 desktop:typo-display1">
				지지율 TOP3
				<br />
				{'"대선후보를 알아보자!"'}
			</h1>

			<section className="flex flex-col py-8 gap-6 max-w-maxw w-full items-center desktop:gap-10">
				<header className="flex flex-col items-center py-4 gap-3 dekstop:py-9 desktop:gap-5">
					<h2 className="typo-heading1 font-bold desktop:typo-display2">2025년 대선 후보</h2>
					<p className="typo-body1-normal text-label-alternative text-center desktop:typo-heading1 desktop:font-regular">
						각 후보의 상세한 공약과 정책 자료를 확인하고,
						<br />
						여러분의 가치관에 맞는 후보를 찾아보세요.
					</p>
				</header>
				<div className="w-full max-desktop:hidden grid grid-cols-3 gap-5">
					{HUBO.map((name, i) => (
						<HuboCard key={name + i} name={name} />
					))}
				</div>
				{HUBO.map((name, i) => (
					<MobileHubo key={name + i} name={name} />
				))}
			</section>

			<section className="bg-accent-bg-green h-[600px] w-full">임시 영역</section>
		</div>
	);
};

export default page;
