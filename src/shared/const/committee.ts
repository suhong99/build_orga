interface CommitteeInfo {
	emoji: string;
	keywordList: string[];
}

// 위원회 이름 유니언 타입 정의
export type CommitteeName =
	| '외교통일위원회'
	| '문화체육관광위원회'
	| '보건복지위원회'
	| '환경노동위원회'
	| '국토교통위원회'
	| '교육위원회'
	| '과학기술정보방송통신위원회'
	| '농림축산식품해양수산위원회'
	| '기획재정위원회'
	| '정무위원회'
	| '행정안전위원회'
	| '산업통상자원중소벤처기업위원회'
	| '국방위원회'
	| '법제사법위원회'
	| '국회운영위원회'
	| '정보위원회'
	| '예산결산특별위원회'
	| '여성가족위원회'
	| '기타';

// 키워드 맵
export const KEYWORD_LIST = [
	'해외',
	'문화예술',
	'미디어',
	'스포츠',
	'의료',
	'자연',
	'근로',
	'부동산',
	'건축/도시',
	'철도/항공',
	'학교',
	'과학기술/IT',
	'농수산물',
	'경제',
	'세금',
	'금융',
	'재난/안전',
	'선거',
	'무역',
	'창업',
	'자원에너지',
	'국방',
	'재판',
	'정치',
	'가정/아동청소년',
	'성평등',
] as const;

export type KEYWORD = (typeof KEYWORD_LIST)[number];

// 위원회 정보
export const COMMITTEES: Record<CommitteeName, CommitteeInfo> = {
	외교통일위원회: {
		emoji: '🌐',
		keywordList: ['외교', '통일', '해외'],
	},
	문화체육관광위원회: {
		emoji: '🎨',
		keywordList: ['문화예술', '관광', '미디어', '스포츠'],
	},
	보건복지위원회: {
		emoji: '💊',
		keywordList: ['복지', '의료'],
	},
	환경노동위원회: {
		emoji: '🌳',
		keywordList: ['자연환경', '근로', '화학'],
	},
	국토교통위원회: {
		emoji: '🏠',
		keywordList: ['부동산', '교통', '주택'],
	},
	교육위원회: {
		emoji: '🎓',
		keywordList: ['학교', '입시'],
	},
	과학기술정보방송통신위원회: {
		emoji: '🔬',
		keywordList: ['IT', 'AI', '과학', '기술', '방송', '우주', '원자력'],
	},
	농림축산식품해양수산위원회: {
		emoji: '🌾',
		keywordList: ['농업', '축산', '식품', '해양', '수산', '먹거리'],
	},
	기획재정위원회: {
		emoji: '💰',
		keywordList: ['경제', '세금'],
	},
	정무위원회: {
		emoji: '🏦',
		keywordList: ['금융'],
	},
	행정안전위원회: {
		emoji: '🚨',
		keywordList: ['재난안전', '선거'],
	},
	산업통상자원중소벤처기업위원회: {
		emoji: '🏭',
		keywordList: ['무역', '창업', '자원', '에너지'],
	},
	국방위원회: {
		emoji: '🪖',
		keywordList: ['국방', '안보'],
	},
	법제사법위원회: {
		emoji: '⚖️',
		keywordList: ['법', '재판'],
	},
	국회운영위원회: {
		emoji: '🏛️',
		keywordList: ['국회', '정치'],
	},
	정보위원회: {
		emoji: '🔒',
		keywordList: ['정보보안'],
	},
	예산결산특별위원회: {
		emoji: '📊',
		keywordList: ['정치'],
	},
	여성가족위원회: {
		emoji: '👪', // 공백 제거
		keywordList: ['가족', '청소년', '성평등', '여성', '아동', '인권'],
	},
	기타: {
		emoji: '🗂️',
		keywordList: [],
	},
};
