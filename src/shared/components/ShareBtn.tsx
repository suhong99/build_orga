'use client';

import Image from 'next/image';
import { useCallback } from 'react';

/**
 * 공유하기 버튼
 */

const ShareButton = () => {
	const handleCopyLink = useCallback(() => {
		if (typeof window !== 'undefined' && navigator.clipboard) {
			navigator.clipboard
				.writeText(window.location.href)
				.then(() => {
					// TODO: alert처리
					alert('링크가 복사되었습니다!');
				})
				.catch(() => {
					alert('복사에 실패했습니다.');
				});
		}
	}, []);

	return (
		<button onClick={handleCopyLink} className="flex gap-1 items-center cursor-pointer">
			<Image src="/svgs/share.svg" alt="공유하기" width={18} height={18} className="py-0.5" />
			<span className="typo-body2-normal font-bold text-label-alternative/61">공유하기</span>
		</button>
	);
};

export default ShareButton;
