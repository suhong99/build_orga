import { COMMITTEES } from '@/shared/const/committee';
import Image from 'next/image';
import { BillDetalProps } from './api';

const DetailTitle = ({
	title,
	date,
	committee,
	viewNum,
	bookmarkNum,
	commentNum,
}: Pick<BillDetalProps, 'title' | 'date' | 'committee' | 'viewNum' | 'bookmarkNum' | 'commentNum'>) => {
	//TODO:
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
		<header className="flex flex-col w-full  gap-5  px-1 desktop:pt-5 desktop:px-9">
			<div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-bg-gray text-[24px] desktop:w-[52px] desktop:h-[52px] desktop:text-[32px]">
				{COMMITTEES[committee].emoji}
			</div>
			<h1 className="typo-title2 font-bold text-label-normal desktop:typo-title1">{title}</h1>
			<div className="flex justify-between items-center">
				<div className="flex gap-2 typo-body2-normal font-regular text-label-alternative/61">
					<span>{date}</span>
					<span>•</span>
					{IconList.map((icon) => (
						<IconWithCount key={icon.src} src={icon.src} alt={icon.alt} nums={icon.nums} />
					))}
				</div>
				<div className="flex pt-1 gap-1 items-center">
					<Image src="/svgs/bookmark.svg" alt="북마크" width={18} height={18} className="py-0.5" />
					<span className="hidden desktop:block typo-body2-normal font-bold text-label-alternative/61">북마크</span>
				</div>
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
