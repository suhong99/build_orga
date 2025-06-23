export type BillStatus = '접수' | '발의/소관위원회 심사' | '법제사법위원회심사' | '본회의 심의' | '공포' | '기각';

export const BILL_STATUS_STEP: Record<BillStatus, { step: number; label: string }> = {
	접수: {
		step: 0,
		label: '제안된 법안을 담당 상임위원회에 보냈어요.',
	},
	'발의/소관위원회 심사': {
		step: 1,
		label: '제안된 법안을 담당 상임위원회에 보냈어요.',
	},
	법제사법위원회심사: {
		step: 2,
		label: '법사위에서 회의에서 법안을 심사할 준비를 하고 있어요.',
	},
	'본회의 심의': {
		step: 3,
		label: '국회의원이 모여 법안에 대한 심의를 하고 있어요.',
	},
	공포: {
		step: 4,
		label: '공포되어 시행을 앞두고 있어요',
	},
	기각: {
		step: 5,
		label: '법안이 기각되었습니다.',
	},
};
