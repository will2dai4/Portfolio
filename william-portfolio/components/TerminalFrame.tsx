import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TerminalFrameProps {
  children: ReactNode;
  className?: string;
}

export default function TerminalFrame({ children, className }: TerminalFrameProps) {
  return (
    <div className={cn('bg-background border border-border rounded-lg overflow-hidden shadow-lg', className)}>
      {/* Terminal window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-border/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 text-center text-xs text-muted font-mono">
          william@portfolio
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
