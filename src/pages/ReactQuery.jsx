import { useUser } from '@/hooks/useUser';
import { Link } from 'react-router';

export default function ReactQuery() {
  const { isLoading, data, isError, error } = useUser();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.meeage}</>;

  return (
    <main>
      <h2>React Query page</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`/react-query/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
