import Image from 'next/image';

const EventBanner = () => {
	return (
		<div className="relative w-full  h-[88px] rounded-[12px] desktop:h-[146px] desktop:rounded-[20px] overflow-auto max-desktop:mb-6 desktop:w-[calc(100%-72px)]">
			<Image src="/images/event/banner.png" alt="배너 이미지" fill className="object-cover object-center" priority />
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-white typo-heading2 font-bold desktop:typo-display2">더 많은 정치 관련 정보를 확인해보세요</span>
			</div>
		</div>
	);
};

export default EventBanner;
