'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-border bg-background/80">
      <nav className="w-full max-w-content mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="font-mono text-accent font-medium hover:text-accent/80 transition-colors"
          >
            WD
          </Link>
          
          <ul className="flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'text-sm transition-colors hover:text-accent relative',
                    pathname === href 
                      ? 'text-accent' 
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {label}
                  {pathname === href && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
