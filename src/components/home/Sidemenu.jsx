import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const menus = [
  {
    path: '/series',
    menu: '시리즈',
    subMenus: [
      { path: '/series', menu: '시리즈만 보기' },
      { path: '/article', menu: '아티클만 보기' },
      { path: '/video', menu: '비디오만 보기' },
    ],
  },
  { path: '/seminar', menu: '세미나' },
  { path: '/talk', menu: '톡' },
];

const additionalMenus = [
  { path: '/linker', menu: '링커' },
  { path: '/introduction', menu: '폴인 소개' },
  { path: '/b2b', menu: '단체구독·B2B문의' },
  { path: '/letter', menu: '폴인레터 신청' },
];

export default function Sidemenu() {
  return (
    <div
      className="absolute left-[0px] top-[52px] rounded-[6px] bg-point1 
    max-sm:[height:calc(100vh-52px)] max-sm:w-full w-[226px]  h-auto "
    >
      <ul
        className="flex flex-col text-left px-[16px]
        py-[24px] "
      >
        {menus.map((item) => (
          <li key={item.menu} className=" flex flex-col">
            <Link
              to={item.path}
              className="sm:text-[18px] text-[28px] text-[#111] font-semibold block mb-[16px]"
            >
              {item.menu}
            </Link>
            {item.subMenus && (
              <ul className="">
                {item.subMenus.map((subItem) => (
                  <li key={subItem.menu} className="mb-[16px]">
                    <Link
                      to={subItem.path}
                      className=" text-gray-600 pl-[16px] max-sm:text-[18px] text-[15px]"
                    >
                      {subItem.menu}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <ul className="pt-[24px] border-t border-t-[#111]">
          {additionalMenus.map((item) => (
            <li key={item.menu} className="mb-[16px]">
              <Link to={item.path} className="text-gray-600 text-[15px]">
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="block sm:hidden  btn mt-[48px] text-[15px] text-[#fff] bg-[#111]
            rounded-[6px] w-full border-0 h-[48px]"
        >
          멤버십 구독
        </button>
      </ul>
    </div>
  );
}
