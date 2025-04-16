import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';

export default function LinkerView() {
  // URL에서 topicId 가져오기
  const { articleId } = useParams();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['linker', articleId],
    queryFn: () => fetch(`/linker/${articleId}`).then((res) => res.json()),
  });
  console.log(data);

  return (
    <div className="flex gap-y-[40px] gap-x-[24px]">
      {data.map((item) => (
        <div className="w-[calc(100% - 16px)] ">
          <Link>
            <img src={item.photo} alt="" />
            <div>
              <span>신수정</span>
              <span>임팩트리더스아카데미대표</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
