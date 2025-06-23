import IssueCard, { IssueCardProps } from '@/shared/components/IssueCard';
import React, { ReactElement } from 'react';
import ContentHeader from './ContentHeader';
import { SolidBtn } from '@/shared/components/SolidBtn';

interface ContentProps {
	children: ReactElement<typeof ContentHeader>;
	data: IssueCardProps[];
}

const Content = ({ children, data }: ContentProps) => {
	return (
		<section className="w-full flex flex-col gap-5 max-w-maxw">
			{children}
			<div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5">
				{data.map((issue) => {
					return <IssueCard key={issue.billId} {...issue} />;
				})}
			</div>
			<div className="flex justify-center desktop:hidden">
				<SolidBtn primary={false} label={'더보기'} />
			</div>
		</section>
	);
};

export default Content;
