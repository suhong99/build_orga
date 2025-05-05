import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useDebounce from './useDebounce';

const useSearch = (debounceDelay: number = 500) => {
	const [searchTerm, setSearchTerm] = useState('');
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const initialSearch = searchParams.get('search') || '';
		setSearchTerm(initialSearch);
	}, [searchParams]);

	// 디바운스를 적용
	const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

	// 디바운스된 값이 변경될 때마다 URL 업데이트
	useEffect(() => {
		const currentParams = new URLSearchParams(window.location.search);

		if (debouncedSearchTerm) {
			currentParams.set('search', debouncedSearchTerm);
		} else {
			currentParams.delete('search');
		}

		router.push(`?${currentParams.toString()}`, { scroll: false });
	}, [debouncedSearchTerm, router]);

	return { searchTerm, setSearchTerm };
};

export default useSearch;
