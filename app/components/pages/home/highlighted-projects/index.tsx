import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { SectionTitle } from '@/app/components/section-title';
import { ProjectCard } from '../../../project-card';
import { Link } from '@/app/components/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Project } from '@/app/types/projects';
type HighlightedProjectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-6" />

      <div className="py-12 lg:py-18 px-2 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <p className="flex items-center gap-1.5">
        <samp className="text-gray-400">Se interessou?</samp>
        <Link href="/projects" className="inline-flex">
          Ver todos
          <HiArrowNarrowRight />
        </Link>
      </p>
      <HorizontalDivider />
    </section>
  );
};
