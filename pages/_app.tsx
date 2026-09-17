import React from 'react';
// Fix: Changed named import 'AppProps' to default import.
import type AppProps from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter, Sora } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-sora',
});

// @ts-ignore
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDemoPage = router.pathname.startsWith('/demo');

  if (isDemoPage) {
    return (
      <div className={`${inter.variable} ${sora.variable} ${inter.className}`}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <GoogleAnalytics gaId="G-TPK07P99GQ" />
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <div className={`${inter.variable} ${sora.variable} ${inter.className}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*
          Only tags next/head actually dedupes belong here. Its METATYPES list covers
          name/httpEquiv/charSet/itemProp - NOT property - so an og:* tag placed here
          is emitted alongside the page's own and, being first in the document, is the
          one scrapers read. og:* and canonical are per-page, always.
        */}
        <meta name="author" content="HansenDev PTY LTD" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Head>
      <GoogleAnalytics gaId="G-TPK07P99GQ" />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;