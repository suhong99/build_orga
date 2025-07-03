'use client';

import Input from '@/shared/components/Input';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { addBillComment } from './api/server';
import { QUERY_KEYS } from '@/shared/const/reactQuery';

const AddComment = ({ id }: { id: number | string }) => {
	const queryClient = useQueryClient();
	const [comment, setComment] = useState<string>('');
	const addNewComment = useMutation({
		mutationFn: ({ id, content }: { id: number | string; content: string }) => addBillComment(id, content),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.billComments] });
			setComment('');
		},
		onError: () => {
			alert('댓글 작성에 실패했습니다. 다시 시도해주세요.');
		},
	});

	return (
		<>
			<Input
				id="detail-add-comment"
				value={comment}
				onChange={(val) => {
					setComment(val);
				}}
				placeholder="이 법안에 대한 의견을 공유해주세요."
			/>
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
