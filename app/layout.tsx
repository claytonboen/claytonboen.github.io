import type { Metadata } from 'next';
import {
  Barlow_Condensed,
  Manrope,
  Cormorant_Garamond,
} from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

const displayFont = Barlow_Condensed({
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
});
const bookFont = Cormorant_Garamond({
  variable: '--font-book',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Clayton Boen — Learning. Film. Fiction. Play.',
  description:
    'Story-driven work by Clayton Boen: instructional design, Nickelodeon television, the forthcoming Born to Blood novel, and Space Force, an independently developed game.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${bookFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
