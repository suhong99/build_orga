import Image from 'next/image';

const Banner = () => {
	return (
		<div className="relative w-full  h-[200px] overflow-hidden max-w-maxw mx-auto desktop:rounded-[20px] desktop:my-10 desktop:h-[400px]">
			<Image src="/images/home-desktop.png" alt="데스크탑 배너 이미지" fill className="object-cover max-desktop:hidden" sizes="1200px" priority />
			<Image src="/images/home-mobile.png" alt="모바일 배너 이미지" fill className="object-cover desktop:hidden" sizes="720px" priority />
		</div>
	);
};

export default Banner;
