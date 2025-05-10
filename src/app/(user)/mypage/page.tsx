import { MyInfo } from '@/features/mypage/const/user';
import UserInfo from '@/features/mypage/UserInfo';

export default function MyPage() {
	const myInfo: MyInfo = {
		nickname: '닉네임',
		keywordList: ['해외', '문화예술', '성평등'],
		commentNum: 132,
		opinionNum: 23,
		profileImg: '',
	} as const;

	return (
		<div className="flex w-full justify-center items-start pt-0 gap-5 desktop:pt-[114px] max-w-maxw">
			<section className="flex flex-col items-center px-5 w-full  desktop:px-10 pt-[106px] desktop:py-14 desktop:w-[387px] gap-6 desktop:gap-9 desktop:border-2 desktop:border-line-alternative desktop:rounded-[20px]">
				<UserInfo {...myInfo} />
			</section>
			<section className="bg-accent-bg-orange hidden flex-1 desktop:flex h-[1500px]">
				<div>북마크 내활동</div>
			</section>
		</div>
	);
}
