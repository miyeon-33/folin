import num1 from '@/assets/images/icon/contents1.png';
import num2 from '@/assets/images/icon/contents2.png';
import num3 from '@/assets/images/icon/contents3.png';

export default function Contents() {
  return (
    <div className=" mx-auto max-sm:px-[8px] py-[160px] w-full">
      <div className="max-w-[588px] mx-auto">
        <h3 className="text-center text-[28px] font-bold">
          지금 하는 일, 잘하고 있나요?
          <br />
          롱런하는 커리어, 어떻게 만들 수 있을까요?
        </h3>
        {/* 1번 */}
        <div className="mt-[64px]">
          <img src={num1} alt="1" className="w-[32px] block mx-auto" />
          <h4 className="mt-[32px] font-bold text-[28px] leading-[36px] text-center">
            업계 리더의 성장 비결 5
          </h4>
          <ul className="mt-[16px] flex justify-between">
            <li className="w-[19.4%] py-[8px] px-[12px] font-bold leading-[22.5px] bg-[#ff595f] rounded-[6px] text-center">
              변화
            </li>
            <li className="w-[19.4%] py-[8px] px-[12px] font-bold leading-[22.5px] bg-[#e5c58a] rounded-[6px] text-center">
              기획
            </li>
            <li className="w-[19.4%] py-[8px] px-[12px] font-bold leading-[22.5px] bg-[#f2ec72] rounded-[6px] text-center">
              추진
            </li>
            <li className="w-[19.4%] py-[8px] px-[12px] font-bold leading-[22.5px] bg-[#25aacf] rounded-[6px] text-center">
              협업
            </li>
            <li className="w-[19.4%] py-[8px] px-[12px] font-bold leading-[22.5px] bg-[#a45eeb] rounded-[6px] text-center">
              롱런
            </li>
          </ul>
          <p className="mt-[16px] text-[18px] font-medium leading-[27px] text-center">
            '변화'를 빠르게 포착해 앞서가는 '기획'을 하는 비결.
            <br />
            남다른 '추진력'으로 성과를 만들고, '협업'으로 극대화하는 법.
            <br />
            하고 싶은 일을 찾아 '롱런'하는 커리어 레퍼런스까지.
          </p>
        </div>
        {/* 2번 */}
        <div className="mt-[64px]">
          <img src={num2} alt="2" className="w-[32px] block mx-auto" />
          <h4 className="mt-[32px] font-bold text-[28px] leading-[1.3] text-center">
            전문가의 관점이 담긴 트렌드&인사이트
          </h4>
          <p className="mt-[16px] text-[18px] font-medium leading-[1.5] text-center">
            현장의 경험을 바탕으로 트렌드의 맥락을 살피고,
            <br />내 커리어를 변화시키는 인사이트를 전합니다.
          </p>
        </div>
        {/* 3번 */}
        <div className="mt-[64px] mb-[64px]">
          <img src={num3} alt="3" className="w-[32px] block mx-auto" />
          <h4 className="mt-[32px] font-bold text-[28px] leading-[1.3] text-center">
            이용시간 제한 없는 2000여 개의 콘텐츠
          </h4>
          <p className="mt-[16px] text-[18px] font-medium leading-[1.5] text-center">
            내가 찾는 브랜드와 전문가가 모두 폴인에!
            <br />
            레퍼런스가 필요할 때 언제든지 이용하세요.
          </p>
        </div>
        <h3 className="text-center text-[28px] font-bold leading-[1.3]">
          커리어의 전성기를 만들고 싶다면 <br />
          폴인 멤버십을 시작해 보세요.
        </h3>
      </div>
    </div>
  );
}
