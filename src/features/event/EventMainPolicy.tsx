import React from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';

const EventMainPolicy = ({ name }: { name: EventPerson }) => {
	const mainPolicy = EVENT_DETAIL_DATA[name].policy;
	const color: Record<EventPerson, string> = {
		이재명: 'text-[#152484]',
		김문수: 'text-[#E61E2B]',
		이준석: 'text-[#FF7210]',
	};

	return (
		<section className="flex flex-col w-full gap-5 px-3 ">
			<h2 className="typo-heading2 desktop:typo-heading1 font-bold text-label-normal desktop:mb-5">주요 정책</h2>
			{mainPolicy.map(({ title, content }) => (
				<article key={title} className="flex flex-col gap-2">
					<h3 className={`heading2 font-bold desktop:typo-heading1 ${color[name]}`}>{title}</h3>

					<p className="typo-body1-normal font-regular">{content.join(', ')}</p>
				</article>
			))}
		</section>
	);
};

export default EventMainPolicy;
