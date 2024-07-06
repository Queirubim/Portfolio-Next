'use client';
import React, { useState } from 'react';
import { NavItem } from './nav-item';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
      shouldHideOnScroll
      className="bg-dark border-bluePhase-100 flex"
      classNames={{
        wrapper: ['container'],
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand className={isMenuOpen ? 'hidden' : 'flex'}>
          <i className="font-glitch text-shadow-glitch text-3xl [letter-spacing:0.15em]">
            Q.D
          </i>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="gap-8 hidden sm:flex text-large relative">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex items-center justify-center gap-5 bg-dark">
        <NavbarBrand className="flex-grow-0">
          <i className="font-glitch text-shadow-glitch text-3xl [letter-spacing:0.15em]">
            Q.D
          </i>
        </NavbarBrand>
        <NavbarItem className="gap-8 flex text-large flex-col relative">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} onClick={() => setIsMenuOpen(false)}>
              <NavItem {...item} />
            </div>
          ))}
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
