import { Metadata } from 'next';
import { Suspense } from 'react';
import SearchContent from '@/features/search/SearchContent';
import SearchBar from '@/features/search/SearchBar';

export const metadata: Metadata = {
	title: '검색 페이지',
};

export default function SearchPage() {
	return (
		<div className="flex flex-col items-center w-full">
			<Suspense>
				<SearchBar />
				<SearchContent />
			</Suspense>
		</div>
	);
}
