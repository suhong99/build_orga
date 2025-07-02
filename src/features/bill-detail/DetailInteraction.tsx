'use client';

import { Fragment, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { BillReaction, REACTION_ICON_MAP } from './const';
import ShareButton from '@/shared/components/ShareBtn';
import BookmarkBtn from './BookmarkBtn';

// TODO: { reactions, myReaction: initialMyReaction }: Pick<BillDetalProps, 'reactions' | 'myReaction'>
// reactions: [number, number, number, number];
// myReaction: BillReaction | null;
const DetailInteraction = ({ id, isScrapped }: { id: string; isScrapped: boolean }) => {
	const targetRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(true);
	const { scrollY } = useScroll();

	const reactions = [100, 200, 100, 50];
	const initialMyReaction = null;

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
		const selectedLabel = REACTION_ICON_MAP[index].label;
		const updated = [...reactionCounts];

		if (myReaction === selectedLabel) {
			updated[index] -= 1;
			setReactionCounts(updated);
			setMyReaction(null);
			return;
		}

		updated[index] += 1;

		if (myReaction !== null) {
			const prevIndex = REACTION_ICON_MAP.findIndex((item) => item.label === myReaction);
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
			<div className="flex flex-col w-full gap-5">
				<div className="flex flex-col w-full">
					<div
						ref={targetRef}
						className="relative w-full flex flex-col justify-center items-center pt-4 pb-5 gap-3 bg-primary-sub-heavy h-[112px] desktop:h-[146px] rounded-[12px] overflow-hidden desktop:pt-7 desktop:pb-8"
					>
						<h3 className="typo-headline2 font-bold text-white z-10 desktop:typo-heading1">이 법안, 어떻게 평가하시나요?</h3>
						<div className="flex items-center gap-3 z-10 bg-white px-4 py-[3px] rounded-[8px] desktop:px-5 desktop:py-2 desktop:rounded-[12px]">
							{reactionCounts.map((count, i) => {
								const { label, emoji } = REACTION_ICON_MAP[i];
								const isSelected = myReaction === label;
								return (
									<Fragment key={label}>
										<EmojiBtn label={label} emoji={emoji} isSelected={isSelected} clickFn={() => handleClick(i)} count={count} />
										{i < reactionCounts.length - 1 && <div className="h-5 border border-line-neutral " />}
									</Fragment>
								);
							})}
						</div>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-gradient-to-r from-[#4F29E5] to-[#6541F2] h-[118px] desktop:h-[158px] w-[210%] rounded-[50%]  rotate-[-5deg]" />
					</div>

					<div className="flex justify-end gap-5 typo-body2-normal font-bold mt-6 mb-5 desktop:mt-9 desktop:mb-3">
						<BookmarkBtn id={id} isScrapped={isScrapped} />
						<ShareButton />
					</div>
					<div className="border border-line-neutral w-full" />
				</div>
			</div>

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
							const { label, emoji } = REACTION_ICON_MAP[i];
							const isSelected = myReaction === label;
							return <EmojiBtn key={label} label={label} emoji={emoji} isSelected={isSelected} clickFn={() => handleClick(i)} count={count} />;
						})}
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
};

export default DetailInteraction;

interface EmojiBtnProps {
	label: BillReaction;
	emoji: string;
	count: number;
	isSelected: boolean;
	clickFn: () => void;
}

const EmojiBtn = ({ label, count, emoji, isSelected, clickFn }: EmojiBtnProps) => {
	return (
		<motion.button
			key={label}
			whileTap={{ scale: 0.95 }}
			onClick={clickFn}
			className={`flex items-center gap-2 typo-body2-normal font-medium cursor-pointer ${isSelected ? 'text-primary-main-normal' : 'text-label-neutral/88'}`}
		>
			<span className="text-black typo-heading2">{emoji}</span>
			<span className="hidden desktop:block">{label}</span>
			<span>{count}</span>
		</motion.button>
	);
};
