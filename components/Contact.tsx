import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackFormSubmit, trackPhoneCall, trackOutboundLink, trackWhatsApp } from '../lib/gtag';
import { CONTACT_INFO, BUSINESS_METRICS } from '../constants/business';

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
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setSubmitError(result.error || 'An unexpected error occurred.');
      }
    } catch {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const whatsapp = `https://wa.me/${CONTACT_INFO.phone.raw}?text=${encodeURIComponent("Hi Tom! I'd love to have a quick chat about how HansenDev could help my business.")}`;
  const label = 'mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark-text-secondary';

  return (
    <Section id="contact" title="" className="relative overflow-hidden bg-dark-surface/60">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="orb orb-teal left-[-10%] bottom-[-10%] h-[520px] w-[520px] opacity-50" />

      <div
        ref={ref}
        className={`relative grid gap-10 lg:grid-cols-12 lg:gap-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Intro + details */}
        <div className="lg:col-span-5">
          <span className="eyebrow mb-4">Get in touch</span>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tightest text-white sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s find your bottleneck.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-dark-text-secondary">
            Tell us what&apos;s eating your evenings. We reply {BUSINESS_METRICS.stats.responseTime.toLowerCase()}, and the first chat is always free.
          </p>

          <ul className="mt-9 space-y-3">
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`} className="glass-card hover-glow flex items-center gap-4 p-4">
                <span className="icon-tile h-10 w-10"><Mail className="h-4 w-4" /></span>
                <div className="min-w-0">
                  <p className="text-xs text-dark-muted">Email</p>
                  <p className="truncate font-medium text-white">{CONTACT_INFO.email}</p>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:0480232922" onClick={() => trackPhoneCall('contact-section')} className="glass-card hover-glow flex items-center gap-4 p-4">
                <span className="icon-tile h-10 w-10"><Phone className="h-4 w-4" /></span>
                <div>
                  <p className="text-xs text-dark-muted">Phone</p>
                  <p className="font-medium text-white">0480 232 922</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=19+Cananga+Close+Kamerunga+QLD"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundLink('https://www.google.com/maps', 'Google Maps')}
                className="glass-card hover-glow flex items-center gap-4 p-4"
                aria-label="View address on Google Maps"
              >
                <span className="icon-tile h-10 w-10"><MapPin className="h-4 w-4" /></span>
                <div>
                  <p className="text-xs text-dark-muted">Office</p>
                  <p className="font-medium text-white">19 Cananga Close, Kamerunga QLD 4870</p>
                </div>
              </a>
            </li>
          </ul>

          <div className="mt-8 border-t border-hairline pt-6">
            <p className="text-sm text-dark-text-secondary">Prefer to talk?</p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('contact-section')}
              className="btn-secondary mt-3 px-5 py-3 text-sm"
            >
              <MessageCircle className="h-4 w-4 text-brand-accent" />
              Message Tom on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="panel p-6 sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="icon-tile h-14 w-14"><CheckCircle2 className="h-7 w-7" /></span>
                <p className="mt-5 font-display text-2xl font-semibold text-white">Thanks, message sent.</p>
                <p className="mt-2 text-dark-text-secondary">Tom will get back to you {BUSINESS_METRICS.stats.responseTime.toLowerCase()}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>Full name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required disabled={isLoading} className="field" placeholder="Jane Smith" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required disabled={isLoading} className="field" placeholder="you@business.com.au" autoComplete="email" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={label}>Phone <span className="normal-case tracking-normal text-dark-muted">(optional)</span></label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} disabled={isLoading} className="field" placeholder="+61 400 000 000" autoComplete="tel" />
                  </div>
                  <div>
                    <label htmlFor="service" className={label}>I&apos;m interested in</label>
                    <select name="service" id="service" value={formData.service} onChange={handleChange} disabled={isLoading} className="field">
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className={label}>Budget <span className="normal-case tracking-normal text-dark-muted">(optional)</span></label>
                  <select name="budget" id="budget" value={formData.budget} onChange={handleChange} disabled={isLoading} className="field">
                    <option value="">Select a range</option>
                    {BUDGET_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                {/* Honeypot */}
                <div className="absolute left-0 top-0 h-0 w-0 -z-10 opacity-0" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" name="website" id="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="message" className={label}>What&apos;s the bottleneck?</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required disabled={isLoading} className="field resize-y" placeholder="Tell us about the admin, the lost quotes, the thing you keep doing by hand..." />
                </div>
                {submitError && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    <p>{submitError}</p>
                  </div>
                )}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-dark-muted">No spam, no sales funnel. Just a reply from Tom.</p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl btn-gradient px-7 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>{isLoading ? 'Sending...' : 'Send message'}</span>
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
