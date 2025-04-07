import open from '@/assets/images/rhr/open.png';
import check from '@/assets/images/rhr/check.png';
import { useState } from 'react';
import seminarDummy from '@/mocks/seminarDummy.json';
import SeminarList from '@/components/SeminarList';

export default function Seminar() {
  const [selectedMenu, setSelectedMenu] = useState('전체');
  const [showTabs, setShowTabs] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = ['전체', '신청 가능', '다시보기 가능'];

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
    setActiveMenu(menuName);
    setShowTabs(true);
  };

  const clickTabs = () => {
    setShowTabs((prev) => !prev);
    setIsRotated((prev) => !prev);
  };

  return (
    <>
      <div className="w-full h-full bg-[#ebedec]">
        <div className=" m-[0_16px] p-[56px_8px_0]">
          <div className=" flex justify-end">
            <button
              type="button"
              onClick={clickTabs}
              className={`btn relative h-[37px] w-[178px] flex justify-between text-[12px] rounded-[8px] bg-white ${
                showTabs ? 'border-[#00D48D]' : 'border-transparent'
              }`}
            >
              {selectedMenu}
              <img
                src={open}
                className={`w-[16px] h-[16px] transition-transform duration-300 ease-in-out ${
                  isRotated ? 'rotate-[-180deg]' : 'rotate-0'
                }`}
              />
            </button>
            {showTabs && (
              <ul className="absolute right-[24px] top-[80px] mt-[20px] w-[178px] text-[12px] ">
                {menus.map((menu) => (
                  <li
                    key={menu}
                    onClick={() => handleMenuClick(menu)}
                    className="border-0 cursor-pointer bg-white font-bold first:rounded-t-[10px] last:rounded-b-[10px] p-[8px_12px]"
                  >
                    {activeMenu === menu && (
                      <img
                        src={check}
                        alt="선택된 메뉴"
                        className="w-[16px] h-[16px] mr-[4px]"
                      />
                    )}
                    {menu}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <SeminarList data={seminarDummy} />
          </div>
        </div>
      </div>
    </>
  );
}
