import React, { useState } from 'react';
import Image from 'next/image';
import Section from './common/Section';
import { EnvelopeIcon, PhoneIcon, MapPinIconAlt, UserCircleIcon as ContactUserCircleIcon } from './icons/CustomIcons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Section 
      id="contact" 
      title="Let's Build Something Amazing" 
      subtitle="Reach out to discuss your project or ideas."
      className="bg-gray-800/30"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-dark-text">Contact Details</h3>
          <div className="flex items-start space-x-3 p-4 bg-dark-card rounded-lg shadow">
            <ContactUserCircleIcon className="h-6 w-6 text-brand-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-dark-text">HansenDev PTY LTD</h4>
              <p className="text-dark-text-secondary">Thomas Hansen</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-dark-card rounded-lg shadow">
            <MapPinIconAlt className="h-6 w-6 text-brand-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-dark-text">Location</h4>
              <p className="text-dark-text-secondary">19 Cananga Close</p>
              <p className="text-dark-text-secondary">Kamerunga, QLD 4870</p>
              <p className="text-dark-text-secondary">Cairns, Australia</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-dark-card rounded-lg shadow">
            <EnvelopeIcon className="h-6 w-6 text-brand-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-dark-text">Email</h4>
              <a href="mailto:thomas.andrew.hansen@gmail.com" className="text-brand-accent hover:text-teal-300 transition-colors">
                thomas.andrew.hansen@gmail.com
              </a>
            </div>
          </div>
           <div className="flex items-start space-x-3 p-4 bg-dark-card rounded-lg shadow">
            <PhoneIcon className="h-6 w-6 text-brand-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-dark-text">Phone</h4>
              <a href="tel:0480232922" className="text-brand-accent hover:text-teal-300 transition-colors">
                0480 232 922
              </a>
            </div>
          </div>
          <div className="mt-6">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=19+Cananga+Close+Kamerunga+QLD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block group"
              aria-label="View address on Google Maps"
            >
              {/*<div className="relative w-full max-w-md aspect-[4/3]"> /!* Container for responsive image *!/*/}
              {/*  <Image */}
              {/*    src="/assets/kamerunga-map-placeholder.jpg" */}
              {/*    alt="Map showing general location of Kamerunga, Cairns, near Stoney Creek" */}
              {/*    layout="fill"*/}
              {/*    objectFit="cover"*/}
              {/*    className="rounded-lg shadow-lg group-hover:opacity-90 transition-opacity"*/}
              {/*  />*/}
              {/*</div>*/}
               <p className="text-xs text-center text-gray-500 p-1">View on Google Maps</p>
            </a>
          </div>
        </div>

        <div className="bg-dark-card p-6 sm:p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-dark-text mb-6">Send Us a Message</h3>
          {isSubmitted ? (
            <div className="text-center p-6 bg-teal-600/20 text-brand-accent rounded-md">
              <p className="font-semibold">Thank you!</p>
              <p>Your message has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                  placeholder="John Doe"
                  aria-label="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                  placeholder="you@example.com"
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text-secondary">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                  placeholder="How can we help you?"
                  aria-label="Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-accent transition-transform transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
