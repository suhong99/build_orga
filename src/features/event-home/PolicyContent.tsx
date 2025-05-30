'use client';

import { useState } from 'react';
import { EventPerson } from '../event/const/data';
import { EVENT_HOME_CARD_DATA, PolicyCategory } from './const/data';
import Image from 'next/image';
import PolicyItem from './PolicyItem';

const PolicyContent = () => {
	const HUBO: EventPerson[] = ['이재명', '김문수', '이준석'];
	const [categoryList, setCategoryList] = useState<PolicyCategory[]>([]);
	const CATEGORY: PolicyCategory[] = ['정치·행정', '경제', '교육', '외교·안보', '복지·사회'];
	const [mobileHubo, setMobileHubo] = useState<EventPerson>('이재명');
	const toggleCategory = (category: PolicyCategory) => {
		setCategoryList((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]));
	};

	// 단일 선택
	const selectHubo = (hubo: EventPerson) => {
		setMobileHubo(hubo);
	};

	const PARTY_LABEL_COLOR = {
		이재명: 'text-[#0066FF] bg-[#0066FF]/9',
		김문수: 'text-[#FF0A0A] bg-[#FF0A0A]/9',
		이준석: 'text-[#FF9200] bg-[#FF9200]/9',
	};
	return (
		<>
			<div className="w-full overflow-x-auto">
				<div className="flex flex-nowrap min-[550px]:justify-center gap-5 ">
					<CategoryBtn text="전체" isSelected={categoryList.length === 0} clickFn={() => setCategoryList([])} />
					{CATEGORY.map((category) => {
						const isSelected = categoryList.includes(category);
						return <CategoryBtn key={category} text={category} isSelected={isSelected} clickFn={() => toggleCategory(category)} />;
					})}
				</div>
			</div>

			<div className="desktop:hidden flex justify-center gap-3.5">
				{HUBO.map((hubo) => (
					<HuboBtn key={hubo} text={hubo} isSelected={mobileHubo === hubo} clickFn={() => selectHubo(hubo)} />
				))}
			</div>
			<div className="w-full grid grid-cols-3 gap-15 max-desktop:hidden">
				{HUBO.map((name) => (
					<div
						key={name + '이름들'}
						className="flex w-full h-[116px] justify-center items-center px-5 py-4 gap-8 border border-line-alternative rounded-[12px] "
					>
						<div className="w-[76px] h-[76px] overflow-hidden border border-line-normal rounded-full">
							<Image src={`/images/event/${name}.png`} alt="후보사진" width={90} height={90} />
						</div>
						<div className="flex gap-x-1.5 items-center">
							<span className="typo-heading2 font-bold">{name}</span>
							<span className={`flex items-center justify-center px-1.5 h-5 typo-caption2 rounded-[6px] ${PARTY_LABEL_COLOR[name]}`}>
								{EVENT_HOME_CARD_DATA[name].party}
							</span>
						</div>
					</div>
				))}
				{(categoryList.length > 0 ? categoryList : CATEGORY).map((category) =>
					HUBO.map((name) => <PolicyItem key={name + category + '카테고리별 내용'} name={name} category={category} />),
				)}
			</div>
			<div className="flex flex-col items-center w-full desktop:hidden">
				{(categoryList.length > 0 ? categoryList : CATEGORY).map((category) => (
					<PolicyItem key={mobileHubo + category} name={mobileHubo} category={category} />
				))}
			</div>
		</>
	);
};

export default PolicyContent;

interface btnProps {
	text: string;
	isSelected: boolean;
	clickFn: () => void;
}

const CategoryBtn = ({ text, isSelected, clickFn }: btnProps) => {
	const btnClass = isSelected ? 'text-white bg-[#6541F2] border-#6541F2' : 'text-label-alternative border-label-alternative';
	return (
		<button onClick={clickFn} className={`text-center rounded-[10px] pl-3 pr-2.5 py-[9px] border-1 typo-body2-normal whitespace-nowrap ${btnClass}`}>
			{text}
		</button>
	);
};

const HuboBtn = ({ text, isSelected, clickFn }: btnProps) => {
	const btnClass = isSelected ? 'text-white bg-[#17BF89] border-#17BF89' : 'text-label-alternative border-label-alternative';
	return (
		<button onClick={clickFn} className={`text-center rounded-[10px] pl-3 pr-2.5 py-[9px] border-1 typo-body2-normal ${btnClass}`}>
			{text}
		</button>
	);
};
