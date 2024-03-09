import { CMSIcon } from '@/app/components/cms-icon';
import { KnownTech as IKnownTech } from '@/app/types/projects';
import { getRelativeTimeString } from '@/app/utils/get-relative-time';

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '');
  return (
    <div className="p-6 rounded-lg border-solid border-2 border-transparent bg-gray-400/20 text-gray-300 flex flex-col gap-2 transition-all hover:bg-sky-950 hover:text-sky-400 hover:border-sky-400">
      <div className="flex items-center justify-between ">
        <p className="font-medium ">{tech.name}</p>
        <div className="text-4xl">
          <CMSIcon icon={tech.iconSvg} />
        </div>
      </div>

      <samp>{relativeTime} de experiência</samp>
    </div>
  );
};
