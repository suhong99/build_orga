import HamberMenu from '@/features/layout/HamberMenu';
import Link from 'next/link';
import Image from 'next/image';
import { clearAuth, isLoggedIn } from '@/features/auth/utils/cookie';
import { NAVIBAR_PATH } from '@/shared/const/url';

export default async function Page() {
	const logout = async () => {
		'use server';
		await clearAuth();
	};

	const isLoggedInUser = await isLoggedIn();
	return (
		<HamberMenu>
			<div className="flex flex-col mt-[68px] px-2.5 py-2 gap-3">
				<Image src="/svgs/logo.svg" alt="로고" width={150} height={32} priority className="ml-4.5" />
				<nav className="flex flex-col">
					{NAVIBAR_PATH.map(({ name, path }) => (
						<NaviBtn key={name} title={name} link={path} />
					))}
				</nav>
			</div>
			{isLoggedInUser && (
				<form action={logout}>
					<button
						type="submit"
						className="absolute bottom-9 ml-10.5 my-3 typo-body1-normal font-regular text-label-alternative  active:text-label-normal"
					>
						로그아웃
					</button>
				</form>
			)}
		</HamberMenu>
	);
}

interface NaviBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	title: string;
	link: string;
}

const NaviBtn = ({ title, link, ...anchorProps }: NaviBtnProps) => {
	return (
		<Link href={link} {...anchorProps} className="ml-8 my-3 typo-body1-normal font-regular text-label-normal">
			{title}
		</Link>
	);
};
