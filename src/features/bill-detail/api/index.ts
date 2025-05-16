import { BillStatus } from '@/shared/const/bill';
import { CommitteeName } from '@/shared/const/committee';
import { BillReaction } from '../const';

//TODO: api나오면 수정
export interface BillDetalProps {
	/**이슈 아이디 */
	id: string;
	/** 카드 제목 */
	title: string;
	/** 소속 위원회 */
	committee: CommitteeName;
	/** 발의자 이름 */
	name: string;
	/** 발의 날짜 (YYYY.MM.DD 형태) */
	date: string;
	/** 현재 상태 */
	state: BillStatus;
	/** 조회수 */
	viewNum: number;
	/** 북마크 수 */
	bookmarkNum: number;
	/** 댓글 수 */
	commentNum: number;
	/** 북마크 여부*/
	isBookmark: boolean;
	/**ai요약 */
	aiSummary: string;
	detail: string;
	// 리액션 반응
	reactions: [number, number, number, number];
	myReaction: BillReaction | null;
}

export const getBillDetail = (id: string): BillDetalProps => {
	return {
		id,
		title: '초등학생 코딩 교육 의무화 법안',
		committee: '과학기술정보방송통신위원회',
		name: '홍길동',
		date: '2025.05.01',
		state: '발의',
		viewNum: 1234,
		bookmarkNum: 56,
		commentNum: 12,
		isBookmark: false,
		aiSummary:
			'이 법안은 초등학생을 대상으로 한 코딩 교육을 정규 교육과정에 포함시키는 내용을 담고 있으며, 정보 격차 해소와 미래 인재 양성을 목표로 한다.',
		detail:
			"현행 「사회복지사업법」에 따른 사회복지법인이 설치ㆍ운영하는 어린이집을 사회복지법인어린이집으로 규정하고 있는데,이는 1990년대 시행된 정부의 보육시설 확충정책에 따라 농어촌지역을 중심으로 확대해 왔으며 설립 시 영유아 보육사업이라는 단일 사업을 목적으로 한정하여 법인을 허가했음. 현재 사회복지법인어린이집은 73%가 농어촌 지역에 소재하고 있는데, 급속한 인구 감소로 인해 보육수요 역시 급감하여 정원충족률 감소, 재정난 등 운영상의 심각한 어려움을 겪고 있음. 하지만 「사회복지사업법」에 따르면 사회복지법인이 해산하는 경우 잔여 재산을 국가 또는 지자체로 귀속시켜야 하기 때문에 사회복지법인어린이집은 해산하지 못하고 어쩔 수 없이 적자 운영하는 상황임. 이에 현행법에 보육만을 목적사업으로 하는 사회복지법인이 해산할 경우 잔여재산 귀속에 관한 특례를 규정하는 한편, 다른 사회복지사업으로 목적사업을 변경하거나 추가할 수 있도록 규정함으로써 농어촌지역의 사회복지어린이집의 효율적인 운영을 도모하려는 것임 (안 제36조 후단 신설, 제43조의3 및 제43조의4 신설 등).\n제출방법: 입법예고의 진행 상태가 '진행'일 경우에만 의견 등록이 가능하며, '종료'일 경우 의견 등록이 불가능합니다. 아래의 [의견등록] 버튼 혹은 상단의 [의견등록] 탭을 클릭하여 의견을 작성하실 수 있으며, 위의 의견제출 방법을 이용한 제출도 가능합니다.",
		reactions: [100, 200, 100, 50],
		myReaction: null,
	};
};
