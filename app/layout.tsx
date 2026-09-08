import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import content from '@/src/data/content';
import './globals.css';

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: 'website',
    images: [{ url: content.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.seo.title,
    description: content.seo.description,
    images: [content.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/couple-hero-640.avif"
          imageSrcSet="/images/couple-hero-640.avif 640w, /images/couple-hero-960.avif 960w"
          imageSizes="100vw"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body className={`${serif.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
