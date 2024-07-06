'use client';
import { Link } from '@/app/components/link';
import { TechBadge } from '@/app/components/tech-badge';
import { Project } from '@/app/types/projects';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row "
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="w-full lg:min-h-full"
      >
        <Link href={`/projects/${project.slug}`}>
          <Image
            priority
            src={project.thumbnail.url}
            height={304}
            width={420}
            alt={`Tumbnaill do projeto ${project.title}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
      </motion.div>

      <div className="flex-1 lg:py-[18px] lg:min-w-[500px] xl:min-w-[640px]">
        <motion.h3
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-medium text-lg text-gray-50 "
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </motion.h3>

        <motion.p
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-gray-400 my-6 lg:max-w-2xl"
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[380px] ">
          {project.technologies.map((tech, i) => (
            <TechBadge
              icon={tech.iconSvg}
              shortDescription={tech.shortDescription}
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};
