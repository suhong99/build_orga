import SearchBar from '@/shared/components/SearchBar';
const QueryBar = () => {
	return (
		<section className="w-full flex justify-between items-center gap-5 max-w-maxw">
			<div>
				<div>필터</div>
				<div>일까나</div>
			</div>
			<SearchBar />
		</section>
	);
};

export default QueryBar;
