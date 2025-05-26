'use client';

import Modal from '@/shared/components/Modal';
import { EVENT_DETAIL_DATA, EVENT_PERSON_LIST, EventPerson } from './const/data';
import StretchLine from './StretchLine';

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
		//TODO: 모달 모바일 UI
		<Modal className="h-auto desktop:h-auto min-h-[400px]">
			<article className="flex flex-col items-center w-full px-6 desktop:px-0 py-3 max-w-[335px] desktop:max-w-[880px]">
				<h1 className="w-full py-3 typo-headline1 text-label-normal desktop:px-12 max-desktop:max-w-[250px] max-desktop:mr-auto">{bill.title}</h1>
				<div className="flex flex-col w-full py-8 desktop:px-12 gap-3">
					<div className="w-full typo-body1-normal ">
						<span className="font-bold text-[#AEB0B6]">의안 번호</span>
						<p className="font-regular">{bill.id}</p>
						<StretchLine className="mt-3" />
					</div>
					<div className="w-full typo-body1-normal ">
						<span className="font-bold text-[#AEB0B6]">제안일</span>
						<p className="font-regular">{bill.date}</p>
						<StretchLine className="mt-3" />
					</div>
					<div className="w-full typo-body1-normal ">
						<span className="font-bold text-[#AEB0B6]">의견 결과</span>
						<p className="font-regular">{bill.result}</p>
						<StretchLine className="mt-3" />
					</div>
					<div className="w-full typo-body1-normal ">
						<span className="font-bold text-[#AEB0B6]">AI 요약</span>
						<p className="font-regular">{bill.aiSummary}</p>
						<StretchLine className="mt-3" />
					</div>
					<div className="w-full typo-body1-normal ">
						<span className="font-bold text-[#AEB0B6]">관심있는 사람</span>
						<p className="font-regular">{bill.target}</p>
						<StretchLine className="mt-3" />
					</div>
				</div>
			</article>
		</Modal>
	);
};

export default EventModal;
