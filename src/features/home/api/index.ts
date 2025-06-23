'use server';

import { tokenFetcher } from '@/shared/api/fetcher';
import { IssueCardProps } from '@/shared/components/IssueCard';

export const getLatestBills = async (): Promise<IssueCardProps[]> => {
	const response = await tokenFetcher<{ content: IssueCardProps[] }>('/api/bills/popular?page=0&size=6');

	return response.result.content;
};
