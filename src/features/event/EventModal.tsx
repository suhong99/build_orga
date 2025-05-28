'use client';

import Modal from '@/shared/components/Modal';
import { EVENT_DETAIL_DATA, EVENT_PERSON_LIST, EventPerson } from './const/data';

const EventModal = ({ name, id }: { name: string; id: string }) => {
	const isValidEventPerson = (name: string): name is EventPerson => {
		return EVENT_PERSON_LIST.includes(name as EventPerson);
	};
	if (!isValidEventPerson(name)) {
		return null;
	}

	const bill = EVENT_DETAIL_DATA[name].bill.find((b) => b.id === id);

	if (!bill) {
		return null;
	}

	return (
		<Modal className="h-auto desktop:h-auto ">
			<article className="flex flex-col items-center w-full px-5  py-3 gap-5 pb-6 desktop:max-w-[880px]">
				<h1 className="w-full py-2.5 typo-headline2 text-label-strong desktop:pr-8 max-desktop:max-w-[260px] max-desktop:mr-auto ">{bill.title}</h1>
				<div className="flex flex-col w-full gap-5">
					<div className="flex flex-col w-full py-5 px-8 gap-5 bg-bg-gray rounded-[12px]">
						<div className="w-full flex flex-col gap-2 text-label-normal">
							<h3 className="typo-headline1 font-bold ">AI 요약 🤖</h3>
							<p className="typo-body1-normal">{bill.aiSummary}</p>
						</div>
						<div className="w-full flex flex-col gap-2 text-label-normal">
							<h3 className="typo-headline1 font-bold ">관심있을 분들 🙌🏻</h3>
							<p className="typo-body1-normal">{bill.target}</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 w-full gap-1">
					<div className="w-full flex flex-col items-center typo-body1-normal text-label-normal">
						<span className="font-bold text-[#AEB0B6]">의안 번호</span>
						<p className="font-regular">{bill.id}</p>
					</div>
					<div className="w-full flex flex-col items-center typo-body1-normal ">
						<span className="font-bold text-[#AEB0B6]">제안일</span>
						<p className="font-regular">{bill.date}</p>
					</div>
					<div className="w-full flex flex-col items-center typo-body1-normal  ">
						<span className="font-bold text-[#AEB0B6]">의결 결과</span>
						<p className="font-regular">{bill.result}</p>
					</div>
				</div>
			</article>
		</Modal>
	);
};

export default EventModal;
