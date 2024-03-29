import { cn } from '@/app/lib/utiuls';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputPersonProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const InputPerson = forwardRef<HTMLInputElement, InputPersonProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-sky-400 ',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
