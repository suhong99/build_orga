import { EventPerson } from '../event/const/data';
import { EVENT_HOME_POLICY_DATA, PolicyCategory } from './const/data';

interface ItemProps {
	name: EventPerson;
	category: PolicyCategory;
}

const PolicyItem = ({ name, category }: ItemProps) => {
	const data = EVENT_HOME_POLICY_DATA[name][category];

	return (
		<article className="flex flex-col w-full gap-3 py-4 items-center max-w-[500px]">
			<header className="flex flex-col w-full gap-1.5">
				<span className="typo-heading2 font-bold text-label-normal">{category}</span>
				<div className="flex gap-x-2.5 flex-wrap h-10">
					{data.keywordList.map((keyword) => (
						<span key={keyword} className="typo-label1-normal font-regular text-label-alternative">
							#{keyword}
						</span>
					))}
				</div>
			</header>
			{data.info.map(({ title, detailList }) => (
				<div key={title} className="flex gap-5 pb-3 w-full">
					<span className="flex items-center justify-center px-1.5 w-21 h-6 typo-caption1	 text-[#4F29E5] bg-[#4F29E5]/9  rounded-[6px]">{title}</span>
					<div className="flex flex-col gap-2.5 flex-1 flex-wrap break-words">
						{detailList.map((text) => (
							<span key={text} className="typo-label1-normal font-regular text-label-alternative">
								{text}
							</span>
						))}
					</div>
				</div>
			))}
		</article>
	);
};

export default PolicyItem;
