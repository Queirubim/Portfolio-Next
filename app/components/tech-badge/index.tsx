'use client';
import { motion } from 'framer-motion';
import { ComponentProps, useState } from 'react';
import { Modal } from '../Modal';

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
  shortDescription: string;
  icon: string;
};

export const TechBadge = ({
  name,
  shortDescription,
  icon,
  ...props
}: TechBadgeProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  isVisibleModal
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  return (
    <div>
      <motion.samp
        className="text-sky-400 border border-transparent bg-sky-800/80 hover:bg-sky-800 hover:border-sky-400 text-sm px-3 py-1 rounded-xl
      "
        {...props}
        onClick={() => setIsVisibleModal(!isVisibleModal)}
      >
        {name}
      </motion.samp>
      <Modal
        icon={icon}
        title={name}
        description={shortDescription}
        isVisible={isVisibleModal}
        setIsVisible={() => setIsVisibleModal(!isVisibleModal)}
      />
    </div>
  );
};
