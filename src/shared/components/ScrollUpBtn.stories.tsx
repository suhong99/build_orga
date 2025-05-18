import type { Meta, StoryObj } from '@storybook/react';
import ScrollUpBtn from './ScrollUpBtn';

const meta: Meta<typeof ScrollUpBtn> = {
	title: 'Shared/button/ScrollUpBtn',
	component: ScrollUpBtn,
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className="relative w-20 h-20">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof ScrollUpBtn>;

export const Default: Story = {
	args: {},
};
