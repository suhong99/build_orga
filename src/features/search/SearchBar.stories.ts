import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta = {
	title: 'shared/SearchBar',
	component: SearchBar,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		layout: 'centered',
		backgrounds: {
			default: 'lightGray',
			values: [
				{ name: 'lightGray', value: '#F7F7F8' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
