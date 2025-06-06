import { NAVIBAR_PATH } from '@/shared/const/url';
import Link from 'next/link';
import React from 'react';

const Navibar = () => {
	return (
		<nav className="hidden desktop:flex justify-between items-center gap-[70px] ">
			{NAVIBAR_PATH.map(({ name, path }) => (
				<NaviBtn key={name} title={name} link={path} />
			))}
		</nav>
	);
};

export default Navibar;

interface NaviBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	title: string;
	link: string;
}

const NaviBtn = ({ title, link, ...anchorProps }: NaviBtnProps) => {
	return (
		<Link href={link} {...anchorProps} className="typo-body1-normal font-bold text-label-normal">
			{title}
		</Link>
	);
};
