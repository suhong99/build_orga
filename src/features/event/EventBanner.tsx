import Image from 'next/image';

const EventBanner = () => {
	return (
		<div className="relative w-full  h-[90px] desktop:h-[146px] desktop:rounded-[20px]  desktop:overflow-auto max-desktop:mb-6 desktop:w-[calc(100%-72px)]">
			<Image src="/images/event/banner.png" alt="배너 이미지" fill className="max-desktop:hidden object-cover" priority />
			<div
				className="desktop:hidden absolute left-1/2 -translate-x-1/2 h-[90px] w-[100vw] max-w-[960px] flex justify-center items-end"
				style={{
					background: 'linear-gradient(92.03deg, #4F29E5 39.63%, #43E5B2 110.39%)',
				}}
			>
				<div className="flex w-full max-w-[600px] items-end justify-between mx-auto pl-[6%]">
					<div className="flex flex-col text-white mb-2 max-[400px]:pl-[5%]">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.0002 11.0004C3.34923 11.0004 1.2002 8.85136 1.2002 6.20039C1.2002 3.54942 3.34923 1.40039 6.0002 1.40039M6.0002 11.0004C7.54175 11.0004 8.91357 10.2737 9.79179 9.14419M6.0002 11.0004V6.20039M6.0002 1.40039C8.65116 1.40039 10.8002 3.54942 10.8002 6.20039C10.8002 7.3098 10.4238 8.33131 9.79179 9.14419M6.0002 1.40039V6.20039M9.79179 9.14419L6.0002 6.20039"
								stroke="white"
								strokeWidth="1.2"
							/>
						</svg>
						<span className="text-[20px] font-bold">제21대 대통령 선거</span>
						<span className="typo-label2-reading text-[10px] font-bold">6월 3일 오전 6시 ~ 오후 8시에 투표하세요</span>
					</div>
					<Image
						src="/images/event/m-banner.png"
						alt="모바일 후보들"
						width={250}
						height={80}
						className="w-[220px] object-contain mr-[2%] min-[450]:mr-[6%] max-[450px]:w-[200px] max-[380px]:w-[145px]"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default EventBanner;
