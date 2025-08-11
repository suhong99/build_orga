'use client';

import { SERVICE_TERM_DATELIST, TERM_WRITTEN_DATE, SERVICE_TERMS, PLAIN_TEXT_STYLE } from '@/features/policy/const';
import DateDropDown from '@/features/policy/DateDropDown';
import { formatDateToKorean } from '@/shared/util';
import { useState } from 'react';

export default function ServicePage() {
	const [selectedDate, setSelectedDate] = useState<TERM_WRITTEN_DATE>(SERVICE_TERM_DATELIST[0]);

	return (
		<div className="flex flex-col max-w-desktop mx-auto px-6 py-8 gap-6 desktop:px-9 desktop:gap-9 desktop:mt-12 desktop:mb-30">
			<div className="flex flex-col desktop:py-5  gap-5">
				<h1 className="typo-title2 font-bold text-label-normal desktop:typo-title1">서비스 이용약관</h1>

				<DateDropDown label={selectedDate} about="서비스 이용약관 날짜 선택">
					{(close) => (
						<ul className="flex flex-col gap-2 max-h-60 overflow-auto">
							{SERVICE_TERM_DATELIST.map((date) => (
								<li
									key={date}
									className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-100`}
									onClick={() => {
										setSelectedDate(date);
										close();
									}}
									role="option"
									aria-selected={date === selectedDate}
								>
									{date}
								</li>
							))}
						</ul>
					)}
				</DateDropDown>
			</div>

			{SERVICE_TERMS[selectedDate].map(({ title, content }, i) => (
				<section key={i + selectedDate} className="flex flex-col gap-3">
					<h3 className="typo-heading2 font-bold text-label-normal">
						제 {i + 1}조 {title}
					</h3>
					{content}
				</section>
			))}
			<section className="flex flex-col gap-3">
				<h3 className="typo-heading2 font-bold text-label-normal">부칙</h3>
				<p className={PLAIN_TEXT_STYLE}>본 약관은 {formatDateToKorean(selectedDate)}부터 적용됩니다.</p>
			</section>
			<section className="flex flex-col gap-3">
				<h3 className="typo-heading2 font-bold text-label-normal">개정일</h3>
				<p className={PLAIN_TEXT_STYLE}>{selectedDate}</p>
			</section>
		</div>
	);
}
