import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackNewsletterSignup } from '../lib/gtag';

const NewsletterCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website }),
      });

      const result = await response.json();

      if (response.ok) {
        trackNewsletterSignup();
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <Section id="newsletter" title="" className="py-12 md:py-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative rounded-3xl p-8 sm:p-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.06] via-white/[0.02] to-brand-primary/[0.06]"></div>
          <div className="absolute inset-0 noise-overlay"></div>

          <div className="relative">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-accent/20 to-brand-primary/10 rounded-2xl mb-5 mx-auto">
              <Mail className="h-7 w-7 text-brand-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-3">
              Get Free Tech Tips for Your Cairns Business
            </h2>
            <p className="text-dark-text-secondary mb-6 max-w-lg mx-auto">
              Monthly insights on web development, AI, and digital growth strategies. No spam, unsubscribe anytime.
            </p>

            {status === 'success' ? (
              <div className="p-4 rounded-xl bg-brand-accent/10">
                <p className="font-semibold gradient-text">You&apos;re subscribed!</p>
                <p className="text-sm mt-1 text-dark-text-secondary">Check your inbox for a welcome message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white/[0.04] rounded-xl placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:bg-white/[0.06] text-sm text-dark-text transition-all duration-300"
                    placeholder="you@example.com"
                    aria-label="Email address"
                  />
                </div>
                {/* Honeypot */}
                <div className="absolute opacity-0 h-0 w-0 -z-10" aria-hidden="true">
                  <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white btn-gradient transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                </button>
              </form>
            )}

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NewsletterCapture;
