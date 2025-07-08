'use client';

import { SolidBtn } from '@/shared/components/SolidBtn';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { addBillComment, BillComments } from './api/server';
import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { useHandleError } from '@/shared/hooks/useHandleError';

const AddComment = ({ id }: { id: number | string }) => {
	const queryClient = useQueryClient();
	const [comment, setComment] = useState<string>('');
	const { handleErrorByName } = useHandleError();

	const addNewComment = useMutation({
		mutationFn: ({ id, content }: { id: number | string; content: string }) => addBillComment(id, content),
		onSuccess: ({ result }) => {
			queryClient.setQueryData<InfiniteData<{ result: BillComments }>>([QUERY_KEYS.billComments, id], (prev) => {
				if (!prev) return prev;

				const updatedPages = prev.pages.map((page, idx) =>
					idx === 0
						? {
								...page,
								result: {
									...page.result,
									comments: {
										...page.result.comments,
										content: [result, ...page.result.comments.content],
									},
								},
							}
						: page,
				);

				return { ...prev, pages: updatedPages };
			});

			setComment('');
		},

		onError: (err) => {
			handleErrorByName(err, '댓글 작성');
		},
	});

	return (
		<>
			<div className="w-full">
				<textarea
					id="detail-add-comment"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="이 법안에 대한 의견을 공유해주세요."
					className={`w-full h-12 px-4 py-3 rounded-[12px] typo-body1-normal font-regular text-label-normal placeholder:text-label-assistive border border-line-normal focus:outline-none focus:border-black disabled:bg-interaction-disable resize-none`}
					style={{
						scrollbarWidth: 'none',
						msOverflowStyle: 'none',
					}}
				/>
			</div>
			<div className="flex w-full justify-end">
				<SolidBtn
					size="small"
					label="의견 나누기"
					onClick={() => addNewComment.mutate({ id, content: comment })}
					className="font-medium desktop:font-bold desktop:typo-body2-normal w-[90px] desktop:w-[110px] desktop:h-[40px]"
				/>
			</div>
		</>
	);
};

export default AddComment;
