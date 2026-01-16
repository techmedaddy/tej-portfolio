'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            TPS
          </Link>
          
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group",
                    pathname === item.href
                      ? "text-purple-400"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full",
                      pathname === item.href && "w-full"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
