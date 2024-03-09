import { cn } from '@/app/lib/utiuls';

type HorizontalDividerProps = {
  className?: string;
};

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div
      className={cn('w-full my-8 border-b border-b-sky-700', className)}
    ></div>
  );
};
