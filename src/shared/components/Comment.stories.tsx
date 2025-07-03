import type { Meta, StoryObj } from '@storybook/react';
import Comment, { CommentType } from './Comment';

const meta: Meta<typeof Comment> = {
	title: 'Shared/Comment',
	component: Comment,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Comment>;

const defaultProps: CommentType = {
	commentId: 1,
	profileImage: '',
	nickname: '흐음이',
	daysAgo: '오늘',
	isEdited: true,
	content: `이 댓글은 예시입니다. 아주 긴 텍스트가 포함되어 줄바꿈도 확인할 수 있습니다.\n이렇게 줄을 바꿔도 보여야 하고, 만약에 긴단어가 있다면: abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz도 잘 잘려야 합니다.`,
	likeCount: 5,
	isLiked: true,
	isWriter: true,
	editFn: () => {
		console.log('댓글 수정');
	},
	deleteFn: () => {
		console.log('댓글 삭제');
	},
	reportFn: () => {
		console.log('댓글 신고');
	},
};

export const Default: Story = {
	args: {
		...defaultProps,
	},
};

export const UnLiked: Story = {
	args: {
		...defaultProps,
		isLiked: false,
		likeCount: 0,
		isWriter: false,
	},
	decorators: [
		(Story) => (
			<div className="w-200	">
				<Story />
			</div>
		),
	],
};

export const LongText: Story = {
	args: {
		...defaultProps,
		content:
			'이것은 아주아주 긴 댓글입니다. 사용자가 실제로 작성할 수 있는 다양한 길이의 문장을 포함하고 있으며, 줄바꿈도\n있고\n긴 단어도 있습니다.\n\n이런 경우에도 UI가 잘 동작해야 하며 줄바꿈, 말 줄임, 스크롤 등이 올바르게 처리되어야 합니다.',
	},
	decorators: [
		(Story) => (
			<div className="w-200">
				<Story />
			</div>
		),
	],
};
