'use client';

import { useState } from 'react';
import { uploadProfileImg } from './api/server';

type ProfileImageProps = {
	img: string; // 초기 이미지 URL
};

const ProfileImage = ({ img }: ProfileImageProps) => {
	const [preview, setPreview] = useState<string>(img);
	const [file, setFile] = useState<File | null>(null);
	const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'fail'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (!selectedFile) return;

		setFile(selectedFile);

		const reader = new FileReader();
		reader.onloadend = () => {
			setPreview(reader.result as string);
		};
		reader.readAsDataURL(selectedFile);
	};

	const handleUpload = async () => {
		if (!file) return;

		setStatus('uploading');

		const formData = new FormData();
		formData.append('file', file);

		const result = await uploadProfileImg(formData);

		switch (result.status) {
			case 'success':
				setStatus('success');
				alert('이미지가 변경되었습니다');
				break;
			case 'relogin':
				setStatus('fail');
				alert('로그인이 필요합니다.');
				break;
			case 'retry':
			default:
				setStatus('fail');
				alert('업로드 실패. 다시 시도해주세요.');
				break;
		}
	};

	return (
		<section className="flex w-full gap-5 desktop:px-2 items-center">
			<label htmlFor="file" className="rounded-full w-[100px] h-[100px] bg-gray-100 overflow-hidden cursor-pointer">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={preview} alt="프로필 이미지" className="w-full h-full object-cover" />
			</label>
			<input id="file" type="file" accept="image/*" onChange={handleChange} className="hidden" />
			<button
				className="typo-label2 font-bold border-1 px-[14px] py-[7px] rounded-[8px] border-primary-main-normal text-primary-main-normal hover:opacity-85"
				onClick={handleUpload}
				disabled={status === 'uploading'}
			>
				{status === 'uploading' ? '업로드 중...' : '프로필 사진 업로드'}
			</button>
		</section>
	);
};

export default ProfileImage;
