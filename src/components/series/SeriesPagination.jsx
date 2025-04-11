import { generatePagination } from '@/lib/utils';

export default function SeriesPagination({ page, totalPages }) {
  console.log(generatePagination(page, totalPages));
  return <div>SeriesPagination</div>;
}
