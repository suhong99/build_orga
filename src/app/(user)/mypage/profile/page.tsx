import ProfileImage from '@/features/profile/ProfileImage';
import { COOKIE_NAME } from '@/shared/const/cookie';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: '프로필 수정',
};

export default async function MyProfile() {
	const cookieStore = await cookies();
	const img = cookieStore.get(COOKIE_NAME.auth.img)?.value || '';

	return (
		<div className="flex w-full justify-center px-5 py-12 desktop:py-15">
			<div className="flex flex-col w-full gap-8 desktop:pt-7 max-w-[480px]">
				<h1 className="typo-heading2 desktop:typo-heading1 desktop:font-bold">프로필 정보</h1>
				<ProfileImage img={img} />
			</div>
		</div>
	);
}
