export const HUBO_COLOR = {
	이재명: { bg: 'bg-[#152484]', icon: '#7EA7FF', group: 'group-hover:bg-[#152484]' },
	김문수: { bg: 'bg-[#E61E2B]', icon: '#FF9CA7', group: 'group-hover:bg-[#E61E2B]' },
	이준석: { bg: 'bg-[#FF7210]', icon: '#FFC48F', group: 'group-hover:bg-[#ff7210]' },
} as const;

export const EVENT_HOME_CARD_DATA = {
	이재명: {
		party: '더불어민주당',
		light: {
			keyword: { first: '이제부터는 진짜 대한민국', second: '이제는 이재명' },
			comment: '약속은 지켜야 하니까',
			info: ['AI 100조 투자', 'K콘텐츠 50조 수출', '주 4.5일제 시범 도입', '부동산 개혁', '청년 기회국가'],
			label: [
				{ text: '💡 정책실현력', color: 'text-[#4F29E5]', bg: 'bg-[#4F29E5]/9' },
				{ text: '👥 민생중심', color: 'text-[#00BF40]', bg: 'bg-[#00BF40]/9' },
				{ text: '🚀 미래전환', color: 'text-[#0066FF]', bg: 'bg-[#0066FF]/9' },
			],
		},
		dark: {
			keyword: { first: '정책적으로 가장', second: '극단적이신 분 이재명' },
			comment: 'AI 100조 투자 공약',
			bad: { name: '이준석', text: '세부적으로 계획도 없는데 AI산업 100조 원 넣겠다는 말씀 잘 들었다.' },
			label: ['커피원가120원', '거북섬', '호텔경제학'],
		},
	},
	김문수: {
		party: '국민의힘',
		light: {
			keyword: { first: '새롭게 대한민국, 정정당당', second: '알고보니 진짜는 김문수' },
			comment: '말이 아닌 실적입니다',
			info: ['감세 + 자율경제', 'GTX 전국 확대', '노조 개혁', '안보 강화', '저출산 대책'],
			label: [
				{ text: '🔧 실적강조', color: 'text-[#4F29E5]', bg: 'bg-[#4F29E5]/9' },
				{ text: '🇰🇷 정통가치', color: 'text-[#0066FF]', bg: 'bg-[#0066FF]/9' },
				{ text: '🧱 실용행정', color: 'text-[#A35D00]', bg: 'bg-[#A35D00]/9' },
			],
		},
		dark: {
			keyword: { first: '서민과 동떨어진', second: '국정철학 김문수' },
			comment: '사전투표제 폐지 공약',
			bad: { name: '이준석', text: '사전투표를 독려하던 정당이 이제 와서 폐지를 말하니, 유권자들은 혼란스럽고 코미디 같습니다.' },
			label: ['보수의침묵', '믿음은개인', '기억거부'],
		},
	},
	이준석: {
		party: '개혁신당',
		light: {
			keyword: { first: '미래를 여는 선택', second: '새로운 대통령, 이준석' },
			comment: '정치는 정답이어야 한다',
			info: ['규제 기준국가 선언', '지방법인세 자율화', '30대 총리제', 'AI투명성법 제정', '탈진영 정치'],
			label: [
				{ text: '🧠 시스템중심', color: 'text-[#FF9200]', bg: 'bg-[#FF9200]/9' },
				{ text: '🔄 정치해체', color: 'text-[#A35D00]', bg: 'bg-[#A35D00]/9' },
				{ text: '👟 청년·실용', color: 'text-[#0041A3]', bg: 'bg-[#0041A3]/9' },
			],
		},
		dark: {
			keyword: { first: '기준 없는 정치로', second: '혼란만 키운 이준석' },
			comment: '청년얼굴, 자기 정치',
			bad: {
				name: '이재명',
				text: '정치 시스템을 바꾸겠다면서 결국은 본인 중심의 정당 만들고, 모든 갈등을 ‘내가 맞다’로 수렴시키는 건 정치 교체가 아니라 정치 사유화입니다.',
			},
			label: ['당적유목민', '정당셀프탈퇴', '내가공천한다'],
		},
	},
};

export const EVENT_HOME_POLICY_DATA = {
	이재명: '',
	김문수: '',
	이준석: '',
};
