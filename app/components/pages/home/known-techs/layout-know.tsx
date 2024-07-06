'use client';
import { KnownTech as TKnownTech } from '@/app/types/projects';
import { KnownTech } from './known-tech';
import { motion } from 'framer-motion';

type LayoutKnowProps = {
  title: string;
  techs: TKnownTech[];
};

export const LayoutKnow = ({ title, techs }: LayoutKnowProps) => {
  const animation = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <div className="w-full transition-all p-6">
      <span className="font-mono text-2xl text-bluePhase-100">{title}</span>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
            {...animation}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            key={tech.name}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
