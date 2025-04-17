import free from '@/assets/images/icon/firtsmonth.png';
import lite from '@/assets/images/icon/lite.png';
import plus from '@/assets/images/icon/plus.png';
import { Link } from 'react-router';

export default function Payment() {
  return (
    <div className="px-[24px] max-sm:px-[8px] pt-[120px]">
      <h3 className="text-center mb-[40px] text-[28px] font-bold leading-[1.3]">
        폴인 멤버십 구독하고 커리어 성장하기
      </h3>
      <div className="rounded-[6px] bg-[#a3cfff] p-[16px] max-w-[792px] mx-auto relative">
        <div className="flex items-center mb-[8px]">
          <h4 className="text-[24px] font-bold leading-[1.3] text-left">
            지금 구독하면 첫 달 무료!
          </h4>
          <img
            src={free}
            className="w-[108px] absolute right-[12px] top-[50%] -translate-y-[50%]"
          />
        </div>
        <div className="text-[13px] text-[#8e8e8e] font-medium leading-[1.5]">
          ※ Lite 멤버십에만 적용됩니다.
        </div>
        <div className="text-[13px] text-[#8e8e8e] font-medium leading-[1.5]">
          ※ 첫 결제일 전에는 결제되지 않으며, 예정일 전 언제든 해지, 변경이
          가능합니다.
        </div>
      </div>
      <div className="max-w-[792px] mt-[10px] mx-auto flex gap-[8px] flex-wrap">
        {/* 폴인라이트 */}
        <div className="[width:calc(50%-4px)] max-sm:w-full pt-[8px] px-[8px] pb-[16px] bg-[#fff] rounded-[6px]">
          <div className="px-[16px] rounded-[6px] bg-[#bfbfbf]">
            <div className="h-[90px] flex flex-col items-center justify-center">
              <img src={lite} className="w-[53px] mb-[6px]" />
              <p className="text-gray-600 font-bold leading-[1.3]">
                폴인 라이트
              </p>
            </div>
          </div>
          <ul className="min-h-[162px] max-sm:min-h-0 mt-[16px] px-[8px] pb-[20px] border-b border-[#ebedec]">
            <li className="text-[18px] font-medium leading-[1.5]">
              아티클 무제한 열람
            </li>
          </ul>
          <div className="mt-[16px] px-[8px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[8px] items-center">
                <p className="text-[18px] font-medium leading-[1.5]">1개월</p>
                <div
                  className="h-[32px] py-[7px] px-[8px] rounded-[6px] bg-[#00d48d19]
                text-[#00aa73] text-[12px] font-bold"
                >
                  첫 달 무료
                </div>
              </div>
              <p className="text-[18px] font-medium leading-[1.5]">
                <b className="text-[24px]">7,800</b> 원
              </p>
            </div>
            <div className="flex items-center justify-between mt-[4px] pb-[23px] relative">
              <div className="flex gap-[8px] items-center">
                <p className="text-[18px] font-medium leading-[1.5]">12개월</p>
                <div
                  className="h-[32px] py-[7px] px-[8px] rounded-[6px] bg-[#00d48d19]
                text-[#00aa73] text-[12px] font-bold"
                >
                  첫 달 무료
                </div>
              </div>
              <p className="text-[18px] font-medium leading-[1.5]">
                <b className="text-[24px]">67,800</b> 원
              </p>
              <div className="absolute bottom-0 right-[2px] font-medium leading-[1.3] text-[#00aa73]">
                월 5,650원 꼴
              </div>
            </div>
          </div>
        </div>
        {/* 폴인플러스 */}
        <div className="[width:calc(50%-4px)] max-sm:w-full max-sm:mt-[8px] pt-[8px] px-[8px] pb-[16px] bg-[#fff] rounded-[6px]">
          <div className="px-[16px] rounded-[6px] bg-[#00d48d]">
            <div className="h-[90px] flex flex-col items-center justify-center">
              <img src={plus} className="w-auto h-[31px] mb-[6px]" />
              <p className="text-gray-600 font-bold leading-[1.3]">
                폴인 플러스
              </p>
            </div>
          </div>
          <ul className="min-h-[162px] max-sm:min-h-0 mt-[16px] px-[8px] pb-[20px] border-b border-[#ebedec]">
            <li className="text-[18px] font-medium leading-[1.5]">
              아티클 무제한 열람
            </li>
            <li className="text-[18px] leading-[1.5] font-bold">
              비디오 무제한 시청
            </li>
            <li className="text-[18px] font-bold leading-[1.5]">
              세미나 LIVE 무료 (월 2회)
            </li>
          </ul>
          <div className="mt-[16px] px-[8px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[8px] items-center">
                <p className="text-[18px] font-medium leading-[1.5]">1개월</p>
                <div
                  className="h-[32px] py-[7px] px-[8px] rounded-[6px] bg-[#00d48d19]
                text-[#00aa73] text-[12px] font-bold"
                >
                  첫 달 무료
                </div>
              </div>
              <p className="text-[18px] font-medium leading-[1.5]">
                <b className="text-[24px]">14,800</b> 원
              </p>
            </div>
            <div className="flex items-center justify-between mt-[4px] pb-[23px] relative">
              <div className="flex gap-[8px] items-center">
                <p className="text-[18px] font-medium leading-[1.5]">12개월</p>
                <div
                  className="h-[32px] py-[7px] px-[8px] rounded-[6px] bg-[#00d48d19]
                text-[#00aa73] text-[12px] font-bold"
                >
                  첫 달 무료
                </div>
              </div>
              <p className="text-[18px] font-medium leading-[1.5]">
                <b className="text-[24px]">148,800</b> 원
              </p>
              <div className="absolute bottom-0 right-[2px] font-medium leading-[1.3] text-[#00aa73]">
                월 12,400원 꼴
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={'/register'}
        className="w-full h-[48px] flex items-center justify-center mx-auto mt-[24px] max-w-[384px]
        bg-[#111] text-[#fff] font-bold rounded-[6px]"
      >
        멤버십 구독
      </Link>
    </div>
  );
}
