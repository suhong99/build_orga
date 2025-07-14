'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
	children: ReactNode;
	className?: string;
}

const Modal = ({ children, className = '' }: ModalProps) => {
	const router = useRouter();
	const onCloseModal = () => router.back();

	const mergedClassName = twMerge(
		'flex justify-center relative w-[335px] h-[344px] desktop:w-[558px] desktop:h-[524px] rounded-[20px] bg-white',
		className,
	);
	return (
		<div onClick={onCloseModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black/52">
			<aside onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" className={mergedClassName}>
				<button className="absolute top-5 right-6 cursor-pointer" onClick={onCloseModal}>
					<Image src="/svgs/close.svg" alt="닫기" width={24} height={24} draggable={false} />
				</button>
				{children}
			</aside>
		</div>
	);
};

export default Modal;
