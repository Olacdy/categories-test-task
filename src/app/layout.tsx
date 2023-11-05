import type { Metadata } from 'next';

import { Toaster } from 'sonner';

import Favicon from '../../public/favicon.ico';

import Header from '@/components/header';
import Providers from '@/components/providers';

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
        <main className='flex h-screen max-h-screen flex-col items-center gap-10 antialiased'>
          <Header />
          <Providers>{children}</Providers>
        </main>
        <Toaster richColors position='top-center' />
      </body>
    </html>
  );
}
