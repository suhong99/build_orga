import { useEffect, useState } from 'react';

type ErrorType = 'length' | 'duplicate' | null;

interface NicknameError {
	type: ErrorType;
	msg: string | null;
}

export interface UseNicknameReturn {
	nickname: string;
	setNickname: React.Dispatch<React.SetStateAction<string>>;
	nicknameError: NicknameError;
	validateDuplicate: (isDuplicate: boolean) => void;
}

export function useNickname(): UseNicknameReturn {
	const [nickname, setNickname] = useState<string>('');
	const [nicknameError, setNicknameError] = useState<NicknameError>({ type: null, msg: null });
	// 중복 검사 결과를 외부에서 전달받아 에러 상태 업데이트
	const validateDuplicate = (isDuplicate: boolean) => {
		if (isDuplicate) {
			setNicknameError({ type: 'duplicate', msg: '이미 사용 중인 닉네임입니다.' });
		} else {
			// 중복 에러가 해제되면 길이 검사 재실행
			if (nickname.length < 3 || nickname.length > 8) {
				setNicknameError({ type: 'length', msg: '3~8글자 사이로 입력해주세요' });
			} else {
				setNicknameError({ type: null, msg: null });
			}
		}
	};
	useEffect(() => {
		if (nickname === '') {
			setNicknameError({ type: null, msg: null });
			return;
		}
		// 중복 에러가 있으면 길이 검사하지 않음
		if (nicknameError.type === 'duplicate') return;
		if (nickname.length < 3 || nickname.length > 8) {
			setNicknameError({ type: 'length', msg: '3~8글자 사이로 입력해주세요' });
		} else {
			setNicknameError({ type: null, msg: null });
		}
	}, [nicknameError.type, nickname]);
	return {
		nickname,
		setNickname,
		nicknameError,
		validateDuplicate,
	};
}
