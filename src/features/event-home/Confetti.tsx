'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHAPES = ['square', 'triangle'] as const;
const COLOR_DIGIT = 'ABCDEF1234567890';

type ShapeType = (typeof SHAPES)[number];

type ConfettiItem = {
	id: number;
	x: number;
	y: number;
	rotation: number;
	size: number;
	color: string;
	shape: ShapeType;
};

const generateRandomColor = () => {
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
	}
	return color;
};

const generateConfettiItems = (count = 100): ConfettiItem[] => {
	return Array.from({ length: count }, (_, i) => ({
		id: Date.now() + i,
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		rotation: Math.random() * 360,
		size: Math.floor(Math.random() * (20 - 5 + 1)) + 5,
		color: generateRandomColor(),
		shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
	}));
};

const Confetti = () => {
	const [confettiList, setConfettiList] = useState<ConfettiItem[]>([]);

	useEffect(() => {
		const confetti = generateConfettiItems();
		setConfettiList(confetti);

		const timer = setTimeout(() => {
			setConfettiList([]);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
			<AnimatePresence>
				{confettiList.map((item) => (
					<motion.div
						key={item.id}
						initial={{ y: item.y, opacity: 1 }}
						animate={{
							y: item.y + 1000,
							rotate: item.rotation + 720,
							opacity: 0,
						}}
						exit={{ opacity: 0 }}
						transition={{ duration: 5, ease: 'easeOut' }}
						style={{
							position: 'absolute',
							left: item.x,
							top: 0,
							width: item.shape === 'triangle' ? 0 : item.size,
							height: item.shape === 'triangle' ? 0 : item.size,
							backgroundColor: item.shape === 'triangle' ? 'transparent' : item.color,
							borderLeft: item.shape === 'triangle' ? `${item.size / 2}px solid transparent` : undefined,
							borderRight: item.shape === 'triangle' ? `${item.size / 2}px solid transparent` : undefined,
							borderBottom: item.shape === 'triangle' ? `${item.size}px solid ${item.color}` : undefined,
							transformOrigin: 'center',
							borderRadius: item.shape === 'square' ? '2px' : undefined,
						}}
					/>
				))}
			</AnimatePresence>
		</div>
	);
};

export default Confetti;
