import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'framer-motion';
import React, { Fragment, useEffect, useRef } from 'react';
import { getMyComments } from './api/server';
import HeartIcon from '@/shared/icon/Heart';
import TagIcon from '@/shared/icon/Tag';

const MyComment = () => {
	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
		queryKey: ['comments'],
		queryFn: ({ pageParam }) => getMyComments({ page: pageParam }),
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

	const flatComments = data?.pages.flatMap((page) => page.result.content) ?? [];
	return (
		<div className="flex flex-col w-full gap-5 px-6 py-5 bg-white rounded-[12px]">
			{flatComments.map((comment, index) => (
				<Fragment key={comment.commentId}>
					<div className="w-full flex flex-col flex-wrap break-words gap-2">
						<span className="typo-label2 font-regular desktop:typo-body2-normal text-label-alternative">{comment.createdDate}</span>
						<span className="typo-body2-normal desktop:typo-body1-normal">{comment.content}</span>
						<div className="flex gap-1 items-center">
							<HeartIcon className="w-4 h-4 desktop:w-5 desktop:h-5" />
							<span className="typo-label1-normal desktop:typo-body1-normal text-[#AEB0B6]">{comment.likeCount}</span>
						</div>
						<div className="flex pl-3 gap-3">
							<TagIcon />
							<span className="typo-body1-normal font-bold">{comment.title}</span>
						</div>
					</div>
					{index !== flatComments.length - 1 && <div className="h-px bg-line-normal w-full" />}
				</Fragment>
			))}

			<div ref={sensorRef} className="flex items-center justify-center w-full">
				{hasNextPage && (
					<div
						className="w-6 h-6 border-2 border-t-transparent border-inverse-primary-main rounded-full animate-spin"
						role="status"
						aria-label="로딩 중"
					/>
				)}
			</div>
		</div>
	);
};

export default MyComment;
