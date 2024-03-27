import { CMSIcon } from '../cms-icon';

type ModalProps = {
  title: string;
  isVisible: boolean;
  description: string;
  icon: string;
  setIsVisible: (isVisible: boolean) => void;
};

export const Modal = ({
  isVisible,
  setIsVisible,
  title,
  description,
  icon,
}: ModalProps) => {
  if (isVisible) {
    const handleClick = () => setIsVisible(!isVisible);
    return (
      <section
        onClick={handleClick}
        className={`${
          isVisible ? 'flex' : 'hidden'
        } bg-black/70 fixed top-0 left-0 w-full h-full z-30 place-items-center justify-center`}
      >
        <div className="bg-sky-950 p-2 mb-12 rounded-md w-80 relative shadow-sm border-2 border-sky-500">
          <div className="flex px-6  py-4 justify-between">
            <h1 className=" text-lg font-semibold">{title}</h1>
            <div className="text-4xl">
              <CMSIcon icon={icon} />
            </div>
          </div>
          <p className="flex flex-1 flex-col gap-3 px-6 py-2">{description}</p>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};
