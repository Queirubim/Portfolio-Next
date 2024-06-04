import { Inter, IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/header';
import './globals.css';

import { Footer } from './components/footer';
import { ContactForm } from './components/contact-form';
import { BackToTop } from './components/back-to-top';
import { Toaster } from './components/toaster';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Queirubim Dev',
    template: '%s | Queirubim Dev',
  },
  icons: [
    {
      url: '/images/glitch-logo.svg',
    },
  ],
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const doctorGlitch = localFont({
  variable: '--font-doctorGlitch',
  src: '../public/fonts/DoctorGlitch.otf',
  display: 'swap',
});

import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plexMono.variable} ${doctorGlitch.variable}`}
    >
      <body>
        <NextUIProvider>
          <Toaster />
          <Header />
          {children}
          <ContactForm />
          <Footer />
          <BackToTop />
        </NextUIProvider>
      </body>
    </html>
  );
}
