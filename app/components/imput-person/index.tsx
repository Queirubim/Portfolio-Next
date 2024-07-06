import { cn } from '@/app/lib/utiuls';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputPersonProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const InputPerson = forwardRef<HTMLInputElement, InputPersonProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-sky-100 p-4 focus:outline-none focus:ring-2 ring-bluePhase-100',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
