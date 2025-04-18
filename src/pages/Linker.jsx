import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

export default function Linker() {
  const { id } = useParams();
  console.log(id, '==');

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['linker', id],
    queryFn: () => fetch(`/linker/${id}`).then((res) => res.json()),
  });

  // const name = data?.[0].name;
  // const { isLoading: articleIsLoading, data: articleData } = useQuery({
  //   queryKey: ['article', name],
  //   queryFn: () => fetch(`/articles/${name}`).then((res) => res.json()),
  // });
  // console.log(articleData?.[0]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-[#ebedec]">
      <div className="flex justify-center items-center flex-col p-[172px_24px_160px_24px]">
        <img
          src={data[0].photo}
          alt={data[0].name}
          className="w-[192px] h-[192px] rounded-[50%]"
        />

        <h2 className=" font-bold text-[28px] mb-[15px] mt-[40px]">
          {data[0].name}
        </h2>
        <p className="text-[15px] mb-[50px] font-medium">{data[0].job}</p>

        <div className="border-b-[1px] border-t-[1px] border-[#00d48d] w-[100%] p-[40px_0] max-w-[386px] m-auto">
          <p className="text-[18px]  leading-[180%] font-medium">
            {data[0].achievements}
          </p>
        </div>

        <div className="mt-[30px]">
          <h3 className="font-bold text-[18px] mb-[40px]">아티클·비디오</h3>
          {/* <div className="">{articleData?.[0].author}</div> */}
        </div>

        <span className="border-t-[1px] w-[386px] border-[#00d48d]"></span>

        <div className="mt-[30px]">
          <h3 className="font-bold text-[18px]">세미나</h3>
          <div className="">
            <ul></ul>
          </div>
        </div>
      </div>
    </main>
  );
}
