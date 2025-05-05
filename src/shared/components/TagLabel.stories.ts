import { Meta, StoryObj } from '@storybook/react';
import TagLabel from './TagLabel';
import { CommitteeName } from '../const/committee';

// CommitteeName 타입에 대한 값들
const committeeNameValues: CommitteeName[] = [
	'외교통일위원회',
	'문화체육관광위원회',
	'보건복지위원회',
	'환경노동위원회',
	'국토교통위원회',
	'교육위원회',
	'과학기술정보방송통신위원회',
	'농림축산식품해양수산위원회',
	'기획재정위원회',
	'정무위원회',
	'행정안전위원회',
	'산업통상자원중소벤처기업위원회',
	'국방위원회',
	'법제사법위원회',
	'국회운영위원회',
	'정보위원회',
	'예산결산특별위원회',
	'여성가족위원회',
	'기타',
];

export default {
	title: 'shared/TagLabel',
	component: TagLabel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		type: 'committee',
	},
	argTypes: {
		type: {
			table: {
				disable: true,
			},
			control: false,
		},
		text: {
			control: 'select',
			options: committeeNameValues,
		},
	},
} satisfies Meta<typeof TagLabel>;

type Story = StoryObj<typeof TagLabel>;

// 'committee'일 때 CommitteeName 값만 들어가도록
export const CommitteeTag: Story = {
	args: {
		type: 'committee',
		text: '외교통일위원회',
	},
	parameters: {
		argTypes: {
			text: {
				control: 'select',
				options: committeeNameValues,
			},
		},
	},
};
