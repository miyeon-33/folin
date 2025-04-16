// components / ArticleDetails.jsx
import SeriesDetails from '@/pages/SeriesDetails';
import { Link } from 'react-router';

export default function ArticleDetails() {
  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[588px] pt-[64px] m-auto">
        <div>
          <div>
            <Link to={SeriesDetails}>
              <div
                className="max-w-[calc(100% - 35px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
                // style={{
                //   backgroundColor: item.color,
                //   border: `1px solid ${item.color}`,
                // }}
              >
                1등브랜드의비밀
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
