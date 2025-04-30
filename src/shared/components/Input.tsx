import React from 'react';
import InfoCircle from '../svg/InfoCircle';

export type InputProps = {
	/** input의 고유 ID (웹접근성) */
	id: string;
	/** input name */
	name?: string;
	/** 입력 값 */
	value: string;
	/** 입력 값 변경 시 호출되는 콜백 */
	onChange: (value: string) => void;
	/** 플레이스홀더 텍스트 */
	placeholder?: string;
	/** 직접 입력하는 에러 메시지 (에러 없을 시에는 null 또는 undefined) */
	errMsg?: string | null;
	/** 최대 글자 수 */
	maxLength?: number;
	/** 사용자 정의 클래스 */
	className?: string;
	/** 비활성화 여부 */
	isDisabled?: boolean;
};

export default function Input({ id, name, value, onChange, placeholder = '', errMsg, maxLength, className = '', isDisabled = false }: InputProps) {
	const errorId = id ? `${id}-error` : undefined;

	return (
		<div className="w-full">
			<input
				id={id}
				name={name}
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				maxLength={maxLength}
				aria-invalid={!!errMsg}
				aria-describedby={errMsg ? errorId : undefined}
				disabled={isDisabled}
				className={`w-full h-12 px-4 py-3 rounded-[12px]  typo-body1-normal font-regular text-label-normal placeholder:text-label-assistive border  ${errMsg ? 'border-status-destructive focus:border-status-destructive' : 'border-line-normal focus:border-black'} 
						 focus:outline-none disabled:bg-interaction-disable ${className}`}
			/>
			{errMsg && (
				<span id={errorId} className="flex p-1 gap-1 items-center text-status-destructive">
					<InfoCircle className="text-status-destructive" />
					{errMsg}
				</span>
			)}
		</div>
	);
}
