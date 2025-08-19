import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IconLinkProps {
  href: string;
  children: ReactNode;
  label: string;
  className?: string;
}

export default function IconLink({ href, children, label, className }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:text-foreground hover:bg-border/50 transition-colors',
        className
      )}
    >
      {children}
    </a>
  );
}
