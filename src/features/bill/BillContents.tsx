'use client';

import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { useBillQueryState } from './hooks/useBillQueryState';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getFilteredBills } from './api/server';
import IssueCard from '@/shared/components/IssueCard';
import InfinityScrollSpinner from '@/shared/components/InfinityScrollSpinner';
import ErrorIndicator from '@/shared/components/ErrorIndicator';

const BillContents = () => {
	const { order, keywords } = useBillQueryState();

	const { data, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery({
		queryKey: [QUERY_KEYS.bills, order, keywords],
		queryFn: ({ pageParam }) => getFilteredBills({ page: pageParam, keywords, order }),
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

	const BillData = data?.pages.flatMap((page) => page.result.content) ?? [];

	return (
		<section className="w-full max-w-maxw grid grid-cols-3  gap-4 max-desktop:grid-cols-2 max-tablet:grid-cols-1">
			{BillData.map((bill) => (
				<IssueCard key={bill.billId} {...bill} />
			))}
			<div className="flex col-span-3 w-full items-center justify-center max-desktop:col-span-2 max-tablet:col-span-1">
				{isError && <ErrorIndicator retiralFn={fetchNextPage} />}
				{!isError && hasNextPage && <InfinityScrollSpinner isFetching={isFetching} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />}
			</div>
		</section>
	);
};

export default BillContents;
