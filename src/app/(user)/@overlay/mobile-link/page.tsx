import HamberMenu from '@/features/layout/HamberMenu';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<HamberMenu>
			<div className="flex flex-col mt-[68px] px-2.5 py-2 gap-3">
				<Image src="/svgs/logo.svg" alt="로고" width={150} height={32} priority className="ml-4.5" />
				<nav className="flex flex-col">
					<NaviBtn title="제 21대 대선 후보" link="/" />
					<NaviBtn title="그래이픽이란?" target="_blank" link="/" />
					{/* {NAVIBAR_PATH.map(({ name, path }) => (
						<NaviBtn key={name} title={name} link={path} />
					))} */}
				</nav>
			</div>
			{/* 투두 로그아웃 효과 및 조건부 */}
			{/* 대선끝나고 수정 */}
			{/* <button className="absolute bottom-9 ml-10.5 my-3 typo-body1-normal font-regular text-label-alternative  active:text-label-normal">
				로그아웃
			</button> */}
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
