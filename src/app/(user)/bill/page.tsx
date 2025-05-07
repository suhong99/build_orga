import BillContents from '@/features/bill/BillContents';
import QueryBar from '@/features/bill/QueryBar';

export default function BillPage() {
	return (
		<>
			<div className="w-full h-[250px] flex items-center justify-center  max-w-maxw bg-primary-main-strong">배너 </div>
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<QueryBar />
				<BillContents />
			</div>
		</>
	);
}
