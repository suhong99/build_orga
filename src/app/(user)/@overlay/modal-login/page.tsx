'use client';

import { authorize } from '@/features/auth/api/oauth';
import LoginFailText from '@/features/auth/LoginFailText';
import Modal from '@/shared/components/Modal';
import SocialBtn from '@/shared/components/SocialBtn';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
	// TODO:
	const [isFail] = useState(false);

	return (
		<Modal>
			<div className="flex flex-col items-center w-full px-6 desktop:px-0 py-[42px] max-w-[335px] desktop:max-w-[320px] desktop:pt-[143px]  gap-6 desktop:gap-[48px] ">
				<div className="flex flex-col gap-5 items-center">
					<Image src="/svgs/logo.svg" alt="로고" width={175} height={37.5} className="w-[150px] h-[32px] desktop:w-[175px] desktop:h-[37.5px] " />
					<div className="h-12 text-center typo-body2-normal  desktop:typo-body1-normal ">
						3초면 끝.
						<br />
						당신의 일상에 딱, 바로 이 픽!
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full items-center box-border">
					<SocialBtn
						type="kakao"
						onClick={() => {
							authorize('kakao');
						}}
					/>
					<SocialBtn
						type="google"
						onClick={() => {
							authorize('google');
						}}
					/>
					{isFail && <LoginFailText />}
				</div>
			</div>
		</Modal>
	);
}
