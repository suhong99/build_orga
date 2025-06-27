import { COMMITTEES } from '@/shared/const/committee';
import Image from 'next/image';
import { BillDetalProps } from './api';
import BookmarkBtn from './BookmarkBtn';

const DetailTitle = ({
	id,
	billAiTitle,
	proposeDate,
	committeeName,
	viewCount,
	reactionCount,
	commentCount,
	scrapped,
}: Pick<BillDetalProps, 'id' | 'billAiTitle' | 'proposeDate' | 'committeeName' | 'viewCount' | 'reactionCount' | 'commentCount' | 'scrapped'>) => {
	//TODO:
	const IconList = [
		{
			src: '/svgs/eye.svg',
			alt: '조회수',
			nums: viewCount,
		},
		{
			src: '/svgs/fire.svg',
			alt: '반응수',
			nums: reactionCount,
		},
		{
			src: '/svgs/comment.svg',
			alt: '댓글수',
			nums: commentCount,
		},
	] as const;

	return (
		<header className="flex flex-col w-full  gap-5  px-1 desktop:pt-5 desktop:px-9">
			<div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-bg-gray text-[24px] desktop:w-[52px] desktop:h-[52px] desktop:text-[32px]">
				{COMMITTEES[committeeName].emoji}
			</div>
			<h1 className="typo-title2 font-bold text-label-normal desktop:typo-title1">{billAiTitle}</h1>
			<div className="flex justify-between items-center">
				<div className="flex gap-2 typo-body2-normal font-regular text-label-alternative/61">
					<span>{proposeDate}</span>
					<span>•</span>
					{IconList.map((icon) => (
						<IconWithCount key={icon.src} src={icon.src} alt={icon.alt} nums={icon.nums} />
					))}
				</div>
				<BookmarkBtn id={id} isScrapped={scrapped} />
			</div>
		</header>
	);
};

export default DetailTitle;

export const IconWithCount = ({ src, alt, nums }: { src: string; alt: string; nums: number }) => {
	return (
		<div className="flex items-center gap-1">
			<Image src={src} alt={alt} width={16} height={16} />
			<span className="typo-body2-normal font-regular text-label-alternative/61" aria-label={alt}>
				{nums}
			</span>
		</div>
	);
};
