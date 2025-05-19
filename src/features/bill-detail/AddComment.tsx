'use client';

import Input from '@/shared/components/Input';
import { SolidBtn } from '@/shared/components/SolidBtn';

const AddComment = () => {
	return (
		<>
			<Input id="" value={''} onChange={() => {}} placeholder="이 법안에 대한 의견을 공유해주세요." />
			<div className="flex w-full justify-end">
				<SolidBtn
					size="small"
					label="의견 나누기"
					className="font-medium desktop:font-bold desktop:typo-body2-normal w-[90px] desktop:w-[110px] desktop:h-[40px]"
				/>
			</div>
		</>
	);
};

export default AddComment;
