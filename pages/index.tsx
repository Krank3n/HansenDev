import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>HansenDev | Custom Web Development & AI Integration Cairns</title>
        <meta name="description" content="HansenDev PTY LTD offers expert web application development and AI integration services in Cairns, Australia. We build innovative solutions to help your business grow. Contact Thomas Hansen." />
        <meta name="keywords" content="web development cairns, ai integration cairns, custom software cairns, thomas hansen, hansendev, web applications australia, machine learning cairns, business ai solutions, far north queensland tech, stoney creek kamerunga, cairns esplanade, cairns beaches" />
        <meta property="og:title" content="HansenDev | Custom Web Development & AI Integration Cairns" />
        <meta property="og:description" content="Expert web & AI solutions in Cairns. HansenDev helps businesses innovate and grow with cutting-edge technology tailored for Far North Queensland, featuring vibrant local scenery." />
        {/* Specific OG tags for this page can override defaults from _document.tsx or _app.tsx if needed */}
      </Head>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
