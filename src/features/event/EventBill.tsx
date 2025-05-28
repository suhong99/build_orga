import React from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';
import Link from 'next/link';
import RightIcon from '@/shared/icon/Right';

const EventBill = ({ name }: { name: EventPerson }) => {
	const bill = EVENT_DETAIL_DATA[name].bill;
	return (
		<section className="flex flex-col w-full gap-5 desktop:gap-10 ">
			<h2 className="flex gap-5 font-bold typo-heading2 desktop:typo-heading1 desktop:gap-3">
				<span className="text-label-normal">대표 발의안</span>
				<span className="text-primary-main-normal">{bill.length}</span>
			</h2>
			<div className="flex flex-col gap-5 desktop:gap-6">
				{bill.map(({ id, category, title }) => (
					<Link
						href={`/modal-event-bill/${name}/${id}`}
						key={id}
						scroll={false}
						className="flex  w-full items-center px-3 py-4 gap-4 rounded-[12px] desktop:h-[56px] bg-[#FBFAFF]"
					>
						<span className="typo-label1-normal text-label-normal w-[68px] text-center desktop:typo-headline1 desktop:w-[84px] ">{category}</span>
						<div className="w-[2.5px] h-[16px] bg-[#E1E2E4]" />
						<span className="flex-1 typo-label1-normal desktop:typo-headline1 break-words">{title}</span>
						<RightIcon width={8} height={15} className="text-[#E1E2E4]" />
					</Link>
				))}
			</div>
		</section>
	);
};

export default EventBill;
