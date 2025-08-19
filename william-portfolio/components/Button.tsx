import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'default', 
  size = 'md',
  className 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';
  
  const variants = {
    default: 'bg-border text-foreground hover:bg-border/80',
    accent: 'bg-accent text-background hover:bg-accent/90',
    ghost: 'text-muted hover:text-foreground hover:bg-border/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
