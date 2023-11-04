import type { Metadata } from 'next';

import localFont from 'next/font/local';

import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Categories test task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={satoshi.variable}>
        <main className='font-satoshi flex h-screen max-h-screen flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
