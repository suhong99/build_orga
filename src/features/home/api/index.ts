'use server';

import { tokenFetcher } from '@/shared/api/fetcher';
import { IssueCardProps } from '@/shared/components/IssueCard';
import { Keyword } from '@/shared/const/committee';

interface RecommendBillsResponse {
	nickname: string | null;
	keywords: Keyword[] | null;
	bills: {
		content: IssueCardProps[];
	};
}

export const getPopularBills = async (): Promise<IssueCardProps[]> => {
	const response = await tokenFetcher<{ content: IssueCardProps[] }>('/api/bills/popular?page=0&size=6');

	return response.result.content;
};

export const getRecommenedBills = async (): Promise<RecommendBillsResponse> => {
	const response = await tokenFetcher<RecommendBillsResponse>('/api/bills/recommend?page=0&size=6');

	return response.result;
};
