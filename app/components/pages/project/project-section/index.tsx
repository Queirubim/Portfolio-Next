'use client';
import Image from 'next/image';
import { ProjectSection } from '@/app/types/projects';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/app/lib/animations';

type ProjectSectionsProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32 ">
      {sections.map((section, i) => {
        return (
          <motion.div
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
            key={`-${section.title}0652${i}-`}
            className="flex flex-col items-center gap-6 md:gap-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              {section.title}
            </h2>

            <Image
              src={section.image.url}
              width={1080}
              height={672}
              className="w-full aspect-auto rounded-lg object-cover"
              alt={`Imagem da sessão ${section.title}`}
              unoptimized
            />
          </motion.div>
        );
      })}
    </section>
  );
};
