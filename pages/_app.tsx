

import React from 'react';
// Fix: Changed named import 'AppProps' to default import.
import type AppProps from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Default SEO tags can go here, or be overridden by pages */}
        {/* favicon example - place in public folder */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
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