// pages / Series.jsx
import { Link } from 'react-router';

export default function TopMenu() {
  return (
    <div className=" flex gap-[4px]">
      <Link
        to="/series"
        className="btn w-[180px] h-[48px] bg-white border-point1 rounded-[6px] 
              text-[15px] text-[#111]text-center font-medium max-md:w-[171px]
              max-sm:w-[calc(100%/3)]"
      >
        시리즈로 보기
      </Link>
      <Link
        to="/article"
        className="btn w-[180px] h-[48px] bg-white border-0 rounded-[6px] 
              text-[15px] text-[#111] text-center font-medium max-md:w-[171px]
              max-sm:w-[calc(100%/3)]"
      >
        아티클만 보기
      </Link>
      <Link
        to="/video"
        className="btn w-[180px] h-[48px] bg-white border-0 rounded-[6px] 
              text-[15px] text-[#111] text-center font-medium max-md:w-[171px]
              max-sm:w-[calc(100%/3)]"
      >
        비디오만 보기
      </Link>
    </div>
  );
}
