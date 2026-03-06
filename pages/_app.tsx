

import React from 'react';
// Fix: Changed named import 'AppProps' to default import.
import type AppProps from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

// @ts-ignore
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDemoPage = router.pathname.startsWith('/demo');

  if (isDemoPage) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Default SEO tags can go here, or be overridden by pages */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;