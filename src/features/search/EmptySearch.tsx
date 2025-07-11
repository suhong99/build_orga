import Image from 'next/image';

const EmptySearch = ({ keyword }: { keyword: string }) => {
	return (
		<div className="flex flex-col items-center gap-2 w-full col-span-3 max-desktop:col-span-2 max-tablet:col-span-1">
			<div className="relative w-[128px] desktop:w-[256px] aspect-square">
				<Image
					src="/images/no-search.png"
					alt="검색결과 없음"
					draggable={false}
					fill
					sizes="(min-width: 960px) 256px, 128px"
					priority
					className="object-contain"
				/>
			</div>
			<h2 className="typo-heading2 font-bold text-label-normal text-center desktop:typo-title3 ">{`"${keyword}"에 대한 검색 결과가 없어요`}</h2>
			<p className="text-label-normal typo-body1-normal font-regular text-center desktop:typo-heading2">다른 키워드로 검색해주세요</p>
		</div>
	);
};

export default EmptySearch;
