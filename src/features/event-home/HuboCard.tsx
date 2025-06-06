import React from 'react';
import { EventPerson } from '../event/const/data';
import { EVENT_HOME_CARD_DATA, HUBO_COLOR } from './const/data';
import Link from 'next/link';
import Image from 'next/image';
import WavePathIcon from './icon/WaveIcon';
import ArrowIcon from './icon/RightArrow';

const HuboCard = ({ name }: { name: EventPerson }) => {
	const data = EVENT_HOME_CARD_DATA[name];

	return (
		<Link href={`/event/${name}`} className="group flex flex-col w-full border-[1.5px] border-line-normal rounded-[12px] overflow-hidden">
			<article className="flex flex-col items-center w-full">
				<div className={`${HUBO_COLOR[name].bg} h-[340px] w-full flex items-center`}>
					<Image src={`/images/event/후보-${name}.png`} alt="후보사진" width={360} height={340} className="self-end" />
				</div>
				{/* 내용들 */}
				<div className={`flex flex-col w-full p-5 gap-5 items-center ${HUBO_COLOR[name].group}`}>
					<div className="flex flex-col items-center gap-2">
						<p className="text-center typo-heading1 font-bold text-label-normal group-hover:hidden">
							{data.light.keyword.first}
							<br />
							{data.light.keyword.second}
						</p>
						<p className="hidden text-center typo-heading1 font-bold text-white group-hover:block">
							{data.dark.keyword.first}
							<br />
							{data.dark.keyword.second}
						</p>
						<p className="typo-label1-normal font-regular text-label-alternative group-hover:text-white">{data.party}</p>
					</div>
					<div className="relative text-center text-[30px] h-[36px] leading-[136%] font-bold ">
						<span className="relative group-hover:hidden z-2">{data.light.comment}</span>
						<span className="relative text-white hidden group-hover:block z-2">{data.dark.comment}</span>
						<WavePathIcon fill={HUBO_COLOR[name].icon} className="-translate-y-5/7 group-hover:hidden" />
						<WavePathIcon className="hidden -translate-y-5/7 group-hover:block " />
					</div>
					<div className="flex w-full flex-wrap gap-x-4 px-6 py-5 justify-center h-[134px]">
						{data.light.info.map((text) => (
							<span key={text} className="h-6.5 typo-headline1 font-regular text-center text-label-normal group-hover:hidden">
								{text}
							</span>
						))}
						<div className="w-full hidden gap-3 group-hover:flex text-white">
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
							{data.light.label.map((item) => (
								<div
									key={item.text}
									className={`flex items-center text-center typo-caption1 ${item.color} ${item.bg}  rounded-[6px] h-6 px-1.5 group-hover:hidden`}
								>
									{item.text}
								</div>
							))}
							{data.dark.label.map((text) => (
								<div
									key={text}
									className={`hidden items-center text-center typo-caption1 text-[#F7F7F8] bg-[#F7F7F8]/9  rounded-[6px] h-6 px-1.5 group-hover:flex`}
								>
									{text}
								</div>
							))}
						</div>
						<ArrowIcon className="text-[#989BA2] group-hover:text-bg-white" />
					</div>
				</div>
			</article>
		</Link>
	);
};

export default HuboCard;
