import type { Meta, StoryObj } from '@storybook/react';
import SocialBtn from './SocialBtn';

const meta: Meta<typeof SocialBtn> = {
	title: 'shared/button/SocialBtn',
	component: SocialBtn,
	tags: ['autodocs'],
	argTypes: {
		type: {
			description: '소셜 로그인 버튼 종류',
			control: {
				type: 'radio',
				options: ['kakao', 'google'],
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof SocialBtn>;

// 카카오 로그인 버튼 스토리
export const Kakao: Story = {
	args: {
		type: 'kakao',
	},
};

// 구글 로그인 버튼 스토리
export const Google: Story = {
	args: {
		type: 'google',
	},
};
