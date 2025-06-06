const Footer = () => {
	const OFFICIAL_MAIL = 'ttxcrew@gmail.com';
	return (
		<footer className="w-full flex justify-center items-center bg-bg-gray">
			<div className="w-full flex flex-col justify-center items-baseline px-5 h-[120px] typo-body2-normal text-label-neutral/88 font-regular desktop:max-w-maxw desktop:flex-row desktop:h-[96px] desktop:justify-between desktop:items-center desktop:px-5 desktop:py-9 gap-1 desktop:gap-0 desktop:typo-body1-normal">
				<nav aria-label="footer navigation" className="flex gap-4">
					{/*TODO: 서비스 개인정보처리 */}
					<a href="https://www.notion.so/1f4c8d292f9581ac95cbde8d8da72617" target="_blank" className="hover:underline">
						서비스 이용약관
					</a>
					<a href="https://typical-cowl-29b.notion.site/1f5c8d292f9580f08d42c8117acc7ead" target="_blank" className="hover:underline">
						개인정보처리방침
					</a>
				</nav>

				<address className="not-italic">
					문의:{' '}
					<a href={`mailto:${OFFICIAL_MAIL}`} className="hover:underline">
						{OFFICIAL_MAIL}
					</a>
				</address>
			</div>
		</footer>
	);
};

export default Footer;
