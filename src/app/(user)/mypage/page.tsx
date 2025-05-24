import { MyInfo } from '@/features/mypage/const/user';
import MyContents from '@/features/mypage/MyContents';
import UserInfo from '@/features/mypage/UserInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '마이페이지',
};

export default function MyPage() {
	const myInfo: MyInfo = {
		nickname: '닉네임',
		keywordList: ['해외', '문화예술', '성평등'],
		commentNum: 132,
		opinionNum: 23,
		profileImg: '',
	} as const;

	return (
		<div className="flex w-full justify-center desktop:bg-bg-gray">
			<div className="flex flex-col w-full justify-center items-center gap-5 desktop:flex-row desktop:items-start desktop:pt-7 max-w-maxw">
				<section className="flex flex-col items-center px-5 w-full  desktop:px-10 pt-[50px] desktop:py-14 desktop:w-[387px] gap-6 desktop:gap-9 desktop:border-2 bg-white desktop:border-line-alternative desktop:rounded-[20px]">
					<UserInfo {...myInfo} />
				</section>
				{/* TODO: */}
				<section className="flex w-full h-[1000px]">
					<MyContents />
				</section>
			</div>
		</div>
	);
}
