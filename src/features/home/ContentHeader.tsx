import React from 'react';
import Image from 'next/image';
import { NonEmptyArray } from '@/shared/types/util';

type ContentHeaderProps = {
	title: string;
	link: string;
	keywordList?: NonEmptyArray<string>;
	isLoginRequired?: boolean;
};

const ContentHeader = ({ title, link, keywordList, isLoginRequired }: ContentHeaderProps) => {
	console.log(link);
	return (
		<div className="flex justify-center  desktop:justify-between items-center w-full h-[56px] desktop:h-[38px] desktop:gap-[10px] p-0">
			<h2 className="flex flex-col items-center desktop:flex-row typo-heading1 desktop:typo-title2 font-bold gap-2 flex-wrap text-center">
				{title}
				{keywordList && (
					<span className="flex gap-2 text-primary-main-normal">
						{keywordList.map((keyword) => (
							<span key={keyword}>#{keyword}</span>
						))}
					</span>
				)}
				{isLoginRequired && (
					<span className="typo-body1-normal font-regular desktop:typo-title2 desktop:font-bold text-label-alternative opacity-[61%]">
						로그인하고 관심 키워드를 골라보세요
					</span>
				)}
			</h2>
			<button className="hidden  desktop:flex typo-body1-normal text-label-alternative opacity-[61%] font-bold">
				더보기 &nbsp; <Image src="/svgs/right.svg" alt="오른화살표" width="8" height="8" />
			</button>
		</div>
	);
};

export default ContentHeader;
