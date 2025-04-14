import open from '@/assets/images/rhr/open.png';
import check from '@/assets/images/rhr/check.png';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import SeminarList from '@/components/seminar/SeminarList';
import SeminarPagination from '@/components/seminar/SeminarPagination';

const menus = ['전체', '신청 가능', '다시보기 가능', '신청마감'];

export default function Seminar() {
  const [selectedMenu, setSelectedMenu] = useState('전체');
  const [filteredData, setFilteredData] = useState([]);
  const [showTabs, setShowTabs] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['seminars'],
    queryFn: () => fetch('/seminars').then((res) => res.json()),
  });
  console.log(data);

  useEffect(() => {
    if (data?.seminars) {
      filterSeminarData(selectedMenu);
      setCurrentPage(1);
    }
  }, [selectedMenu, data]);

  function filterSeminarData(menuName) {
    const categoryMapping = {
      전체: null,
      '신청 가능': '신청가능',
      '다시보기 가능': '다시보기',
      신청마감: '신청마감',
    };

    const category = categoryMapping[menuName];

    if (!category) {
      setFilteredData(data?.seminars || []);
    } else {
      setFilteredData(
        data?.seminars.filter((item) => item.categories.includes(category)) ||
          []
      );
    }
  }

  function currentItems() {
    return filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }

  function handleMenu(menuName) {
    setSelectedMenu(menuName);
    setShowTabs(true);
  }

  function handleTabs() {
    setShowTabs((prev) => !prev);
    setIsRotated((prev) => !prev);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="w-full h-full bg-[#ebedec] p-[56px_8px_0]">
      <div className="m-[0_8px] max-w-[1200px] mx-auto">
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
            <ul className="z-2 absolute right-auto top-[80px] mt-[20px] w-[178px] text-[12px] max-sm:w-[95%] max-sm:right-[2.5%]">
              {menus.map((menu) => (
                <li
                  key={menu}
                  onClick={() => handleMenu(menu)}
                  className="border-0 cursor-pointer bg-white font-bold first:rounded-t-[10px] last:rounded-b-[10px] p-[8px_12px]"
                >
                  {selectedMenu === menu && (
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
          totalPage={Math.ceil(filteredData.length / itemsPerPage)}
          setPage={setCurrentPage}
        />
      </div>
    </main>
  );
}
