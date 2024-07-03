import Link from "next/link";
import { House, UsersRound, Table } from "lucide-react";

export const navLinks = [
  {
    text: "Home",
    path: "/",
    icon: <House />,
  },
  { text: "Table", path: "/host-table", icon: <Table /> },
  { text: "Users", path: "/users", icon: <UsersRound /> },
];

export default function Aside() {
  return (
    <aside className="hidden sm:block sm:fixed sm:top-14 sm:w-[10%] sm:h-screen bg-main-bg border-r-2 border-gray-900">
      <ul className="w-full">
        {navLinks.map((link) => (
          <li
            key={link.text}
            className="text-left pl-6 first:mt-20 mt-4 text-lg font-semibold"
          >
            <Link
              href={link.path}
              className="text-white w-[10%] flex gap-2 hover:text-pink-500"
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
