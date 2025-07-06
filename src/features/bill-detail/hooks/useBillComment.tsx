import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { BillComments, deleteBillComment, editBillComment, likeBillComment } from '../api/server';
import { useHandleError } from '@/shared/hooks/useHandleError';

export const useBillComment = (billId: string | number) => {
	const queryClient = useQueryClient();
	const { handleErrorByName } = useHandleError();

	const deleteComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => deleteBillComment(id),
		onSuccess: (_, variables) => {
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
		onError: (err) => {
			handleErrorByName(err, '댓글 삭제');
		},
	});

	const editComment = useMutation({
		mutationFn: ({ id, content }: { id: number | string; content: string }) => editBillComment(id, content),
		onSuccess: (_, { id, content }) => {
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

				return { ...prev, pages: updatedPages };
			});
		},
		onError: (err) => {
			handleErrorByName(err, '댓글 수정');
		},
	});

	const likeComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => likeBillComment(id),
		onSuccess: (_, { id }) => {
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

				return { ...prev, pages: updatedPages };
			});
		},
		onError: (err) => {
			handleErrorByName(err, '댓글 좋아요');
		},
	});

	return { deleteComment, editComment, likeComment };
};
