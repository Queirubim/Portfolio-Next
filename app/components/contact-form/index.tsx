'use client';
import { Button } from '@/app/components/buttons';
import { InputPerson } from '@/app/components/imput-person';
import { SectionTitle } from '@/app/components/section-title';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/app/lib/animations';

const contactFormSchema = z.object({
  name: z.string().min(3).max(1000),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitted },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitLOG = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data);
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <motion.form
          {...fadeUpAnimation}
          onSubmit={handleSubmit(onSubmitLOG)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <InputPerson placeholder="Nome" type="text" {...register('name')} />
          <InputPerson
            placeholder="E-mail"
            type="email"
            {...register('email')}
          />
          <textarea
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-sky-100 p-4 focus:outline-none focus:ring-2 ring-bluePhase-100"
            placeholder="Mensagem"
            maxLength={500}
            {...register('message')}
          />

          <Button
            disabled={isSubmitted}
            className="w-max mx-auto mt-6 button-shadow-glitch py-3 px-5"
          >
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
