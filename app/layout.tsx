import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/ui/Navbar';
import Layout from '@/components/ui/Layout';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guardian',
  description: 'Your nasty guardian of your secrets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <Layout>{children}</Layout>

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
