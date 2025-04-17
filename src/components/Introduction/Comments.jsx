import A from '@/assets/images/icon/a.png';
import B from '@/assets/images/icon/b.png';
import C from '@/assets/images/icon/c.png';
import D from '@/assets/images/icon/d.png';
import E from '@/assets/images/icon/e.png';
import F from '@/assets/images/icon/f.png';
import comment from '@/assets/images/icon/comment.png';

export default function Comments() {
  return (
    <div className="px-[24px] max-sm:px-[8px] mt-[160px]">
      <h3 className="text-center text-[28px] font-bold leading-[36.4px]">
        일에 진심인 사람들이 오늘도
        <br />
        폴인과 함께 하고 있습니다.
      </h3>
      <ul className="mt-[16px] text-center flex flex-wrap mx-auto max-w-[996px]">
        <li
          className="[width:calc(33.3333%-16px)] max-md:[width:calc(50%-8px)] mt-[24px]
        max-sm:w-full"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#fff] flex items-center justify-center rounded-[16px]">
              <img src={A} className="w-[12.5px] h-auto object-cover" />
            </div>
            <p className="font-bold leading-[1.3]">멤버 A님</p>
          </div>
          <p
            className="mt-[12px] text-[18px] p-[16px] bg-[#fff] font-medium rounded-b-[6px] 
          rounded-r-[6px] relative break-keep"
          >
            매일 똑같은 조직원들을 마주하니 일의 범위와 생각의 틀이 고정되는 것
            같았어요. 폴인의 콘텐츠를 통해 다양한 분들을 만나{' '}
            <b>성장하는 느낌</b>을 받아서 좋습니다.{' '}
            <span
              className="absolute -top-[10px] left-0 w-[19px] h-[10px] block"
              style={{ backgroundImage: `url(${comment})` }}
            ></span>
          </p>
        </li>
        <li
          className="[width:calc(33.3333%-16px)] max-md:[width:calc(50%-8px)] mt-[24px] ml-[24px]
        mr-[24px] max-md:ml-[8px] max-md:mr-0 max-sm:w-full"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#fff] flex items-center justify-center rounded-[16px]">
              <img src={B} className="w-[12.5px] h-auto object-cover" />
            </div>
            <p className="font-bold leading-[1.3]">멤버 B님</p>
          </div>
          <p
            className="mt-[12px] text-[18px] p-[16px] bg-[#fff] font-medium rounded-b-[6px] 
          rounded-r-[6px] relative break-keep"
          >
            신사업기획을 담당하고 있어서 트렌드 리서치가 필수예요. 기획서 작성할
            때 쓸 만한 정보도 많고,{' '}
            <b>자기 일에 진심인 사람들의 이야기가 가득</b>해서 좋습니다. 덩달아
            열심히 살고 싶어지는 기분이예요.{' '}
            <span
              className="absolute -top-[10px] left-0 w-[19px] h-[10px] block"
              style={{ backgroundImage: `url(${comment})` }}
            ></span>
          </p>
        </li>
        <li className="[width:calc(33.3333%-16px)] max-md:[width:calc(50%-8px)] mt-[24px] max-sm:w-full">
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#fff] flex items-center justify-center rounded-[16px]">
              <img src={C} className="w-[12.5px] h-auto object-cover" />
            </div>
            <p className="font-bold leading-[1.3]">멤버 C님</p>
          </div>
          <p
            className="mt-[12px] text-[18px] p-[16px] bg-[#fff] font-medium rounded-b-[6px] 
          rounded-r-[6px] relative break-keep"
          >
            스타트업에서 근무하면서 브랜딩과 콘텐츠 마케팅을 담당하고 있습니다.{' '}
            <b>
              브랜드 사례를 보면서 내가 놓치고 있는 것들, 문제 정의에 대해서
              다시 생각
            </b>
            해보게 되네요!{' '}
            <span
              className="absolute -top-[10px] left-0 w-[19px] h-[10px] block"
              style={{ backgroundImage: `url(${comment})` }}
            ></span>
          </p>
        </li>
        <li
          className="[width:calc(33.3333%-16px)] max-md:[width:calc(50%-8px)] mt-[24px] 
        max-md:ml-[8px] max-sm:w-full"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#fff] flex items-center justify-center rounded-[16px]">
              <img src={D} className="w-[12.5px] h-auto object-cover" />
            </div>
            <p className="font-bold leading-[1.3]">멤버 D님</p>
          </div>
          <p
            className="mt-[12px] text-[18px] p-[16px] bg-[#fff] font-medium rounded-b-[6px] 
          rounded-r-[6px] relative break-keep"
          >
            폴인을 왜 이제야 알았을까 생각이 들었을 정도로 양질의 콘텐츠가
            다양합니다. <b>여러 분야의 리더들의 인터뷰</b>가 콘텐츠에서 정말
            많이 배우고 인사이트를 넓힐 수 있었어요.{' '}
            <span
              className="absolute -top-[10px] left-0 w-[19px] h-[10px] block"
              style={{ backgroundImage: `url(${comment})` }}
            ></span>
          </p>
        </li>
        <li
          className="[width:calc(33.3333%-16px)] max-md:[width:calc(50%-8px)] mt-[24px]
        ml-[24px] mr-[24px] max-md:ml-0 max-md:mr-0 max-sm:w-full"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#fff] flex items-center justify-center rounded-[16px]">
              <img src={E} className="w-[12.5px] h-auto object-cover" />
            </div>
            <p className="font-bold leading-[1.3]">멤버 E님</p>
          </div>
          <p
            className="mt-[12px] text-[18px] p-[16px] bg-[#fff] font-medium rounded-b-[6px] 
          rounded-r-[6px] relative break-keep"
          >
            관심의 범주에 있지 않던 분야라도 재미있는 이야기로 던져주니 관심이
            갑니다. <b>시야가 넓어지는 것</b> 같아 좋아요!{' '}
            <span
              className="absolute -top-[10px] left-0 w-[19px] h-[10px] block"
              style={{ backgroundImage: `url(${comment})` }}
            ></span>
          </p>
        </li>
        <li
          className="[width:calc(33.3333%-16px)] max-md:[width:calc(50%-8px)] mt-[24px] 
        max-md:ml-[8px] max-sm:w-full"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#fff] flex items-center justify-center rounded-[16px]">
              <img src={F} className="w-[12.5px] h-auto object-cover" />
            </div>
            <p className="font-bold leading-[1.3]">멤버 F님</p>
          </div>
          <p
            className="mt-[12px] text-[18px] p-[16px] bg-[#fff] font-medium rounded-b-[6px] 
          rounded-r-[6px] relative break-keep"
          >
            고민한 것들에 대한 좋은 가이드가 되었습니다.{' '}
            <b>마음에 와 닿는 문장이 있어 위로와 힘</b>을 받았습니다.{' '}
            <span
              className="absolute -top-[10px] left-0 w-[19px] h-[10px] block"
              style={{ backgroundImage: `url(${comment})` }}
            ></span>
          </p>
        </li>
      </ul>
    </div>
  );
}
