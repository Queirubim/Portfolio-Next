'use client';
import { TechBadge } from '@/app/components/tech-badge';
import Image from 'next/image';
import { Button } from '@/app/components/buttons';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HomePageInfo } from '@/app/types/page-info';
import { RichText } from '@/app/components/rich-text';
import { CMSIcon } from '@/app/components/cms-icon';
import { motion } from 'framer-motion';
import { techBadgeAnimation } from '@/app/lib/animations';

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
    <section className="w-full lg:h-auto from-sky-90 bg-cloudy bg-cover bg-fixed bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sky-400 "> Ola, meu nome é</p>
          <h2 className="text-4xl text-sky-100 [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] font-medium mt-2 ">
            Allan Soares Amaral
          </h2>

          <div className="text-gray-200 [text-shadow:_1px_1px_0_rgb(0_0_0_/_90%)] my-6 text-xl">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[448px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                icon={tech.iconSvg}
                shortDescription={tech.shortDescription}
                key={`tb-${tech.name}-${i}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button onClick={handleContact} className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-sky-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  className="hover:text-gray-100 hover:scale-150 transition-all max-w-2"
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
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            priority
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil de Allan Soares Amaral"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover "
          />
        </motion.div>
      </div>
    </section>
  );
};
