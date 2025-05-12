'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface HamberMenuProps {
	children: ReactNode;
}

const HamberMenu = ({ children }: HamberMenuProps) => {
	const router = useRouter();
	const onCloseMenu = () => router.back();
	return (
		<div onClick={onCloseMenu} className="fixed inset-0 z-50 flex justify-end bg-black/52">
			<aside onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" className="relative h-full w-[300px] bg-white shadow-xl">
				<button className="absolute top-4 right-5 cursor-pointer" onClick={onCloseMenu}>
					<Image src="/svgs/close.svg" alt="닫기" width={24} height={24} />
				</button>
				{children}
			</aside>
		</div>
	);
};

export default HamberMenu;
