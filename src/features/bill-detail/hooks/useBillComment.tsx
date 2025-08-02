import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { BillComments, deleteBillComment, editBillComment, likeBillComment } from '../api/server';
import { useHandleError } from '@/shared/hooks/useHandleError';

export const useBillComment = (billId: string | number) => {
	const queryClient = useQueryClient();
	const { handleErrorByCode } = useHandleError();

	const deleteComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => deleteBillComment(id),
		onSuccess: (res, variables) => {
			if (!res.success) {
				handleErrorByCode(res.errorCode, '댓글 삭제');
				return;
			}

			queryClient.setQueryData<InfiniteData<{ result: BillComments }>>([QUERY_KEYS.billComments, billId], (prev) => {
				if (!prev) return prev;

				const updatedPages = prev.pages.map((page) => {
					const filtered = page.result.comments.content.filter((comment) => comment.commentId !== variables.id);

					return {
						...page,
						result: {
							...page.result,
							comments: {
								...page.result.comments,
								content: filtered,
							},
						},
					};
				});

				return {
					...prev,
					pages: updatedPages,
				};
			});
		},
	});

	const editComment = useMutation({
		mutationFn: ({ id, content }: { id: number | string; content: string }) => editBillComment(id, content),
		onSuccess: (res, { id, content }) => {
			if (!res.success) {
				handleErrorByCode(res.errorCode, '댓글 수정');
				return;
			}

			queryClient.setQueryData<InfiniteData<{ result: BillComments }>>([QUERY_KEYS.billComments, billId], (prev) => {
				if (!prev) return prev;

				const updatedPages = prev.pages.map((page) => {
					const updatedComments = page.result.comments.content.map((comment) =>
						comment.commentId === id ? { ...comment, content, isEdited: true } : comment,
					);

					return {
						...page,
						result: {
							...page.result,
							comments: {
								...page.result.comments,
								content: updatedComments,
							},
						},
					};
				});

				return {
					...prev,
					pages: updatedPages,
				};
			});
		},
	});

	const likeComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => likeBillComment(id),
		onSuccess: (res, { id }) => {
			if (!res.success) {
				handleErrorByCode(res.errorCode, '댓글 좋아요');
				return;
			}

			queryClient.setQueryData<InfiniteData<{ result: BillComments }>>([QUERY_KEYS.billComments, billId], (prev) => {
				if (!prev) return prev;

				const updatedPages = prev.pages.map((page) => {
					const updatedComments = page.result.comments.content.map((comment) =>
						comment.commentId === id
							? {
									...comment,
									isLiked: !comment.isLiked,
									likeCount: comment.isLiked ? comment.likeCount - 1 : comment.likeCount + 1,
								}
							: comment,
					);

					return {
						...page,
						result: {
							...page.result,
							comments: {
								...page.result.comments,
								content: updatedComments,
							},
						},
					};
				});

				return {
					...prev,
					pages: updatedPages,
				};
			});
		},
	});

	return { deleteComment, editComment, likeComment };
};
