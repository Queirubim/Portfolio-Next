import Image from 'next/image';

export const Page404 = () => {
  return (
    <section className="w-full lg:h-auto flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center justify-center flex-col-reverse lg:flex-row">
        <div className="w-full flex justify-center">
          <Image
            priority
            alt="Erro 404 escrito om falhas"
            src={'/images/error404glitch.png'}
            width={2000}
            height={2000}
            className=" w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px]"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 w-[200px]: text-white">
          A página que você está procurando não foi encontrada.
        </h2>
      </div>
    </section>
  );
};
