'use client';
import { Image } from '@nextui-org/image';
import { Button } from '@/app/components/buttons';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoMdDownload } from 'react-icons/io';
import { HomePageInfo } from '@/app/types/page-info';
import { RichText } from '@/app/components/rich-text';
import { CMSIcon } from '@/app/components/cms-icon';
import { motion } from 'framer-motion';
import { ButtonGradient } from '@/app/components/buttons/buttonGradient';

type homeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: homeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full lg:h-auto flex flex-col justify-end items-center sm:pb-32 py-24 lg:pb-[110px]">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className="py-10 lg:py-0"
        >
          {/* Title */}
          <div className="flex flex-col gap-2 text-center lg:text-start">
            <h2 className="text-4xl [font-size:2.5rem] font-semibold">
              Olá, eu sou o
            </h2>
            <span className="text-3xl font-glitch text-shadow-glitch text-g font-medium mt-2 tracking-widest">
              Allan Soares
            </span>
            <p className="text-gray-600 mb-2 text-large font-medium pb-4 sm:pb-2">
              Desenvolvedor De Softwares
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col sm:items-center md:min-w-[390px]">
            <div className="w-full flex flex-col gap-5 mb-5 sm:mb-0 md:flex-row">
              <ButtonGradient className="relative">
                Download CV
                <IoMdDownload size={18} />
                <a
                  href={homeInfo.curriculum.url}
                  className="absolute w-full h-full"
                  download={homeInfo.curriculum.url}
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </ButtonGradient>

              <Button onClick={handleContact} className="button-shadow-glitch ">
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>
            </div>

            <div className="text-3xl w-full text-bluePhase-100 flex items-center justify-center lg:justify-start h-20 gap-8">
              {homeInfo.socials.map((contact, index) => (
                <a
                  className="hover:text-pinkPhase-100 hover:scale-150
                 transition-all max-w-2"
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Link para entar em Contato"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil de Allan Soares Amaral"
            className="w-[300px] h-[230px] md:w-[520px] md:h-[404px]  mb-6 lg:mb-0 shadow-2xl object-cover hover:scale-110 transition-all"
          />
        </motion.div>
      </div>
      <div className="text-gray-400 mt-16 text-xl px-14 max-w-5xl text-center">
        <p className="pb-8 text-3xl font-semibold text-sky-100">Sobre mim</p>
        <RichText content={homeInfo.introduction.raw} />
      </div>
    </section>
  );
};
