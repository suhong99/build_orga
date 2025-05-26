import React from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';

const EventMainPolicy = ({ name }: { name: EventPerson }) => {
	const mainPolicy = EVENT_DETAIL_DATA[name].policy;

	return (
		<section className="flex flex-col w-full gap-6 px-3 max-desktop:py-5 desktop:gap-9 desktop:px-9">
			<h2 className="typo-heading2 desktop:typo-heading1 font-bold text-label-normal">주요 정책</h2>
			{mainPolicy.map(({ title, content }) => (
				<article key={title} className="flex flex-col gap-2">
					<h3 className="typo-headline1 font-bold">{title}</h3>
					<div className="desktop:hidden">
						{content.map((text) => (
							<p key={text} className="typo-body1-normal font-regular ">
								{text}
							</p>
						))}
					</div>
					<p className="hidden desktop:block typo-body1-normal font-regular">{content.join(', ')}</p>
				</article>
			))}
		</section>
	);
};

export default EventMainPolicy;
