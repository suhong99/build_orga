const StretchLine = ({ className = '' }: { className?: string }) => {
	return <div className={`w-full h-[1px] bg-line-normal desktop:w-[calc(100%-72px)] ${className}`} />;
};

export default StretchLine;
