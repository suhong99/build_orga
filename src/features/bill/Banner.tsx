import AnimationText from './AnimationText';
import Image from 'next/image';
const Banner = () => {
	return (
		<div className="relative overflow-hidden w-full h-[150px] min-desktop:w-[100vw] flex items-center justify-center  max-w-maxw  desktop:rounded-[20px] desktop:my-10  ">
			<div className="flex justify-center items-center gap-4 z-1 desktop:gap-5 text-label-normal typo-heading1 font-bold desktop:font-medium desktop:typo-title1 text-center max-[550px]:gap-0 max-[550px]:flex-col">
				<span className="z-2">최근에 발의된</span> <AnimationText /> <span className="z-2">법안을 확인해보세요</span>
			</div>
			<Image src="/images/bill-banner.png" alt="banner" fill sizes="(max-width: 960px) 960px, 1200px" className="object-cover" />
		</div>
	);
};

export default Banner;
