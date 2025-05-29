import React from 'react';
import PolicyContent from './PolicyContent';

const HuBoPolicy = () => {
	return (
		<section className="flex flex-col w-full max-w-maxw px-5 py-9 gap-6 items-center desktop:gap-10">
			<header className="flex flex-col items-center py-4 gap-3 desktop:py-9 desktop:gap-5">
				<h2 className="text-center typo-heading1 font-bold desktop:typo-display2">공약을 한눈에 비교</h2>
				<p className="text-center typo-body1-normal text-label-alternative desktop:typo-heading1 desktop:font-regular">
					핵심 정책을 카테고리별로 정리했어요.
					<br />
					복잡한 정치 공약, 쉽고 재미있게 비교해보세요.
				</p>
			</header>
			<PolicyContent />
		</section>
	);
};

export default HuBoPolicy;
