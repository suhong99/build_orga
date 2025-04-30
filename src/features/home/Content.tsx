import IssueCard, { IssueCardProps } from '@/shared/components/IssueCard';
import React, { ReactElement } from 'react';
import ContentHeader from './ContentHeader';
import { SolidBtn } from '@/shared/components/SolidBtn';

type ContentProps = {
	children: ReactElement<typeof ContentHeader>;
};

const data: IssueCardProps[] = [
	{
		title: '정부의 디지털 혁신 정책 발표 정부의 디지털 혁신 정책 발표정부의 디지털 혁신 정책 발표정부의 디지털 혁신 정책 발표',
		committee: '여성가족위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '진행중',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
	},
	{
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '진행중',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
	},
	{
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '진행중',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
	},
	{
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '진행중',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
	},
	{
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '진행중',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
	},
	{
		title: '정부의 디지털 혁신 정책 발표',
		committee: '과학기술정보방송통신위원회',
		name: '김지민',
		date: '2025.04.17',
		state: '진행중',
		keywordList: ['디지털', '혁신', '정책'],
		viewNum: 10200,
		bookmarkNum: 150,
		commentNum: 45,
	},
];

const Content = ({ children }: ContentProps) => {
	return (
		<section className="w-full flex flex-col gap-5 max-w-maxw">
			{children}
			<div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5">
				{data.map((issue, i) => {
					return <IssueCard key={issue.title + i} {...issue} />;
				})}
			</div>
			<div className="flex justify-center desktop:hidden">
				<SolidBtn primary={false} label={'더보기'} />
			</div>
		</section>
	);
};

export default Content;
