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
		billId: '0',
		aiTitle: 'AI 시대의 개인정보 보호 방안',
		committeeName: '과학기술정보방송통신위원회',
		representativeName: '홍길동',
		proposeDate: '2025.04.27',
		billHistoryStatus: '발의',
		viewCount: 1234,
		reactionCount: 56,
		commentCount: 12,
		scraped: true,
	},
};
