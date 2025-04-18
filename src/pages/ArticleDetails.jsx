// components / ArticleDetails.jsx
import comment from '@/assets/images/icon/comment.svg';
import star from '@/assets/images/rhr/star.png';
import starG from '@/assets/images/rhr/starG.png';
import SeriesDetails from '@/pages/SeriesDetails';
import { Link, useParams } from 'react-router';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Introduction from '@/pages/Introduction';

export default function ArticleDetails() {
  // hover
  const [isHovered, setIsHovered] = useState(false);
  // 별점매기기
  const [hoverIndex, setHoverIndex] = useState(-1);
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
  console.log(data[0].keyword);

  // hover 이벤트 핸들러
  const hoverHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

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
                {data[0].keyword[0]}
              </Link>
              <Link className="text-[12px] text-[#00aa73] font-medium leading-[130%]">
                {data[0].keyword[1]}
              </Link>
            </div>
            <div className="flex gap-[8px] items-center">
              <button className="group flex items-center h-[30px]">
                <svg
                  className="w-[24px] h-[24px] file-[#111] group-hover:fill-point1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5H5C4.45 5 4 5.45 4 6V16.335C4 16.885 4.45 17.335 5 17.335H10L12 20L14 17.335H19C19.55 17.335 20 16.885 20 16.335V6C20 5.45 19.55 5 19 5Z" />
                  <path
                    d="M11.8824 8.21252C11.9291 8.12292 12.0574 8.12292 12.1041 8.21252L12.9935 9.91784C13.0122 9.95375 13.0471 9.97836 13.0873 9.98387L15.0641 10.2557C15.1688 10.2701 15.2095 10.3998 15.1318 10.4714L13.7104 11.7826C13.679 11.8116 13.6645 11.8547 13.6722 11.8968L14.0089 13.7548C14.0273 13.856 13.9223 13.9348 13.8302 13.889L12.0489 13.0028C12.0139 12.9853 11.9726 12.9853 11.9376 13.0028L10.1562 13.889C10.0642 13.9348 9.95923 13.856 9.97757 13.7548L10.3143 11.8968C10.322 11.8547 10.3075 11.8116 10.2761 11.7826L8.85464 10.4714C8.77699 10.3998 8.8177 10.2701 8.92237 10.2557L10.8992 9.98387C10.9394 9.97836 10.9743 9.95375 10.993 9.91784L11.8824 8.21252Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[#111] text-[13px] font-bold leading-[130%] group-hover:text-point1">
                  {data[0].comment}
                </span>
              </button>
              <div className="group flex items-center">
                <button className="[background:url('@/assets/images/icon/favorite.png')_no-repeat_50%_50%/100%] group-hover:[background:url('@/assets/images/icon/favoriteG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"></button>
                <span className="text-[#111] text-[13px] font-bold leading-[130%] group-hover:text-point1">
                  {data[0].favorite}
                </span>
              </div>
              <div className="flex">
                <button className="[background:url('@/assets/images/icon/save.png')_no-repeat_50%_50%/100%] hover:[background:url('@/assets/images/icon/saveG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"></button>
              </div>
              <div className="flex">
                <button className="[background:url('@/assets/images/icon/share.png')_no-repeat_50%_50%/100%] hover:[background:url('@/assets/images/icon/shareG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"></button>
              </div>
              <div className="h-[16px] border-r border-[#111] border-1"></div>
              <div className="flex">
                <button className="[background:url('@/assets/images/icon/gift.png')_no-repeat_50%_50%/100%] hover:[background:url('@/assets/images/icon/giftG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"></button>
              </div>
            </div>
          </div>
          <div className="mb-[64px] ">
            <Link className="flex gap-[4px] items-center text-[#111]">
              <img
                src={comment}
                alt="프로필"
                className="w-[32px] h-[32px] rounded-[50%] object-cover border"
              />
              <span className="font-bold">신수정</span>
              <span className="font-medium">임팩트리더스아카데미</span>
            </Link>
          </div>
        </div>
        <div className="w-[588px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>
        <div className="w-full py-[24px]">
          <h3 className="mb-[8px] text-[13px] font-bold">3줄 요약</h3>
          <ul className="w-full flex flex-col gap-[12px]">
            <li className=" flex gap-[12px]">
              <span className="text-[20px] align-text-top leading-5">•</span>
              <p className="font-medium leading-[150%]">
                {data[0].summation[0]}
              </p>
            </li>
            <li className=" flex gap-[12px]">
              <span className="text-[20px] align-text-top leading-5">•</span>
              <p className="font-medium leading-[150%]">
                {data[0].summation[1]}
              </p>
            </li>
            <li className=" flex gap-[12px]">
              <span className="text-[20px] align-text-top leading-5">•</span>
              <p className="font-medium leading-[150%]">
                {data[0].summation[2]}
              </p>
            </li>
          </ul>
        </div>

        <div className="w-[588px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

        <div className=" flex h-[1000px] justify-center items-center">
          <p
            className="text-center"
            style={{ whiteSpace: 'pre-line', lineHeight: '2' }}
          >
            {data[0].contents}
          </p>
        </div>
        <div className="flex flex-col items-center bg-point1 rounded-[6px] py-[40px] px-[66px]">
          <span className="font-bold mb-[16px]">
            더 많은 콘텐츠가 궁금하신가요?
          </span>
          <span className="text-[18px] font-bold mb-[4px]">
            2000여 개의 아티클
          </span>
          <span className="text-[24px] font-bold">무제한 보기</span>
          <Link
            to={Introduction}
            className="w-[388px] bg-[#111] rounded-[6px] py-[14px] px-[16px] mt-[24px] text-center"
          >
            <span className="text-white font-bold">
              지금 첫 달 무료로 시작하기
            </span>
          </Link>
          <div className=" flex mt-[16px] gap-[3px] items-center">
            <span className="text-[13px]">이미 가입했다면</span>
            <Link>
              <span className="underline text-[#111]">로그인하기</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-[64px] mb-[40px]">
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>
          <div className="py-[24px] px-[8px]">
            <div className="flex items-baseline gap-[24px] text-left">
              <span className="w-[78px] text-[13px] font-bold">발행일</span>
              <span className="font-medium">2025.04.07</span>
            </div>
            <div>
              <span>에디터</span>
              <span>채진솔 김다희</span>
            </div>
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
