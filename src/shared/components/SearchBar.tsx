'use client';

import Image from 'next/image';
import useSearch from '../hooks/useSearch';

/**
 * `SearchBar` 컴포넌트는 검색어를 입력하는 입력 필드와 검색 아이콘을 포함하는 컴포넌트입니다.
 * 검색어 입력 후 URL 쿼리 파라미터에 반영하며, 입력값에 디바운스를 적용하여 빠른 검색어 입력을 처리합니다.
 */

const SearchBar = () => {
	const { searchTerm, setSearchTerm } = useSearch();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}
			className="flex pl-3.5 pr-[18px] py-2 gap-2 border border-line-normal focus-within:ring-2 rounded-full focus-within:ring-material-dimmer"
		>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="검색어를 입력하세요"
				className="outline-none typo-body2-normal text-black"
			/>
			<Image src="/svgs/search.svg" alt="search-icon" width={20} height={20} />
		</form>
	);
};

export default SearchBar;
