import { Metadata } from 'next';
import { getBillDetail } from '@/features/bill-detail/api/server';
import DetailCommentList from '@/features/bill-detail/DetailCommentList';
import DetailContent from '@/features/bill-detail/DetailContent';
import DetailInfo from '@/features/bill-detail/DetailInfo';
import DetailOpinion from '@/features/bill-detail/DetailOpinion';
import DetailTitle from '@/features/bill-detail/DetailTitle';
import ScrollUpBtn from '@/shared/components/ScrollUpBtn';
import DetailProcess from '@/features/bill-detail/DetailProcess';
import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/shared/const/cookie';

export const metadata: Metadata = {
	title: '법안 상세페이지',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const data = await getBillDetail(id);
	const nickname = (await cookies()).get(COOKIE_NAME.auth.nickname)?.value;

	return (
		<div className="flex flex-col items-center p-5 pb-[100px]  desktop:pt-12 desktop:pb-[160px] w-full">
			<article className="flex flex-col items-center w-full max-w-desktop gap-6 desktop:gap-9">
				<DetailTitle {...data} />
				<div className="border border-line-neutral	w-full" />
				<DetailInfo {...data} />
				<DetailContent detail={data.billSummary || ''} />
				<DetailProcess history={data.history} />
				<DetailOpinion id={id} isScrapped={data.scrapped} />
				<DetailCommentList billId={id} nickname={nickname || ''} />
			</article>
			<ScrollUpBtn />
		</div>
	);
}
