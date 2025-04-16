// components /series /SeriesDetails.jsx
import share from '@/assets/images/rhr/share.png';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function SeriesDetails() {
  // URL에서 topicId 가져오기
  const { articleId } = useParams();
  // 날짜 형식 변경 함수
  const formatDate = (date) => {
    return date.replace(/-/g, '.');
  };

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

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[1248px] w-full pt-[52px] px-[24px]  mx-auto h-[1500px] mt-0">
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
            <p className="text-[18px] font-medium break-keep leading-7">
              {data[0].introduce}
            </p>
          </div>
          <div className="w-[588px] mx-[306px] border-t-[1px] border-solid border-point1"></div>
          <div className="w-[588px] mx-[306px] py-[40px]">
            <h3 className="text-center text-[18px] font-bold mb-[16px]">
              누구를 위한 시리즈인가요?
            </h3>
            <p className="text-[18px] font-medium break-keep leading-7">
              {data[0].who}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
