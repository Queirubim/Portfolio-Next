import { Project } from '@/app/types/projects';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ');
  return (
    <div className="flex flex-col rounded-lg h-[436px] bg-gray-400/30 overflow-hidden border-2 border-gray-800 hover:border-sky-400 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden ">
        <Image
          src={project.thumbnail.url}
          width={380}
          height={200}
          alt={`Thumbnail do ${project.title}`}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 z-10 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-sky-400 transition-all">
          {project.title}
        </strong>
        <div className="mt-2 text-sky-100 line-clamp-4">
          {project.shortDescription}
        </div>
        <samp className="text-gray-300 group-hover:text-sky-400 text-sm font-medium block mt-auto truncate">
          {technologies}
        </samp>
      </div>
    </div>
  );
};
