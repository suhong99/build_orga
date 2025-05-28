import { Fragment } from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import StretchLine from './StretchLine';
import { aggroFont } from '@/shared/const/font';

const EventFieldPolicy = ({ name }: { name: EventPerson }) => {
	const filedPolicy = EVENT_DETAIL_DATA[name].policyByField;
	const TITLE_COLOR = ['text-[#00BF40]', 'text-[#0066FF]', 'text-[#007828]', 'text-[#FF9200]', 'text-[#4F29E5]'];
	return (
		<section className="flex flex-col w-full gap-5 desktop:gap-7">
			<h2 className="typo-heading1 font-bold text-label-normal">분야 별 정책</h2>
			<div className="grid w-full  grid-cols-1 gap-6 desktop:grid-cols-2 desktop:gap-8">
				{filedPolicy.map(({ category, keyword, details }, i) => (
					<Fragment key={category}>
						<div className="flex flex-col w-full gap-5 ">
							<div className="w-full flex flex-col px-3 py-4 gap-1 rounded-[12px] bg-[#FBFAFF] items-center">
								<h3 className={`${aggroFont.className} typo-aggro-middle ${TITLE_COLOR[i]}`}>{category}</h3>
								<p className="typo-headline2 font-bold desktop:typo-headline1 desktop:font-medium  ">{keyword}</p>
							</div>
							<ul className="flex flex-col justify-center pl-2">
								{details.map((detail, index) => (
									<li key={index} className="flex gap-2 typo-body1-normal font-regular text-label-normal ">
										<div className="w-[4px] h-[4px] bg-label-normal rounded-full shrink-0 mt-[9px]" />
										{detail}
									</li>
								))}
							</ul>
						</div>
						{i !== filedPolicy.length - 1 && <StretchLine className="desktop:hidden" />}
					</Fragment>
				))}
			</div>
		</section>
	);
};

export default EventFieldPolicy;
