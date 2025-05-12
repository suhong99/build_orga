import { SolidBtn } from '@/shared/components/SolidBtn';
import Navibar from './Navibar';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
	return (
		<header className="w-full px-5 mx-auto flex justify-center">
			<div className="flex justify-between items-center sticky top-0 w-full max-w-maxw bg-red-90 h-16">
				<Link href="/" className="font-medium">
					로고
				</Link>
				<Navibar />
				<div className="flex gap-5 items-center">
					<Link href="/modal-login">
						<SolidBtn label="로그인" size="small" />
					</Link>
					<Link href="/mobile-link">
						<Image src="/svgs/menu.svg" alt="네비바 열기" width={24} height={24} className="desktop:hidden cursor-pointer" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
