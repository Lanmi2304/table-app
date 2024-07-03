import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

  type?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  position = 'bottom-right',
  className,
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl border border-slate-400 px-4 py-2 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
