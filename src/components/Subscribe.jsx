import React from 'react';
import { Link } from 'react-router';

const menus = [
  {
    path: '/series',
    menu: '아티클·비디오',
  },
  { path: '/seminar', menu: '세미나' },
  { path: '/linker', menu: '링커' },
];

export default function Subscribe() {
  return (
    <div className=" w-full px-[24px] ">
      <div
        className="border bg-point1 rounded-[6px] pt-[24px] px-[8px] pb-[8px]
      text-center max-w-[1200px] mx-auto"
      >
        <h3 className="text-[24px] mb-[8px] text-gray-600 font-semibold">
          성장의 경험을 나눕니다, 폴인
        </h3>
        <h4 className="text-[15px] text-gray-600 mb-[24px] leading-[22.5px]">
          폴인은 일에 진심은 사람들을 위한 콘텐츠 구독 서비스입니다.
          <br />
          현업 전문가 `링커(Linker)`의 경험과 인사이트로 내 커리어의 전성기를
          만들어 보세요.
        </h4>
        <ul className="flex justify-center gap-[16px]">
          {menus.map((item) => (
            <li
              key={item.menu}
              className="border bg-[#fff] w-[185px] text-left
              flex justify-between p-[8px] mb-[4px] items-center "
            >
              <Link to={item.path} className=" text-[15px] text-gray-600">
                {item.menu}
              </Link>
              <div className="w-[24px] h-[24px] bg-point1 rounded-full flex justify-center items-center">
                <span className="w-[9px] h-[9px] border block"></span>
                <span></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
