import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import ArticleBox from '@/components/series/ArticleBox';

export default function Linker() {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['linkers', id],
    queryFn: () => fetch(`/linkers/${id}`).then((res) => res.json()),
  });
  console.log(data, '===');

  const name = data?.[0]?.name;

  const { isLoading: articleIsLoading, data: articleData } = useQuery({
    queryKey: ['article', name],
    queryFn: () => fetch(`/articles/${name}`).then((res) => res.json()),
  });

  const { data: seminarData, isLoading: seminarLoading } = useQuery({
    queryKey: ['seminars'],
    queryFn: () => fetch('/seminars').then((res) => res.json()),
  });

  const matchedSeminars =
    seminarData?.filter((seminars) => seminars.name === name) || [];

  if (isLoading)
    return (
      <div className="h-[1300px] w-[100%] bg-[#ebedec] flex justify-center items-center">
        <p className="font-bold">Loading...</p>
      </div>
    );
  if (isError)
    return (
      <div className="h-[1300px] w-[100%] bg-[#ebedec] flex justify-center items-center">
        <p className="font-bold">Error: {error.message}</p>
      </div>
    );

  return (
    <main className="bg-[#ebedec]">
      {data.length > 0 ? (
        <div className="flex justify-center items-center flex-col p-[172px_24px_160px_24px]">
          <img
            src={data[0].photo}
            alt={data[0].name}
            className="w-[192px] h-[192px] rounded-[50%]"
          />

          <h2 className=" font-bold text-[28px] mb-[15px] mt-[40px]">
            {data[0].name}
          </h2>
          <p className="text-[15px] mb-[50px] font-medium">{data[0].job}</p>

          <div className="border-b-[1px] border-t-[1px] border-[#00d48d] w-[100%] p-[40px_0] max-w-[386px] m-auto">
            <p className="text-[18px]  leading-[180%] font-medium">
              {data[0].achievements}
            </p>
          </div>

          {/* 아티클 데이타 가져와 사용 */}
          <div className="mt-[30px] max-w-[400px] m-auto">
            <h3 className="font-bold text-[18px] mb-[40px] text-center">
              아티클·비디오
            </h3>
            {articleData?.length > 0 && (
              <ul className="m-[0_0_40px] flex gap-4 p-[20px_20px_20px_20px]">
                {articleData.map((item) => (
                  <li key={item.id}>
                    <ArticleBox art={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className="border-t-[1px] w-[386px] border-[#00d48d]"></span>

          {/* 세미나 데이타 가져와 사용 */}
          <div className="mt-[30px]">
            <h3 className="font-bold text-[18px]">세미나</h3>
            <div className="">
              <ul>
                {matchedSeminars.map((seminar) => (
                  <li key={seminar.id}>
                    <div className="border">
                      <p>{seminar.title}</p>
                      <p>{seminar.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-[172px_24px_160px_24px] h-[1000px] place-content-center justify-center items-center text-center">
          <h3 className="font-bold text-[40px]">
            아직 등록된 정보가 없어요. 조금만 기다려 주세요!
          </h3>
          <p className="text-[20px] mt-[50px]">
            다른 조건으로 검색해보시면 더 많은 결과를 찾을 수 있어요
          </p>
        </div>
      )}
    </main>
  );
}
