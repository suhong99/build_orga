import IssueCardSkeleton from '@/shared/skeletons/IssueCard.skeleton';

const SearchDataSkeleton = () => {
	return (
		<>
			<div className="w-50 h-7.5 bg-[#70737C14] rounded-[4px] col-span-3 max-desktop:col-span-2 max-tablet:col-span-1" />
			{Array.from({ length: 9 }).map((_, idx) => (
				<IssueCardSkeleton key={idx} />
			))}
		</>
	);
};

export default SearchDataSkeleton;
