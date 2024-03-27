'use client';
import { motion } from 'framer-motion';
import { ComponentProps, useState } from 'react';
import { Modal } from '../Modal';
import { useScrollLock } from '@/app/utils/scroll-lock';

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
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  isVisibleModal ? lockScroll() : unlockScroll();
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
