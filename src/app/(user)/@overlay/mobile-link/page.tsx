import HamberMenu from '@/features/layout/HamberMenu';
import { NAVIBAR_PATH } from '@/shared/const/url';
import Link from 'next/link';

export default function Page() {
	return (
		<HamberMenu>
			<div className="flex flex-col mt-[68px] px-2.5 py-2 gap-3 ">
				{/* TODO: 로고삽입 */}
				<div className="w-full bg-accent-bg-blue h-8">로고</div>
				<nav className="flex flex-col">
					{NAVIBAR_PATH.map(({ name, path }) => (
						<NaviBtn key={name} title={name} link={path} />
					))}
				</nav>
			</div>
		</HamberMenu>
	);
}

const NaviBtn = ({ title, link }: { title: string; link: string }) => {
	return (
		<Link href={link} className="ml-8 my-3 typo-body1-normal font-regular text-label-normal">
			{title}
		</Link>
	);
};
