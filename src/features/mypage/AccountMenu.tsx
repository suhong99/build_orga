'use client';

interface MenuBtnProps {
	label: string;
	onClick: () => void;
}

const AccountMenu = () => {
	const menuList = [
		{ label: '프로필 수정', fn: () => {} },
		{ label: '로그아웃', fn: () => {} },
	] as const;

	return (
		<div className="w-full flex flex-col gap-4">
			{menuList.map((item) => (
				<MenuBtn key={item.label} label={item.label} onClick={item.fn} />
			))}
		</div>
	);
};

export default AccountMenu;

const MenuBtn = ({ label, onClick }: MenuBtnProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full text-left py-1 typo-body1-normal text-label-neutral/88 font-bold cursor-pointer hover:bg-bg-gray/60"
		>
			{label}
		</button>
	);
};
