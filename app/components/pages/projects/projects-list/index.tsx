'use client';
import { Project } from '@/app/types/projects';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/app/lib/animations';
import { ProjectCard } from '@/app/components/project-card';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-12 lg:py-18 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-8 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={`${i}-${i + 1}`}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
};
