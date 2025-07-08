'use server';

import { tokenFetcher } from '@/shared/api/fetcher';
import { IssueCardProps } from '@/shared/components/IssueCard';
import { Keyword, KEYWORD_LIST } from '@/shared/const/committee';

export async function getFilteredBills({
	page = 0,
	size = 30,
	order,
	keywords,
}: {
	page: number;
	size?: number;
	order: string;
	keywords: Keyword[];
}) {
	const response = await tokenFetcher<{ content: IssueCardProps[]; pageNumber: number; last: boolean }>(
		`/api/bills?page=${page}&size=${size}&keywords=${keywords.length === 0 ? KEYWORD_LIST : keywords}&sortBy=${order}`,
	);

	return { result: response.result };
}
