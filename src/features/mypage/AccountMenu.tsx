'use client';

import { SolidBtn } from '@/shared/components/SolidBtn';
import { clearAuth } from '../auth/utils/cookie';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { CLIENT_NAVI_PATH } from '@/shared/const/url';

const AccountMenu = () => {
	return (
		<div className="w-[110px] flex flex-col items-center gap-4 desktop:w-full">
			<Link href={CLIENT_NAVI_PATH.myprofile.path}>
				<SolidBtn primary={false} label="프로필 수정" className="w-full" />
			</Link>
			<button
				type="button"
				className="hidden desktop:block w-full h-10 text-center py-1 typo-body2-normal font-bold text-label-neutral/88  cursor-pointer hover:bg-bg-gray/60 rounded-[12px]"
				onClick={async () => {
					await clearAuth();
					redirect('/');
				}}
			>
				로그아웃
			</button>
		</div>
	);
};

export default AccountMenu;
