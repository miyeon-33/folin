import { useParams } from 'react-router';

export default function Linker() {
  const { articleId } = useParams();

  return (
    <main className="bg-[#ebedec]">
      <div className="flex justify-center items-center h-[2000px]">
        현재 링커 아이디 : {articleId}
      </div>
    </main>
  );
}
