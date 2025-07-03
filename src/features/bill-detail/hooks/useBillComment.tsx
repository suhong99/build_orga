import { QUERY_KEYS } from '@/shared/const/reactQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBillComment } from '../api/server';

export const useBillComment = () => {
	const queryClient = useQueryClient();
	const deleteComment = useMutation({
		mutationFn: ({ id }: { id: number | string }) => deleteBillComment(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.billComments] });
		},
		onError: () => {
			alert('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
		},
	});

	return { deleteComment };
};
