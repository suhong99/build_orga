import Image from 'next/image';
import { MyInfo } from './const/user';
import MyKeyword from './MyKeyword';
import AccountMenu from './AccountMenu';

const UserInfo = ({ nickname, profileImg, keywordList }: MyInfo) => {
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

				<ul className="flex w-full justify-center gap-2">
					{keywordList.map((keyword) => (
						<li key={keyword}>
							<MyKeyword label={keyword} />
						</li>
					))}
				</ul>
			</article>
			<AccountMenu />
		</>
	);
};

export default UserInfo;
