import { cn } from '@/app/lib/utiuls';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const ButtonGradient = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative w-full inline-flex items-center justify-center p-0.5 me-2 overflow-hidden rounded-full group bg-gradient-to-br from-bluePhase-100 to-pinkPhase-100 text-sky-100',
        className,
      )}
      {...props}
    >
      <span className="relative px-4 py-2 transition-all duration-200 bg-dark w-full h-full rounded-full group-hover:bg-opacity-0 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
