import Content from '@/features/home/Content';
import ContentHeader from '@/features/home/ContentHeader';

export default function Home() {
	return (
		<>
			<div className="w-full h-[150px] min-desktop:w-[100vw] flex items-center justify-center max-w-maxw bg-[#F0ECFE] typo-title2 desktop:rounded-[20px] desktop:my-10 desktop:typo-title1 desktop:font-bold	text-center">
				나의 색을 찾아서,
				<br className="desktop:hidden" /> 그래 이 픽!
			</div>
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<Content>
					<ContentHeader title="누구님이 관심있는" keywordList={['정치', '피그마', '회의']} link="/issue" />
				</Content>
				<Content>
					<ContentHeader title="당신을 위한 법안" isLoginRequired link="/issue" />
				</Content>
			</div>
		</>
	);
}
