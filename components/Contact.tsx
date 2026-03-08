import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIconAlt, UserCircleIcon as ContactUserCircleIcon } from './icons/CustomIcons';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackFormSubmit, trackPhoneCall, trackOutboundLink } from '../lib/gtag';
import { CONTACT_INFO } from '../constants/business';

const SERVICE_OPTIONS = ['Free Discovery Session', 'Web Development', 'AI Integration', 'Automation', 'Consulting', 'Other'] as const;
const BUDGET_OPTIONS = ['Under $5,000', '$5,000–$10,000', '$10,000–$20,000', '$20,000+', 'Not sure yet'] as const;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '', phone: '', service: '', budget: '', website: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const prefills: Record<string, Partial<typeof formData>> = {
      '#contact-discovery': {
        service: 'Free Discovery Session',
        budget: 'Not sure yet',
        message: "Hi! I'd like to book a free discovery session to find out where automation or a custom build could save my business the most time.",
      },
      '#contact-chat': {
        service: 'Free Discovery Session',
        budget: 'Not sure yet',
        message: "Hi Tom! I'd love to have a quick chat about how HansenDev could help my business.",
      },
      '#contact-quote': {
        service: '',
        budget: '',
        message: "Hi! I'm interested in getting a quote. Here's what I need:\n\n",
      },
      '#contact-project': {
        service: 'Web Development',
        budget: '',
        message: "Hi! I saw your portfolio and I'd love to discuss a similar project for my business.\n\n",
      },
      '#contact-demo': {
        service: 'AI Integration',
        budget: 'Not sure yet',
        message: "Hi! I'd love to see a demo of your AI tools and how they could work for my business.",
      },
      '#contact-question': {
        service: '',
        budget: 'Not sure yet',
        message: "Hi! I have a question:\n\n",
      },
    };

    const handleHash = () => {
      const hash = window.location.hash;
      const prefill = prefills[hash];
      if (prefill) {
        setFormData((prev) => ({ ...prev, ...prefill }));
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', window.location.pathname + '#contact');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        trackFormSubmit(formData.service, formData.budget);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', phone: '', service: '', budget: '', website: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(result.error || 'An unexpected error occurred.');
      }
    } catch {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "mt-1 block w-full px-4 py-3 bg-white/[0.03] rounded-xl placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:bg-white/[0.05] sm:text-sm text-dark-text transition-all duration-300";

  return (
    <Section
      id="contact"
      title="Let's Build Something Amazing"
      subtitle="Reach out to discuss your project or ideas."
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-30"></div>

      <div
        ref={ref}
        className={`relative grid md:grid-cols-2 gap-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Contact details */}
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-dark-text">Contact Details</h3>

          {[
            { icon: <ContactUserCircleIcon className="h-5 w-5 text-brand-accent" />, title: 'HansenDev PTY LTD', lines: ['Thomas Hansen'] },
            { icon: <MapPinIconAlt className="h-5 w-5 text-brand-accent" />, title: 'Location', lines: ['19 Cananga Close', 'Kamerunga, QLD 4870', 'Cairns, Australia'] },
          ].map((item) => (
            <div key={item.title} className="flex items-start space-x-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
              <span className="mt-1 flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-medium text-dark-text">{item.title}</h4>
                {item.lines.map((line) => (
                  <p key={line} className="text-dark-text-secondary">{line}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
            <EnvelopeIcon className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-dark-text">Email</h4>
              <a href={`mailto:${CONTACT_INFO.email.primary}`} className="gradient-text hover:opacity-80 transition-opacity">
                {CONTACT_INFO.email.primary}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
            <PhoneIcon className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-dark-text">Phone</h4>
              <a href="tel:0480232922" onClick={() => trackPhoneCall('contact-section')} className="gradient-text hover:opacity-80 transition-opacity">
                0480 232 922
              </a>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=19+Cananga+Close+Kamerunga+QLD"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundLink('https://www.google.com/maps', 'Google Maps')}
              className="inline-block text-sm text-dark-text-secondary/50 hover:text-brand-accent transition-colors"
              aria-label="View address on Google Maps"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-dark-text mb-6">Send Us a Message</h3>
          {isSubmitted ? (
            <div className="text-center p-6 rounded-xl bg-brand-accent/10">
              <p className="font-semibold gradient-text text-lg">Thank you!</p>
              <p className="text-dark-text-secondary mt-1">Your message has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary/70">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required disabled={isLoading} className={inputClasses} placeholder="John Doe" aria-label="Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary/70">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required disabled={isLoading} className={inputClasses} placeholder="you@example.com" aria-label="Email Address" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-text-secondary/70">Phone Number <span className="text-gray-600">(optional)</span></label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} disabled={isLoading} className={inputClasses} placeholder="+61 400 000 000" aria-label="Phone Number" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-dark-text-secondary/70">Service Interest <span className="text-gray-600">(optional)</span></label>
                <select name="service" id="service" value={formData.service} onChange={handleChange} disabled={isLoading} className={inputClasses} aria-label="Service Interest">
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-dark-text-secondary/70">Budget Range <span className="text-gray-600">(optional)</span></label>
                <select name="budget" id="budget" value={formData.budget} onChange={handleChange} disabled={isLoading} className={inputClasses} aria-label="Budget Range">
                  <option value="">Select a range...</option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              {/* Honeypot */}
              <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" name="website" id="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text-secondary/70">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required disabled={isLoading} className={inputClasses} placeholder="How can we help you?" aria-label="Message" />
              </div>
              {submitError && (
                <div className="p-3 bg-red-500/10 text-red-400 rounded-xl text-sm">
                  <p>{submitError}</p>
                </div>
              )}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3.5 px-4 rounded-xl text-sm font-semibold text-white btn-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
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
