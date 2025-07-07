interface EditIconProps {
	className?: string;
	width?: number | string;
	height?: number | string;
}

const EditIcon = ({ className = 'text-label-alternative', width = 20, height = 20 }: EditIconProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.3157 3.18497C16.3516 2.2209 14.7885 2.2209 13.8244 3.18497L3.30365 13.7058C3.163 13.8465 3.08398 14.0372 3.08398 14.2361V16.6667C3.08398 17.0809 3.41977 17.4167 3.83398 17.4167H6.26453C6.46344 17.4167 6.65421 17.3377 6.79486 17.197L17.3156 6.67618C18.2797 5.71211 18.2797 4.14904 17.3157 3.18497ZM13.5128 8.35773L5.95387 15.9167H4.58398V14.5468L12.1429 6.98784L13.5128 8.35773ZM14.8851 4.24563L13.3213 5.80945L14.6912 7.17934L16.255 5.61552C16.6333 5.23724 16.6333 4.62391 16.255 4.24563C15.8767 3.86734 15.2634 3.86734 14.8851 4.24563Z"
				fill="currentColor"
				fillOpacity="0.61"
			/>
		</svg>
	);
};

export default EditIcon;
