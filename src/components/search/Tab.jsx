import { useState } from 'react';

const initTabs = [
  { menu: '전체', contents: '' },
  { menu: '시리즈', contents: '' },
  { menu: '아티클', contents: '' },
  { menu: '비디오', contents: '' },
  { menu: '세미나', contents: '' },
  { menu: '링커', contents: '' },
];

export default function Tab({
  data,
  total,
  seminarData = [],
  linkerData = [],
}) {
  const [activeTab, setActiveTab] = useState(0);

  const filteredData = data?.filter((item) => item.video === 'Y');

  const totalLength = data?.length + seminarData.length + linkerData.length;

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[8px] mb-[72px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="h-[22px] mb-[64px]">
          <ul className="flex items-center font-medium">
            {initTabs.map((tab, index) => (
              <button
                key={index}
                className={`pr-[12px] break-keep after:h-[16px] last:after:border-r-0 after:border-r after:ml-[12px]
          after:border-[#bfbfbf] flex gap-[2px] max-md:pl-[8px] ${
            index === activeTab ? 'text-point1' : 'text-gray-600'
          }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.menu}
                {tab.menu === '전체' && <span>{totalLength}</span>}
                {tab.menu === '시리즈' && <span>{data?.length}</span>}
                {tab.menu === '아티클' && <span>{data?.length}</span>}
                {tab.menu === '비디오' && <span>{filteredData.length}</span>}
                {tab.menu === '세미나' && <span>{seminarData.length}</span>}
                {tab.menu === '링커' && <span>{linkerData.length}</span>}
              </button>
            ))}
          </ul>
        </div>
      </div>
      {/* <div>{initTabs[activeTab].component}</div> */}
    </div>
  );
}
