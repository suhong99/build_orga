import { Keyword } from '@/shared/const/committee';

export interface MyInfo {
	nickname: string;
	keywordList: Keyword[];
	commentNum: number;
	opinionNum: number;
	profileImg: string;
}

export type UserCategory = '북마크' | '의견' | '댓글';
