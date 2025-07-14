'use client';

import { use, useState } from 'react';
import Modal from '@/shared/components/Modal';

import CommentReportForm from '@/features/bill-detail/CommentReportForm';
import { SolidBtn } from '@/shared/components/SolidBtn';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	const [isReported, setIsReported] = useState<boolean>(false);
	const router = useRouter();

	return (
		<Modal className="w-[335px] desktop:w-[560px] h-[570px] desktop:h-[570px]">
			<div className="flex flex-col items-center w-full ">
				<h2 className="w-full typo-headline2 pl-6 mt-6 my-5">댓글 신고</h2>
				{!isReported ? (
					<CommentReportForm id={id} nextStep={() => setIsReported(true)} />
				) : (
					<div className="flex flex-col  gap-5 px-5 py-5 h-full">
						<div className="flex flex-col gap-5 flex-1">
							<div className="flex flex-col gap-2">
								<h3 className="typo-headline2 font-bold text-label-neutral">커뮤니티에 도움을 주셔서 감사합니다</h3>
								<p className="typo-body1-normal font-regular text-label-neutral">
									신고해주신 내용은 유해한 콘텐츠로부터 커뮤니티를 보호하는 데 도움이 됩니다.
									<br /> 누군가 위험한 상황에 처해 있다고 생각된다면, 현지 법 집행 기관에 연락해 주세요.
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="typo-headline2 font-bold text-label-neutral">📌 이후 단계</h3>
								<p className='typo-body1-normal font-regular text-label-neutral"'>
									심각하거나 반복적인 위반에 해당할 경우, 그래이픽에서는 댓글 작성자의 댓글 기능을 일시적으로 제한할 수 있습니다.
								</p>
							</div>
						</div>
						<SolidBtn label="확인" size="large" onClick={() => router.back()} />
					</div>
				)}
			</div>
		</Modal>
	);
}
