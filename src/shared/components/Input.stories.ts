import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'lightGray',
			values: [
				{ name: 'lightGray', value: '#F7F7F8' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'example-input',
		name: 'example',
		value: '',
		onChange: (value: string) => console.log('Input changed:', value),
		placeholder: '내용을 입력해주세요',
	},
};

export const WithError: Story = {
	args: {
		id: 'error-input',
		name: 'errorInput',
		value: '',
		onChange: (value: string) => console.log('Input changed:', value),
		placeholder: '에러 있는 입력',
		errMsg: '필수 입력 항목입니다.',
	},
};

export const Disabled: Story = {
	args: {
		id: 'disabled-input',
		name: 'disabledInput',
		value: '입력 불가',
		onChange: () => {},
		isDisabled: true,
	},
};
