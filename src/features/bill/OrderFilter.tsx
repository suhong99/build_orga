'use client';

import { useState, useEffect } from 'react';
import Dropdown from '@/shared/components/DropDown';
import useUpdateQueryParam from '@/shared/hooks/useUpdateQueryParam';
import CheckIcon from '@/shared/icon/Check';

const OrderFilter = () => {
	const [selected, setSelected] = useState('최신순');
	const updateQueryParam = useUpdateQueryParam();

	// URL에 쿼리가 없으면 '최신순'을 기본값으로 설정
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const querySearch = urlSearchParams.get('order') || '최신순';
		setSelected(querySearch);
	}, []);

	const handleSelect = (value: string) => {
		setSelected(value);
		updateQueryParam('order', value); // URL에 쿼리 파라미터 업데이트
	};

	return (
		<Dropdown label={selected} about="정렬">
			{(close) => (
				<div className="flex flex-col w-full desktop:w-[300px] gap-1 justify-center desktop:items-center">
					<DropdownItem
						value="최신순"
						selected={selected}
						onSelect={(value) => {
							handleSelect(value);
							close();
						}}
					/>
					<DropdownItem
						value="조회순"
						selected={selected}
						onSelect={(value) => {
							handleSelect(value);
							close();
						}}
					/>
				</div>
			)}
		</Dropdown>
	);
};

export default OrderFilter;

const DropdownItem = ({ value, selected, onSelect }: { value: string; selected: string; onSelect: (value: string) => void }) => (
	<button
		className={`flex  py-3 typo-body1-normal font-regular cursor-pointer desktop:w-[305px] gap-2 px-5 desktop:px-3 desktop:rounded-[12px] desktop:text-black ${selected === value ? 'text-primary-main-normal desktop:bg-[#f6f6f6] ' : ''}`}
		onClick={() => onSelect(value)}
	>
		{selected === value ? <CheckIcon className="desktop:hidden" /> : <div className="desktop:hidden w-6"></div>}
		{value}
	</button>
);
