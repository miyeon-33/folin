import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import open from '@/assets/images/rhr/open.png';

export default function SeminarDetails() {
  const { articleId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['seminar', articleId],
    queryFn: () => fetch(`/seminar/${articleId}`).then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-[#ebedec] ">
      <div className="max-w-[1200px] h-[1500px] mx-auto flex justify-center ">
        <div className="mt-[102px]">
          {/* 이미지 */}
          <div className="m-[0px_auto_40px] max-w-[256px] ">
            {/* <img
              className="rounded-[6px] h-[342px] w-[full] "
              src={data?.seminar.image}
              alt={data?.seminar.title}
            /> */}
          </div>

          {/* 아이콘 */}
          <div className=""></div>

          {/* 타이틀 */}
          {/* <div className="text-center">
            <h3 className="mb-[8px] text-[13px] text-[#00aa73] font-medium">
              {data?.type.map((item) => (
                <span key={item} className="mr-[10px]">
                  {item}
                </span>
              ))}
            </h3>
            <h2 className="text-[28px] font-extrabold">
              {data?.dettit}
            </h2>
          </div> */}

          {/* 프로필 */}
          {/* <div className="flex justify-center gap-[10px] m-[32px_auto_40px]">
            <img
              src={data?.profile.pfpImg}
              alt={data?.profile.pfpName}
              className="rounded-[50%] w-[34px] h-[34px] "
            />
            <p className="leading-[32px] font-medium">
              <strong className="font-extrabold mr-[8px]">
                {data?.profile.pfpName}
              </strong>
              {data?.profile.pfpJob}
            </p>
          </div> */}

          {/* 가격 */}
          {/* <div className="mx-auto bg-white rounded-[10px] p-[16px_16px_10px] w-[384px] max-w-[100%] ">
            <p className="flex justify-between font-bold mb-[8px]">
              <strong className="font-bold">개별 구매가</strong>
              {data?.details.price}원
            </p>
            <p className="flex justify-between text-[#00aa73] ">
              <strong className="font-bold leading-[42px] ">
                Plus 멤버십 회원가
              </strong>
              <span className="font-bold">
                <em className="font-extrabold text-[24px] mr-[2px]">
                  {data?.details.plus}
                </em>
                원
              </span>
            </p>
            {data?.details?.plus === '0' && (
              <div className="flex items-center justify-between font-extrabold text-[15px] border-[#00d48d] border-t-1">
                <p className="mt-[15px]">
                  0원에 보려면? 월 14,800원 폴인 구독하기
                </p>
                <img
                  src={open}
                  className="w-[16px] h-[16px] -rotate-90 mt-[15px]"
                />
              </div>
            )}
          </div> */}

          {/* 버튼 */}
          {/* <div className="flex justify-center flex-col">
            <div className="mt-[8px] mx-auto">
              {data?.details.detcat.includes('신청하기') ||
              data?.details.detcat.includes('비디오') ? (
                <Link
                  to={
                    data?.details?.detcat?.includes('신청하기')
                      ? '/Login'
                      : `/video/${data?.details?.detid}`
                  }
                >
                  <button
                    type="button"
                    className="btn h-[48px] max-w-[100%] w-[384px] flex justify-center text-[15px] font-bold rounded-[8px] bg-[#00d48d] border-0 "
                  >
                    {data?.details?.detbtn}
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn h-[48px] max-w-[100%] w-[384px] flex justify-center text-[15px] font-bold text-[#bfbfbf] rounded-[8px] bg-white border-0 cursor-default"
                  disabled
                >
                  {data?.details?.detbtn}
                </button>
              )}
            </div>
            <div className="mx-auto mt-[10px]">
              {data?.details?.proposer > 20 && (
                <p className="text-[12px] font-medium mb-[64px]">
                  {data?.details?.proposer}명이 신청했어요
                </p>
              )}
            </div>
          </div> */}

          <p>...,,,,,,.{data?.title}</p>
        </div>
      </div>
    </main>
  );
}
