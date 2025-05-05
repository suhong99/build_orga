import { useEffect, useState } from 'react';

type ErrorType = 'length' | 'duplicate' | null;

interface NicknameError {
	type: ErrorType;
	msg: string | null;
}

interface UseNicknameReturn {
	nickname: string;
	setNickname: React.Dispatch<React.SetStateAction<string>>;
	error: NicknameError;
	validateDuplicate: (isDuplicate: boolean) => void;
}

export function useNickname(): UseNicknameReturn {
	const [nickname, setNickname] = useState<string>('');
	const [error, setError] = useState<NicknameError>({ type: null, msg: null });
	// 중복 검사 결과를 외부에서 전달받아 에러 상태 업데이트
	const validateDuplicate = (isDuplicate: boolean) => {
		if (isDuplicate) {
			setError({ type: 'duplicate', msg: '이미 사용 중인 닉네임입니다.' });
		} else {
			// 중복 에러가 해제되면 길이 검사 재실행
			if (nickname.length < 3 || nickname.length > 8) {
				setError({ type: 'length', msg: '3~8글자 사이로 입력해주세요' });
			} else {
				setError({ type: null, msg: null });
			}
		}
	};
	useEffect(() => {
		if (nickname === '') {
			setError({ type: null, msg: null });
			return;
		}
		// 중복 에러가 있으면 길이 검사하지 않음
		if (error.type === 'duplicate') return;
		if (nickname.length < 3 || nickname.length > 8) {
			setError({ type: 'length', msg: '3~8글자 사이로 입력해주세요' });
		} else {
			setError({ type: null, msg: null });
		}
	}, [error.type, nickname]);
	return {
		nickname,
		setNickname,
		error,
		validateDuplicate,
	};
}
