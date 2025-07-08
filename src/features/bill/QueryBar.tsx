import OrderFilter from './OrderFilter';
import CategoryFIlter from './CategoryFIlter';

const QueryBar = () => {
	return (
		<section className="w-full flex items-center gap-5 max-w-maxw">
			<div className="flex gap-1.5 desktop:gap-3.5 ">
				<OrderFilter />
				<CategoryFIlter />
			</div>
		</section>
	);
};

export default QueryBar;
