'use client';

import Input from '@/shared/components/Input';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { useNickname } from './hooks/useNickname';

const Nickname = () => {
	const { nickname, setNickname, error, validateDuplicate } = useNickname();

	return (
		<section className="min-w-[343px]">
			<label htmlFor="nickname" className="text-left typo-caption1 font-bold text-interaction-inactive">
				닉네임
			</label>
			<div className="flex gap-[15px] h-10">
				<Input
					id="nickname"
					value={nickname}
					onChange={(val) => {
						setNickname(val);
						validateDuplicate(false);
					}}
					placeholder="3~8글자 이내로 입력"
					errMsg={error.msg}
				/>
				<SolidBtn
					label="중복 확인"
					onClick={() => {
						validateDuplicate(true);
					}}
				/>
			</div>
		</section>
	);
};

export default Nickname;
