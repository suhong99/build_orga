import { aggroFont } from '@/shared/const/font';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import { Fragment } from 'react';

const EventBasePolicy = ({ name }: { name: EventPerson }) => {
	const KEYWORD: Record<EventPerson, { first: string; second: string }> = {
		김문수: { first: '“자유와 책임,', second: '중산층이 두터워지는 나라”' },
		이재명: { first: '“모두가 잘 사는 나라,', second: 'AI 강국 대한민국”' },
		이준석: { first: '“기준 있는 국가,', second: '정당한 보상”' },
	};
	return (
		<section className="flex flex-col items-center w-full gap-8">
			<h2 className={`${aggroFont.className} typo-aggro-display flex flex-col items-center desktop:flex-row`}>
				<span className="text-primary-main-heavy">{KEYWORD[name].first}</span>
				<span className="max-desktop:hidden">&nbsp;</span>
				<span className="text-primary-sub-heavy">{KEYWORD[name].second} </span>
			</h2>
			<div className="flex w-full items-start gap-4.5">
				<ul className="w-full flex flex-col items-center justify-center gap-1 typo-heading1 text-label-alternative desktop:flex-row desktop:gap-3 desktop:typo-heading2">
					{EVENT_DETAIL_DATA[name].polyStance.sub.map((text, i) => (
						<Fragment key={text}>
							{i !== 0 && <span className="max-desktop:hidden">•</span>}
							<li>{text}</li>
						</Fragment>
					))}
				</ul>
			</div>
		</section>
	);
};

export default EventBasePolicy;
