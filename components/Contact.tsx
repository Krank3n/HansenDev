import React, { useState } from 'react';
// ... (your other imports are fine)
import { EnvelopeIcon, PhoneIcon, MapPinIconAlt, UserCircleIcon as ContactUserCircleIcon } from './icons/CustomIcons'; // Assuming these exist
import Section from './common/Section'; // Assuming this exists

const SERVICE_OPTIONS = ['Web Development', 'AI Integration', 'Consulting', 'Other'] as const;
const BUDGET_OPTIONS = ['Under $4,000', '$4,000–$8,000', '$8,000–$15,000', '$15,000+', 'Not sure'] as const;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '', phone: '', service: '', budget: '', website: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', { // The path to your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Form data submitted successfully:', result.message);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', phone: '', service: '', budget: '', website: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000); // Show success message for 5 seconds
      } else {
        console.error('Error submitting form:', result.error);
        setSubmitError(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Network error or other issue:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Section
          id="contact"
          title="Let's Build Something Amazing"
          subtitle="Reach out to discuss your project or ideas."
          className="bg-gray-800/30"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* ... (Your contact details JSX remains the same) ... */}
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
                {/* Your Image component was commented out, keeping it that way */}
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
                  {/* ... (Your input fields for name, email, message remain the same) ... */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
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
                        disabled={isLoading}
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                        placeholder="you@example.com"
                        aria-label="Email Address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-text-secondary">Phone Number <span className="text-gray-500">(optional)</span></label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                        placeholder="+61 400 000 000"
                        aria-label="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark-text-secondary">Service Interest <span className="text-gray-500">(optional)</span></label>
                    <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                        aria-label="Service Interest"
                    >
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-dark-text-secondary">Budget Range <span className="text-gray-500">(optional)</span></label>
                    <select
                        name="budget"
                        id="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                        aria-label="Budget Range"
                    >
                      <option value="">Select a range...</option>
                      {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  {/* Honeypot field — invisible to real users */}
                  <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
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
                        disabled={isLoading}
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm text-dark-text"
                        placeholder="How can we help you?"
                        aria-label="Message"
                    />
                  </div>
                  {submitError && (
                      <div className="p-3 bg-red-500/20 text-red-400 rounded-md text-sm">
                        <p>{submitError}</p>
                      </div>
                  )}
                  <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-accent transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
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