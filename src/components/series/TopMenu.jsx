// components/series/TopMenu.jsx
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

export default function TopMenu() {
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const [activeTab, setActiveTab] = useState('series'); // 기본값: 시리즈

  useEffect(() => {
    // 현재 경로에 따라 activeTab 초기값 설정
    if (location.pathname.includes('/series')) {
      setActiveTab('series');
    } else if (location.pathname.includes('/article')) {
      setActiveTab('article');
    } else if (location.pathname.includes('/video')) {
      setActiveTab('video');
    }
  }, [location.pathname]); // 경로가 변경될 때마다 실행

  const handleTabChange = (tab) => {
    setActiveTab(tab); // 클릭한 탭을 활성화
  };

  return (
    <div className=" flex gap-[4px]">
      <Link
        to="/series"
        onClick={() => handleTabChange('series')}
        className={`btn w-[180px] h-[48px] bg-white rounded-[6px] 
              text-[15px] text-[#111]text-center font-medium max-md:w-[171px]
              max-sm:w-[calc(100%/3)] ${
                activeTab === 'series' ? 'border-point1' : 'border-0'
              }`}
      >
        시리즈로 보기
      </Link>
      <Link
        to="/article"
        onClick={() => handleTabChange('article')}
        className={`btn w-[180px] h-[48px] bg-white rounded-[6px] 
          text-[15px] text-[#111]text-center font-medium max-md:w-[171px]
          max-sm:w-[calc(100%/3)] ${
            activeTab === 'article' ? 'border-point1' : 'border-0'
          }`}
      >
        아티클만 보기
      </Link>
      <Link
        to="/video"
        onClick={() => handleTabChange('video')}
        className={`btn w-[180px] h-[48px] bg-white rounded-[6px] 
          text-[15px] text-[#111]text-center font-medium max-md:w-[171px]
          max-sm:w-[calc(100%/3)] ${
            activeTab === 'video' ? 'border-point1' : 'border-0'
          }`}
      >
        비디오만 보기
      </Link>
    </div>
  );
}
