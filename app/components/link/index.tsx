import { ComponentProps } from 'react';
import NextLink from 'next/link';
import { cn } from '@/app/lib/utiuls';

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-bluePhase-100 text-sm hover:text-pinkPhase-100 transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
