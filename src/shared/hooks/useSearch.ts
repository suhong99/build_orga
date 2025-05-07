import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useDebounce from './useDebounce';
import useUpdateQueryParam from './useUpdateQueryParam';

const useSearch = (debounceDelay: number = 500) => {
	const [searchTerm, setSearchTerm] = useState('');
	const searchParams = useSearchParams();
	const updateQueryParam = useUpdateQueryParam();

	useEffect(() => {
		const initialSearch = searchParams.get('search') || '';
		setSearchTerm(initialSearch);
	}, [searchParams]);

	const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

	useEffect(() => {
		updateQueryParam('search', debouncedSearchTerm || null);
	}, [debouncedSearchTerm, updateQueryParam]);

	return { searchTerm, setSearchTerm };
};

export default useSearch;
