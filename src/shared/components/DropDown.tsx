import Image from 'next/image';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

export interface DropdownProps {
	/**드롭다운 버튼에 적용된 text */
	title: ReactNode;
	/**children 에 매개변수를 전달하여 닫기 기능 사용할 수 있도록 구성*/
	children: (close: () => void) => ReactNode;
}

/**
 * 드롭다운을 유연하게 사용하기 위해 내부 컴퍼넌트를 외부에서 props로 전달 받습니다. <br/>
 * 웹에서는 드롭다운 형태, 모바일에서는 하단에 붙은 모달 형태로 렌더링 됩니다. <br/>
 * 예시) 최신순 조회순으로 정렬하는 필터
 */

export const Dropdown = ({ title, children }: DropdownProps) => {
	const [open, setOpen] = useState(false);
	const desktopRef = useRef<HTMLDivElement>(null);
	const mobileRef = useRef<HTMLDivElement>(null);

	const close = useCallback(() => setOpen(false), []);

	const handleClickOutside = useCallback(
		(e: MouseEvent) => {
			if (
				desktopRef.current &&
				!desktopRef.current.contains(e.target as Node) &&
				mobileRef.current &&
				!mobileRef.current.contains(e.target as Node)
			) {
				close();
			}
		},
		[close],
	);

	useEffect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [open, handleClickOutside]);

	return (
		<div role="listbox" className="relative inline-block">
			<button
				className="flex items-center h-10 px-[11px] gap-1 border border-line-neutral rounded-[10px] typo-body2-normal cursor-pointer"
				onClick={(e) => {
					e.stopPropagation();
					setOpen((prev) => !prev);
				}}
			>
				{title}
				<Image src="/svgs/down.svg" alt="드롭다운열기" width={16} height={16} />
			</button>

			{open && (
				<>
					{/* 데스크탑 */}
					<div
						ref={desktopRef}
						className="hidden desktop:block absolute left-0 mt-2 px-5 py-2  z-10 bg-white border border-line-neutral shadow-md rounded-[16px]"
					>
						{children(close)}
					</div>

					{/* 모바일 */}
					<div className="desktop:hidden fixed inset-0 z-40 bg-black/50">
						<div ref={mobileRef} className="absolute bottom-0 left-0 w-full bg-white rounded-t-[10px] p-4">
							{children(close)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Dropdown;
