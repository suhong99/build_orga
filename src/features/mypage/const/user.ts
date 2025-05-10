import { Keyword } from '@/shared/const/committee';

export interface MyInfo {
	nickname: string;
	keywordList: Keyword[];
	commentNum: number;
	opinionNum: number;
	profileImg: string;
}
