import Link from "next/link";
import { House, UsersRound, Table } from "lucide-react";

const navLinks = [
  {
    text: "Home",
    path: "/",
    icon: <House />,
  },
  { text: "Table", path: "/host-table", icon: <Table /> },
  { text: "Users", path: "/", icon: <UsersRound /> },
];

export default function Aside() {
  return (
    <aside className="fixed top-14 w-[10%] h-screen bg-main-bg border-r-2 border-gray-900">
      <ul className="w-full">
        {navLinks.map((link) => (
          <li key={link.text} className="text-left pl-8 first:mt-20 mt-4">
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
