import type { Metadata } from 'next';

import { Toaster } from 'sonner';

import { isMobile } from 'react-device-detect';

import Favicon from '../../public/favicon.ico';

import Header from '@/components/header';

import './globals.css';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Categories test task',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='flex h-screen max-h-screen flex-col items-center antialiased'>
          <Header />
          {children}
        </main>
        <Toaster
          richColors
          position={isMobile ? 'top-center' : 'bottom-right'}
        />
      </body>
    </html>
  );
}
