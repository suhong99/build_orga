import Banner from '@/features/bill/Banner';
import BillContents from '@/features/bill/BillContents';
import QueryBar from '@/features/bill/QueryBar';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: '법안 피드',
};

export default function BillPage() {
	return (
		<>
			<Banner />
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<Suspense>
					<QueryBar />
					<BillContents />
				</Suspense>
			</div>
		</>
	);
}
