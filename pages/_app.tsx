import React from 'react';
// Fix: Changed named import 'AppProps' to default import.
import type AppProps from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// @ts-ignore
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDemoPage = router.pathname.startsWith('/demo');

  if (isDemoPage) {
    return (
      <div className={`${inter.variable} ${inter.className}`}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <GoogleTagManager gtmId="GTM-PWPRX6WL" />
        <GoogleAnalytics gaId="G-TPK07P99GQ" />
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <div className={`${inter.variable} ${inter.className}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Default SEO tags can go here, or be overridden by pages */}
        <link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <GoogleTagManager gtmId="GTM-PWPRX6WL" />
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