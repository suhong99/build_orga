import IssueCard from '@/shared/components/IssueCard';
import React from 'react';

const MyBookmark = () => {
	// TODO:
	const arr = Array(10).fill(0);
	return (
		<div className="grid grid-cols-1 gap-6 @min-[768px]:grid-cols-2 ">
			{arr.map((_, i) => (
				<IssueCard
					key={i}
					billId={'1'}
					aiTitle={'AI 시대의 개인정보 보호 방안'}
					committeeName={'외교통일위원회'}
					representativeName={'홍길동'}
					proposeDate={'2025.04.27'}
					billHistoryStatus={'발의/소관위원회 심사'}
					viewCount={0}
					reactionCount={0}
					commentCount={0}
					scraped={true}
				/>
			))}
		</div>
	);
};

export default MyBookmark;
