import { Fragment } from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import StretchLine from './StretchLine';

const EventFieldPolicy = ({ name }: { name: EventPerson }) => {
	const filedPolicy = EVENT_DETAIL_DATA[name].policyByField;
	return (
		<section className="flex flex-col w-full gap-8 desktop:px-9">
			<h2 className="typo-heading1 font-bold text-label-normal">분야 별 정책</h2>
			<div className="flex flex-col w-full gap-6">
				{filedPolicy.map(({ category, keyword, details }, i) => (
					<Fragment key={category}>
						<div className="flex flex-col w-full gap-5">
							<h3 className="typo-headline2 font-bold">{category}</h3>
							<p className="typo-body1-normal font-bold">{keyword}</p>
							<ul className="flex flex-col justify-center pl-2">
								{details.map((detail, index) => (
									<li key={index} className="flex items-center gap-2 typo-body1-normal font-regular text-label-normal ">
										<div className="w-[4px] h-[4px] bg-label-normal rounded-full shrink-0" />
										{detail}
									</li>
								))}
							</ul>
						</div>
						{i !== filedPolicy.length - 1 && <StretchLine />}
					</Fragment>
				))}
			</div>
		</section>
	);
};

export default EventFieldPolicy;
