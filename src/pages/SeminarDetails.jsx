import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function SeminarDetails() {
  const { articleId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['seminar', articleId],
    queryFn: () =>
      fetch(`/api/seminars/${articleId}`).then((res) => res.json()),
    enabled: !!articleId,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const seminarData = {};

  return (
    <main className="bg-[#ebedec] ">
      <div className="max-w-[1200px] h-[1500px] mx-auto flex justify-center">
        <ul className="mt-[50px]">
          <h1>{data.dettit}</h1>
          <img src={data.detimg} alt={data.dettit} />
          <p>....</p>
        </ul>
      </div>
    </main>
  );
}
