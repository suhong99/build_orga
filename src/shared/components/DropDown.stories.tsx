import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './DropDown';

const meta = {
	title: 'shared/Dropdown',
	component: Dropdown,
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
		docs: {
			docs: {
				story: {
					height: '700px',
				},
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
	args: {
		label: '최신순', // 기본값
		about: '정렬',
		children: (close: () => void) => (
			<div className="flex flex-col w-[300px] justify-center items-center">
				<div
					className="py-3 typo-body1-normal font-regular cursor-pointer desktop:w-[305px] desktop:px-[12px] desktop:rounded-[12px] bg-[#f6f6f6]"
					onClick={() => {
						console.log('최신순 선택됨');
						close(); // 선택 후 드롭다운 닫기
					}}
				>
					최신순
				</div>
				<div
					className="py-3 typo-body1-normal font-regular cursor-pointer desktop:w-[305px] desktop:px-[12px] desktop:rounded-[12px]"
					onClick={() => {
						console.log('조회순 선택됨');
						close(); // 선택 후 드롭다운 닫기
					}}
				>
					조회순
				</div>
				<button className="cursor-pointer desktop:hidden" onClick={close}>
					닫기
				</button>
			</div>
		),
	},
};
