import { myProfileInfo } from '@/features/mypage/api/server';
import ProfileForm from '@/features/profile/ProfileForm';
import { MODAL_PATH } from '@/shared/const/url';
import { Metadata } from 'next';
import { redirect, RedirectType } from 'next/navigation';

export const metadata: Metadata = {
	title: '프로필 수정',
};

export default async function MyProfile() {
	const response = await myProfileInfo();

	if (response.status === 'relogin') {
		redirect(MODAL_PATH.login, RedirectType.push);
	}

	return (
		<div className="flex w-full justify-center px-5 py-12 desktop:py-15">
			<div className="flex flex-col w-full  max-w-[480px] gap-6 desktop:pt-7 desktop:gap-10 ">
				<h1 className="typo-heading2 desktop:typo-heading1 desktop:font-bold">프로필 정보</h1>
				<ProfileForm initialNick={response.result.nickname} initailKeywords={response.result.interests} />
			</div>
		</div>
	);
}
