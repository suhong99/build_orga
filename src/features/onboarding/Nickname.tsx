'use client';

import { useState, useEffect } from 'react';
import Input from '@/shared/components/Input';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { useNickname } from './hooks/useNickname';

// 구체적인 타입 정의
type NicknameInputExtension = {
	successMsg?: string | null;
};

type NicknameBtnExtension = {
	disabled?: boolean;
	className?: string;
};

interface NicknameProps {
	isValidate: boolean;
	setIsValidate: React.Dispatch<React.SetStateAction<boolean>>;
	initialNick?: string;
}

const Nickname = ({ setIsValidate, initialNick }: NicknameProps) => {
	const { nickname, setNickname, error, isChecking, isValidLength, isDuplicateChecked, checkDuplicate, isValid, isSameAsInitial } =
		useNickname(initialNick);

	const isDuplicateButtonDisabled = !isValidLength || isSameAsInitial || isChecking || isDuplicateChecked;
	const [statusMessage, setStatusMessage] = useState<string | null>(null);

	useEffect(() => {
		if (isValid) {
			setStatusMessage('사용 가능한 닉네임입니다');
			setIsValidate(true);
		} else if (isSameAsInitial) {
			setIsValidate(true);
		} else {
			setStatusMessage(null);
			setIsValidate(false);
		}
	}, [isValid, setIsValidate, isSameAsInitial]);

	return (
		<section className="flex flex-col gap-3 w-full">
			<label htmlFor="nickname" className="text-left typo-caption1 font-bold text-interaction-inactive">
				닉네임
			</label>
			<div className="flex gap-[15px] h-10">
				<Input<NicknameInputExtension>
					id="nickname"
					name="nickname"
					value={nickname}
					onChange={(val) => setNickname(val)}
					placeholder="3~8글자 이내로 입력"
					errMsg={isSameAsInitial ? '' : error.msg}
					successMsg={statusMessage}
				/>
				<SolidBtn<NicknameBtnExtension>
					label={isChecking ? '확인 중...' : '중복 확인'}
					onClick={checkDuplicate}
					disabled={isDuplicateButtonDisabled}
				/>
			</div>
		</section>
	);
};

export default Nickname;
