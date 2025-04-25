// components /series /SeriesDetails.jsx
import share from '@/assets/images/rhr/share.png';
import newBtn from '@/assets/images/icon/newBtn.svg';
import videoBtn from '@/assets/images/icon/play.svg';
import freeBtn from '@/assets/images/icon/freeBtn.svg';
import LinkerView from '@/components/series/LinkerView';
import PlannerView from '@/components/series/PlannerView';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';
import Popup from '@/components/series/Popup';
import { useState } from 'react';

export default function SeriesDetails() {
  // URL에서 topicId 가져오기
  const { topicId } = useParams();
  // 팝업제어
  const [isPopupVisible, setPopupVisible] = useState(false);

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['series', topicId],
    queryFn: () => fetch(`/series/${topicId}`).then((res) => res.json()),
  });

  if (isPending) {
    return <p>로딩 중...</p>;
  }
  if (isError) {
    return <p>오류 발생: {error.message}</p>;
  }

  // 날짜 형식 변경 함수
  const formatDate = (date) => {
    return date.replace(/-/g, '.');
  };

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[1248px] pt-[52px] px-[24px] h-auto my-0 mx-auto max-md:px-[8px] max-md:pt-[56px]">
        <div className="flex flex-col items-center">
          <div className="w-[588px] mx-[306px] py-[64px] text-center max-sm:mx-0 max-sm:py-[40px] max-sm:w-full">
            <p className="mb-[12px] font-medium text-[#111]">
              {formatDate(data[0].createdAt)}
            </p>
            <h2 className="text-[28px] font-bold mb-[16px] mt-[24px]">
              {data[0].topic}
            </h2>
            <div>
              <button
                type="button"
                onClick={() => {
                  setPopupVisible(true);
                }}
              >
                <img
                  src={share}
                  alt="공유버튼"
                  className="w-[24px] object-cover"
                />
              </button>
              {isPopupVisible ? (
                <Popup
                  isPopupVisible={isPopupVisible}
                  setPopupVisible={setPopupVisible}
                />
              ) : null}
            </div>
          </div>

          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

          <div className="w-[588px] mx-[306px] py-[40px] max-sm:py-[32px] max-sm:w-full">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              왜 봐야 할까요?
            </h3>
            <p
              className="text-[18px] font-medium break-keep leading-7 max-sm:px-[8px]"
              style={{ whiteSpace: 'pre-line' }}
            >
              {data[0].introduce}
            </p>
          </div>

          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

          <div className="w-[588px] mx-[306px] py-[40px] max-sm:py-[32px] max-sm:w-full">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              누구를 위한 시리즈인가요?
            </h3>
            <p
              className="text-[18px] font-medium break-keep leading-7 max-sm:px-[8px]"
              style={{ whiteSpace: 'pre-line', lineHeight: '2' }}
            >
              {data[0].who}
            </p>
          </div>

          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

          <div className="pt-[40px] max-sm:pt-[32px]">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              콘텐츠
            </h3>
            <p className="text-center mb-[40px] font-medium text-[#111] max-sm:mb-[32px]">
              총 {data[data.length - 1].tag}
            </p>
            <div className="mb-[48px] max-sm:mb-[32px]">
              <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-sm:flex max-sm:flex-wrap max-sm:gap-[24px]">
                {data?.map((item) => (
                  <li
                    key={item.id}
                    className="w-[calc(100% - 16px)] max-sm:w-full max-sm:pb-[16px]"
                  >
                    <Link
                      className="block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300 max-sm:transition-none max-sm:hover:text-[#111] max-sm:hover:translate-y-0 max-sm:flex"
                      to={
                        item.video === 'N'
                          ? `/article/${item.id}`
                          : `/video/${item.id}`
                      }
                    >
                      <div className="w-[calc(100% - 16px)] h-full relative mr-[16px] max-sm:shrink-0 max-sm:w-[143px] max-sm:h-[143px] max-sm:mr-0">
                        <div className="absolute flex z-2 top-[10px] left-[10px] gap-[2px]">
                          {item.video === 'Y' && (
                            <img src={videoBtn} alt="동영상" className="mb-2" />
                          )}
                          {(new Date() - new Date(item.createdAt)) /
                            (1000 * 60 * 60 * 24) <=
                            7 && (
                            <img
                              src={newBtn}
                              alt="새로운게시물"
                              className="mb-2"
                            />
                          )}
                          {item.free === 'Y' && (
                            <img src={freeBtn} alt="무료" className="mb-2" />
                          )}
                        </div>
                        <img
                          src={item.thumbnail}
                          alt="썸네일"
                          className="w-full h-full object-cover rounded-[6px]"
                        />
                      </div>
                      <div className="relative w-[calc(100%-16px)] h-auto p-[10px] -translate-y-[16px] ml-[16px] bg-white rounded-[6px] max-sm:w-[calc(100%-127px)] max-sm:translate-y-[30px] max-sm:-translate-x-[16px] max-sm:ml-0 max-sm:h-full">
                        <div className="flex items-center gap-[2px] max-sm:mb-[10px]">
                          <div
                            className="max-w-[calc(100% - 35px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold leading-[150%] overflow-hidden overflow-ellipsis break-all whitespace-nowrap"
                            style={{
                              backgroundColor: item.color,
                              border: `1px solid ${item.color}`,
                            }}
                          >
                            {item.topic}
                          </div>
                          <div
                            className="inline-block bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold leading-[150%] whitespace-nowrap"
                            style={{
                              backgroundColor: '#fff',
                              border: `1px solid ${item.color}`,
                            }}
                          >
                            {item.tag}
                          </div>
                        </div>
                        <p className="line-clamp-2 break-words overflow-ellipsis mt-[10px] mb-[16px] text-[18px] font-bold leading-[130%]">
                          {item.title}
                        </p>
                        <div>
                          <span className="mr-[8px] text-[12px] font-bold">
                            {item.member}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

          <div className="w-[588px] mx-[306px] py-[40px] max-sm:w-full">
            <h3 className="text-center text-[18px] font-bold mb-[40px]">
              링커
            </h3>
            <LinkerView />
          </div>

          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

          <div className="w-[588px] mx-[306px] py-[40px] max-sm:w-full">
            <h3 className="text-center text-[18px] font-bold mb-[40px]">
              기획자
            </h3>
            <PlannerView />
          </div>
        </div>
      </div>
    </main>
  );
}
