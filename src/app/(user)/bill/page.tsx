import BillContents from '@/features/bill/BillContents';
import QueryBar from '@/features/bill/QueryBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '법안 피드',
};

export default function BillPage() {
	return (
		<>
			<div className="w-full h-[150px] min-desktop:w-[100vw] flex items-center justify-center max-w-maxw bg-[#118D65] text-white typo-title2 desktop:rounded-[20px] desktop:my-10 desktop:typo-title1 desktop:font-bold	text-center">
				최근에 발의된 <br className="desktop:hidden" /> 법안을 확인해보세요
			</div>
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<QueryBar />
				<BillContents />
			</div>
		</>
	);
}
