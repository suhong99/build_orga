import { InfiniteData } from '@tanstack/react-query';
import { MyReactions } from '../api/server';

type ReactionsData =
	| InfiniteData<
			{
				result: {
					content: MyReactions[];
					pageNumber: number;
					last: boolean;
				};
			},
			unknown
	  >
	| undefined;

export const groupReactionByDate = (data: ReactionsData) => {
	const flatItems = data?.pages.flatMap((page) => page.result.content) ?? [];

	const groupedMap = new Map<string, MyReactions[]>();

	for (const item of flatItems) {
		if (!groupedMap.has(item.date)) {
			groupedMap.set(item.date, []);
		}
		groupedMap.get(item.date)!.push(item);
	}

	// 날짜 내림차순으로 정렬
	return Array.from(groupedMap.entries())
		.sort(([dateA], [dateB]) => new Date(dateB.replace(/\./g, '-')).getTime() - new Date(dateA.replace(/\./g, '-')).getTime())
		.map(([date, items]) => ({
			date,
			items,
		}));
};
