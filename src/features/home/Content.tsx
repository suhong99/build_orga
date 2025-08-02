import IssueCard, { IssueCardProps } from '@/shared/components/IssueCard';
import React, { ReactElement } from 'react';
import ContentHeader from './ContentHeader';
import { SolidBtn } from '@/shared/components/SolidBtn';
import Link from 'next/link';

interface ContentProps {
	children: ReactElement<typeof ContentHeader>;
	data: IssueCardProps[];
	link: string;
}

const Content = ({ children, data, link }: ContentProps) => {
	return (
		<section className="w-full flex flex-col gap-5 max-w-maxw">
			{children}
			<div className="grid  grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5">
				{data.map((issue) => {
					return <IssueCard key={issue.billId} {...issue} />;
				})}
			</div>
			<div className="flex justify-center desktop:hidden">
				<Link href={link}>
					<SolidBtn primary={false} label={'더보기'} />
				</Link>
			</div>
		</section>
	);
};

export default Content;
