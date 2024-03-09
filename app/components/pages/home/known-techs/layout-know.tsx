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
    <div className="w-full rounded-lg transition-all hover:shadow-2xl p-6">
      <span className="font-mono text-2xl text-sky-400">{title}</span>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(274px,1fr))] gap-3 mt-[60px]">
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
