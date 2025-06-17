import Image from 'next/image';
import HeartIcon from '../icon/Heart';

export interface CommentType {
	/** 댓글 고유 ID (map의 key 등으로 사용) */
	id: string;
	/** 작성자 프로필 이미지 URL */
	img: string;
	/** 작성자 닉네임 */
	nickname: string;
	/** 작성일자  */
	date: string;
	/** 댓글이 수정되었는지 여부 */
	isEdited: boolean;
	/** 댓글 본문 내용 */
	text: string;
	/** 좋아요 수 */
	likeNum: number;
	/** 현재 사용자가 좋아요를 눌렀는지 여부 */
	isLiked: boolean;
	/** 본인이 작성자인지*/
	isWriter: boolean;
}

/**
 * 개별 댓글 컴퍼넌트
 *  시맨틱한 태그 사용을 위해 li태그 사용. 배열 래퍼 하위에서 map 돌려야 합니다.
 */
const Comment = ({ img, nickname, date, isEdited, text, likeNum, isLiked, isWriter }: CommentType) => {
	// TODO: id 및 로직
	return (
		<li className="flex w-full pr-1 pb-2 gap-3 desktop:pr-0 desktop:gap-4.5">
			<Image
				src={img || '/images/profile.png'}
				alt="프로필 이미지"
				width={48}
				height={48}
				className="w-[32px] h-[32px] desktop:w-[48px] desktop:h-[48px] rounded-full"
				draggable={false}
				priority
			/>
			<div className="flex flex-col flex-1 gap-2">
				<div>
					<div className="typo-body2-normal font-bold text-label-normal desktop:typo-body1-normal">{nickname}</div>
					<div className="typo-label2 font-regular text-line-normal desktop:typo-body2-normal">
						{date} {isEdited && '(수정됨)'}
					</div>
				</div>
				<div className="break-words whitespace-pre-wrap typo-body2-normal font-regular text-label-normal desktop:typo-body1-normal">{text}</div>
				<div className="flex w-full justify-between">
					<button className={`flex items-center typo-label1-normal font-regular ${isLiked ? 'text-[#ff4242]' : ''}`}>
						<HeartIcon isLiked={isLiked} className="h-4 w-4 desktop:w-5 desktop:h-5" /> {likeNum}
					</button>
					<div className="flex typo-caption1 font-regular gap-2 desktop:typo-body2-normal">
						{isWriter ? (
							<>
								<button>수정하기</button>
								<button>삭제하기</button>
							</>
						) : (
							<button>신고하기</button>
						)}
					</div>
				</div>
			</div>
		</li>
	);
};

export default Comment;
