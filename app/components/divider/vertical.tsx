import { cn } from '@/app/lib/utiuls';

type VerticalDividerProps = {
  className?: string;
};

export const VerticalDivider = ({ className }: VerticalDividerProps) => {
  return (
    <div
      className={cn(
        'h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 bg-red-400 mx-4',
        className,
      )}
    ></div>
  );
};
