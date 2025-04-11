const keywords = [
  '기획',
  '커리어',
  'AI',
  '브랜딩',
  '창업',
  '마케팅',
  '콘텐츠',
  '이직',
  '트렌드',
  '디자인',
  '리더십',
  '글쓰기',
  '공간',
  'F&B',
  '조직문화',
  '프로',
  '테크',
  '롱런',
  '네트워킹',
  '협업',
];

const baseUrl = 'https://www.folin.co/search?keyword=';

export default function KeywordList() {
  const groupedKeywords = [
    keywords.slice(0, 7),
    keywords.slice(7, 14),
    keywords.slice(14),
  ];

  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] mx-auto">
      <h1 className="text-[24px] font-bold mb-[40px]">키워드</h1>
      {groupedKeywords.map((group, groupIndex) => (
        <ul
          key={groupIndex}
          className="flex gap-[8px] mb-[4px] justify-center items-center max-md:flex-wrap
          max-md:gap-[4px] max-md:w-[520px] mx-auto max-sm:w-[386px]"
        >
          {group.map((keyword, index) => (
            <li
              key={index}
              className="px-[32px] py-[16px] flex items-center
              rounded-[6px] bg-[#fff] text-[18px] hover:bg-[#00d48d] h-[48px]"
            >
              <a
                href={`${baseUrl}${encodeURIComponent(keyword)}`}
                target="_blank"
                className="font-bold text-gray-600"
              >
                {keyword}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
