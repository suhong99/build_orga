'use server';

import { tokenFetcher } from '@/shared/api/fetcher';
import { IssueCardProps } from '@/shared/components/IssueCard';

export interface SearchResponse {
	pageNumber: number;
	last: boolean;
	content: IssueCardProps[];
}

export const getSearchData = async ({ keyword, page = 0, size = 24 }: { keyword: string; page: number; size?: number }) => {
	const response = await tokenFetcher<SearchResponse>(`/api/bills/search?keyword=${keyword}&page=${page}&size=${size}`);
	return { result: response.result };
};
