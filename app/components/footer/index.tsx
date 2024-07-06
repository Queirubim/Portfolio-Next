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
            href={'https://w.app/AllanSoares'}
            target="_blank"
            title="Link para entar em contato através do Whatsapp"
          >
            <FaWhatsapp size={40} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/allan-soares-8139b3198/'}
            target="_blank"
            title="Link para entar em contato através do Linkedin"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href={'https://www.instagram.com/__queirubim__/'}
            target="_blank"
            title="Link para entar em contato através do Instagram"
          >
            <FaInstagram size={40} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
