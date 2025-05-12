export const CLIENT_NAVI_PATH = {
	home: { name: '홈', path: '/' },
	guide: { name: '정치 입문서', path: '/guide' },
	bill: { name: '법안 피드', path: '/bill' },
	person: { name: '정치인 피드', path: '/person' },
	mypage: { name: '마이페이지', path: '/mypage' },
} as const;

const NAVIBAR_VALUES = ['guide', 'bill', 'person'] as const;

export const NAVIBAR_PATH = NAVIBAR_VALUES.map((key) => CLIENT_NAVI_PATH[key]);
