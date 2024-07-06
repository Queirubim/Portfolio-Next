'use client';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { Modal } from '../Modal';

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
  shortDescription: string;
  icon: string;
};

export const TechBadge = ({ name, shortDescription, icon }: TechBadgeProps) => {
  return (
    <div>
      <Modal icon={icon} title={name} description={shortDescription} />
    </div>
  );
};
