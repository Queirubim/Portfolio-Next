'use client';
import React from 'react';
// import Link from 'next/link';
import { NavItem } from './nav-item';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

const NAV_ITEMS = [
  {
    label: 'Inicío',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
];

export const Header = () => {
  return (
    <Navbar
      isBordered
      isBlurred={false}
      shouldHideOnScroll
      className="bg-light dark:bg-dark border-cyan-300"
      classNames={{ wrapper: ['max-w-[1204px]'] }}
    >
      <NavbarBrand>
        <i className="font-glitch text-shadow-glitch text-3xl [letter-spacing:0.15em]">
          Q.D
        </i>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="gap-8 flex text-large relative">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    // <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
    //   <div className="container flex items-center justify-between border-b border-sky-700">
    //     <Link href="/">
    //       <p className="font-glitch text-shadow-glitch text-3xl [letter-spacing:0.15em]">
    //         Q.D
    //       </p>
    //     </Link>

    //     <nav className="flex items-center gap-4 sm:gap-10">
    //       {NAV_ITEMS.map((item) => (
    //         <NavItem {...item} key={item.label} />
    //       ))}
    //     </nav>
    //   </div>
    // </header>
  );
};
