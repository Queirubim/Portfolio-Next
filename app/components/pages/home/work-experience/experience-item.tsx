'use client';
import { TechBadge } from '@/app/components/tech-badge';
import Image from 'next/image';
import { WorckExperience } from '@/app/types/worck-experience';
import { RichText } from '@/app/components/rich-text';
import { formattedDateDuration } from '@/app/utils/formatted-date-duration';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations';

type ExperienceItemProps = {
  experience: WorckExperience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <motion.div
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
      className="grid group grid-cols-[40px,1fr] gap-4 md:gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 group-hover:border-bluePhase-100 transition-colors p-0.5">
          <Image
            src={experience.workedPicture.url}
            alt={`Logo da Empresa ${experience.workedArea} `}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"> </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.workedUrl}
            target="_blank"
            className="text-gray-500 group-hover:text-bluePhase-100 transition-colors"
            rel="noreferrer"
          >
            @ {experience.workedArea}
          </a>
          <h4 className="text-gary-300">{experience.role}</h4>
          <samp className="text-gray-500">
            {formattedDateDuration(experience.startDate, experience.endDate)}
          </samp>
          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[480px] mb-8">
          {experience.technologies.map((tech, i) => (
            <TechBadge
              icon={tech.iconSvg}
              shortDescription={tech.shortDescription}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              name={tech.name}
              key={`${i}-tech-${tech.name} `}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
