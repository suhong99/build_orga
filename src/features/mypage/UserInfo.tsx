import Image from 'next/image';
import { MyInfo } from './const/user';
import MyKeyword from './MyKeyword';
import AccountMenu from './AccountMenu';

const UserInfo = ({ nickname, profileImg, commentNum, opinionNum, keywordList }: MyInfo) => {
	const activityList = [
		{ label: '의견', num: opinionNum },
		{ label: '댓글', num: commentNum },
	] as const;

	return (
		<>
			<article className="flex flex-col w-full gap-5 items-center">
				<figure>
					<Image
						src={profileImg || '/images/profile.png'}
						alt="프로필 이미지"
						width={100}
						height={100}
						className="w-[56px] h-[56px] desktop:w-[100px] desktop:h-[100px] rounded-full"
						priority
					/>
					<figcaption className="sr-only">{nickname}님의 프로필 사진</figcaption>
				</figure>

				<h1 className="typo-heading1 font-bold">{nickname}</h1>

				<ul className="desktop:hidden flex justify-center gap-2 typo-caption1 font-regular text-label-alternative/61">
					{activityList.map((activity) => (
						<li key={activity.label} className="flex gap-1">
							<span>{activity.label}</span>
							<span>{activity.num}</span>
						</li>
					))}
				</ul>

				<ul className="flex w-full justify-center gap-2">
					{keywordList.map((keyword) => (
						<li key={keyword}>
							<MyKeyword label={keyword} />
						</li>
					))}
				</ul>
			</article>
			{/* TODO: 높이 조정 */}
			<section className="flex flex-col items-center w-full h-[300px] gap-5 bg-accent-bg-orange">
				<div className="flex justify-between w-full items-center ">
					<h2 className="typo-body1-normal font-bold text-label-neutral/88">내 활동</h2>
					<div className="typo-caption1 font-regular text-label-alternative/61">더보기</div>
				</div>
				<div>내용은 더 채우고</div>
			</section>

			<section className="hidden desktop:flex flex-col w-full gap-5">
				<h2 className="typo-body1-normal font-bold text-label-neutral/88">활동 정보</h2>

				<ul className="grid grid-cols-2 w-full">
					{activityList.map((activity) => (
						<li key={activity.label} className="flex flex-col items-center justify-center text-center">
							<strong className="typo-headline1 font-bold">{activity.num}</strong>
							<span className="typo-caption1 font-regular text-label-alternative/61">{activity.label}</span>
						</li>
					))}
				</ul>
			</section>
			<AccountMenu />
		</>
	);
};

export default UserInfo;
