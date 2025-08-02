'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useUpdateQueryParam from '@/shared/hooks/useUpdateQueryParam';
import useDebounce from '@/shared/hooks/useDebounce';

const useSearch = (debounceDelay = 500) => {
	const searchParams = useSearchParams();
	const initialSearch = searchParams.get('search') || '';

	const updateQueryParam = useUpdateQueryParam();

	const [searchTerm, setSearchTerm] = useState(initialSearch);
	const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

	useEffect(() => {
		setSearchTerm(initialSearch);
	}, [initialSearch]);

	// ✅ 디바운스된 값이 바뀌면 쿼리스트링 업데이트
	useEffect(() => {
		updateQueryParam('search', debouncedSearchTerm || null);
	}, [debouncedSearchTerm, updateQueryParam]);

	return { searchTerm, setSearchTerm };
};

export default useSearch;
