import Comment, { CommentType } from '@/shared/components/Comment';
import React from 'react';
import AddComment from './AddComment';

const COMMENT_LIST: CommentType[] = [
	{
		id: '1',
		img: '',
		nickname: '홍길동',
		date: '2025.05.18',
		isEdited: false,
		text: '좋은 정보 감사합니다!',
		likeNum: 3,
		isLiked: false,
		isWriter: false,
	},
	{
		id: '2',
		img: '',
		nickname: '개발하는놈놈',
		date: '2025.05.17',
		isEdited: true,
		text: '이 부분에 대해서는 저도 궁금했어요.',
		likeNum: 5,
		isLiked: true,
		isWriter: true,
	},
	{
		id: '3',
		img: '',
		nickname: '코딩쨩',
		date: '2025.05.16',
		isEdited: false,
		text: '댓글 남깁니다~',
		likeNum: 0,
		isLiked: false,
		isWriter: false,
	},
	{
		id: '4',
		img: '',
		nickname: '리액트매니아',
		date: '2025.05.16',
		isEdited: false,
		text: 'tailwind 반응형 너무 편해요!',
		likeNum: 2,
		isLiked: false,
		isWriter: false,
	},
	{
		id: '5',
		img: '',
		nickname: 'UIUX장인',
		date: '2025.05.15',
		isEdited: true,
		text: '디자인까지 완벽합니다 👏',
		likeNum: 7,
		isLiked: true,
		isWriter: false,
	},
];

const DetailCommentList = () => {
	//TODO: 댓글 호출

	return (
		<section className="flex flex-col w-full px-1 py-5 gap-[15px] desktop:px-12 desktop::py-8">
			<header className="flex typo-heading2 font-bold text-label-normal desktop:typo-heading1 gap-2">
				댓글 <p className="typo-heading2 desktop:typo-heading1 text-label-alternative">{COMMENT_LIST.length}</p>
			</header>
			<AddComment />
			<ul className="flex flex-col gap-[15px] desktop:gap-5">
				{COMMENT_LIST.map((comment) => {
					return <Comment key={comment.id} {...comment} />;
				})}
			</ul>
		</section>
	);
};

export default DetailCommentList;
