import { cn } from '@/app/lib/utiuls';

type HorizontalDividerProps = {
  className?: string;
};

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div
      className={cn(
        'w-full my-8 h-px bg-gradient-to-r from-pinkPhase-500 to-bluePhase-500',
        className,
      )}
    ></div>
  );
};
