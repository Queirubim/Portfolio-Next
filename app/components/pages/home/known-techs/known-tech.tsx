import { CMSIcon } from '@/app/components/cms-icon';
import { KnownTech as IKnownTech } from '@/app/types/projects';
import { ModalTech } from './modal-tech';

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 bg-gray-800 rounded-tl-3xl rounded-br-3xl border-2 border-t-bluePhase-100 border-l-bluePhase-100 border-b-pinkPhase-100 border-r-pinkPhase-100 text-sky-100 flex flex-col transition-all ease-in-out duration-200 hover:scale-105 relative">
      <div className="text-4xl flex items-center justify-center flex-col gap-2">
        <p className="text-base">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <ModalTech
        title={tech.name}
        description={tech.shortDescription}
        icon={tech.iconSvg}
        date={tech.startDate}
      />
    </div>
  );
};
