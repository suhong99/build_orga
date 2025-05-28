const StretchLine = ({ className = '' }: { className?: string }) => {
	return <div className={`w-full h-[1px] bg-line-normal ${className}`} />;
};

export default StretchLine;
