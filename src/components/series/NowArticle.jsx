import { useState } from 'react';
import { useParams } from 'react-router';

export default function NowArticle({ seriesData, topicId }) {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옵니다
  const targetId = parseInt(id); // 문자열을 숫자로 변환합니다
  const [foundObject, setFoundObject] = useState(null);

  return <div>{result.topicId}</div>;
}
