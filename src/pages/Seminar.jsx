import open from '@/assets/images/rhr/open.png';
import check from '@/assets/images/rhr/check.png';
import { useState, useEffect } from 'react';
import seminarDummy from '@/mocks/seminarDummy.json';
import SeminarList from '@/components/seminar/SeminarList';
import SeminarPagination from '@/components/seminar/SeminarPagination';

export default function Seminar() {
  const [selectedMenu, setSelectedMenu] = useState('전체');
  const [filteredData, setFilteredData] = useState(seminarDummy);
  const [showTabs, setShowTabs] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPage = Math.ceil(filteredData.length / itemsPerPage);

  const menus = ['전체', '신청 가능', '다시보기 가능', '신청마감'];

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMenu]);

  function currentItems() {
    return filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }

  function handleMenu(menuName) {
    setSelectedMenu(menuName);
    setActiveMenu(menuName);
    filterSeminarData(menuName);
    setShowTabs(true);
  }

  function handleTabs() {
    setShowTabs((prev) => !prev);
    setIsRotated((prev) => !prev);
  }

  function filterSeminarData(menuName) {
    if (menuName === '전체') {
      setFilteredData(seminarDummy);
    } else if (menuName === '신청 가능') {
      setFilteredData(
        seminarDummy.filter((item) => item.categories.includes('신청가능'))
      );
    } else if (menuName === '다시보기 가능') {
      setFilteredData(
        seminarDummy.filter((item) => item.categories.includes('다시보기'))
      );
    } else if (menuName === '신청마감') {
      setFilteredData(
        seminarDummy.filter((item) => item.categories.includes('신청마감'))
      );
    }
  }

  return (
    <>
      <div className=" w-full h-full bg-[#ebedec]  p-[56px_8px_0]">
        <div className=" m-[0_8px] max-w-[1200px] mx-auto">
          <div className="flex justify-end max-sm:justify-center">
            <button
              type="button"
              onClick={handleTabs}
              className={`btn relative h-[37px] w-[178px] flex justify-between text-[12px] rounded-[8px] bg-white max-sm:w-[100%] max-sm:mt-[4px] ${
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
              <ul className="z-2 absolute right-[300px] top-[80px] mt-[20px] w-[178px] text-[12px] max-sm:w-[95%] max-sm:right-[2.5%] ">
                {menus.map((menu) => (
                  <li
                    key={menu}
                    onClick={() => handleMenu(menu)}
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

          <div className="pt-[4px]">
            <SeminarList data={currentItems()} />
          </div>

          <SeminarPagination
            page={currentPage}
            totalPage={totalPage}
            setPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
