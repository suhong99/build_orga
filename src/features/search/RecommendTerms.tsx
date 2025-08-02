import Link from 'next/link';
import React from 'react';

const RecommendTerms = () => {
	const data = ['청년', '육아', '소상공인', '세액', '연금', '근로'];

	return (
		<section className="flex flex-col w-full px-5 gap-5 items-baseline desktop:items-center">
			<h2 className="typo-headline1 font-bold">추천 검색어</h2>
			<div className="flex flex-wrap gap-2 max-w-[660px] desktop:justify-center">
				{data.map((word, i) => (
					<Link
						key={word + i}
						href={`/search?search=${word}`}
						className="flex justify-center items-center border rounded-[10px] typo-body2-normal px-5 py-[9px] text-label-normal"
					>
						{word}
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecommendTerms;
