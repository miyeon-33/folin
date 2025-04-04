// components / Series.jsx
import { useUser } from '@/hooks/useUser';
import { Link } from 'react-router';
import open from '@/assets/images/rhr/open.png';
import menu1_g from '@/assets/images/rhr/menu1_g.png';
import menu2_b from '@/assets/images/rhr/menu2_b.png';

export default function Series() {
  const { isLoading, data, isError, error } = useUser();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.meeage}</>;

  return (
    <main className="bg-[#ebedec] h-[1500px]">
      <div className="max-w-[1248px] mx-auto pt-[52px] px-[24px] border">
        <div className="flex justify-between pt-[4px]">
          <div className=" flex gap-[4px]">
            <button
              type="button"
              className="btn w-[180px] h-[48px] bg-white border-[#00d48d] rounded-[6px] 
              text-[15px] text-center"
            >
              시리즈로 보기
            </button>
            <button
              type="button"
              className="btn w-[180px] h-[48px] bg-white border-0 rounded-[6px] 
              text-[15px] text-center"
            >
              아티클만 보기
            </button>
            <button
              type="button"
              className="btn w-[180px] h-[48px] bg-white border-0 rounded-[6px] 
              text-[15px] text-center"
            >
              비디오만 보기
            </button>
          </div>
          <div className="flex">
            <div>
              <button
                type="button"
                className="btn w-[171px] h-[32px] bg-white border-0 rounded-[6px] px-[16px] flex justify-between"
              >
                <p className="text-[12px]">최신순</p>
                <img src={open} alt="최신순.인기순" className="w-[16px]" />
              </button>
              <ul>
                <li>최신순</li>
                <li>인기순</li>
              </ul>
            </div>
            <button type="button">
              <img src={menu1_g} alt="박스로보기" />
            </button>
            <button type="button">
              <img src={menu2_b} alt="줄로보기" />
            </button>
          </div>
        </div>
        <ul>
          <Link>시리즈</Link>
        </ul>
      </div>
    </main>
  );
}
