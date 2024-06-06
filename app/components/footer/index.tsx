import { Link } from '../link';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="h-full w-full">
      <div className="w-full flex flex-col items-center justify-center px-4">
        <p className="text-sm font-normal text-gray-400">
          Entre em contato tambem por essas redes sociais
        </p>
        <div className="flex p-6 gap-3 mb-6">
          <Link
            className="rounded-full"
            href={'https://w.app/AllanSoares'}
            target="_blank"
            title="Link para entar em contato através do Whatsapp"
          >
            <FaWhatsapp size={40} />
          </Link>
          <Link
            className="rounded-full "
            href={'https://www.linkedin.com/in/allan-soares-8139b3198/'}
            target="_blank"
            title="Link para entar em contato através do Linkedin"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            className="rounded-full "
            href={'https://www.instagram.com/__queirubim__/'}
            target="_blank"
            title="Link para entar em contato através do Instagram"
          >
            <FaInstagram size={40} />
          </Link>
        </div>
        <p className="py-2">
          Codado no{' '}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-slate-400 hover:text-bluePhase-100 focus-visible:text-bluePhase-100"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            Visual Studio Code
          </a>{' '}
          por mim mesmo. Construído com{' '}
          <a
            href="https://nextjs.org/"
            className="font-medium text-slate-400 hover:text-bluePhase-100 focus-visible:text-bluePhase-100"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Next.js (opens in a new tab)"
          >
            Next.js
          </a>{' '}
          e{' '}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-slate-400 hover:text-bluePhase-100 focus-visible:text-bluePhase-100"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tailwind CSS (opens in a new tab)"
          >
            Tailwind CSS
          </a>
          , implantado com{' '}
          <a
            href="https://vercel.com/"
            className="font-medium text-slate-400 hover:text-bluePhase-100 focus-visible:text-bluePhase-100"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Vercel (opens in a new tab)"
          >
            Vercel
          </a>
          . Todo o texto é definido no{' '}
          <a
            href="https://rsms.me/inter/"
            className="font-medium text-slate-400 hover:text-bluePhase-100 focus-visible:text-bluePhase-100"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Inter (opens in a new tab)"
          >
            Inter
          </a>
          {'.'}
        </p>
      </div>
    </footer>
  );
};
