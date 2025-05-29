'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { EventPerson } from '../event/const/data';
import { EVENT_HOME_CARD_DATA, HUBO_COLOR } from './const/data';
import WavePathIcon from './icon/WaveIcon';
import ArrowIcon from './icon/RightArrow';

const MobileHubo = ({ name }: { name: EventPerson }) => {
	const ref = useRef(null);
	const data = EVENT_HOME_CARD_DATA[name];

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// 올라올녀석이 y축으로 위에서부터 내려와서 덮기
	const y = useTransform(scrollYProgress, [0.4, 0.55], ['100%', '0%']);

	return (
		<section ref={ref} className="h-[210vh] relative w-full desktop:hidden">
			<div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col">
				{/* 붙는녀석은 항상 보이게 */}
				<div className={`h-1/2 flex items-center justify-center ${HUBO_COLOR[name].bg}`}>
					<Image src={`/images/event/후보-${name}.png`} alt="후보사진" width={360} height={340} className="self-end" />
				</div>

				<div className="relative h-1/2 overflow-hidden">
					{/* 다음녀석 */}
					<div className="h-full flex flex-col items-center">
						<div className="flex flex-col items-center p-5 gap-6 max-w-[320px]">
							<div className="flex flex-col items-center gap-2">
								<p className="text-center typo-heading1 font-bold text-label-normal ">
									{data.light.keyword.first}
									<br />
									{data.light.keyword.second}
								</p>
								<p className="hidden text-center typo-heading1 font-bold text-white ">
									{data.dark.keyword.first}
									<br />
									{data.dark.keyword.second}
								</p>
								<p className="typo-label1-normal font-regular text-label-alternative ">{data.party}</p>
							</div>
							<div className="relative text-center text-[30px] leading-[136%] h-[36px] font-bold ">
								<span>{data.light.comment}</span>
								<WavePathIcon fill={HUBO_COLOR[name].icon} className="-translate-y-5/7 group-hover:hidden" />
							</div>
							<div className="flex w-full flex-wrap gap-x-4 px-6 py-5 justify-center h-[134px] items-center ">
								{data.light.info.map((text) => (
									<span key={text} className="h-6.5 typo-headline1 font-regular text-center text-label-normal">
										{text}
									</span>
								))}
							</div>
							<div className="flex w-full justify-between h-6 items-center">
								<div className="flex gap-2">
									{data.light.label.map((item) => (
										<div
											key={item.text}
											className={`flex items-center text-center typo-caption1 ${item.color} ${item.bg}  rounded-[6px] h-6 px-1.5 `}
										>
											{item.text}
										</div>
									))}
								</div>
								<ArrowIcon className="text-[#989BA2]" />
							</div>
						</div>
					</div>
					{/* 올라오는 어두운 면 */}
					<motion.div style={{ y }} className={`absolute inset-0 flex flex-col items-center z-10 ${HUBO_COLOR[name].bg}`}>
						<div className="flex flex-col items-center p-5 gap-6 max-w-[320px]">
							<div className="flex flex-col items-center gap-2">
								<p className="text-center typo-heading1 font-bold text-white ">
									{data.dark.keyword.first}
									<br />
									{data.dark.keyword.second}
								</p>
								<p className="typo-label1-normal font-regular text-white ">{data.party}</p>
							</div>
							<div className="relative text-center text-[32px] h-[36px] leading-[136%] font-bold">
								<span className="text-white">{data.dark.comment}</span>
								<WavePathIcon className="absolute -translate-y-5/7" />
							</div>
							<div className="flex w-full px-2.5 py-5 justify-center h-[134px]">
								<div className="gap-3 flex text-white items-center justify-center ">
									<div className="w-8 h-8 rounded-full bg-white overflow-hidden">
										<Image src={`/images/event/후보-${data.dark.bad.name}.png`} alt="비난 후보" width={32} height={32} />
									</div>
									<div className="flex flex-col flex-wrap flex-1">
										<span className="typo-body1-normal font-bold">{data.dark.bad.name}</span>
										<p className="typo-body2-normal font-medium break-words">{data.dark.bad.text}</p>
									</div>
								</div>
							</div>
							<div className="flex w-full justify-between h-6 items-center">
								<div className="flex gap-2">
									{data.dark.label.map((text) => (
										<div key={text} className={`flex items-center text-center typo-caption1 text-[#F7F7F8] bg-[#F7F7F8]/9  rounded-[6px] h-6 px-1.5`}>
											{text}
										</div>
									))}
								</div>
								<ArrowIcon className="text-bg-white" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default MobileHubo;
