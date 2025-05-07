import SearchBar from '@/shared/components/SearchBar';
import OrderFilter from './OrderFilter';
import { Suspense } from 'react';

const QueryBar = () => {
	return (
		<section className="w-full flex justify-between items-center gap-5 max-w-maxw">
			<div className="flex">
				<OrderFilter />
			</div>
			<Suspense>
				<SearchBar />
			</Suspense>
		</section>
	);
};

export default QueryBar;
