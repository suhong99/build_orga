const Footer = () => {
	const OFFICIAL_MAIL = 'ttxcrew@gmail.com';
	return (
		<footer className="w-full flex justify-center items-center bg-bg-gray">
			<div className="w-full flex flex-col justify-center items-baseline px-5 h-[120px] typo-body2-normal text-label-neutral/88 font-regular desktop:max-w-maxw desktop:flex-row desktop:h-[96px] desktop:justify-between desktop:items-center desktop:px-5 desktop:py-9 gap-1 desktop:gap-0 desktop:typo-body1-normal">
				<nav aria-label="footer navigation" className="flex gap-4">
					{/*TODO: 서비스 개인정보처리 */}
					<a href="#" className="hover:underline">
						서비스 이용약관
					</a>
					<a href="#" className="hover:underline">
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
