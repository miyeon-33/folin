import { Link } from 'react-router';
import mLogo from '@/assets/images/icon/membership-logo.png';

export default function Viewproducts() {
  return (
    <div className="w-full px-[24px] max-sm:px-[8px]">
      <div
        className=" bg-point1 rounded-[6px] pt-[80px] pb-[64px] max-sm:pb-[8px]
  text-center max-w-[1200px] mx-auto h-auto "
      >
        <div>
          <img src={mLogo} className="w-[384px] h-auto max-w-[305px]" />
        </div>
        <p className="text-[28px] mt-[32px] text-gray-600 font-semibold">
          성장의 경험을 나눕니다.
        </p>
        <p className="text-[18px] text-gray-600  leading-[1.5] break-keep mt-[16px] font-medium">
          폴인은 일에 진심은 사람들을 위한 콘텐츠 구독 서비스입니다.
          <br />
          2018년부터 현업 전문가 '링커(Linker)' 1000여 명의 성장 경험을
          전해왔습니다.
        </p>

        <Link to="/introduction">
          <button
            type="button"
            className="btn mt-[40px] mx-auto py-[1px] px-[6px] w-[384px] h-[48px] rounded-[6px] bg-[#111] text-[#fff] font-semibold border-0 max-sm:w-full"
          >
            멤버십 상품 보기
          </button>
        </Link>
      </div>
    </div>
  );
}
