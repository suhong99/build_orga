import Content from '@/features/home/Content';
import ContentHeader from '@/features/home/ContentHeader';

export default function Home() {
	return (
		<>
			<div className="w-full h-[250px] flex items-center justify-center  max-w-maxw bg-primary-main-strong">배너 </div>
			<div className="w-full flex flex-col flex-1 gap-16 desktop:gap-12 items-center px-9 py-12 bg-bg-gray ">
				<Content>
					<ContentHeader title="누구님이 관심있는" keyword_list={['정치', '피그마', '회의']} link="/issue" />
				</Content>
				<Content>
					<ContentHeader title="당신을 위한 법안" isLoginRequired link="/issue" />
				</Content>
			</div>
		</>
	);
}
