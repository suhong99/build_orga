'use client';

import { SolidBtn } from '@/shared/components/SolidBtn';

// TODO: 관련 기능 추가
const AccountMenu = () => {
	return (
		<div className="w-[110px] flex flex-col items-center gap-4 desktop:w-full">
			<SolidBtn primary={false} label="프로필 수정" className="w-full" />
			<button
				type="button"
				className="hidden desktop:block w-full h-10 text-center py-1 typo-body2-normal font-bold text-label-neutral/88  cursor-pointer hover:bg-bg-gray/60 rounded-[12px]"
			>
				로그아웃
			</button>
		</div>
	);
};

export default AccountMenu;
