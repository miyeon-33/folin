import Linker from '@/pages/Linker';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';

export default function LinkerView() {
  // URL에서 topicId 가져오기
  const { topicId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['linker', topicId],
    queryFn: () => fetch(`/linker/${topicId}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (isError) {
    return <p>오류 발생: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-y-[40px] gap-x-[24px] max-sm:grid-cols-2 max-sm:gap-y-[32px] max-sm:gap-x-[8px]">
      {data.map((item) => (
        <div className="w-[calc(100% - 16px)] h-[188px] max-sm:h-[165.5px]">
          <Link to={Linker} className="flex flex-col w-full item-center">
            <img
              src={item.photo}
              alt="링커"
              className="w-[96px] h-[96px] m-auto rounded-[50%] object-cover"
            />
            <div className="w-full flex flex-col mt-[16px] items-center">
              <span className="w-full text-center text-[18px] font-bold text-[#111] mb-[4px]">
                {item.name}
              </span>
              <span className="w-full text-center font-medium text-[#111] break-words">
                {item.job}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
