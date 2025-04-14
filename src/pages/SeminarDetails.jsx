import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function SeminarDetails() {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['seminar', id],
    queryFn: () => fetch(`/api/seminars/${id}`).then((res) => res.json()),
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
