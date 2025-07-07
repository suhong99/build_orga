import { MyProfileInfo } from './const/user';
import MyKeyword from './MyKeyword';
import AccountMenu from './AccountMenu';
import ProfileImg from './ProfileImg';

const UserInfo = ({ nickname, profileImageUrl, interests }: MyProfileInfo) => {
	return (
		<>
			<article className="flex flex-col w-full gap-5 items-center">
				<ProfileImg nickname={nickname} img={profileImageUrl} />
				<h1 className="typo-heading1 font-bold">{nickname}</h1>

				<ul className="flex w-full flex-wrap justify-center gap-2">
					{interests.map((keyword, i) => (
						<MyKeyword key={keyword + i} label={keyword} />
					))}
				</ul>
			</article>
			<AccountMenu />
		</>
	);
};

export default UserInfo;
