import React from 'react';
import Image from 'next/image';
import Section from './common/Section';
import { UserCircleIcon, MapPinIcon } from './icons/CustomIcons';
import Sunrise from 'assets/Sunrise esplanade.jpg';

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="About HansenDev"
      subtitle="Your Trusted Technology Partner in Cairns"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            HansenDev PTY LTD, led by <strong className="text-brand-accent">Thomas Hansen</strong>, is a Cairns-based technology partner dedicated to helping local and national businesses thrive in the digital age. We believe in a collaborative approach, deeply understanding your unique needs to deliver bespoke solutions that provide real, measurable value.
          </p>
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            Our commitment is to quality, innovation, and supporting the growth of businesses in our community and beyond. We specialize in crafting high-performance web applications and integrating intelligent AI systems to solve complex challenges and unlock new opportunities.
          </p>
          <div className="flex items-center space-x-4 bg-dark-card p-4 rounded-lg shadow-md">
            <UserCircleIcon className="h-10 w-10 text-brand-accent" />
            <div>
              <h4 className="font-semibold text-dark-text">Thomas Hansen</h4>
              <p className="text-sm text-dark-text-secondary">Founder & Lead Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-dark-card p-4 rounded-lg shadow-md">
            <MapPinIcon className="h-10 w-10 text-brand-accent" />
            <div>
              <h4 className="font-semibold text-dark-text">Located in Kamerunga, Cairns</h4>
              <p className="text-sm text-dark-text-secondary">Serving Far North Queensland and beyond.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl group"> {/* Added group for hover effect if needed on Image */}
          <div className="relative w-full aspect-[4/3]"> {/* Adjust aspect ratio as needed */}
            <Image
              src={Sunrise}
              alt="A tranquil morning beach scene in Cairns, reflecting local inspiration."
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 rounded-lg" 
            />
          </div>
           <p className="text-xs text-center text-gray-500 p-2 bg-dark-card">Image: Morning beach scene, Cairns.</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
