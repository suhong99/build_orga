import { getBillDetail } from '@/features/bill-detail/api';
import FloatingBtn from '@/features/bill-detail/FloatingReaction';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const data = getBillDetail(id);
	return (
		<div className="flex flex-col items-center p-5 pb-[100px]  desktop:pt-12 desktop:pb-[160px] w-full">
			{/* TODO: 수정예정 */}
			<div className="h-[2000px]">내용들</div>
			<FloatingBtn reactions={data.reactions} myReaction={data.myReaction} />
			<div className="h-[2000px]">댓글들</div>
		</div>
	);
}
