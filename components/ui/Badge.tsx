import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'teal' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
      {
        'bg-brand-teal/8 text-brand-teal': variant === 'teal',
        'bg-brand-accent/10 text-brand-accent': variant === 'accent',
        'bg-gray-100 text-brand-muted': variant === 'default',
      },
      className
    )}>
      {children}
    </span>
  );
}
