import { SectionTitle } from '@/app/components/section-title';
import { KnownTech as IKnownTech } from '@/app/types/projects';
import { LayoutKnow } from './layout-know';
import { HorizontalDivider } from '@/app/components/divider/horizontal';

type KnownTechsProps = {
  front: IKnownTech[];
  back: IKnownTech[];
};

export const KnownTechs = ({ ...techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="mt-10 md:flex w-full gap-4">
        <LayoutKnow title="Front-End" techs={techs.front} />
        <HorizontalDivider className="md:hidden" />
        <LayoutKnow title="Back-End" techs={techs.back} />
      </div>
    </section>
  );
};
