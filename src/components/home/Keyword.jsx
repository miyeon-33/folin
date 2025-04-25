import { Link } from 'react-router';

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
          max-md:gap-[4px]  mx-auto"
        >
          {group.map((keyword, index) => (
            <li
              key={index}
              className="px-[32px] py-[16px] flex items-center
              rounded-[6px] bg-[#fff] text-[18px] hover:bg-[#00d48d] h-[48px]"
            >
              <Link
                to={`/search?keyword=${keyword}`}
                className="font-bold text-gray-600"
              >
                {' '}
                {keyword}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
