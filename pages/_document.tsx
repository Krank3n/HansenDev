import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark"> {/* Manages dark mode at HTML level if needed, or rely on body/tailwind config */}
      <Head>
        {/* Meta tags from original index.html moved here or to _app.tsx / specific pages */}
        <meta charSet="UTF-8" />
        <meta name="author" content="HansenDev PTY LTD" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph tags - some can be defaults, others page-specific */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hansendev.com.au" /> {/* Replace with actual domain */}
        {/* For production, ensure og:image is an absolute URL to your hosted image */}
        <meta property="og:image" content="/assets/morning-beach-cairns.jpg" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="HansenDev PTY LTD" />
        
        <link rel="canonical" href="https://www.hansendev.com.au" /> {/* Replace with actual domain */}

        {/* Any global font links or other head elements */}
      </Head>
      <body className="bg-dark-bg text-dark-text antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
