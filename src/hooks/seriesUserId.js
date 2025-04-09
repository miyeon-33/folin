//hocks / seriesUserId.js
import { useQuery } from '@tanstack/react-query';

export function seriesUserId(seriesId) {
  return useQuery({
    queryKey: ['detail', seriesId],
    queryFn: () => fetch(`/detail/${seriesId}`).then((res) => res.json()),
  });
}
