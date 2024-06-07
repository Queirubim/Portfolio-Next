import { SectionTitle } from '@/app/components/section-title';
import React from 'react';
import { ExperienceItem } from './experience-item';
import { WorckExperience } from '@/app/types/worck-experience';

type WorkExperiencesProps = {
  experiences: WorckExperience[];
};

export const WorkExperience = ({ experiences }: WorkExperiencesProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 xl:gap-96 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências" title="Experiência Profisional" />
        <p className=" mt-6">
          Atuo em minha empresa local especializada em serviços de manutenção
          técnica, instalação e configuração de eletrônicos, além de formatação
          de computadores e notebooks.
        </p>
        <br />
        <p>
          Além disso, também atuo como freelancer, criando sites e soluções web
          para negócios, além de desenvolver automações de tarefas. Com um foco
          especial em oferecer soluções personalizadas e eficientes, busco
          entender as necessidades únicas de cada cliente para desenvolver
          projetos que agreguem valor ao seu negócio.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem key={experience.workedArea} experience={experience} />
        ))}
      </div>
    </section>
  );
};
