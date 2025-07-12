'use client';

import IssueCard from '@/shared/components/IssueCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyBookmarks } from './api/server';
import EmptyData from './EmptyData';
import { QUERY_KEYS } from '@/shared/const/reactQuery';
import InfinityScrollSpinner from '@/shared/components/InfinityScrollSpinner';
import ErrorIndicator from '@/shared/components/ErrorIndicator';

const MyBookmark = () => {
	const { data, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery({
		queryKey: [QUERY_KEYS.myBookmarks],
		queryFn: ({ pageParam }) => getMyBookmarks({ page: pageParam }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			if (!lastPage.result.last) {
				return lastPage.result.pageNumber + 1;
			}
			return undefined;
		},
		gcTime: 60 * 1000,
	});

	if (data?.pages?.length === 1 && data.pages[0].result.content.length === 0) {
		return <EmptyData category="북마크" />;
	}

	return (
		<div className="flex flex-col px-5">
			<div className="grid grid-cols-1 gap-3 @min-[768px]:grid-cols-2 ">
				{data?.pages.map(({ result }) => result.content.map((billInfo) => <IssueCard key={billInfo.billId} {...billInfo} />))}
			</div>
			<div className="flex items-center justify-center w-full col-span-2">
				{isError && <ErrorIndicator retiralFn={fetchNextPage} />}
				{!isError && hasNextPage && <InfinityScrollSpinner isFetching={isFetching} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />}
			</div>
		</div>
	);
};

export default MyBookmark;
