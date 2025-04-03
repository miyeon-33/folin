import { useQuery } from '@tanstack/react-query';

export function useUserId(userId) {
  return useQuery({
    queryKey: ['peopleId', userId],
    queryFn: () => fetch(`/people/${userId}`).then((res) => res.json()),
  });
}
