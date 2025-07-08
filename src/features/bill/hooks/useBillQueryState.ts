import { Keyword } from '@/shared/const/committee';
import { useSearchParams } from 'next/navigation';

export const useBillQueryState = () => {
	const searchParams = useSearchParams();

	const order = searchParams.get('order') === '조회순' ? 'viewCount' : 'proposeDate';
	const keywordsParam = searchParams.get('keywords') ?? '';
	const keywords = keywordsParam ? (keywordsParam.split(',') as Keyword[]) : [];

	return { order, keywords };
};
