import { getLatestBills } from '@/features/home/api';
import Banner from '@/features/home/Banner';
import Content from '@/features/home/Content';
import ContentHeader from '@/features/home/ContentHeader';

export default async function Home() {
	const latestBills = await getLatestBills();
	return (
		<>
			<Banner />
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<Content data={latestBills}>
					<ContentHeader title="지금 핫이슈는?" link="/issue" />
				</Content>
				<Content data={[]}>
					<ContentHeader title="누구님이 관심있는" keywordList={['정치', '피그마', '회의']} link="/issue" />
				</Content>
			</div>
		</>
	);
}
