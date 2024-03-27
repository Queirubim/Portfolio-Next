'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from './nav-item';
import { motion } from 'framer-motion';

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
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between border-b border-sky-700">
        <Link href="/">
          <Image
            priority
            width={58}
            height={58}
            src={'/images/logo.svg'}
            alt="Logo Queirubim Dev"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
