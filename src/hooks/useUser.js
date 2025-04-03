import { useQuery } from '@tanstack/react-query';

export function useUser() {
  return useQuery({
    queryKey: ['people'],
    queryFn: () => fetch('/people').then((res) => res.json()),
  });
}
