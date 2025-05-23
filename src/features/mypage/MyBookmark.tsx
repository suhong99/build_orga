import IssueCard from '@/shared/components/IssueCard';
import React from 'react';

const MyBookmark = () => {
	const arr = Array(10).fill(0);
	// TODO:
	return (
		<div className="grid grid-cols-1 @max-[768px]:grid-cols-2">
			{arr.map((e, i) => (
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
				/>
			))}
		</div>
	);
};

export default MyBookmark;
