import React from 'react';

interface CheckIconProps {
	width?: number;
	height?: number;
	strokeWidth?: number;
	className?: string;
}

const CheckIcon = ({ width = 24, height = 24, strokeWidth = 2, className }: CheckIconProps) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		stroke="currentColor"
		strokeWidth={strokeWidth}
	>
		<path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default CheckIcon;
