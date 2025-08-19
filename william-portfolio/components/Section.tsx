import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Section({ 
  children, 
  className, 
  as: Component = 'section' 
}: SectionProps) {
  return (
    <Component className={cn('w-full max-w-content mx-auto px-6 py-8', className)}>
      {children}
    </Component>
  );
}
