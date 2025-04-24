import { Link } from 'react-router';
import Person from '/images/ymy/nextseminar1.jpg';
import Person2 from '/images/ymy/nextseminar2.jpg';
import Logo2 from '@/assets/images/nextseminar.png';

const seminarLink = [{ id: 1, path: '/seminar/1' }];
const seminarLink2 = [{ id: 1, path: '/seminar/2' }];

export default function NextSeminar() {
  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] mx-auto">
      {/* 1번 */}
      <div className="mb-[64px]">
        {seminarLink2.map((seminar) => (
          <Link
            key={seminar.id}
            to={seminar.path}
            className="max-w-[792px] flex gap-[24px] mx-auto items-center group"
          >
            <div className="flex-1">
              <img
                src={Person}
                className="rounded-[6px] group-hover:scale-[1.05] duration-300 "
              />
            </div>
            <div className="max-w-[614px] flex-1">
              <img src={Logo2} className="w-[198px] mt-[11px] mb-[40px]" />
              <strong
                className="block break-words mb-[16px] font-bold text-[28px]
              text-gray-600 group-hover:text-point1"
              >
                아무도 따라하지 못하는 내 기획 만드는 법
              </strong>
              <div className="flex gap-[4px] mb-[53px] items-baseline ">
                <strong className="font-bold text-gray-600 text-[24px] group-hover:text-point1">
                  조퇴계
                </strong>
                <p className="text-gray-600 text-[15px] break-words font-semibold group-hover:text-point1">
                  브로드컬리 대표
                </p>
              </div>
              <p className="text-gray-600 text-[15px] font-semibold mb-[40px] group-hover:text-point1">
                2025.04.17 (목) 20:00
              </p>
              <div
                className="w-full py-[12px] px-[16px] text-center rounded-[6px]
              font-bold text-gray-600 bg-point1 
              "
              >
                자세히 보기
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* 2번 */}
      <div>
        {seminarLink.map((seminar) => (
          <Link
            key={seminar.id}
            to={seminar.path}
            className="max-w-[792px] flex gap-[24px] mx-auto items-center group"
          >
            <div className="max-w-[614px] flex-1">
              <img src={Logo2} className="w-[198px] mt-[11px] mb-[40px]" />
              <strong
                className="block break-words mb-[16px] font-bold text-[28px]
              text-gray-600 group-hover:text-point1"
              >
                "브랜드와 부동산은 하나" 힙한 브랜드의 공간 전략
              </strong>
              <div className="flex gap-[4px] mb-[53px] items-baseline ">
                <strong className="font-bold text-gray-600 text-[24px] group-hover:text-point1">
                  우창균
                </strong>
                <p className="text-gray-600 text-[15px] break-words font-semibold group-hover:text-point1">
                  작가‧브릭스인베스트먼트 부장
                </p>
              </div>
              <p className="text-gray-600 text-[15px] font-semibold mb-[40px] group-hover:text-point1">
                2025.04.24 (목) 20:00
              </p>
              <div
                className="w-full py-[12px] px-[16px] text-center rounded-[6px]
              font-bold text-gray-600 bg-point1 
              "
              >
                자세히 보기
              </div>
            </div>
            <div className="flex-1">
              <img
                src={Person2}
                className="rounded-[6px] group-hover:scale-[1.05] duration-300 "
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
