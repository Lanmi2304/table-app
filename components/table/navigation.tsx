'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/components/aside/aside';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="fixed left-[10%] top-14 z-20 h-32 w-full border-b-2 border-gray-900 bg-main-bg px-[10%] text-gray-400">
      <div className="mt-10 flex flex-col gap-4">
        <h2 className="text-left text-4xl font-semibold text-white">
          Project Name
        </h2>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.path}
                className={cn('text-lg', path === link.path && 'text-white')}
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
