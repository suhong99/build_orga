import Link from 'next/link';
import Image from 'next/image';
import { SolidBtn } from '@/shared/components/SolidBtn';

export default function NotFound() {
	return (
		<div className="mx-auto flex flex-col items-center px-6 py-8 gap-6 desktop:py-12">
			<div className="relative w-[185px] desktop:w-[300px] aspect-[300/415]">
				<Image
					src="/images/oops.png"
					alt="not-found"
					draggable={false}
					fill
					sizes="(min-width: 960px) 300px, 185px"
					priority
					className="object-contain"
				/>
			</div>

			<div className="flex flex-col items-center gap-3">
				<h2 className="typo-title2 text-label-normal font-bold desktop:typo-display1">Page Not Found</h2>
				<p className="text-center flex-wrap break-words typo-body1-normal font-regular desktop:typo-heading1">
					페이지의 주소가 잘못 입력되었거나, 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
				</p>
			</div>
			<Link href="/">
				<SolidBtn label={'홈페이지로 이동'} />
			</Link>
		</div>
	);
}
