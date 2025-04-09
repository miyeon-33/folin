import { useParams } from 'react-router';

export default function SeminarDetails() {
  const { articleId } = useParams();

  return <div>세미나 상세 페이지 - ID: {articleId}</div>;
}
