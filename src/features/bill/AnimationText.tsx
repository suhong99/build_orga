'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['정치, 행정', '경제', '교육', '외교, 안보', '복지, 사회'];

const AnimationText = () => {
	const [index, setIndex] = useState(0);
	const [displayText, setDisplayText] = useState('');
	const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing');
	const current = categories[index];

	useEffect(() => {
		const interval = setInterval(
			() => {
				if (phase === 'typing') {
					if (displayText.length < current.length) {
						setDisplayText(current.slice(0, displayText.length + 1));
					} else {
						setPhase('waiting');
					}
				} else if (phase === 'waiting') {
					setPhase('deleting');
				} else if (phase === 'deleting') {
					if (displayText.length > 0) {
						setDisplayText(displayText.slice(0, -1));
					} else {
						setPhase('typing');
						setIndex((prev) => (prev + 1) % categories.length);
					}
				}
			},
			phase === 'waiting' ? 3000 : phase === 'typing' ? 150 : 100,
		);

		return () => clearInterval(interval);
	}, [displayText, phase, index, current]);

	return (
		<div className="flex items-center justify-center w-[132px] h-[26px] rotate-4 typo-heading1 rounded-[112px] border-10 border-[#1ad99c] m-[-3px] desktop:m-[-6px] bg-primary-main-normal  text-white box-content desktop:typo-title1 p-2 desktop:w-[198px] desktop:h-14">
			<AnimatePresence mode="popLayout">
				{[...displayText].map((char, i) => (
					<motion.span
						key={`${char}-${i}`}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.15 }}
						className="inline-block"
					>
						{char}
					</motion.span>
				))}
			</AnimatePresence>

			<span className="inline-block w-0.5 h-6 ml-1 animate-pulse bg-[#1AD99C]" />
		</div>
	);
};

export default AnimationText;
