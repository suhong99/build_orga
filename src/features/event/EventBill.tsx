import React from 'react';
import { EVENT_DETAIL_DATA, EventPerson } from './const/data';

const EventBill = ({ name }: { name: EventPerson }) => {
	const bill = EVENT_DETAIL_DATA[name].bill;
	return (
		<div className="flex flex-col w-full gap-5 desktop:px-9  desktop:gap-8 max-desktop:py-5">
			<h2>
				<span>대표 발의안</span>
				<span>{bill.length}</span>
			</h2>
			<div className="flex flex-col gap-6 desktop:gap-10">
				{bill.map(({ id }) => (
					<div key={id}>gd</div>
				))}
			</div>
		</div>
	);
};

export default EventBill;
