import { Link } from 'react-router';

const menus = [
  { path: '/series', menu: '시리즈' },
  { path: '/seminar', menu: '세미나' },
  { path: '/talk', menu: '톡' },
  { path: '/b2b', menu: 'B2B' },
];

export default function Gnb() {
  return (
    <nav className="relative flex items-center ">
      <ul className=" flex gap-[30px]">
        {menus.map((item, index) => (
          <li key={item.menu} className=" flex items-center">
            <Link
              to={item.path}
              className="text-[18px] text-[#111] font-semibold"
            >
              {item.menu}
            </Link>
            {index === menus.length - 2 && (
              <span className="absolute right-[48px] h-[13px] border-r border-gray-600 border-r-[2px]"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
