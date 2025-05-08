import type { Meta, StoryObj } from '@storybook/react';
import KeywordBtn from './KeywordBtn';

const meta = {
	title: 'shared/KeywordBtn',
	component: KeywordBtn,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof KeywordBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
	args: {
		keyword: '해외',
		isSelected: true,
		onClick: () => console.log('Keyword clicked'),
	},
};

export const NotSelected: Story = {
	args: {
		keyword: '세금',
		isSelected: false,
		onClick: () => console.log('Keyword clicked'),
	},
};
