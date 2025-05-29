interface ArrowIconProps {
	className?: string;
}

const ArrowIcon = ({ className = 'text-[#989BA2]' }: ArrowIconProps) => (
	<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.8031 12.636C22.1546 12.2845 22.1546 11.7147 21.8031 11.3632L14.8031 4.36321C14.4517 4.01174 13.8818 4.01174 13.5304 4.36321C13.1789 4.71469 13.1789 5.28453 13.5304 5.63601L18.9939 11.0996H4.16678C3.66973 11.0996 3.26678 11.5026 3.26678 11.9996C3.26678 12.4967 3.66973 12.8996 4.16678 12.8996H18.9939L13.5304 18.3632C13.1789 18.7147 13.1789 19.2845 13.5304 19.636C13.8818 19.9875 14.4517 19.9875 14.8031 19.636L21.8031 12.636Z"
			fill="currentColor"
		/>
	</svg>
);

export default ArrowIcon;
