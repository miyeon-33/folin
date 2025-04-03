import { Link } from 'react-router';

const menus = [
  { path: '/', menu: 'Home' },
  { path: '/react-query', menu: 'React Query' },
];

export default function Gnb() {
  return (
    <nav>
      <ul className="flex">
        {menus.map((item) => (
          <li key={item.menu} className="p-[30px]">
            <Link to={item.path} className="text-[20px]">
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
