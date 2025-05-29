import HuboCard from '@/features/event-home/HuboCard';
import MobileHubo from '@/features/event-home/MobileHubo';
import HuBoPolicy from '@/features/event-home/HuBoPolicy';
import { EventPerson } from '@/features/event/const/data';
import React from 'react';

export default function Home() {
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

			<HuBoPolicy />
		</div>
	);
}

/* TODO: 대선 끝나고 복구	
import Content from '@/features/home/Content';
import ContentHeader from '@/features/home/ContentHeader';

export default function Home() {
	return (
		<>
			<div className="w-full h-[250px] flex items-center justify-center  max-w-maxw bg-primary-main-strong">배너 </div>
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<Content>
					<ContentHeader title="누구님이 관심있는" keywordList={['정치', '피그마', '회의']} link="/issue" />
				</Content>
				<Content>
					<ContentHeader title="당신을 위한 법안" isLoginRequired link="/issue" />
				</Content>
			</div>
		</>
	);
}

*/
