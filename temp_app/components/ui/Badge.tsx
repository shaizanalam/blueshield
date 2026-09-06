import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'surface';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'surface',
  size = 'md',
  className,
}: BadgeProps) {
  const variants = {
    primary: 'bg-eng-blue text-white font-medium',
    secondary: 'bg-deep-blue text-white font-medium',
    accent: 'bg-water-blue/15 text-deep-blue font-semibold border border-water-blue/30',
    outline: 'border border-border text-white bg-surface',
    surface: 'bg-surface text-text-muted border border-border/60',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 rounded',
    md: 'text-xs px-2.5 py-1 rounded-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium leading-none tracking-tight transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

