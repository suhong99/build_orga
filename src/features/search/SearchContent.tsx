'use client';

import { useSearchParams } from 'next/navigation';
import RecommendTerms from './RecommendTerms';
import SearchData from './SearchData';

const SearchContent = () => {
	const searchParams = useSearchParams();
	const keyword = searchParams.get('search') || '';

	return <>{keyword === '' ? <RecommendTerms /> : <SearchData keyword={keyword} />}</>;
};

export default SearchContent;
