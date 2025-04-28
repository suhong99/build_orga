import React from 'react';

export interface SolidBtnProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: 'small' | 'medium' | 'large';
	/** Button contents */
	label: string;
	/** Optional click handler */
	onClick?: () => void;
}

const sizeMap: Record<NonNullable<SolidBtnProps['size']>, string> = {
	small: 'w-[63px] h-[32px] px-[14px] py-[7px] rounded-[8px]',
	medium: 'w-[80px] h-[40px] px-[20px] py-[9px] rounded-[10px]',
	large: 'w-[98px] h-[48px] px-[28px] py-[12px] rounded-[12px]',
};

export const SolidBtn = ({ primary = true, size = 'medium', label, onClick }: SolidBtnProps) => {
	const base = 'flex items-center justify-center typo-body2-normal font-bold';
	const variant = primary ? 'text-white bg-primary-main-normal ' : 'text-label-neutral bg-[#EDEDEF]';
	const sizeClass = sizeMap[size];

	return (
		<button type="button" className={`${base} ${variant} ${sizeClass}`} onClick={onClick}>
			{label}
		</button>
	);
};
