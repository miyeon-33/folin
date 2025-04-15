// components / series / SeriesList.jsx
import { Link } from 'react-router';

export default function SeriesList({ topic }) {
  return (
    <div className="mb-[48px]">
      <Link className="inline-block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300">
        <div className="flex items-center mb-[4px]">
          <div
            className="inline-block max-w-[calc(100%-78px)] h-auto py-[8px] px-[12px] mr-[4px]
            rounded-[6px] font-bold text-[#111]"
            style={{
              backgroundColor: topic[0].color,
              border: `1px solid ${topic[0].color}`,
            }}
          >
            {topic[topic.length - 1].topic}
          </div>
          <div
            className="inline-block py-[8px] px-[12px]  bg-white rounded-[6px] font-bold text-[#111]"
            style={{
              border: `1px solid ${topic[0].color}`,
            }}
          >
            총{topic[0].tag}
          </div>
        </div>
        <p className="inline-block w-full h-[56px] leading-[56px] px-[16px] bg-white rounded-[6px] text-[18px] font-medium overflow-hidden whitespace-nowrap text-ellipsis">
          {topic[topic.length - 1].introduce}
        </p>
      </Link>
    </div>
  );
}
