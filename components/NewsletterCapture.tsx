import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Section from './common/Section';

const NewsletterCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
          <div className="flex items-center justify-center w-14 h-14 bg-brand-accent/20 rounded-xl mb-5 mx-auto">
            <Mail className="h-7 w-7 text-brand-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-3">
            Get Free Tech Tips for Your Cairns Business
          </h2>
          <p className="text-dark-text-secondary mb-6 max-w-lg mx-auto">
            Monthly insights on web development, AI, and digital growth strategies. No spam, unsubscribe anytime.
          </p>

          {status === 'success' ? (
            <div className="p-4 bg-teal-600/20 text-brand-accent rounded-lg">
              <p className="font-semibold">You&apos;re subscribed!</p>
              <p className="text-sm mt-1">Check your inbox for a welcome message.</p>
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
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent text-sm text-dark-text"
                  placeholder="you@example.com"
                  aria-label="Email address"
                />
              </div>
              {/* Honeypot */}
              <div className="absolute opacity-0 h-0 w-0 -z-10" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default NewsletterCapture;
