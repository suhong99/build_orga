import SearchBar from '@/shared/components/SearchBar';
import OrderFilter from './OrderFilter';
import { Suspense } from 'react';
import CategoryFIlter from './CategoryFIlter';

const QueryBar = () => {
	return (
		<section className="w-full flex justify-between items-center gap-5 max-w-maxw">
			<Suspense>
				<div className="flex gap-1.5 desktop:gap-3.5 ">
					<OrderFilter />
					<CategoryFIlter />
				</div>
				<SearchBar />
			</Suspense>
		</section>
	);
};

export default QueryBar;
