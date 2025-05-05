import Navibar from './Navibar';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="w-full px-5 mx-auto flex justify-center">
			<div className="flex justify-between items-center sticky top-0 w-full max-w-maxw bg-red-90 h-16">
				<Link href="/" className="font-medium">
					로고
				</Link>
				<Navibar />
				<div className="">유저프로필</div>
			</div>
		</header>
	);
};

export default Header;
