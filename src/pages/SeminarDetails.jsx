import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function SeminarDetails() {
  const { articleId } = useParams();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['seminar', articleId],
    queryFn: () =>
      fetch(`/api/seminars/${articleId}`).then((res) => res.json()),
    enabled: !!articleId,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-[#ebedec] ">
      <div className="max-w-[1200px] h-[1500px] mx-auto flex justify-center ">
        <div className="mt-[102px]">
          <div className="m-[0px_auto_40px] max-w-[256px] ">
            <img
              className="rounded-[6px] h-[342px] w-[full] "
              src={data?.seminar?.image}
              alt={data?.seminar?.title}
            />
          </div>
          <div className=""></div>
          <div className="text-center">
            <h3 className="mb-[8px] text-[13px] text-[#00aa73] font-medium">
              {data?.details?.type?.map((item) => (
                <span key={item} className="mr-[10px]">
                  {item}
                </span>
              ))}
            </h3>
            <h2 className="text-[28px] font-extrabold">
              {data?.details?.dettit}
            </h2>
          </div>
          <div className="flex justify-center gap-[18px] m-[32px_auto_40px]">
            <img
              src={data?.profile?.pfpImg}
              alt={data?.profile?.pfpName}
              className="rounded-[50%] w-[34px] h-[34px] "
            />
            <p className="leading-[32px] font-medium">
              <strong className="font-extrabold mr-[8px]">
                {data?.profile?.pfpName}
              </strong>
              {data?.profile?.pfpJob}
            </p>
          </div>
          <div className="mx-auto bg-white rounded-[10px] p-[16px_16px_10px] w-[100%] max-w-[384px] h-[135px]">
            <p className="flex justify-between font-medium mb-[8px]">
              <strong className="font-bold">개별 구매가</strong>
              ....원
            </p>
            <p className="flex justify-between text-[#00aa73]">
              <strong className="font-bold leading-[42px]">
                Plus 멤버십 회원가
              </strong>
              <span>
                <em className="font-extrabold text-[24px]">....</em>원
              </span>
            </p>
          </div>
          <p>....</p>
        </div>
      </div>
    </main>
  );
}
