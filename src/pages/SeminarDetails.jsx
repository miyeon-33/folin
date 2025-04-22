import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import open from '@/assets/images/rhr/open.png';
import LinkerView from '@/components/series/LinkerView';

export default function SeminarDetails() {
  const { articleId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['seminar', articleId],
    queryFn: () => fetch(`/seminar/${articleId}`).then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[520px] h-[100%] mx-auto flex">
        <div className="mt-[102px] mb-[40px]">
          <div className="flex justify-center ml-[10px]">
            <img
              src={data?.image}
              alt={data?.title}
              className="rounded-[6px] h-[342px] w-auto"
            />

            <div className="flex flex-col justify-end ml-[10px]">
              <Link
                to="/Login"
                type="button"
                className="btn border-0 w-[28px] h-[28px] [background:url(/images/bhj/i-heart.png)_no-repeat_center_center/28px] hover:bg-[url(/images/bhj/i-heart-on.png)]"
              >
                <span className="sr-only">좋아요</span>
              </Link>

              <Link
                to="/Login"
                type="button"
                className="btn border-0 w-[28px] h-[28px] [background:url(/images/bhj/i-mark.png)_no-repeat_center_center/28px] hover:bg-[url(/images/bhj/i-mark-on.png)]"
              >
                <span className="sr-only">북마크</span>
              </Link>

              <Link
                to="/Login"
                type="button"
                className="btn border-0 w-[32px] h-[30px] [background:url(/images/bhj/i-share-icon.png)_no-repeat_center_center/31px] hover:bg-[url(/images/bhj/i-share-on-icon.png)]"
              >
                <span className="sr-only">공유하기</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col mt-[40px]">
            <h3 className="font-bold text-center text-[28px]">{data?.title}</h3>
            <p className="text-[15px] text-center mt-[20px]">
              <strong className="font-bold mr-[10px]">{data?.name}</strong>
              {data?.subtitle}
            </p>

            <div className="mx-auto mt-[35px] bg-white rounded-[10px] p-4 w-[384px] max-w-full">
              <p className="flex justify-between font-bold mb-2">
                <strong className="font-bold">개별 구매가</strong>
                30,000원
              </p>
              <p className="flex justify-between text-[#00aa73]">
                <strong className="font-bold leading-[42px]">
                  Plus 멤버십 회원가
                </strong>
                <span className="font-bold">
                  <em className="font-extrabold text-[24px] mr-1">0</em>원
                </span>
              </p>
              <div className="flex items-center justify-between font-extrabold text-[15px] mt-4 border-t border-[#00d48d] pt-4">
                <p>0원에 보려면? 월 14,800원 폴인 구독하기</p>
                <img src={open} className="w-4 h-4 -rotate-90" />
              </div>
            </div>

            <div className="flex justify-center flex-col mb-[30px]">
              <div className="mt-[8px] mx-auto">
                {data?.categories.includes('신청가능') ||
                data?.categories.includes('다시보기') ? (
                  <Link
                    to={
                      data?.categories.includes('신청가능')
                        ? '/Login'
                        : '/video'
                    }
                  >
                    <button
                      type="button"
                      className="btn h-[48px] max-w-[100%] w-[384px] flex justify-center text-[15px] font-bold rounded-[8px] bg-[#00d48d] border-0 "
                    >
                      {data?.buttonLabel}
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="btn h-[48px] max-w-[100%] w-[384px] flex justify-center text-[15px] font-bold text-[#bfbfbf] rounded-[8px] bg-white border-0 cursor-default"
                    disabled
                  >
                    {data?.buttonLabel}
                  </button>
                )}
              </div>
            </div>

            <div className="border-[#00d48d] border-t-[1px] flex flex-col text-[15px] gap-[20px] m-[24px_0_24px] ">
              <div className="flex items-start gap-[8px] mt-[24px]">
                <span className="font-bold">일시</span>
                <div className="flex-col gap-[8px]">
                  <p>{data?.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-[8px]">
                <span className="font-bold">진행방식</span>
                <div className="flex-col gap-[8px]">
                  <p>{data?.method}</p>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="font-bold">모집인원</span>
                <div className="flex-col gap-[8px]">
                  <p>{data?.capacity}</p>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="font-bold">신청마감</span>
                <div className="flex-col gap-[8px]">
                  <p>{data?.deadline}</p>
                </div>
              </div>
            </div>

            <div className=" text-[15px] border-[#00d48d] border-t-[1px] border-b-[1px] m-[0_0_24px] flex flex-col pl-[20px] pt-[40px]">
              <div className="">
                <h3 className="font-bold ">이런 분들께 추천해요.</h3>
                <ul className="mt-[22px] list-disc marker:to-black leading-[200%] mb-[30px]">
                  <li>{data?.tip1}</li>
                  <li>{data?.tip2}</li>
                  <li>{data?.tip3}</li>
                </ul>
              </div>
            </div>

            {/* 프로필 */}
            <div className="mt-[20px]">
              <LinkerView />
            </div>

            <div className="">
              <div className="border-[#00d48d] border-t-[1px] m-[0_0_24px] flex items-center pt-[40px]">
                <h3 className="text-[24px] font-bold m-[0px_8px_0px_0px]">
                  강연
                </h3>
                <span className="bg-[#fff] rounded-[8px] p-[5px_8px_5px_8px]">
                  <p className="text-[#00aa73] text-[11px] font-extrabold">
                    30분
                  </p>
                </span>
              </div>
              <h3 className="font-bold text-[18px]">{data?.title}</h3>
              <p className="text-[18px] m-[24px_0_24px] leading-[200%]">
                {data?.lecture}
              </p>
            </div>

            <div className="border-[#fff] border-t-[1px] m-[0_0_24px] flex items-center  pt-[40px]">
              <h3 className="text-[24px] font-bold m-[0px_8px_0px_0px]">
                LIVE Q&A
              </h3>
              <span className="bg-[#fff] rounded-[8px] p-[5px_8px_5px_8px]">
                <p className="text-[#00aa73] text-[11px] font-extrabold">
                  30분
                </p>
              </span>
            </div>

            <div className="leading-[200%] text-[18px]">
              <strong className=" m-[0_0_24px] pt-[40px] font-bold">
                실시간 댓글로 함께하는 Q&A
              </strong>

              <p className=" m-[24px_0_24px]">
                · 신청시 입력한 연락처로 보내드리니, 개인정보를 정확하게
                입력해주세요.
                <br />· 시청 링크를 받지 못한 경우, 1:1 문의로 연락주세요.
              </p>
            </div>

            <div className="border-[#fff] border-t-[1px] leading-[200%] text-[18px]">
              <h3 className="text-[24px] font-bold m-[0px_8px_0px_0px] pt-[40px]">
                라이브 시청 링크 접속 방법
              </h3>
              <p className="m-[24px_0_0]">
                세미나 당일 오후 5시, 카카오톡으로 시청 알림을 보내드립니다.
                <br />
                (17:00부터 세미나 신청 페이지에서, '세미나 시청하기' 버튼을
                누르면 라이브 시청 링크로 연결됩니다.)
              </p>
              <p className="m-[24px_0_24px]">
                · 신청시 입력한 연락처로 보내드리니, 개인정보를 정확하게
                입력해주세요.
                <br />· 시청 링크를 받지 못한 경우, 1:1 문의로 연락주세요.
              </p>
            </div>

            <div className="text-[18px] leading-[200%] border-[#00d48d] border-b-[1px] border-t-[1px] w-[100%]">
              <h3 className="font-bold text-[24px] m-[0_0_24px] pt-[40px]">
                다시보기 및 환불 안내
              </h3>
              <p className="m-[24px_0_0]">
                ■ 폴인 Plus 멤버십에 가입하셨다면?
                <br />
                - 월 14,800원에 매월 세미나를 무료로 참여하실 수 있습니다.
                <br />
                <em className="underline underline-offset-3">
                  ▶ 지금 폴인 멤버십 가입하고 세미나 신청하기
                </em>
              </p>
              <p className="m-[24px_0_0]">
                ■ 실시간 참석이 어려우신가요?
                <br />
                - 업무 등으로 인하여 실시간 참석이 불가하다면 걱정마세요.
                <br />
                모든 신청자에게 강연 종료 후
                <em className="underline underline-offset-3">3일간</em> 공개되는
                '강연 다시 보기' 비밀 링크를 함께 제공해드립니다.
              </p>
              <p className="m-[24px_0_0]">
                ■ 우리 팀 동료와 친구와 함께 신청하고 싶다면?
                <br />- 5명 이상 단체 신청은
                <em className="underline underline-offset-3 ml-[5px]">
                  1:1 문의
                </em>
                에 신청자 성함과 연락처, 이메일 주소를 남겨 주세요.
              </p>
              <h3 className="font-bold m-[24px_0_0]">기본 환불 규정</h3>
              <p className="m-[24px_0_24px]">
                1. 세미나 전일인 23:59:59까지 홈페이지 [마이페이지 -
                구매내역]에서 직접 취소 가능하며, 전액 100% 환불됩니다.
                <br />
                2. 세미나 당일 00:00:00 이후에는 환불이 불가합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
