// IssueCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import IssueCard from './IssueCard';

const meta = {
	title: 'shared/IssueCard',
	component: IssueCard,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'lightGray',
			values: [
				{ name: 'lightGray', value: '#F7F7F8' },
				{ name: 'white', value: '#ffffff' }, // 흰색 배경
			],
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof IssueCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'AI 시대의 개인정보 보호 방안',
		committee: '과학기술정보방송통신위원회',
		name: '홍길동',
		date: '2025.04.27',
		state: '발의',
		keywordList: ['AI', '개인정보', '보안'],
		viewNum: 1234,
		bookmarkNum: 56,
		commentNum: 12,
	},
};
