'use client';

import IssueCard from '@/shared/components/IssueCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { getMyBookmarks } from './api/server';
import { useInView } from 'framer-motion';

const MyBookmark = () => {
	//TODO: 에러처리?
	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
		queryKey: ['bookmarks'],
		queryFn: ({ pageParam }) => getMyBookmarks({ page: pageParam }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			if (!lastPage.result.last) {
				return lastPage.result.pageNumber + 1;
			}
			return undefined;
		},
	});

	const sensorRef = useRef(null);
	const isInView = useInView(sensorRef);

	useEffect(() => {
		if (!isFetching && hasNextPage && isInView) {
			fetchNextPage();
		}
	}, [fetchNextPage, hasNextPage, isFetching, isInView]);

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
