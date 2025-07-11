'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useUpdateQueryParam from '@/shared/hooks/useUpdateQueryParam';
import useDebounce from '@/shared/hooks/useDebounce';

const useSearch = (debounceDelay: number = 500) => {
	const searchParams = useSearchParams();
	const updateQueryParam = useUpdateQueryParam();

	// URL에서 처음 읽어온 값을 초기값으로 설정 (초기화용 useEffect 제거)
	const initialSearch = searchParams.get('search') || '';
	const [searchTerm, setSearchTerm] = useState(initialSearch);

	const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

	// 디바운스된 값이 바뀌었을 때만 쿼리 갱신
	useEffect(() => {
		const currentSearch = searchParams.get('search') || '';

		// URL과 다른 경우에만 push 수행
		if (debouncedSearchTerm !== currentSearch) {
			updateQueryParam('search', debouncedSearchTerm || null);
		}
	}, [debouncedSearchTerm, searchParams, updateQueryParam]);

	return { searchTerm, setSearchTerm };
};

export default useSearch;
