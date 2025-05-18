import { BillDetalProps } from './api';

type InfoSubject = '진행 단계' | '대표 발의자' | '소관 위원회' | 'AI 한줄 요약';

const DetailInfo = ({ status, name, committee, aiSummary }: Pick<BillDetalProps, 'status' | 'name' | 'committee' | 'aiSummary'>) => {
	const InfoList: { subject: InfoSubject; detail: string; isLong?: boolean }[] = [
		{ subject: '진행 단계', detail: status },
		{ subject: '대표 발의자', detail: name },
		{ subject: '소관 위원회', detail: committee },
		{ subject: 'AI 한줄 요약', detail: aiSummary, isLong: true },
	];
	return (
		<section className="flex flex-col w-full px-5 py-4 gap-4 rounded-[20px] bg-bg-gray desktop:px-12 desktop:py-8 desktop:gap-5">
			{InfoList.map(({ subject, detail, isLong }) => (
				<InfoItem key={subject} subject={subject} detail={detail} isLong={isLong} />
			))}
		</section>
	);
};

export default DetailInfo;

const InfoItem = ({ subject, detail, isLong = false }: { subject: InfoSubject; detail: string; isLong?: boolean }) => {
	return (
		<div className={` flex ${isLong ? 'flex-col' : 'flex-row'} gap-3 typo-body1-normal desktop:flex-row desktop:typo-headline1`}>
			<span className="w-[80px] h-[24px] font-bold desktop:w-[90px] desktop:h-[26px] desktop:font-medium">{subject}</span>
			<span className="flex-1 font-regular break-words whitespace-normal">{detail}</span>
		</div>
	);
};
