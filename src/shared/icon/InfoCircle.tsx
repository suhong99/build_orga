import React from 'react';

interface IconProps {
	width?: number;
	height?: number;
	className?: string;
}

//children을 무분별히 받는 React.FC 비선호
// https://www.howdy-mj.me/react/react-node-and-jsx-element
const InfoCircle = ({ width = 16, height = 16, className = '' }: IconProps) => (
	<svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
		<path d="M12.9998 8C12.9998 8.55228 12.5521 9 11.9998 9C11.4475 9 10.9998 8.55228 10.9998 8C10.9998 7.44772 11.4475 7 11.9998 7C12.5521 7 12.9998 7.44772 12.9998 8Z" />
		<path d="M12.8999 11.5C12.8999 11.0029 12.497 10.6 11.9999 10.6C11.5028 10.6 11.0999 11.0029 11.0999 11.5V16C11.0999 16.4971 11.5028 16.9 11.9999 16.9C12.497 16.9 12.8999 16.4971 12.8999 16V11.5Z" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M2.09985 12.0001C2.09985 6.53248 6.53221 2.1001 11.9998 2.1001C17.4674 2.1001 21.8998 6.53248 21.8998 12.0001C21.8998 17.4677 17.4674 21.9001 11.9998 21.9001C6.53221 21.9001 2.09985 17.4677 2.09985 12.0001ZM11.9998 3.9001C7.52632 3.9001 3.89985 7.52659 3.89985 12.0001C3.89985 16.4736 7.52632 20.1001 11.9998 20.1001C16.4733 20.1001 20.0998 16.4736 20.0998 12.0001C20.0998 7.52659 16.4733 3.9001 11.9998 3.9001Z"
		/>
	</svg>
);

export default InfoCircle;
