import { Keyword } from '@/shared/const/committee';

export interface MyProfileInfo {
	nickname: string;
	profileImageUrl: string;
	interests: Keyword[];
	scrapeCount: number;
	reactionCount: number;
	commentCount: number;
}

export type UserCategory = '북마크' | '의견' | '댓글';
