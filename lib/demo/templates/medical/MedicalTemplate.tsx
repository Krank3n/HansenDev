import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  Phone, Mail, MapPin, CheckCircle, ArrowRight, Star,
  Menu, X, ChevronDown, Clock, Calendar,
} from 'lucide-react';
import { DemoBusiness, DemoStat, MedicalCustomData } from '../../types';
import { getIcon } from '../../iconMap';
import { useCountUp, useInView } from '../../hooks';
import DemoBanner from '../shared/DemoBanner';

/* ─── Stat Counter (light theme) ──────────────────────────────────────────── */

function StatCounter({ stat, inView, color }: { stat: DemoStat; inView: boolean; color: string }) {
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
  const isNumeric = !isNaN(numericValue) && !stat.value.startsWith('$');
  const count = useCountUp(isNumeric ? numericValue : 0, 2000, inView);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-black mb-1 tabular-nums" style={{ color }}>
        {isNumeric ? count : stat.value}
        {isNumeric && stat.suffix ? stat.suffix : ''}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
        {stat.label}
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */

interface MedicalTemplateProps {
  business: DemoBusiness;
}

export default function MedicalTemplate({ business }: MedicalTemplateProps) {
  const med = business.custom as MedicalCustomData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsView = useInView(0.3);
  const onboardingView = useInView(0.15);
  const doctorsView = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = business.navLinks || [];

  // Color mapping from BFP brand
  // Cyan (#00b2ef) = buttons, links, interactive icons
  // Navy (#2b4b59) = headings, text, dark backgrounds
  // Orange (#f58825) = warm accents, badges, highlights
  // Brown (#6e605e) = secondary text
  const cyan = business.primaryColor;       // #00b2ef
  const navy = business.primaryColorDark;   // #2b4b59
  const orange = business.accentColor;      // #f58825

  return (
    <>
      <Head>
        <title>{business.name} | Demo Landing Page</title>
        <meta name="description" content={business.description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather:wght@700;900&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --primary: ${cyan};
            --primary-dark: ${navy};
            --accent: ${orange};
          }
          * { font-family: 'Inter', system-ui, sans-serif; }
          h1, h2, h3 { font-family: 'Merriweather', 'Georgia', serif; }
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
          .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.08); }

          .wave-decoration {
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
          }
          .wave-decoration svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 60px;
          }
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
                <Image
                  src={business.logoUrl}
                  alt={business.name}
                  width={120}
                  height={48}
                  className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform"
                  unoptimized
                />
              </a>

              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                    {link.label}
                  </a>
                ))}
                <a
                  href={med.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: cyan }}
                >
                  <Calendar className="h-4 w-4" />
                  Book Online
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
                <a href={med.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl font-semibold mt-3" style={{ background: cyan }}>
                  <Calendar className="h-4 w-4" />
                  Book Online
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* ─── Hero Section ───────────────────────────────────────────── */}
        <section id="home" className="relative py-20 md:py-28 lg:py-36 overflow-hidden" style={{ background: 'linear-gradient(170deg, #edf8fc 0%, #ffffff 40%, #fef6ec 100%)' }}>
          {/* Subtle branded circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ background: cyan }} />
            <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ background: orange }} />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Location badge */}
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8 border" style={{ borderColor: `${cyan}25`, background: `${cyan}06` }}>
                <MapPin className="h-4 w-4" style={{ color: cyan }} />
                <span className="text-sm font-semibold" style={{ color: navy }}>Kewarra Beach &amp; Trinity Beach — Cairns Northern Beaches</span>
              </div>

              <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                <span style={{ color: navy }}>{business.heroTitle}</span>{' '}
                <span style={{ color: cyan }}>{business.heroHighlight}</span>
              </h1>

              <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                {business.heroSubtitle}
              </p>

              {/* Dual CTA — one per clinic */}
              <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
                {med.clinics.map((clinic, i) => (
                  <a
                    key={i}
                    href={clinic.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                    style={{ background: i === 0 ? cyan : navy }}
                  >
                    <Calendar className="h-5 w-5" />
                    Book {clinic.name.replace(' Clinic', '')}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Trust signals inline */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {['AGPAL Accredited', 'Accepting New Patients', 'Online Bookings', 'Since 2006'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                    <CheckCircle className="h-4 w-4" style={{ color: cyan }} />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave separator */}
          <div className="wave-decoration">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ─── Stats Bar ──────────────────────────────────────────────── */}
        <section ref={statsView.setRef} className="py-14 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {business.stats.map((stat, i) => (
                <StatCounter key={i} stat={stat} inView={statsView.inView} color={cyan} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Clinic Selector ────────────────────────────────────────── */}
        <section id="clinics" className="py-20 md:py-28" style={{ background: `linear-gradient(180deg, #f5fbfe 0%, white 100%)` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: cyan, background: `${cyan}08` }}>
                <MapPin className="h-4 w-4" />
                Our Locations
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: navy }}>
                Choose Your Clinic
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Two convenient locations on Cairns&apos; Northern Beaches. Same trusted team, same quality care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {med.clinics.map((clinic, i) => (
                <div key={i} className="hover-lift bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm">
                  {/* Clinic header bar */}
                  <div className="px-8 py-5 text-white" style={{ background: i === 0 ? cyan : navy }}>
                    <h3 className="text-xl font-bold">{clinic.name}</h3>
                  </div>

                  <div className="p-8 space-y-5">
                    {/* Address */}
                    <a href={clinic.addressUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: cyan }} />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{clinic.address}</span>
                    </a>

                    {/* Phone */}
                    <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                      <Phone className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: cyan }} />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors font-semibold">{clinic.phone}</span>
                    </a>

                    {/* Fax */}
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0 text-gray-300" />
                      <span className="text-gray-400 text-sm">Fax: {clinic.fax}</span>
                    </div>

                    {/* Hours */}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-4 w-4" style={{ color: orange }} />
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: navy }}>Opening Hours</span>
                      </div>
                      <div className="space-y-1.5">
                        {clinic.hours.map((h, j) => (
                          <div key={j} className="flex justify-between text-sm">
                            <span className="text-gray-500">{h.days}</span>
                            <span className="font-semibold text-gray-700">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Book button */}
                    <a
                      href={clinic.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-white py-3.5 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
                      style={{ background: cyan }}
                    >
                      <Calendar className="h-4 w-4" />
                      Book at {clinic.name.replace(' Clinic', '')}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Fee info */}
            <div className="text-center mt-10 text-sm text-gray-400">
              Standard consultation ({med.feeStandard}) &bull; Extended consultation ({med.feeExtended}) &bull; {med.bulkBillingNote}
            </div>
          </div>
        </section>

        {/* ─── Services Grid ──────────────────────────────────────────── */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: orange, background: `${orange}10` }}>
                Our Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: navy }}>
                Comprehensive Family Healthcare
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                From skin checks to chronic disease management, our experienced team covers the full spectrum of general practice care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {business.services.map((service, i) => (
                <div
                  key={i}
                  className="hover-lift bg-white rounded-2xl p-7 border border-gray-100 shadow-sm group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${cyan}10` }}
                  >
                    {getIcon(service.icon, 'h-6 w-6')}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: navy, fontFamily: "'Inter', system-ui, sans-serif" }}>{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Meet the Doctors ───────────────────────────────────────── */}
        <section id="doctors" ref={doctorsView.setRef} className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #f5fbfe 0%, #edf8fc 100%)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: cyan, background: `${cyan}08` }}>
                Our Team
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: navy }}>
                Meet Your Doctors
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Experienced, caring GPs who know the Northern Beaches community. All doctors are currently accepting new patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {med.doctors.map((doctor, i) => (
                <div
                  key={i}
                  className="hover-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                  style={{
                    opacity: doctorsView.inView ? 1 : 0,
                    transform: doctorsView.inView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.5s ease-out ${i * 0.08}s`,
                  }}
                >
                  {/* Doctor photo */}
                  <div className="h-56 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${cyan}10, ${orange}08)` }}>
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-top"
                      unoptimized
                    />
                    {/* Accepting badge */}
                    {doctor.acceptingNewPatients && (
                      <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-green-50/95 backdrop-blur-sm text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Accepting Patients
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold mb-0.5" style={{ color: navy, fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mb-2.5">{doctor.qualifications}</p>

                    {/* Location tag */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3" style={{ color: cyan, background: `${cyan}08` }}>
                      <MapPin className="h-3 w-3" />
                      {doctor.location}
                    </div>

                    {/* Interests */}
                    <div className="flex flex-wrap gap-1">
                      {doctor.interests.slice(0, 3).map((interest, j) => (
                        <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-400 text-sm">
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="font-semibold transition-colors hover:underline" style={{ color: cyan }}>
                  Call us to find the right GP for you.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ─── New Patient Onboarding ─────────────────────────────────── */}
        <section id="new-patients" ref={onboardingView.setRef} className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: orange, background: `${orange}10` }}>
                New Patients Welcome
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: navy }}>
                How It Works
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Getting started is easy. Three simple steps to your first appointment.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {med.onboardingSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 md:gap-8 pb-12 last:pb-0"
                  style={{
                    opacity: onboardingView.inView ? 1 : 0,
                    transform: onboardingView.inView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease-out ${i * 0.2}s`,
                  }}
                >
                  {/* Timeline connector */}
                  {i < med.onboardingSteps.length - 1 && (
                    <div className="absolute left-6 md:left-7 top-16 bottom-0 w-px" style={{ background: `${cyan}20` }} />
                  )}

                  {/* Step circle */}
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 text-white"
                    style={{ background: cyan }}
                  >
                    {getIcon(step.icon, 'h-6 w-6 text-white')}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black uppercase tracking-widest" style={{ color: orange }}>Step {step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: navy, fontFamily: "'Inter', system-ui, sans-serif" }}>{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to bring */}
            <div className="max-w-2xl mx-auto mt-12 rounded-2xl p-8 border-2 border-dashed" style={{ borderColor: `${cyan}20`, background: `${cyan}03` }}>
              <h4 className="font-bold text-lg mb-4" style={{ color: navy, fontFamily: "'Inter', system-ui, sans-serif" }}>What to Bring to Your First Visit</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Medicare card', 'Photo ID', 'Any referral letters', 'Current medication list', 'Health insurance card', 'Previous medical records'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: cyan }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ───────────────────────────────────────────── */}
        <section id="testimonials" className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #f5fbfe 0%, #edf8fc 100%)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: orange, background: `${orange}10` }}>
                <Star className="h-4 w-4 fill-current" />
                Patient Reviews
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: navy }}>
                Trusted by Our Community
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {business.testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="hover-lift bg-white rounded-2xl p-7 border-2 border-gray-100 relative"
                >
                  <div className="absolute top-4 right-6 text-6xl font-serif leading-none select-none opacity-[0.08]" style={{ color: cyan }}>
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
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: cyan }}
                    >
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: navy }}>{testimonial.author}</div>
                      <div className="text-xs text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Trust Signals / Accreditation ──────────────────────────── */}
        <section className="py-14 md:py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {med.accreditations.map((acc, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cyan}08` }}>
                    {getIcon('ShieldCheck', 'h-5 w-5')}
                  </div>
                  <span className="text-sm font-semibold">{acc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Service Areas ──────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: navy }}>
              Proudly Serving Cairns&apos; Northern Beaches
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {business.serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full text-sm font-medium border transition-colors cursor-default hover:bg-gray-50"
                  style={{ borderColor: `${cyan}20`, color: navy }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Book / CTA Section ─────────────────────────────────────── */}
        <section id="book" className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6" style={{ color: cyan, background: `${cyan}08` }}>
                  <Phone className="h-4 w-4" />
                  Get In Touch
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ color: navy }}>
                  Book Your Appointment
                </h2>
                <p className="text-lg text-gray-500 max-w-xl mx-auto">
                  Book online 24/7 via HotDoc, or call your preferred clinic directly.
                </p>
              </div>

              {/* Contact cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {med.clinics.map((clinic, i) => (
                  <div key={i} className="hover-lift bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-8 text-center">
                      <h3 className="text-xl font-bold mb-4" style={{ color: navy, fontFamily: "'Inter', system-ui, sans-serif" }}>{clinic.name}</h3>

                      <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 mb-3 text-gray-600 hover:text-gray-900 transition-colors">
                        <Phone className="h-4 w-4" style={{ color: cyan }} />
                        <span className="font-semibold text-lg">{clinic.phone}</span>
                      </a>

                      <a href={clinic.addressUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mb-6 text-gray-400 hover:text-gray-600 transition-colors text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{clinic.address}</span>
                      </a>

                      <a
                        href={clinic.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 w-full text-white py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
                        style={{ background: cyan }}
                      >
                        <Calendar className="h-5 w-5" />
                        Book Online
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Urgent notice */}
              <div className="rounded-2xl p-6 border-l-4 bg-amber-50" style={{ borderColor: orange }}>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-800">Respiratory Symptoms?</strong> If you have a cough, cold, fever, sore throat, or runny nose, please <strong>call ahead</strong> before your appointment so we can make alternative arrangements. Thank you for helping us protect all patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────────────────────────── */}
        <footer className="text-white pt-16 pb-8" style={{ background: navy }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              {/* Practice info */}
              <div>
                <Image src={business.logoUrl} alt={business.name} width={120} height={48} className="h-12 w-auto mb-5 brightness-0 invert" unoptimized />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {business.tagline}. Caring for our community since 2006.
                </p>
              </div>

              {/* Clinic contacts */}
              {med.clinics.map((clinic, i) => (
                <div key={i}>
                  <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-300">{clinic.name}</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{clinic.phone}</span>
                    </a>
                    <a href={clinic.addressUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>{clinic.address}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                Demo concept by{' '}
                <a href="https://hansendev.com.au" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                  HansenDev
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
