import { Link } from 'react-router';

const menus = [
  {
    path: '/series',
    menu: '아티클·비디오',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
          fill="#00D48D"
        />
        <path
          d="M16 11.5L16 20.5M20.5 16L11.5 16"
          stroke="#111111"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    number: '2719',
    unit: '개',
  },
  {
    path: '/seminar',
    menu: '세미나',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
          fill="#FF595F"
        />
        <path
          d="M16 11.5L16 20.5M20.5 16L11.5 16"
          stroke="#111111"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    number: '191',
    unit: '회',
  },
  {
    path: '/linker',
    menu: '링커',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
          fill="#25AACF"
        />
        <path
          d="M16 11.5L16 20.5M20.5 16L11.5 16"
          stroke="#111111"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    number: '1516',
    unit: '명',
  },
];

export default function Subscribe() {
  return (
    <div className="px-[24px] max-md:px-[8px] max-sm:px-[8px]">
      <div
        className=" bg-point1 rounded-[6px] px-[8px] py-[24px] max-sm:pb-[8px]
      text-center max-w-[1200px] mx-auto h-auto mb-[4px]"
      >
        <p className="text-[24px] mb-[8px] text-gray-600 font-semibold">
          성장의 경험을 나눕니다, 폴인
        </p>
        <p
          className="text-[15px] text-gray-600 mb-[24px] leading-[1.5]
        -tracking-tight font-semibold break-keep"
        >
          폴인은 일에 진심은 사람들을 위한 콘텐츠 구독 서비스입니다.
          <br />
          현업 전문가 `링커(Linker)`의 경험과 인사이트로 내 커리어의 전성기를
          만들어 보세요.
        </p>
        <ul className="flex justify-center gap-x-[16px] gap-y-[24px] max-sm:gap-[4px]">
          {menus.map((item) => (
            <li
              key={item.menu}
              className=" bg-[#fff] w-[185px] text-left
              flex p-[8px] relative h-[88px] max-sm:h-[68px] rounded-[6px] max-sm:pt-[5px]"
            >
              <Link
                to={item.path}
                className=" text-gray-600 flex flex-col font-semibold"
              >
                <div className="h-[32px] mb-[4px] flex items-center max-sm:text-[13px] max-sm:h-[24px]">
                  {item.menu}
                </div>
                <div className="absolute top-[8px] right-[8px]">
                  {item.icon}
                </div>
                <em
                  className=" w-full text-center leading-[1.3] absolute bottom-[8px] left-0 
                text-[28px] font-semibold max-sm:text-[24px] max-sm:h-[31px]"
                >
                  {item.number} {item.unit}
                </em>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/introduction">
          <button
            type="button"
            className="btn mt-[16px] pt-[14px] pb-[15px] px-[16px] w-[384px] h-[48px] rounded-[6px] bg-[#111] text-[#fff] font-semibold border-0 max-sm:w-full"
          >
            멤버십 구독
          </button>
        </Link>
      </div>
    </div>
  );
}
