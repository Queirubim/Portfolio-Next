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
    <Link
      href={href}
      className={cn(
        'flex text-gray-400/50 items-center gap-2 font-mono font-medium',
        isActive && 'text-sky-300',
      )}
    >
      <span className="text-sky-500">#</span>
      {label}
    </Link>
  );
};
