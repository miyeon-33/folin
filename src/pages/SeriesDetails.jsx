// components /series /SeriesDetails.jsx
import share from '@/assets/images/rhr/share.png';
import newBtn from '@/assets/images/icon/newBtn.svg';
import videoBtn from '@/assets/images/icon/play.svg';
import freeBtn from '@/assets/images/icon/freeBtn.svg';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';
import LinkerView from '@/components/series/LinkerView';

export default function SeriesDetails() {
  // URL에서 topicId 가져오기
  const { articleId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['series', articleId],
    queryFn: () => fetch(`/series/${articleId}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (isError) {
    return <p>오류 발생: {error.message}</p>;
  }
  console.log(data);

  // 날짜 형식 변경 함수
  const formatDate = (date) => {
    return date.replace(/-/g, '.');
  };

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[1248px] w-full pt-[52px] px-[24px]  mx-auto h-auto mt-0">
        <div className="w-full max-w-[1200px]">
          <div className="w-[588px] mx-[306px] py-[64px] text-center">
            <p className="mb-[12px] font-medium text-[#111]">
              {formatDate(data[0].createdAt)}
            </p>
            <h2 className="text-[28px] font-bold mb-[16px] mt-[24px]">
              {data[0].topic}
            </h2>
            <button type="button">
              <img
                src={share}
                alt="공유버튼"
                className="w-[24px] object-cover"
              />
            </button>
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1"></div>
          <div className="w-[588px] mx-[306px] py-[40px]">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              왜 봐야 할까요?
            </h3>
            <p
              className="text-[18px] font-medium break-keep leading-7"
              style={{ whiteSpace: 'pre-line' }}
            >
              {data[0].introduce}
            </p>
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1"></div>
          <div className="w-[588px] mx-[306px] py-[40px]">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              누구를 위한 시리즈인가요?
            </h3>
            <p
              className="text-[18px] font-medium break-keep leading-7"
              style={{ whiteSpace: 'pre-line', lineHeight: '2' }}
            >
              {data[0].who}
            </p>
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1"></div>
          <div className="pt-[40px]">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              콘텐츠
            </h3>
            <p className="text-center mb-[40px] font-medium text-[#111]">
              총 {data[data.length - 1].tag}
            </p>
            <div className="mb-[48px]">
              <ul className="flex gap-[24px]">
                {data?.map((item) => (
                  <li key={item.id} className="w-[calc(100% - 16px)]">
                    <Link className="block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300">
                      <div className="w-[calc(100% - 16px)] h-full relative mr-[16px]">
                        <div className="absolute flex z-2 top-[10px] left-[10px] gap-[2px]">
                          {item.video === 'Y' && (
                            <img src={videoBtn} alt="동영상" className="mb-2" />
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
                      <div className="relative w-[calc(100% - 16px)] h-[auto] p-[10px] -translate-y-[16px] ml-[16px] bg-white rounded-[6px]">
                        <div className="flex items-center gap-[2px]">
                          <div
                            className="max-w-[calc(100% - 35px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
                            style={{
                              backgroundColor: item.color,
                              border: `1px solid ${item.color}`,
                            }}
                          >
                            {item.topic}
                          </div>
                          <div
                            className="inline-block bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
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
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1"></div>
          <div className="w-[588px] mx-[306px] py-[40px]">
            <h3 className="text-center text-[18px] font-bold mb-[40px]">
              링커
            </h3>
            <LinkerView />
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1"></div>
          <div className="w-[588px] mx-[306px] py-[40px]">
            <h3 className="text-center text-[18px] font-bold mb-[40px]">
              기획자
            </h3>
            <div className="flex gap-y-[40px] gap-x-[24px]">
              <div className="w-[calc(100% - 16px)] ">
                <Link>
                  <img src="" alt="" />
                  <div>
                    <span>신수정</span>
                    <span>임팩트리더스아카데미대표</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
