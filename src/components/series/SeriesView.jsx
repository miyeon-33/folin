// components / SeriesView.jsx
import menu1_g from '@/assets/images/rhr/menu1_g.png';
import menu1_b from '@/assets/images/rhr/menu1_b.png';
import menu2_g from '@/assets/images/rhr/menu2_g.png';
import menu2_b from '@/assets/images/rhr/menu2_b.png';
import { useState } from 'react';

export default function SeriesView() {
  const [isBoxView, setIsBoxView] = useState(true);

  function handleBoxView() {
    setIsBoxView(true);
  }

  function handleListView() {
    setIsBoxView(false);
  }

  return (
    <div className="flex items-center w-[88px] h-[32px]">
      <button
        type="button"
        className="pr-[8px] pl-[16px]"
        onClick={handleBoxView}
      >
        <img
          src={isBoxView ? menu1_g : menu1_b}
          alt="박스로보기"
          className="w-[32px] align-top"
        />
      </button>
      <button type="button" onClick={handleListView}>
        <img
          src={isBoxView ? menu2_b : menu2_g}
          alt="줄로보기"
          className="w-[32px] align-top"
        />
      </button>
    </div>
  );
}
