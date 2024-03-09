'use client';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.samp
      className="text-sky-400 border border-transparent bg-sky-800/80 hover:bg-sky-800 hover:border-sky-400 text-sm px-3 py-1 rounded-xl
      "
      {...props}
    >
      {name}
    </motion.samp>
  );
};
