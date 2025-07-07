import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '프로필 수정',
};

export default async function MyProfile() {
	return (
		<div className="flex w-full justify-center px-5 py-12 desktop:py-15">
			<div className="flex flex-col w-full gap-8 desktop:pt-7 max-w-[480px]">
				<h1 className="typo-heading2 desktop:typo-heading1 desktop:font-bold">프로필 정보</h1>
			</div>
		</div>
	);
}
