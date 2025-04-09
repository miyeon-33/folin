import { useParams } from 'react-router';

export default function SeminarDetails() {
  const { articleId } = useParams();

  return (
    <div className="bg-[#ebedec] ">
      <div className="max-w-[1200px] h-[1500px] mx-auto">
        세미나 상세 페이지 - ID: {articleId}
      </div>
    </div>
  );
}
