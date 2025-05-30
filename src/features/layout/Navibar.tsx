import Link from 'next/link';
import React from 'react';

// TODO: 대선끝나고 수정
const Navibar = () => {
	return (
		<nav className="hidden desktop:flex justify-between items-center gap-[70px] ">
			{/* 
			{NAVIBAR_PATH.map(({ name, path }) => (
				<NaviBtn key={name} title={name} link={path} />
			))}
			 */}

			<NaviBtn title="제 21대 대선" link="/" />
			<NaviBtn title="그래이픽이란?" target="_blank" link="/" />
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
