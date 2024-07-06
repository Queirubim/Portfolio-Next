/* eslint-disable @typescript-eslint/no-unused-vars */
import { CMSIcon } from '../cms-icon';
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Modal as NextModal,
} from '@nextui-org/react';

type ModalProps = {
  title: string;
  description: string;
  icon: string;
};

export const Modal = ({ title, description, icon }: ModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="border-1 border-bluePhase-300 hover:scale-95 hover:border-pinkPhase-300 transition-all py-0.5 px-4 focus:ring-0"
        onPress={onOpen}
      >
        {title}
      </Button>
      <NextModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-dark">
          {(onClose) => (
            <>
              <ModalHeader className="flex px-6 py-2 justify-between mt-4">
                {title}
                <div className="text-4xl">
                  <CMSIcon icon={icon} />
                </div>
              </ModalHeader>
              <ModalBody>
                <p className="flex flex-1 flex-col gap-3 px-6 mb-4 py-2">
                  {description}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </NextModal>
    </>
  );
};
