import { QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Watermark from './components/common/watermark';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ark frontend test',
  description: 'Ark frontend test for Screenshot Lab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new QueryClient();

  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <Watermark/>
      </body>
    </html>
  )
}
