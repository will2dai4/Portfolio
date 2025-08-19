interface TechTagProps {
  children: React.ReactNode;
}

export default function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-mono bg-border text-muted rounded border border-border/50">
      {children}
    </span>
  );
}
