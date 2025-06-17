'use client';

import Image from 'next/image';
import { CommitteeName, COMMITTEES } from '../const/committee';
import TagLabel from './TagLabel';
import { BillStatus } from '../const/bill';
import Link from 'next/link';
import { CLIENT_NAVI_PATH } from '../const/url';
import { useState } from 'react';
import BookmarkIcon from '../icon/Bookmark';

export interface IssueCardProps {
	/**이슈 아이디 */
	id: string;
	/** 카드 제목 */
	title: string;
	/** 소속 위원회 */
	committee: CommitteeName;
	/** 발의자 이름 */
	name: string;
	/** 발의 날짜 (YYYY.MM.DD 형태) */
	date: string;
	/** 현재 상태 */
	state: BillStatus;
	/** 관련 키워드 목록 */
	keywordList: string[];
	/** 조회수 */
	viewNum: number;
	/** 북마크 수 */
	bookmarkNum: number;
	/** 댓글 수 */
	commentNum: number;
	/** 북마크 여부 */
	isBookMarked: boolean;
}

const IssueCard = ({ id, title, committee, name, date, state, viewNum, bookmarkNum, commentNum, isBookMarked }: IssueCardProps) => {
	const [isChecked, setIsChecked] = useState(isBookMarked);
	const IconList = [
		{
			src: '/svgs/eye.svg',
			alt: '조회수',
			nums: viewNum,
		},
		{
			src: '/svgs/fire.svg',
			alt: '북마크수',
			nums: bookmarkNum,
		},
		{
			src: '/svgs/comment.svg',
			alt: '댓글수',
			nums: commentNum,
		},
	] as const;

	return (
		<article className="flex flex-col rounded-[12px] px-5 pt-5 pb-3 gap-2.5 bg-bg-white desktop:gap-3 desktop:pl-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
			<Link href={CLIENT_NAVI_PATH.billDetail.getPath(id)}>
				<header className="flex justify-between gap-2 h-21">
					<div className="flex flex-1 flex-col gap-1.5">
						<h3 className="typo-heading1 font-bold text-ellipsis line-clamp-2" title={title}>
							{title}
						</h3>
						<div className="flex gap-2.5 typo-label2 desktop:typo-label1-normal text-label-alternative font-regular">
							<div>{name}</div>
							<div>{date}</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-bg-gray text-2xl desktop:text-[32px]">
						{COMMITTEES[committee].emoji}
					</div>
				</header>
			</Link>
			<section className="flex gap-2">
				<TagLabel type="status" text={state}></TagLabel>
				<TagLabel type="committee" text={committee}></TagLabel>
			</section>
			<footer className="flex justify-between">
				<div className="flex gap-2">
					{IconList.map((icon) => (
						<IconWithCount key={icon.src} src={icon.src} alt={icon.alt} nums={icon.nums} />
					))}
				</div>
				<button
					className="py-0.5"
					onClick={(e) => {
						e.stopPropagation(); // Link로의 클릭 전파 방지
						setIsChecked((prev) => !prev);
					}}
				>
					<BookmarkIcon isChecked={isChecked} />
				</button>
			</footer>
		</article>
	);
};

export default IssueCard;

export const IconWithCount = ({ src, alt, nums }: { src: string; alt: string; nums: number }) => {
	return (
		<div className="flex items-center gap-1">
			<Image src={src} alt={alt} width={14} height={14} draggable={false} />
			<span className="typo-label2 font-regular text-label-alternative opacity-[61%]" aria-label={alt}>
				{nums}
			</span>
		</div>
	);
};
