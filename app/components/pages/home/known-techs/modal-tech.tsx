'use client';
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Modal,
} from '@nextui-org/react';

import { getRelativeTimeString } from '@/app/utils/get-relative-time';
import { CMSIcon } from '@/app/components/cms-icon';

type ModalTechProps = {
  title: string;
  icon: string;
  description: string;
  date: string;
};

export const ModalTech = ({
  title,
  icon,
  description,
  date,
}: ModalTechProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const relativeTime = getRelativeTimeString(new Date(date), 'pt-BR').replace(
    'há',
    '',
  );
  return (
    <>
      <div
        className="focus:ring-0 absolute inset-0 w-full h-full"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-dark">
          <>
            <div onClick={onOpen} />
            <ModalHeader className="flex px-6 py-2 justify-between mt-4">
              {title}
              <div className="text-4xl">
                <CMSIcon icon={icon} />
              </div>
            </ModalHeader>
            <ModalBody>
              <p className="flex flex-1 flex-col gap-3 px-6  py-2">
                {description}
              </p>
              <samp className="mb-4 text-center text-gray-400">
                Possuo {relativeTime} de experiência
              </samp>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
