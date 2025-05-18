import type { Meta, StoryObj } from '@storybook/react';
import ShareButton from './ShareBtn';

const meta: Meta<typeof ShareButton> = {
	title: 'Shared/button/SharedBtn',
	component: ShareButton,
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof ShareButton>;

export const Default: Story = {
	args: {},
};
