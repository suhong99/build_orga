// useDropdown.ts
import { useState, useCallback, useEffect, useRef } from 'react';

export function useDropdown<T extends HTMLElement, U extends HTMLElement>() {
	const [open, setOpen] = useState(false);
	const desktopRef = useRef<T>(null);
	const mobileRef = useRef<U>(null);

	const close = useCallback(() => setOpen(false), []);
	const toggle = useCallback(() => setOpen((prev) => !prev), []);

	const handleClickOutside = useCallback(
		(e: MouseEvent) => {
			const target = e.target as Node;
			if (open && desktopRef.current && !desktopRef.current.contains(target) && mobileRef.current && !mobileRef.current.contains(target)) {
				close();
			}
		},
		[open, close],
	);

	useEffect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside);
		}
		return () => document.removeEventListener('click', handleClickOutside);
	}, [open, handleClickOutside]);

	return { open, toggle, close, desktopRef, mobileRef } as const;
}
