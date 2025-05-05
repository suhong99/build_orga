import { CLIENT_NAVI_PATH } from '@/shared/const/url';
import Link from 'next/link';
import React from 'react';

const Navibar = () => {
	return (
		<nav className="flex justify-between items-center gap-[70px]">
			{Object.entries(CLIENT_NAVI_PATH)
				.filter(([key]) => key !== 'home') // '홈' 제외
				.map(([key, { name, path }]) => (
					<NaviBtn key={key} title={name} link={path} />
				))}
		</nav>
	);
};

export default Navibar;

const NaviBtn = ({ title, link }: { title: string; link: string }) => {
	return (
		<Link href={link} className="typo-body1-normal font-bold text-label-normal">
			{title}
		</Link>
	);
};
