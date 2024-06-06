'use client';
import { Link } from '@/app/components/link';
import { SectionTitle } from '@/app/components/section-title';
import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] flex flex-col items-center justify-center ">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-sky-100 text-center max-w-[640px] my-6 text-lg sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  );
};
