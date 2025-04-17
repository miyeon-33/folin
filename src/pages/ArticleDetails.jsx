// components / ArticleDetails.jsx
import comment from '@/assets/images/icon/comment.svg';
import favorite from '@/assets/images/icon/favorite.png';
import favoriteG from '@/assets/images/icon/favoriteG.png';
import save from '@/assets/images/icon/save.png';
import saveG from '@/assets/images/icon/saveG.png';
import share from '@/assets/images/icon/share.png';
import shareG from '@/assets/images/icon/shareG.png';
import gift from '@/assets/images/icon/gift.png';
import giftG from '@/assets/images/icon/giftG.png';
import star from '@/assets/images/rhr/star.png';
import starG from '@/assets/images/rhr/starG.png';
import SeriesDetails from '@/pages/SeriesDetails';
import { Link, useParams } from 'react-router';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function ArticleDetails() {
  // URL에서 topicId 가져오기
  const { articleId } = useParams();

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['post', articleId],
    queryFn: () => fetch(`/post/${articleId}`).then((res) => res.json()),
  });

  if (isPending) {
    return <p>로딩 중...</p>;
  }
  if (isError) {
    return <p>오류 발생: {error.message}</p>;
  }
  console.log(data);

  // hover
  const [isHovered, setIsHovered] = useState(false);
  // hover 이벤트 핸들러
  const hoverHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeaver: () => setIsHovered(false),
  };
  // 별점매기기
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <main className="bg-white">
      <div className="max-w-[588px] pt-[64px] m-auto">
        <div>
          <div className="flex gap-[2px] mb-[10px]">
            <Link to={SeriesDetails}>
              <div
                className="max-w-[calc(100% - 35px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
                // style={{
                //   backgroundColor: item.color,
                //   border: `1px solid ${item.color}`,
                // }}
              >
                1등브랜드의비밀
              </div>
            </Link>
            <div
              className="inline-block bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
              // style={{
              //   backgroundColor: '#fff',
              //   border: `1px solid ${item.color}`,
              // }}
            >
              1화
            </div>
          </div>
          <h1 className="text-[28px] font-bold leading-[103%]">
            신수정의 트레이닝 퇴사가 어려워진 40대에게
          </h1>
          <div className="flex mt-[26px] mb-[28px] justify-between items-center">
            <div className="flex items-center gap-[8px]">
              <Link className="text-[12px] text-[#00aa73] font-medium leading-[130%]">
                커리어
              </Link>
              <Link className="text-[12px] text-[#00aa73] font-medium leading-[130%]">
                롱런
              </Link>
            </div>
            <div className="flex gap-[8px]">
              <button className="h-[30px]" {...hoverHandlers}>
                <img src={comment} alt="댓글" className="w-[24px] h-[24px]" />
                <span>11</span>
              </button>
              <button {...hoverHandlers}>
                <img src={isHovered ? favoriteG : favorite} alt="좋아요" />
                <span>11</span>
              </button>
              <button {...hoverHandlers}>
                <img src={isHovered ? saveG : save} alt="저장" />
              </button>
              <button {...hoverHandlers}>
                <img src={isHovered ? shareG : share} alt="공유" />
              </button>
              <div>|</div>
              <button {...hoverHandlers}>
                <img src={isHovered ? giftG : gift} alt="선물" />
              </button>
            </div>
          </div>
          <div>
            <Link>
              <img src="" alt="프로필" />
              <span>신수정</span>
              <span>임팩트리더스아카데미</span>
            </Link>
          </div>
        </div>

        <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

        <div>
          <h3>3줄 요약</h3>
          <p>
            '커리어 경력 30년·임원 24년' 신수정 대표를 커리어 트레이너로
            모셨습니다. KT 전 부사장으로, 지금은 임팩트리더스아카데미 대표를
            맡고 있죠.
          </p>
        </div>

        <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

        <div className="h-[500px]">
          <p>내용</p>
        </div>
        <div>
          <span>더 많은 콘텐츠가 궁금하신가요?</span>
          <span>2000여 개의 아티클</span>
          <span>무제한 보기</span>
          <button>
            <span>지금 첫 달 무료로 시작하기</span>
          </button>
          <div>
            <span>이미 가입했다면</span>
            <Link>
              <span>로그인하기</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>
          <div>
            <span>발행일</span>
            <span>2025.04.07</span>
          </div>
          <div>
            <span>에디터</span>
            <span>채진솔 김다희</span>
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>
          <div></div>
        </div>
        <div>
          <div>※</div>
          <div>
            폴인은 유료 콘텐츠 구독 서비스로 무단 전재와 재배포를 금합니다.
            원문의 20% 이상 인용할 수 없으며, 일부 인용한 경우 반드시 출처를
            표기해야 합니다.
          </div>
        </div>
        <div>
          <div>
            <span>후기</span>
            <span>11(댓글)개</span>
          </div>
          <div>
            <div>
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index <= hoverIndex ? starG : star}
                  alt="별점"
                  className="w-12 cursor-pointer transition-all"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                />
              ))}
            </div>
            <div>
              <div>
                <textarea
                  type="textarea"
                  placeholder="콘텐츠에 대한 의견을 남겨주세요."
                  className="w-full h-[116px] bg-[#ebedec] py-[12px] px-[16px] text-[#111] rounded-[6px] font-medium leading-[150%]"
                ></textarea>
              </div>
              <div>
                <button>확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
