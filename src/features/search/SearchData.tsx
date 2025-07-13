import React from 'react';
import EmptySearch from './EmptySearch';
import { useInfinityScrollSensor } from '@/shared/hooks/useInfinityScrollSensor';
import { getSearchData } from './api/server';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/const/reactQuery';
import IssueCard from '@/shared/components/IssueCard';
import ErrorIndicator from '@/shared/components/ErrorIndicator';
import InfinityScrollSpinner from '@/shared/components/InfinityScrollSpinner';
import IssueCardSkeleton from '@/shared/skeletons/IssueCard.skeleton';

const SearchData = ({ keyword }: { keyword: string }) => {
	const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } = useInfiniteQuery({
		queryKey: [QUERY_KEYS.search, keyword],
		queryFn: ({ pageParam }) => getSearchData({ page: pageParam, keyword }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			if (!lastPage.result.last) {
				return lastPage.result.pageNumber + 1;
			}
			return undefined;
		},
		gcTime: 40 * 1000,
		staleTime: 30 * 1000,
	});

	const { sensorRef } = useInfinityScrollSensor({ isFetching, hasNextPage, fetchNextPage });
	const searchData = data?.pages.flatMap((page) => page.result.content) ?? [];

	return (
		<section className="flex flex-col w-full gap-5 items-baseline bg-bg-gray px-9 py-8 desktop:gap-4 desktop:items-center  min-h-[calc(100vh-300px)] desktop:min-h-[calc(100vh-260px)]">
			<section className="w-full max-w-maxw grid grid-cols-3  gap-4 max-desktop:grid-cols-2 max-tablet:grid-cols-1">
				{isLoading && Array.from({ length: 9 }).map((_, idx) => <IssueCardSkeleton key={idx} />)}

				{!isLoading && searchData.length === 0 ? (
					<EmptySearch keyword={keyword} />
				) : (
					<>
						<h2 className="flex flex-wrap typo-heading1 font-regular col-span-3 max-desktop:col-span-2 max-tablet:col-span-1">
							<span className="desktop:font-bold">{`"${keyword}" 검색 결과`}&nbsp;</span>
							<span className="text-label-alternative">{searchData.length}</span>
						</h2>

						{searchData.map((bill) => (
							<IssueCard key={bill.billId} {...bill} />
						))}
					</>
				)}

				<div ref={sensorRef} className="flex w-full items-center justify-center col-span-3 max-desktop:col-span-2 max-tablet:col-span-1">
					{isError && <ErrorIndicator retiralFn={fetchNextPage} />}
					{!isError && hasNextPage && <InfinityScrollSpinner isFetching={isFetching} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />}
				</div>
			</section>
		</section>
	);
};

export default SearchData;
