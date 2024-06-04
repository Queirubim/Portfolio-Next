import { cn } from '@/app/lib/utiuls';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    // cn(executa sempre, executa conforme condição)
    <div className="relative">
      <Link
        href={href}
        className={cn(
          'flex text-gray-400/50 gap-2 items-center font-mono font-medium hoverLinkEffect',
          isActive && 'text-white',
        )}
      >
        <span className={cn('', isActive && 'text-shadow-glitch')}>#</span>
        {label}
      </Link>
    </div>
  );
};
