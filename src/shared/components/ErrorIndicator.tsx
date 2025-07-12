'use client';

import { SolidBtn } from './SolidBtn';

interface ErrorIndicatorProps {
	retiralFn: () => void;
}

const ErrorIndicator = ({ retiralFn }: ErrorIndicatorProps) => {
	return (
		<div className="flex flex-col items-center gap-8 px-6 py-9">
			<p className="flex flex-col items-center  typo-body1-normal font-regular text-label-normal">
				<span>요청을 처리하는 중 문제가 발생했습니다.</span>
				<span>잠시 후 다시 시도해 주시거나, 지속될 경우 고객센터로 문의해 주세요.</span>
			</p>
			<SolidBtn label={'재시도'} size="medium" onClick={retiralFn} className="h-20" />
		</div>
	);
};
export default ErrorIndicator;
