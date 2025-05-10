'use client';

import KeywordBtn from '@/shared/components/KeywordBtn';
import { Keyword, KEYWORD_LIST } from '@/shared/const/committee';
import React, { Dispatch, SetStateAction } from 'react';

interface KeywordsProps<T> {
	keywords: T[];
	setKeywords: Dispatch<SetStateAction<T[]>>;
}

const MAX_KEYWORDS = 5;

const Keywords = ({ keywords, setKeywords }: KeywordsProps<Keyword>) => {
	const toggleKeyword = (keyword: Keyword) => {
		const isSelected = keywords.includes(keyword);

		if (isSelected) {
			setKeywords(keywords.filter((k) => k !== keyword));
		} else if (keywords.length < MAX_KEYWORDS) {
			setKeywords([...keywords, keyword]);
		}
	};

	return (
		<section className="flex flex-col w-full gap-[5px]">
			<p className="typo-caption1 text-interaction-inactive font-bold">
				관심 키워드를 1개 이상 선택해주세요 <span className={keywords.length > 0 ? 'text-accent-bg-violet' : ''}>{keywords.length}/5</span>
			</p>
			<div className="flex flex-wrap gap-3 overflow-y-auto w-full content-baseline items-baseline">
				{KEYWORD_LIST.map((keyword) => (
					<KeywordBtn key={keyword} keyword={keyword} isSelected={keywords.includes(keyword)} onClick={() => toggleKeyword(keyword)} />
				))}
			</div>
		</section>
	);
};

export default Keywords;
