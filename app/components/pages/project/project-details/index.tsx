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
import { ButtonGradient } from '@/app/components/buttons/buttonGradient';

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <SectionTitle
        subtitle="projeto"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl "
      />

      <motion.div
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
        className="text-sky-100 z-10 text-start max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
      >
        <RichText content={project.description.raw} />
      </motion.div>
      <div className="w-full max-w-[480px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <TechBadge
            icon={tech.iconSvg}
            shortDescription={tech.shortDescription}
            {...techBadgeAnimation}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            name={tech.name}
            key={`${project.title}-tech-${tech.name}-${i} `}
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
            <ButtonGradient className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </ButtonGradient>
          </a>
        )}
        {project?.onlineProjectUrl && (
          <a href={project.onlineProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px] button-shadow-glitch">
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
