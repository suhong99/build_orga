'use client';

import IssueCard from '@/shared/components/IssueCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyBookmarks } from './api/server';
import EmptyData from './EmptyData';
import { useInfinityScrollSensor } from '@/shared/hooks/useInfinityScrollSensor';
import { QUERY_KEYS } from '@/shared/const/reactQuery';

const MyBookmark = () => {
	//TODO: 에러처리?
	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
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

	const { sensorRef } = useInfinityScrollSensor({ isFetching, hasNextPage, fetchNextPage });

	if (data?.pages?.length === 1 && data.pages[0].result.content.length === 0) {
		return <EmptyData category="북마크" />;
	}

	return (
		<>
			<div className="grid grid-cols-1 gap-6 @min-[768px]:grid-cols-2 ">
				{data?.pages.map(({ result }) => result.content.map((billInfo) => <IssueCard key={billInfo.billId} {...billInfo} />))}
			</div>
			<div ref={sensorRef} className="flex items-center justify-center w-full col-span-2">
				{hasNextPage && (
					<div
						className="w-6 h-6 border-2 border-t-transparent border-inverse-primary-main rounded-full animate-spin"
						role="status"
						aria-label="로딩 중"
					/>
				)}
			</div>
		</>
	);
};

export default MyBookmark;
