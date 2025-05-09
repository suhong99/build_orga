import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		layout: 'fullscreen',
		backgrounds: {
			default: 'lightGray',
			values: [
				{ name: 'lightGray', value: '#F7F7F8' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div className="flex flex-col justify-center items-center w-full h-full gap-4">
				<p className="text-lg">모달 내용입니다</p>
				<button onClick={() => console.log('확인 클릭')} className="px-4 py-2 border cursor-pointer rounded">
					확인
				</button>
			</div>
		),
	},
};
