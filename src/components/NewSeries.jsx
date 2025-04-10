import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Logo from '@/assets/images/serieslogo.png';

export default function NewSeries() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/series'],
    queryFn: () => fetch('/series').then((res) => res.json()),
  });

  // const latest = data?.[0].sort((a, b) => (a.tag > b.tag ? -1 : 1))[0];
  // 이중배열 중 마지막 요소 추출
  const latest = data?.[0][data[0].length - 1];
  const latestItems = data?.[0]
    .sort((a, b) => (a.tag > b.tag ? 1 : -1))
    .slice(0, 3);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="px-[24px] max-sm:px-[8px] mb-[104px]">
      {/* // 전체 div */}
      <div
        className="flex gap-[24px] max-w-[1200px] pt-[40px] mx-auto relative 
      max-md:flex-col max-md:pt-[257px]  max-md:w-[520px] max-sm:w-[374px]"
      >
        {/* 1번 */}
        <div
          className="[width:calc(50%-12px)] pl-[16px] flex flex-col absolute top-[130px] right-0 
          max-md:top-[40px] max-md:rigth-0 max-md:w-[520px] max-sm:w-[374px]"
        >
          <img src={Logo} className="w-[155.5px] mb-[26px]" />
          <strong className="mb-[8px] text-[28px] font-bold">
            {latest?.topic}
          </strong>
          <p
            className="line-clamp-3 break-words overflow-hidden text-ellipsis
          leading-normal text-gray-600 max-md:px-[16px]
            max-md:line-clamp-4 max-md:pl-0 "
          >
            커리어도 속성 과외를 받을 수는 없을까요? 커리어 경력 30년, 24년간
            임원을 맡은 신수정 대표를 '커리어 트레이너'로 모셨습니다.
            임팩트리더스아카데미 대표이자 전 KT 부사장으로, 『커넥팅』 『일의
            격』 『거인의 리더십』 을 펴냈죠. 그에게 회사 안팎 커리어를 꾸리기
            위해 꼭 필요한 질문을 추려 물었어요. - 나만 승진 누락되면 어떻게
            할까? - 왜 일을 열심히 해도 인정받지 못할까? - 마이크로 매니저
            상사를 만났을 때 대처법은? - 팀장 이후 커리어는 어떻게 설계해야
            할까? - 내향인 회사원의 사내 정치, 영업 스킬은? 단순한 조언을 넘어,
            손에 잡히는 명확한 커리어 가이드가 필요하다면? 이 시리즈를 놓치지
            마세요!
          </p>
        </div>
        {/* 2번 */}
        <div
          className="[width:calc(50%-12px)] mb-[104px] relative hover:-translate-y-5 transition-transform
        duration-500 group max-md:w-[504px] max-sm:w-[374px]"
        >
          <Link
            key={latest?.id}
            to={`/articles/${latest?.id}`}
            className="text-[18px] text-[#111] font-semibold block relative "
          >
            <div className="">
              <img
                src={latest?.thumbnail}
                alt={latest?.topic}
                className="rounded-[6px] block w-full h-auto object-cover pr-[16px] "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[51px] h-[32px]  absolute left-[10px] top-[10px] border border-[#00d48d] 
                rounded-[6px] bg-[#fff]"
              >
                <path
                  d="M18.532 11.204V20.132H16.948L12.244 13.496V20.132H10.804V11.204H12.388L17.092 17.864V11.204H18.532ZM26.261 11.204V12.452H21.353V14.912H25.637V16.16H21.353V18.884H26.261V20.132H19.913V11.204H26.261ZM39.3916 11.204L36.8356 20.132H35.5396L33.3316 13.472L31.2916 20.132H29.9836L27.0796 11.204H28.5916L30.6316 17.756L32.5516 11.216H34.0996L36.0796 17.756L37.8796 11.204H39.3916Z"
                  fill="#00D48D"
                />
              </svg>
            </div>
            <div
              className="w-full bg-[#fff] rounded-[6px] p-[10px] absolute 
                left-[16px] -bottom-[103px]
              "
            >
              <div className="flex gap-[2.5px] items-center h-[32px]">
                <div
                  className=" rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px]"
                  style={{ backgroundColor: latest.color }}
                >
                  {latest?.topic}
                </div>
                <div
                  className="border border-[#f2ec72] text-[12px] py-[6px] px-[8px] rounded-[6px]"
                  style={{ border: `1px solid ${latest.color}` }}
                >
                  {latest?.tag}
                </div>
              </div>
              <strong className="group-hover:text-[#00d48d] block mt-[10px] mb-[16px] text-[24px] font-bold break-keep">
                {latest?.title}
              </strong>
              <span className="group-hover:text-[#00d48d] text-[12px] block">
                {latest?.author}
              </span>
            </div>
          </Link>
        </div>
        {/* 3번 */}
        <div
          className="[width:calc(50%-12px)] pt-[364px] max-md:pt-0 max-md:w-[520px] pl-[32px]
        max-md:pl-0 max-md:hidden"
        >
          <div className="">
            {latestItems?.map((item) => (
              <Link
                key={item.id}
                to={`/articles/${item.id}`}
                className="hover:-translate-x-5 transition-transform group pl-[16px] 
        duration-500  flex w-full items-center gap-[8px] mb-[4px] py-[8px] px-[10px]
            bg-[#fff] rounded-[6px] max-md:hidden"
              >
                <div
                  className="border rounded-[6px] text-[12px] text-gray-600 font-bold
            border-[#f2ec72] py-[6px] px-[8px]"
                >
                  {item.tag}
                </div>
                <p className="group-hover:text-[#00d48d] text-[18px] overflow-hidden text-ellipsis grow-1 font-bold text-gray-600">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* 테블릿분기점요소 */}
        <div
          className="[width:calc(50%-12px)] relative hover:-translate-y-5 transition-transform
        duration-500 group hidden max-md:block max-md:w-full max-sm:[width:calc(100%-111px)]"
        >
          {latestItems?.map((item) => (
            <Link
              key={item.id}
              to={`/articles/${item.id}`}
              className="text-[18px] text-[#111] font-semibold block relative mb-[20px] max-sm:mb-[40px]"
            >
              <div className="max-md:w-[143px]  ">
                <img
                  src={item.thumbnail}
                  alt={item.topic}
                  className="rounded-[6px] block w-full h-auto object-cover 
                pr-[16px] max-md:pr-0 max-md:h-[143px] relative "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[51px] h-[32px]  absolute left-[10px] top-[10px] border border-[#00d48d] 
                rounded-[6px] bg-[#fff]"
                >
                  <path
                    d="M18.532 11.204V20.132H16.948L12.244 13.496V20.132H10.804V11.204H12.388L17.092 17.864V11.204H18.532ZM26.261 11.204V12.452H21.353V14.912H25.637V16.16H21.353V18.884H26.261V20.132H19.913V11.204H26.261ZM39.3916 11.204L36.8356 20.132H35.5396L33.3316 13.472L31.2916 20.132H29.9836L27.0796 11.204H28.5916L30.6316 17.756L32.5516 11.216H34.0996L36.0796 17.756L37.8796 11.204H39.3916Z"
                    fill="#00D48D"
                  />
                </svg>
              </div>
              <div
                className="bg-[#fff] rounded-[6px] p-[10px] absolute 
                right-[0px] top-[32px] [min-width:calc(100%-127px)] max-sm:right-[-112px] 
                max-sm:w-full"
              >
                <div className="flex gap-[2.5px] items-center h-[32px]">
                  <div
                    className="rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] block"
                    style={{ backgroundColor: latest.color }}
                  >
                    {item.topic}
                  </div>
                  <div
                    className="text-[12px] py-[6px] px-[8px] rounded-[6px] block"
                    style={{ border: `1px solid ${latest.color}` }}
                  >
                    {item.tag}
                  </div>
                </div>
                <strong
                  className="group-hover:text-[#00d48d] 
                block mt-[10px] mb-[16px] text-[18px] font-bold break-keep"
                >
                  {item.title}
                </strong>
                <span className="group-hover:text-[#00d48d] text-[12px] block">
                  {item.author}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
