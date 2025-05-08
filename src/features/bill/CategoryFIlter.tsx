'use client';

import Dropdown from '@/shared/components/DropDown';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { KEYWORD, KEYWORD_LIST } from '@/shared/const/committee';
import useUpdateQueryParam from '@/shared/hooks/useUpdateQueryParam';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import KeywordBtn from '@/shared/components/KeywordBtn';
import Image from 'next/image';

const CategoryFilter = () => {
	const updateQueryParam = useUpdateQueryParam();
	const searchParams = useSearchParams();
	const keywordParam = searchParams.get('keywords');

	const [selected, setSelected] = useState<KEYWORD[]>([]);
	const [label, setLabel] = useState<string>('전체');

	// URL의 keywords 파라미터 반영
	useEffect(() => {
		if (keywordParam) {
			const initialKeywords = keywordParam.split(',').filter((kw) => KEYWORD_LIST.includes(kw as KEYWORD));
			setSelected(initialKeywords as KEYWORD[]);
		}
	}, [keywordParam]);

	const toggleKeyword = (keyword: KEYWORD) => {
		setSelected((prev) => (prev.includes(keyword) ? prev.filter((k) => k !== keyword) : [...prev, keyword]));
	};

	const handleApply = (close: () => void) => {
		if (selected.length > 0) {
			updateQueryParam('keywords', selected.join(','));
			setLabel(selected.length === 1 ? selected[0] : `${selected[0]} 외 ${selected.length - 1}개`);
		} else {
			updateQueryParam('keywords', null);
			setLabel('전체'); // 선택된 항목이 없으면 '전체'로 설정
		}
		close();
	};

	const handleReset = () => {
		setSelected([]);
		setLabel('전체');
	};

	return (
		// 스크롤바 유무에 따라 페딩 영향 받음
		<Dropdown label={label} about="키워드" className="pr-1">
			{(close) => (
				<div className="flex flex-col relative w-full h-[430px] desktop:h-[400px] desktop:w-[320px] desktop:py-3 justify-center desktop:items-center">
					<div className="flex flex-wrap gap-3 overflow-y-auto h-full w-full content-baseline items-baseline pb-12 custom-scrollbar">
						{KEYWORD_LIST.map((keyword) => (
							<KeywordBtn key={keyword} keyword={keyword} onClick={() => toggleKeyword(keyword)} isSelected={selected.includes(keyword)} />
						))}
					</div>
					<div className="absolute bottom-0 w-full  flex flex-1 justify-center desktop:justify-between gap-4 desktop:gap-0 bg-primary-sub-normal p-2 ">
						<button className="flex gap-1 typo-label2 font-bold cursor-pointer text-label-alternative items-center " onClick={handleReset}>
							초기화
							<Image src="/svgs/reset.svg" alt="리셋" width={14} height={14} />
						</button>
						<SolidBtn label="적용하기" onClick={() => handleApply(close)} isFull />
					</div>
				</div>
			)}
		</Dropdown>
	);
};

export default CategoryFilter;
