'use client';
import { Link } from '@/app/components/link';
import { Project } from '@/app/types/projects';

import { CMSIcon } from '@/app/components/cms-icon';
import Image from 'next/image';
import { Button } from '../buttons';
import { BsInfoLg } from 'react-icons/bs';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex group rounded-lg hover:scale-110 hover:z-20 transition-all relative">
      {/* wallpaper techs */}
      <div className="absolute group-hover:hidden transition-all flex items-center justify-center flex-col gap-4 w-full h-full z-10 bg-black/50 rounded-lg">
        <h3 className="font-medium font-mono text-lg">{project.title}</h3>

        <div className="flex gap-x-2 text-2xl gap-y-3 flex-wrap mb-8 text-bluePhase-100">
          {project.technologies.map((tech) => (
            <div key={`${project.title}-tech-${tech.name}`}>
              <CMSIcon icon={tech.iconSvg} />
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:min-h-full">
        <Link href={`/projects/${project.slug}`} className="relative">
          <Image
            src={project.thumbnail.url}
            height={304}
            width={420}
            alt={`Tumbnaill do projeto ${project.title}`}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Button className="absolute hidden group-hover:block hover:scale-90 transition-all bottom-0 right-0 m-2 w-fit bg-bluePhase-200 p-1">
            <BsInfoLg />
          </Button>
        </Link>
      </div>
    </div>
  );
};
