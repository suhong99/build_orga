import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import Image from 'next/image';

const EventBasePolicy = ({ name }: { name: EventPerson }) => {
	return (
		<section className="flex flex-col w-full gap-8 desktop:px-9">
			<h2 className="typo-heading1 font-bold text-label-normal">정책 기조</h2>
			<span className="typo-heading1 font-bold text-accent-fg-violet">{EVENT_DETAIL_DATA[name].polyStance.abstract}</span>
			<div className="flex w-full items-start gap-4.5">
				<Image src={`/images/event/뱃지_${name}.png`} alt="후보 뱃지" width={48} height={48} />
				<ul className="flex flex-col">
					{EVENT_DETAIL_DATA[name].polyStance.sub.map((text) => (
						<li key={text} className="typo-body1-normal font-regular text-label-normal">
							{text}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default EventBasePolicy;
