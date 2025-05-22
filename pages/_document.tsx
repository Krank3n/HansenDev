// _document.js
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    // It's best practice to get your site's base URL from an environment variable
    // For development, you can fallback to localhost
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const ogImageUrl = `${siteUrl}/assets/morning-beach-cairns.jpg`; // Assuming you put it in public/assets/

    return (
        <Html lang="en" className="dark">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="author" content="HansenDev PTY LTD" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={ogImageUrl} />
                {/* You might also want to add specific dimensions for the image */}
                <meta property="og:image:width" content="1200" /> {/* Example width */}
                <meta property="og:image:height" content="630" /> {/* Example height */}
                <meta property="og:locale" content="en_AU" />
                <meta property="og:site_name" content="HansenDev PTY LTD" />

                <link rel="canonical" href={siteUrl} />
            </Head>
            <body className="bg-dark-bg text-dark-text antialiased">
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}