import Image from 'next/image';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import { aggroFont } from '@/shared/const/font';

const EventHeader = ({ name }: { name: EventPerson }) => {
	const color: Record<EventPerson, string> = {
		이재명: 'bg-[#152484]',
		김문수: 'bg-[#E61E2B]',
		이준석: 'bg-[#FF7210]',
	};
	return (
		<section
			className={`relative overflow-hidden flex flex-col w-full px-9 max-[500px]:px-6 pt-8 items-center desktop:px-12 desktop:flex-row-reverse rounded-[20px] desktop:justify-between max-desktop:pb-8 ${color[name]}`}
		>
			<Image
				src={`/images/event/${name}.png`}
				alt={`${name}후보 사진`}
				width={377}
				height={368}
				className="desktop:self-end z-5 max-desktop:mb-8 max-desktop:w-[230px] object-cover"
			/>
			<div className="flex flex-col flex-1 w-full items-center desktop:items-baseline gap-10 desktop:pt-10 z-5">
				<div className="flex flex-col text-white gap-2 max-desktop:items-center ">
					<span className="flex typo-body1-normal desktop:typo-headline1 font-bold ">{EVENT_DETAIL_DATA[name].party}</span>
					<h1 className={`${aggroFont.className} typo-aggro-name text-[48px] font-bold desktop:text-[64px]`}>{name}</h1>
				</div>
				<div className="flex flex-col gap-3 w-full">
					{EVENT_DETAIL_DATA[name].main.map(({ label, text }) => (
						<MainInfo key={label} label={label} text={text} />
					))}
				</div>
			</div>
			{/* 배경 */}
			<div className="absolute -translate-y-1/2 -left-25 w-[610px] h-[398px] rotate-[-20deg] bg-white opacity-10 rounded-[50%] pointer-events-none max-desktop:hidden" />
			<div className="absolute -translate-y-[20%] -left-97 w-[1200px] h-[800px] rotate-[-20deg] bg-white opacity-10 rounded-[50%] pointer-events-none max-desktop:-left-79 max-desktop:-top-[30%]" />
		</section>
	);
};

export default EventHeader;

const MainInfo = ({ label, text }: { label: string; text: string }) => {
	return (
		<div className="flex w-full gap-3 max-desktop:flex-col">
			<span className="typo-headline2 font-bold text-primary-sub-normal w-[90px] desktop:typo-headline1">{label}</span>
			<span className="flex-1 typo-body1-normal font-regular text-white desktop:typo-headline1">{text}</span>
		</div>
	);
};
