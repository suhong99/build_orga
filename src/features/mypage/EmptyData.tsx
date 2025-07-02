import { UserCategory } from './const/user';
import Image from 'next/image';

const EmptyData = ({ category }: { category: UserCategory }) => {
	const CATEGORY_MAP: Record<UserCategory, { title: string; text: string; img: string }> = {
		북마크: { title: '아직 저장한 법안이 없어요', text: '관심있는 법안을 저장하고 언제든 꺼내보세요', img: '/images/no-bookmark.png' },
		의견: { title: '아직 표시한 의견이 없어요.', text: '법안에 대한 나의 생각을 표현해보세요', img: '/images/no-opinion.png' },
		댓글: { title: '아직 작성한 댓글이 없어요', text: '관심 있는 법안에 댓글을 남겨 의견을 공유해보세요', img: '/images/no-comment.png' },
	};

	const { title, text, img } = CATEGORY_MAP[category];

	return (
		<div className="flex flex-col py-15 items-center gap-2">
			<div className="relative w-[128px] desktop:w-[256px] aspect-square">
				<Image
					src={img}
					alt={category + ' 없음'}
					draggable={false}
					fill
					sizes="(min-width: 960px) 256px, 128px"
					priority
					className="object-contain"
				/>
			</div>
			<h2 className="typo-heading2 font-bold text-label-normal text-center desktop:typo-title3 ">{title}</h2>
			<p className="text-label-normal typo-body1-normal font-regular text-center desktop:typo-heading2">{text} </p>
		</div>
	);
};

export default EmptyData;
