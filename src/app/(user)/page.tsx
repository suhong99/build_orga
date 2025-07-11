import { getPopularBills } from '@/features/home/api';
import Banner from '@/features/home/Banner';
import Content from '@/features/home/Content';
import ContentHeader from '@/features/home/ContentHeader';
import RecommendBills from '@/features/home/RecommendBills';

export default async function Home() {
	const poppularBills = await getPopularBills();

	return (
		<>
			<Banner />
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<RecommendBills />
				<Content data={poppularBills}>
					<ContentHeader title="지금 핫이슈는?" link="/issue" />
				</Content>
			</div>
		</>
	);
}
