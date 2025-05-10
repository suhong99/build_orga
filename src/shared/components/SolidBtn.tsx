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
	/** 추가 css */
	className?: string;
	/**disabled */
	isDisabled?: boolean;
	/** Optional click handler */
	onClick?: () => void;
	/** 타입 */
	type?: 'submit' | 'reset' | 'button';
}

const sizeMap: Record<NonNullable<SolidBtnProps['size']>, string> = {
	small: 'h-[32px] px-[14px] py-[7px] rounded-[8px]',
	medium: 'h-[40px] px-[20px] py-[9px] rounded-[10px]',
	large: 'h-[48px] px-[28px] py-[12px] rounded-[12px]',
};

export const SolidBtn = ({ primary = true, size = 'medium', label, className, isDisabled, type = 'button', onClick }: SolidBtnProps) => {
	const base =
		'flex items-center justify-center whitespace-nowrap typo-body2-normal font-bold cursor-pointer disabled:text-label-assistive disabled:bg-interaction-disable disabled:cursor-not-allowed';
	const variant = primary ? 'text-white bg-primary-main-normal ' : 'text-label-neutral bg-[#EDEDEF]';
	const sizeClass = sizeMap[size];

	return (
		<button disabled={isDisabled} type={type} className={`${base} ${variant} ${sizeClass} ${className}`} onClick={onClick}>
			{label}
		</button>
	);
};
