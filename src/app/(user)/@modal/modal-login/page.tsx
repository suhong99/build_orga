import Modal from '@/shared/components/Modal';
import SocialBtn from '@/shared/components/SocialBtn';

export default function Page() {
	return (
		<Modal>
			<div className="flex flex-col items-center w-full px-6 py-[42px]  desktop:pt-[143px]  gap-6 desktop:gap-[48px] ">
				<div className="flex flex-col gap-5 items-center">
					<div className="text-center w-[150px] h-[32px] desktop:w-[175px] desktop:h-[37.5px]  bg-accent-bg-orange">로고</div>
					<div className="h-12 text-center typo-body2-normal  desktop:typo-body1-normal ">
						3초면 끝.
						<br />
						당신의 일상에 딱, 바로 이 픽!
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full items-center box-border">
					<SocialBtn type="kakao" />
					<SocialBtn type="google" />
				</div>
			</div>
		</Modal>
	);
}
