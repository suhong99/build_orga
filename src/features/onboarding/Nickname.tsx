'use client';

import Input from '@/shared/components/Input';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { useNickname } from './hooks/useNickname';

const Nickname = () => {
	const { nickname, setNickname, error, setError } = useNickname();

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
						setError({ type: null, msg: null });
					}}
					placeholder="3~8글자 이내로 입력"
					errMsg={error.msg}
				/>
				<SolidBtn
					label="중복 확인"
					onClick={() => {
						setError({ type: 'duplicate', msg: '중복된 문자입니다' });
					}}
				/>
			</div>
		</section>
	);
};

export default Nickname;
