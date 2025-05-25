import { Metadata } from 'next';
import EventHeader from '@/features/event/EventHeader';
import { EVENT_PERSON_LIST, EventPerson } from '@/features/event/const/data';
import { notFound } from 'next/navigation';
import EventBasePolicy from '@/features/event/EventBasePolicy';
import EventBill from '@/features/event/EventBill';
import StretchLine from '@/features/event/StretchLine';

export const metadata: Metadata = {
	title: '대선 후보',
};

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
	const { name } = await params;
	const korean = decodeURIComponent(name);

	const isValidEventPerson = (name: string): name is (typeof EVENT_PERSON_LIST)[number] => {
		return EVENT_PERSON_LIST.includes(name as EventPerson);
	};

	if (!isValidEventPerson(korean)) {
		// 잘못된 후보 주소로 접근시 에러처리
		notFound();
	}

	return (
		<div className="flex flex-col w-full items-center px-5 pt-9 pb-12 max-w-desktop gap-4 desktop:pt-[80px] desktop:gap-10">
			<EventHeader name={korean} />
			<StretchLine />
			<EventBasePolicy name={korean} />
			<StretchLine />
			<EventBill name={korean} />
		</div>
	);
}
