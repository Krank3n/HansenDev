import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Phone, Mail, MapPin, CheckCircle, ArrowRight, Star,
  Menu, X, ChevronDown,
} from 'lucide-react';
import { DemoBusiness, DemoStat } from '../../types';
import { getIcon } from '../../iconMap';
import { useCountUp, useInView } from '../../hooks';
import DemoBanner from '../shared/DemoBanner';
import DemoFooter from '../shared/DemoFooter';

function StatCounter({ stat, inView, accentColor }: { stat: DemoStat; inView: boolean; accentColor: string }) {
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
  const isNumeric = !isNaN(numericValue) && !stat.value.startsWith('$');
  const count = useCountUp(isNumeric ? numericValue : 0, 2000, inView);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-black mb-1 tabular-nums" style={{ color: '#1e3a5f' }}>
        {isNumeric ? count : stat.value}
        {isNumeric && stat.suffix ? stat.suffix : ''}
      </div>
      <div className="w-8 h-0.5 mx-auto mb-2 rounded-full" style={{ background: accentColor }} />
      <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
        {stat.label}
      </div>
    </div>
  );
}

interface CorporateTemplateProps {
  business: DemoBusiness;
}

export default function CorporateTemplate({ business }: CorporateTemplateProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsView = useInView(0.3);
  const processView = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = business.navLinks || [
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const initials = business.name
    .split(' ')
    .map((w) => w[0])
    .filter((c) => c === c.toUpperCase() && c.match(/[A-Z]/))
    .join('')
    .slice(0, 4);

  return (
    <>
      <Head>
        <title>{business.name} | Demo Landing Page</title>
        <meta name="description" content={business.description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --primary: ${business.primaryColor};
            --primary-dark: ${business.primaryColorDark};
            --accent: ${business.accentColor};
          }
          * { font-family: 'Inter', system-ui, sans-serif; }
          html { scroll-behavior: smooth; }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-fade-up { animation: fadeInUp 0.8s ease-out both; }
          .animate-fade-up-delay-1 { animation: fadeInUp 0.8s ease-out 0.15s both; }
          .animate-fade-up-delay-2 { animation: fadeInUp 0.8s ease-out 0.3s both; }
          .animate-fade-up-delay-3 { animation: fadeInUp 0.8s ease-out 0.45s both; }
          .animate-gradient { background-size: 200% 200%; animation: gradient 4s ease infinite; }
          .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

        {/* ─── Demo Banner ────────────────────────────────────────────── */}
        <DemoBanner business={business} />

        {/* ─── Navigation ─────────────────────────────────────────────── */}
        <nav className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-white/80 backdrop-blur-md'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <a href="#home" className="flex items-center gap-3 group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xs flex-shrink-0 group-hover:scale-105 transition-transform tracking-wide"
                  style={{ background: business.primaryColor }}
                >
                  {initials}
                </div>
                <span className="font-bold text-base md:text-lg hidden sm:block" style={{ color: business.primaryColor }}>
                  {business.name}
                </span>
              </a>

              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                    {link.label}
                  </a>
                ))}
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="ml-4 inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: business.primaryColor }}
                >
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </a>
              </div>

              <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="lg:hidden border-t border-gray-100 py-4 space-y-1 animate-fade-up">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                    {link.label}
                  </a>
                ))}
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl font-semibold mt-3" style={{ background: business.primaryColor }}>
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* ─── Hero Section ───────────────────────────────────────────── */}
        <section id="home" className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-[0.04]" style={{ background: business.primaryColor }} />
            <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full opacity-[0.03]" style={{ background: business.accentColor }} />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border" style={{ borderColor: `${business.accentColor}40`, background: `${business.accentColor}08` }}>
                <MapPin className="h-4 w-4" style={{ color: business.accentColor }} />
                <span className="text-sm font-semibold" style={{ color: business.primaryColor }}>Cairns &amp; Far North Queensland</span>
              </div>

              <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight" style={{ color: business.primaryColor }}>
                {business.heroTitle}{' '}
                <span style={{ color: business.accentColor }}>{business.heroHighlight}</span>
              </h1>

              <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                {business.heroSubtitle}
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                  style={{ background: business.primaryColor }}
                >
                  {business.ctaText}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all border-2 hover:-translate-y-1"
                  style={{ borderColor: business.primaryColor, color: business.primaryColor }}
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6">
                {business.certifications.slice(0, 3).map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                    <CheckCircle className="h-4 w-4" style={{ color: business.accentColor }} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
            <span className="text-gray-400 text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </section>

        {/* ─── Stats Bar ──────────────────────────────────────────────── */}
        <section ref={statsView.setRef} className="py-16 md:py-20 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {business.stats.map((stat, i) => (
                <StatCounter key={i} stat={stat} inView={statsView.inView} accentColor={business.accentColor} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services Section ───────────────────────────────────────── */}
        <section id="services" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.accentColor, background: `${business.accentColor}10` }}>
                Our Expertise
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-5" style={{ color: business.primaryColor }}>
                How We Help You
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Comprehensive business broking services tailored to your goals, backed by decades of local market experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {business.services.map((service, i) => (
                <div
                  key={i}
                  className="hover-lift bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ background: `${business.primaryColor}10` }}
                  >
                    {getIcon(service.icon, 'h-6 w-6')}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: business.primaryColor }}>{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-semibold" style={{ color: business.accentColor }}>Learn more</span>
                    <ArrowRight className="h-4 w-4" style={{ color: business.accentColor }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Process / How We Work ──────────────────────────────────── */}
        {business.process && business.process.length > 0 && (
          <section id="process" ref={processView.setRef} className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.accentColor, background: `${business.accentColor}10` }}>
                  Our Process
                </div>
                <h2 className="text-4xl sm:text-5xl font-black mb-5" style={{ color: business.primaryColor }}>
                  How We Work
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  A proven process refined over years of successful business transactions.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                {business.process.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex gap-6 md:gap-8 pb-12 last:pb-0"
                    style={{
                      opacity: processView.inView ? 1 : 0,
                      transform: processView.inView ? 'translateY(0)' : 'translateY(30px)',
                      transition: `all 0.6s ease-out ${i * 0.15}s`,
                    }}
                  >
                    {/* Timeline line */}
                    {i < business.process!.length - 1 && (
                      <div className="absolute left-6 md:left-7 top-14 bottom-0 w-px bg-gray-200" />
                    )}

                    {/* Step number circle */}
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10"
                      style={{ background: business.primaryColor }}
                    >
                      <span className="text-white font-black text-sm">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${business.accentColor}15` }}>
                          {getIcon(step.icon, 'h-4 w-4')}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold" style={{ color: business.primaryColor }}>{step.title}</h3>
                      </div>
                      <p className="text-gray-500 leading-relaxed pl-11">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Why Choose Us ──────────────────────────────────────────── */}
        <section id="why-us" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.accentColor, background: `${business.accentColor}10` }}>
                  Why Choose Us
                </div>
                <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: business.primaryColor }}>
                  Experience &amp;<br />
                  <span style={{ color: business.accentColor }}>Trust</span> That Delivers Results
                </h2>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                  With over two decades in the Cairns business market, we bring unmatched local expertise, a proven track record, and a commitment to achieving the best outcome for every client.
                </p>

                <div className="space-y-4 mb-10">
                  {business.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: `${business.accentColor}15` }}>
                        <CheckCircle className="h-4 w-4" style={{ color: business.accentColor }} />
                      </div>
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{ background: business.primaryColor }}
                >
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {business.whyChooseUs.map((feature, i) => (
                  <div key={i} className="hover-lift bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${business.primaryColor}10` }}
                    >
                      {getIcon(feature.icon, 'h-6 w-6')}
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: business.primaryColor }}>{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ───────────────────────────────────────────── */}
        <section id="testimonials" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.accentColor, background: `${business.accentColor}10` }}>
                <Star className="h-4 w-4 fill-current" />
                Client Testimonials
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-5" style={{ color: business.primaryColor }}>
                What Our Clients Say
              </h2>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">5.0 average from verified clients</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {business.testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="hover-lift rounded-2xl p-7 border-2 border-gray-100 bg-white relative"
                >
                  {/* Quote mark */}
                  <div className="absolute top-4 right-6 text-6xl font-serif leading-none select-none opacity-[0.06]" style={{ color: business.primaryColor }}>
                    &ldquo;
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: business.primaryColor }}
                    >
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: business.primaryColor }}>{testimonial.author}</div>
                      <div className="text-xs text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Service Areas ──────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: business.primaryColor }}>
              Serving Businesses Across Far North Queensland
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {business.serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full text-sm font-medium border transition-colors cursor-default hover:bg-white"
                  style={{ borderColor: `${business.primaryColor}20`, color: business.primaryColor }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact / CTA Section ──────────────────────────────────── */}
        <section id="contact" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: business.accentColor, background: `${business.accentColor}10` }}>
                  <Phone className="h-4 w-4" />
                  Get In Touch
                </div>
                <h2 className="text-4xl sm:text-5xl font-black mb-5" style={{ color: business.primaryColor }}>
                  Ready to Take the Next Step?
                </h2>
                <p className="text-lg text-gray-500 max-w-xl mx-auto">
                  Whether you&apos;re buying, selling, or need a valuation — our team is here to help.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mb-12">
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover-lift flex flex-col items-center p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `${business.primaryColor}10` }}>
                    <Phone className="h-7 w-7" style={{ color: business.primaryColor }} />
                  </div>
                  <div className="font-bold text-lg mb-1" style={{ color: business.primaryColor }}>Call Us</div>
                  <div className="text-gray-500">{business.phone}</div>
                </a>

                <a href={`mailto:${business.email}`} className="hover-lift flex flex-col items-center p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `${business.primaryColor}10` }}>
                    <Mail className="h-7 w-7" style={{ color: business.primaryColor }} />
                  </div>
                  <div className="font-bold text-lg mb-1" style={{ color: business.primaryColor }}>Email Us</div>
                  <div className="text-gray-500 text-sm break-all">{business.email}</div>
                </a>

                <div className="hover-lift flex flex-col items-center p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${business.primaryColor}10` }}>
                    <MapPin className="h-7 w-7" style={{ color: business.primaryColor }} />
                  </div>
                  <div className="font-bold text-lg mb-1" style={{ color: business.primaryColor }}>Visit Us</div>
                  <div className="text-gray-500 text-center text-sm">{business.address}</div>
                </div>
              </div>

              {/* Big CTA */}
              <div className="rounded-3xl overflow-hidden" style={{ background: business.primaryColor }}>
                <div className="relative p-10 md:p-16 text-center text-white">
                  {/* Subtle accent decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ background: business.accentColor }} />
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2" style={{ background: business.accentColor }} />

                  <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
                    Let&apos;s Discuss Your <span style={{ color: business.accentColor }}>Goals</span>
                  </h3>
                  <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg relative z-10">
                    Book a free, confidential consultation to explore your options.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                      style={{ color: business.primaryColor }}
                    >
                      <Phone className="h-5 w-5 group-hover:animate-bounce" />
                      {business.phone}
                    </a>
                    <a
                      href={`mailto:${business.email}`}
                      className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border-2 border-white/20 hover:bg-white/10"
                    >
                      <Mail className="h-5 w-5" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────────────────────────── */}
        <DemoFooter business={business} />
      </div>
    </>
  );
}
