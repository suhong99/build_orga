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
					id={'1'}
					title={'AI 시대의 개인정보 보호 방안'}
					committee={'외교통일위원회'}
					name={'홍길동'}
					date={'2025.04.27'}
					state={'발의/소관위원회 심사'}
					keywordList={['AI', '개인정보', '보안']}
					viewNum={0}
					bookmarkNum={0}
					commentNum={0}
					isBookMarked={true}
				/>
			))}
		</div>
	);
};

export default MyBookmark;
