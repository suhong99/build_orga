export type BillReaction = '좋아요' | '흥미진진' | '개선필요' | '아쉬워요';

export const REACTION_EMOJI: Record<BillReaction, string> = {
	좋아요: '👍',
	흥미진진: '🤩',
	개선필요: '😮‍💨',
	아쉬워요: '☹️',
} as const;

export const REACTION_ICON_MAP: { label: BillReaction; emoji: string }[] = [
	{ label: '좋아요', emoji: '👍' },
	{ label: '흥미진진', emoji: '🤩' },
	{ label: '개선필요', emoji: '😮‍💨' },
	{ label: '아쉬워요', emoji: '☹️' },
] as const;
