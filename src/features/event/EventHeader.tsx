import Image from 'next/image';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';

const EventHeader = ({ name }: { name: EventPerson }) => {
	return (
		<section className="flex flex-col w-full px-6 py-8 items-center	desktop:px-12 desktop:flex-row-reverse rounded-[20px] desktop:justify-between bg-fill-normal gap-5">
			<Image src={`/images/event/${name}.png`} alt={`${name}후보 사진`} width={377} height={368} className="desktop:self-end" />
			<div className="flex flex-col flex-1 w-full items-baseline gap-10 desktop:pt-10">
				<h1 className="typo-title2 font-bold text-label-normal desktop:typo-title1">{name}</h1>
				<div className="flex w-full gap-3 typo-body1-normal desktop:typo-headline1">
					<span className=" font-bold desktop:font-medium desktop:w-[90px]">소속 </span>
					<span className="flex-1 font-regular">{EVENT_DETAIL_DATA[name].party}</span>
				</div>
				<div className="flex flex-col gap-3 w-full">
					{EVENT_DETAIL_DATA[name].main.map(({ label, text }) => (
						<MainInfo key={label} label={label} text={text} />
					))}
				</div>
			</div>
		</section>
	);
};

export default EventHeader;

const MainInfo = ({ label, text }: { label: string; text: string }) => {
	return (
		<div className="flex w-full gap-3 max-desktop:flex-col">
			<span className="typo-body1-normal font-bold text-primary-main-normal w-[90px] desktop:typo-headline1">{label}</span>
			<span className="flex-1 typo-body1-normal font-regular text-label-normal desktop:typo-headline1">{text}</span>
		</div>
	);
};
