import { normalizeTextStructure } from '@/shared/util';

const DetailContent = ({ detail }: { detail: string }) => {
	return (
		<section className="flex flex-col w-full px-1 py-5 gap-3 desktop:px-9 desktop:py-8">
			<h3 className="typo-heading2 font-bold text-label-normal desktop:typo-heading1">제안 이유 및 주요 내용</h3>
			<p className="whitespace-pre-wrap typo-body2-normal font-regular text-label-normal desktop:typo-body1-normal">
				{normalizeTextStructure(detail)}{' '}
			</p>
		</section>
	);
};

export default DetailContent;
