'use client';
import { Button } from '@/app/components/buttons';
import { SectionTitle } from '@/app/components/section-title';
import { TechBadge } from '@/app/components/tech-badge';
import { TbBrandGithub } from 'react-icons/tb';
import { FiGlobe } from 'react-icons/fi';
import { Link } from '@/app/components/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Project } from '@/app/types/projects';
import { RichText } from '@/app/components/rich-text';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations';

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] bg-cloudy bg-cover bg-no-repeat flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <SectionTitle
        subtitle="projeto"
        title={project.title}
        className="text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_90%)] items-center sm:[&>h3]:text-4xl "
      />

      <motion.div
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
        className="text-sky-100 [text-shadow:_1px_1px_0_rgb(0_0_0_/_90%)] z-10 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
      >
        <RichText content={project.description.raw} />
      </motion.div>
      <div className="w-full max-w-[480px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <TechBadge
            {...techBadgeAnimation}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            name={tech.name}
            key={`${project.title}-tech-${tech.name}`}
          />
        ))}
      </div>
      <motion.div
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
      >
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
        {project?.onlineProjectUrl && (
          <a href={project.onlineProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </motion.div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};
