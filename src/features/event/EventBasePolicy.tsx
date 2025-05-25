import React from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import Image from 'next/image';

const EventBasePolicy = ({ name }: { name: EventPerson }) => {
	return (
		<div className="flex flex-col w-full desktop:px-9 gap-8">
			<h2 className="typo-heading1 font-bold text-label-normal">정책 기조</h2>
			<span className="typo-heading1 font-bold text-accent-fg-violet">{EVENT_DETAIL_DATA[name].polyStance.abstract}</span>
			<div className="flex w-full items-start gap-4.5">
				<Image src={`/images/event/뱃지_${name}.png`} alt="후보 뱃지" width={48} height={48} />
				<div className="flex flex-col gap-2">
					{EVENT_DETAIL_DATA[name].polyStance.sub.map((text) => (
						<div key={text} className="typo-body1-normal font-regular text-label-normal">
							{text}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventBasePolicy;
