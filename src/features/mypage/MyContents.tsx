'use client';

import { useState } from 'react';
import { UserCategory } from './const/user';
import MyBookmark from './MyBookmark';
import MyOpinion from './MyOpinion';
import MyComment from './MyComment';

const COMPONENT_MAP = {
	북마크: <MyBookmark />,
	의견: <MyOpinion />,
	댓글: <MyComment />,
};

const MyContents = () => {
	const [curTab, setCurTab] = useState<UserCategory>('북마크');
	const TAB_LIST: UserCategory[] = ['북마크', '의견', '댓글'];
	const TAB_COUNT: Record<UserCategory, number> = {
		북마크: 100,
		의견: 2000,
		댓글: 50,
	};

	return (
		<div className="flex flex-col w-full gab-6">
			<div className="flex h-12 gap-6 px-5 desktop:px-6">
				{TAB_LIST.map((tab) => (
					<Tab key={tab} label={tab} count={TAB_COUNT[tab]} isSelected={curTab === tab} onSelect={() => setCurTab(tab)} />
				))}
			</div>
			<div className="flex px-5 desktop:px-6 max-desktop:bg-bg-gray @container">{COMPONENT_MAP[curTab]}</div>
		</div>
	);
};

export default MyContents;

interface TabProps {
	label: UserCategory;
	isSelected: boolean;
	count: number;
	onSelect: () => void;
}

const Tab = ({ label, count, isSelected, onSelect }: TabProps) => {
	return (
		<button
			disabled={isSelected}
			onClick={onSelect}
			className="flex flex-col items-center justify-center relative min-w-[67px] disabled:cursor-none desktop:title-3"
		>
			<span className={`typo-headline2 font-bold ${isSelected ? 'text-label-strong font-bold' : 'text-label-assistive'}`}>
				{label} {count}
			</span>
			{isSelected && <div className="absolute bottom-0 w-full h-0.5 bg-label-strong" />}
		</button>
	);
};
