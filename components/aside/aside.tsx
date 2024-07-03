import { House, Table, UsersRound } from 'lucide-react';
import Link from 'next/link';

export const navLinks = [
  {
    text: 'Home',
    path: '/',
    icon: <House />,
  },
  { text: 'Table', path: '/host-table', icon: <Table /> },
  { text: 'Users', path: '/users', icon: <UsersRound /> },
];

export default function Aside() {
  // TODO: Full width on mobile

  return (
    <aside className="fixed top-14 hidden h-screen w-[10%] border-r-2 border-gray-900 bg-main-bg sm:block">
      <ul className="w-full">
        {navLinks.map((link) => (
          <li
            key={link.text}
            className="mt-4 pl-6 text-left text-lg font-semibold first:mt-20"
          >
            <Link
              href={link.path}
              className="flex w-[10%] gap-2 text-white hover:text-pink-500"
            >
              <div>{link.icon}</div>
              <div>{link.text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
