// useDropdown.ts
import { useState, useCallback, useEffect, useRef } from 'react';

export function useDropdown<T extends HTMLElement, U extends HTMLElement>(isOnlyDesktop?: boolean) {
	const [open, setOpen] = useState(false);
	const desktopRef = useRef<T>(null);
	const mobileRef = useRef<U>(null);

	const close = useCallback(() => setOpen(false), []);
	const toggle = useCallback(() => setOpen((prev) => !prev), []);

	const handleClickOutside = useCallback(
		(e: MouseEvent) => {
			const target = e.target as Node;

			if (!open) return;

			const clickedOutsideDesktop = desktopRef.current && !desktopRef.current.contains(target);
			const clickedOutsideMobile = isOnlyDesktop ? true : mobileRef.current && !mobileRef.current.contains(target);

			if (clickedOutsideDesktop && clickedOutsideMobile) {
				close();
			}
		},
		[open, close, isOnlyDesktop],
	);

	useEffect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [open, handleClickOutside]);

	return { open, toggle, close, desktopRef, mobileRef } as const;
}
