import { Link } from 'react-router';
import free from '@/assets/images/icon/free.png';

export default function Free() {
  return (
    <div className="w-full px-[24px] max-sm:px-[8px]">
      <div
        className=" bg-point1 rounded-[6px] py-[32px] max-sm:pb-[8px]
  text-center max-w-[1200px] mx-auto h-auto "
      >
        <h3 className="mb-[7px] text-[28px] text-center font-bold">
          폴인 Lite 첫 달 무료
        </h3>
        <div>
          <img src={free} className="w-[84px] h-auto" />
        </div>
        <p className="text-[15px] mt-[12px] text-gray-600 font-bold leading-[19.5px]">
          폴인 회원가입 시, 최초 1회 제공
        </p>
        <Link to="/introduction">
          <button
            type="button"
            className="btn mt-[16px] mx-auto py-[1px] px-[6px] w-[384px] h-[48px] rounded-[6px] bg-[#111] text-[#fff] font-semibold border-0 max-sm:w-full"
          >
            멤버십 구독
          </button>
        </Link>
      </div>
    </div>
  );
}
