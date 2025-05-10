'use client';

import Input from '@/shared/components/Input';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { useNickname } from './hooks/useNickname';
import { Dispatch, SetStateAction } from 'react';

const Nickname = ({ isValidate, setIsValidate }: { isValidate: boolean; setIsValidate: Dispatch<SetStateAction<boolean>> }) => {
	const { nickname, setNickname, nicknameError, validateDuplicate } = useNickname();
	return (
		<section className="min-w-[343px]">
			<label htmlFor="nickname" className="text-left typo-caption1 font-bold text-interaction-inactive">
				닉네임
			</label>
			<div className="flex gap-[15px] h-10">
				<Input
					id="nickname"
					name="nickname"
					value={nickname}
					onChange={(val) => {
						setNickname(val);
						validateDuplicate(false);
						setIsValidate(false);
					}}
					placeholder="3~8글자 이내로 입력"
					errMsg={nicknameError.msg}
					posiviteMsg={isValidate ? '사용할 수 있는 닉네임입니다.' : ''}
				/>
				<SolidBtn
					label="중복 확인"
					isDisabled={!(!nicknameError.type && !isValidate)}
					onClick={() => {
						alert('사용가능한 닉네임입니다.');
						setIsValidate(true);
					}}
				/>
			</div>
		</section>
	);
};

export default Nickname;
