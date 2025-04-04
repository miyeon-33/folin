import { Link } from 'react-router';

const menus = [
  { path: '/', menu: 'Home' },
  { path: '/series', menu: 'Series' },
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
