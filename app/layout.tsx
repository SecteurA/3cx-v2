import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '3CX Installation & Support Services | Professional VoIP Solutions',
  description: 'Professional 3CX installation and support services. Get expert VoIP solutions with our Basic and Full installation packages. 24/7 support available.',
  keywords: '3CX installation, VoIP support, phone system setup, business communications, 3CX certified partner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="3CX Installation & Support Services" />
        <meta property="og:description" content="Professional 3CX installation and support services with expert VoIP solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}