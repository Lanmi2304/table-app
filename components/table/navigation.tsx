"use client";
import { navLinks } from "@/components/aside/aside";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="text-gray-400 px-[10%] fixed left-[10%] z-20 top-14 bg-main-bg w-full h-32 border-b-2 border-gray-900">
      <div className="mt-10 flex flex-col gap-4">
        <h2 className="text-left text-4xl text-white font-semibold">
          Project Name
        </h2>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.path}
                className={cn("text-lg", path === link.path && "text-white")}
              >
                {link.text}
              </Link>
              {path === link.path && <hr className="mt-0.5" />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
