import { cn } from '@/app/lib/utiuls';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'py-2 rounded-full px-4 w-full text-sky-100 flex items-center justify-center gap-2  transition-all disabled:opacity-50 hover:scale-95',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
