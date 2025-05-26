import EventModal from '@/features/event/EventModal';

//TODO: 대선기간 끝나고 사라짐

export default async function Page({ params }: { params: Promise<{ bill: string[] }> }) {
	const { bill } = await params;

	const [encodedName, billId] = bill;
	const name = decodeURIComponent(encodedName);

	return <EventModal name={name} id={billId} />;
}
