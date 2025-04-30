import { useEffect, useState } from 'react';

type ErrorType = 'length' | 'duplicate' | null;

export function useNickname() {
	const [nickname, setNickname] = useState<string>('');
	const [error, setError] = useState<{ type: ErrorType; msg: string | null }>({
		type: null,
		msg: null,
	});

	useEffect(() => {
		if (nickname === '') return;
		if (error.type === 'duplicate') return;

		if (nickname.length < 3 || nickname.length > 8) {
			setError({ type: 'length', msg: '3~8글자 사이로 입력해주세요' });
		} else {
			setError({ type: null, msg: null });
		}
	}, [nickname, error.type]);

	return {
		nickname,
		setNickname,
		error,
		setError,
	};
}
