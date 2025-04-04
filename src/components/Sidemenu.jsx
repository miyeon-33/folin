import { Link } from 'react-router';

const menus = [
  { path: '/series', menu: '시리즈' },
  { path: '/seminar', menu: '세미나' },
  { path: '/talk', menu: '톡' },
];

export default function Sidemenu() {
  return (
    <div className="relative flex items-center ">
      <ul className=" flex gap-[30px]">
        {menus.map((item) => (
          <li key={item.menu} className=" flex flex-col">
            <Link
              to={item.path}
              className="text-[18px] text-[#111] font-semiboldbold"
            >
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
