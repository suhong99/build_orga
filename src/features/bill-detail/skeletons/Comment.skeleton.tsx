const CommentSkeleton = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col pb-2 gap-4.5 ">
				<div className="w-20 h-5 rounded-[4px] bg-[#70737C14] " />
				<div className="w-full h-20 rounded-[4px] bg-[#70737C14] desktop:h-26"></div>
				<div className="w-[274px] h-6 rounded-[4px] bg-[#70737C14] " />
			</div>
		</div>
	);
};

export default CommentSkeleton;
