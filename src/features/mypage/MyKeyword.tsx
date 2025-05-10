import { Keyword } from '@/shared/const/committee';

const MyKeyword = ({ label }: { label: Keyword }) => {
	return <span className="inline-block px-3 py-1.5 border border-line-normal rounded-[20px] typo-caption1 text-label-neutral">{label}</span>;
};

export default MyKeyword;
