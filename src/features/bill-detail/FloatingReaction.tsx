'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { BillDetalProps } from './api';
import { BillReaction } from './const';

const IconMap: { label: BillReaction; emoji: string }[] = [
	{ label: '좋아요', emoji: '👍' },
	{ label: '흥미진진', emoji: '🤩' },
	{ label: '개선필요', emoji: '😮‍💨' },
	{ label: '아쉬워요', emoji: '☹️' },
] as const;

const FloatingBtn = ({ reactions, myReaction: initialMyReaction }: Pick<BillDetalProps, 'reactions' | 'myReaction'>) => {
	const targetRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(true);
	const { scrollY } = useScroll();

	const [myReaction, setMyReaction] = useState<BillReaction | null>(initialMyReaction);
	const [reactionCounts, setReactionCounts] = useState([...reactions]);

	useMotionValueEvent(scrollY, 'change', () => {
		const rect = targetRef.current?.getBoundingClientRect();
		if (!rect) return;
		const isIntersecting = rect.top < window.innerHeight;
		const nextVisible = !isIntersecting;

		if (nextVisible !== visible) {
			setVisible(nextVisible);
		}
	});

	const handleClick = (index: number) => {
		const selectedLabel = IconMap[index].label;
		const updated = [...reactionCounts];

		if (myReaction === selectedLabel) {
			updated[index] -= 1;
			setReactionCounts(updated);
			setMyReaction(null);
			return;
		}

		updated[index] += 1;

		if (myReaction !== null) {
			const prevIndex = IconMap.findIndex((item) => item.label === myReaction);
			if (prevIndex !== -1) {
				updated[prevIndex] = Math.max(0, updated[prevIndex] - 1);
			}
		}

		setReactionCounts(updated);
		setMyReaction(selectedLabel);

		// TODO: 서버 전송 로직 추가
	};

	return (
		<>
			<div ref={targetRef} className="border border-line-neutral w-full" />

			<AnimatePresence>
				{visible && (
					<motion.aside
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.3 }}
						className="flex fixed bottom-10 z-50 px-5 py-3 gap-5 bg-bg-white border border-line-normal rounded-[20px] shadow-md  desktop:px-8 desktop:py-5 desktop:gap-6 desktop:h-17"
					>
						{reactionCounts.map((count, i) => {
							const { label, emoji } = IconMap[i];
							const isSelected = myReaction === label;

							return <EmojiBtn key={label} label={label} emoji={emoji} isSelected={isSelected} clickFn={() => handleClick(i)} count={count} />;
						})}
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
};

export default FloatingBtn;

interface EmojiBtnProps {
	label: BillReaction;
	emoji: string;
	count: number;
	isSelected: boolean;
	clickFn: () => void;
}

const EmojiBtn = ({ label, count, emoji, isSelected, clickFn }: EmojiBtnProps) => {
	return (
		<motion.button key={label} whileTap={{ scale: 0.95 }} onClick={clickFn} className="flex items-center gap-2 typo-headline1 font-bold">
			<span>{emoji}</span>
			<span className="text-label-strong hidden desktop:block">{label}</span>
			<span className={isSelected ? 'text-primary-main-normal' : 'text-[#AEB0B6]'}>{count}</span>
		</motion.button>
	);
};
