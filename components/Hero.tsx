import React, { useEffect, useRef, useState } from 'react';
import LogoBanner from './LogoBanner';
import { ArrowRight, PhoneCall, FileText, Sparkles, Star, Clock, Briefcase } from 'lucide-react';
import { trackCTA } from '../lib/gtag';
import { BUSINESS_METRICS } from '../constants/business';

const activity = [
  {
    product: 'QuoteMate',
    initials: 'Q',
    tone: 'from-emerald-400 to-teal-600',
    icon: <FileText className="h-4 w-4" />,
    title: 'Quote #1042 sent to client',
    meta: '90 seconds after the site visit',
    time: 'Just now',
  },
  {
    product: 'Call Katie',
    initials: 'K',
    tone: 'from-rose-400 to-fuchsia-600',
    icon: <PhoneCall className="h-4 w-4" />,
    title: 'Missed call answered, lead qualified',
    meta: 'Job details pushed to CRM',
    time: '2:14 am',
  },
  {
    product: 'TalkMyShiz',
    initials: 'T',
    tone: 'from-violet-400 to-indigo-600',
    icon: <Sparkles className="h-4 w-4" />,
    title: 'Filler words cut, captions burned in',
    meta: 'Published to YouTube',
    time: '4 min',
  },
];

const proof = [
  { icon: <Briefcase className="h-4 w-4" />, value: BUSINESS_METRICS.stats.projectsCompleted, label: 'projects shipped' },
  { icon: <Star className="h-4 w-4" />, value: BUSINESS_METRICS.stats.averageRating, label: 'average rating' },
  { icon: <Clock className="h-4 w-4" />, value: BUSINESS_METRICS.stats.responseTime, label: 'response' },
];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Defer the video until the browser is idle so LCP is the poster, not the mp4
  useEffect(() => {
    const schedule = typeof window.requestIdleCallback === 'function'
      ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 3000 })
      : (cb: () => void) => window.setTimeout(cb, 1500);
    const id = schedule(() => setVideoReady(true));
    return () => {
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(id as number);
      else clearTimeout(id as number);
    };
  }, []);

  useEffect(() => {
    if (videoReady && videoRef.current) videoRef.current.play().catch(() => {});
  }, [videoReady, isMobile]);

  // Pause the video (and skip parallax work) while the hero is scrolled out of view.
  // Decoding a looping mp4 offscreen was the biggest scroll-jank source on this page.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [videoReady]);

  // Gentle parallax on the backdrop
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking || !inViewRef.current) return;
      requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const entrance = (delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden">
      {/* Backdrop: poster paints instantly, video fades in when idle */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="parallax-bg absolute inset-0" style={{ top: '-12%', bottom: '-12%' }}>
          <img
            src={isMobile ? '/assets/video/HansenDevMobile-poster.webp' : '/assets/video/HansenDevCassowary-poster.webp'}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          {videoReady && (
            <video
              ref={videoRef}
              key={isMobile ? 'mobile' : 'desktop'}
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Background video: a cassowary in the FNQ rainforest with code raining through the canopy"
            >
              <source src={isMobile ? '/assets/video/HansenDevMobile.mp4' : '/assets/video/HansenDevCassowary.mp4'} type="video/mp4" />
            </video>
          )}
        </div>
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/85 to-dark-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg" />
        <div className="absolute inset-0 bg-dots opacity-[0.18] [mask-image:radial-gradient(60%_60%_at_30%_40%,black,transparent)]" />
        <div className="orb orb-teal left-[-10%] top-[10%] h-[520px] w-[520px] opacity-70 animate-float-slow" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-1 items-center px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className={entrance('delay-0')}>
              <span className="chip !text-dark-text mb-7 !px-3.5 !py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent animate-ping-soft" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
                </span>
                Cairns, FNQ &middot; Custom software &amp; AI for local business
              </span>
            </div>

            <h1 className="font-display text-[2.9rem] font-bold leading-[0.98] tracking-tightest text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              <span className="block">Less admin.</span>
              <span className="ai-shimmer animate-shimmer block">More scaling.</span>
            </h1>

            <p className={`mt-7 max-w-xl text-lg leading-relaxed text-dark-text-secondary sm:text-xl ${entrance('delay-100')}`}>
              Ditch the messy spreadsheets and lost quotes. We build the custom apps and AI that do the heavy lifting, so you get your evenings back.
            </p>

            <div className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center ${entrance('delay-200')}`}>
              <a
                href="#contact-discovery"
                onClick={() => trackCTA('Find Your Bottleneck', 'hero')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl btn-gradient px-7 py-4 text-base font-semibold text-white"
                aria-label="Book a free discovery session to find your business bottleneck"
              >
                <span>Find your bottleneck</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                onClick={() => trackCTA('See What We Built', 'hero')}
                className="btn-secondary px-7 py-4 text-base"
              >
                See what we&apos;ve built
              </a>
            </div>

            {/* Proof row */}
            <dl className={`mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 ${entrance('delay-300')}`}>
              {proof.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="icon-tile h-9 w-9">{item.icon}</span>
                  <div className="leading-tight">
                    <dt className="sr-only">{item.label}</dt>
                    <dd className="font-display text-lg font-semibold text-white">{item.value}</dd>
                    <dd className="text-xs text-dark-muted">{item.label}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Activity stack */}
          <div className={`hidden lg:col-span-5 lg:block ${entrance('delay-300')}`}>
            <div className="relative mx-auto max-w-md lg:ml-auto">
              {/* Depth cards */}
              <div className="glass-card absolute inset-x-6 -top-4 h-full opacity-50 -rotate-2" aria-hidden="true" />
              <div className="glass-card absolute inset-x-3 -top-2 h-full opacity-70 -rotate-1" aria-hidden="true" />

              <div className="glass-card relative p-5 animate-float">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-soft" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-text-secondary">Live from tools we built</p>
                  </div>
                  <span className="text-[11px] text-dark-muted">FNQ · today</span>
                </div>

                <ul className="space-y-2.5">
                  {activity.map((row) => (
                    <li key={row.product} className="flex items-start gap-3 rounded-xl border border-hairline bg-white/[0.02] p-3.5 transition-colors hover:bg-white/[0.045]">
                      <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${row.tone} text-sm font-bold text-white shadow-md`}>
                        {row.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-sm font-semibold text-white">{row.title}</p>
                          <span className="flex-shrink-0 text-[11px] text-dark-muted">{row.time}</span>
                        </div>
                        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-dark-text-secondary">
                          <span className="text-brand-accent">{row.icon}</span>
                          {row.meta}
                          <span className="text-dark-muted">&middot; {row.product}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-hairline pt-4">
                  <p className="text-xs text-dark-text-secondary">Built &amp; hosted from Kamerunga, Cairns</p>
                  <a href="#portfolio" className="btn-ghost text-xs">
                    See the products <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="relative z-10 border-t border-hairline bg-dark-bg/60 backdrop-blur-md">
        <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-4 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
          <p className="flex-shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-muted">
            Engineering background from
          </p>
          <div className="w-full min-w-0 flex-1">
            <LogoBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
