import React from 'react';
import Image from 'next/image';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Users, Clock, Star, Check, Globe, MapPin, GraduationCap } from 'lucide-react';
import Sunrise from '@/public/assets/Sunrise esplanade.jpg';

import {
  BUSINESS_INFO,
  CONTACT_INFO,
  SERVICE_AREAS,
  BUSINESS_METRICS,
} from '../constants/business';

const reasons = [
  { label: 'Local knowledge', desc: `Deep understanding of the ${SERVICE_AREAS.primary} business environment and customer base` },
  { label: 'Face-to-face service', desc: `In-person consultations throughout ${SERVICE_AREAS.region}` },
  { label: 'Tourism focus', desc: `Specialised experience with ${SERVICE_AREAS.primary} tourism and hospitality businesses` },
  { label: 'Rapid response', desc: `${BUSINESS_METRICS.stats.responseTime} support for urgent issues across the region` },
  { label: 'Transparent pricing', desc: 'Fair, fixed quotes tailored to local market conditions' },
  { label: 'Long-term partnership', desc: 'Ongoing support and growth planning for your business' },
];

const stats = [
  { icon: <Award className="h-5 w-5" />, value: BUSINESS_METRICS.stats.projectsCompleted, label: `${SERVICE_AREAS.primary} projects` },
  { icon: <Users className="h-5 w-5" />, value: BUSINESS_METRICS.stats.reviewCount, label: 'Happy clients' },
  { icon: <Star className="h-5 w-5" />, value: BUSINESS_METRICS.stats.averageRating, label: 'Average rating' },
  { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Support' },
];

const About: React.FC = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: sideRef, isVisible: sideVisible } = useScrollReveal();

  return (
    <Section
      id="about"
      eyebrow={`About ${BUSINESS_INFO.shortName}`}
      title={`Your technology partner in ${SERVICE_AREAS.primary}.`}
      subtitle={`Web development, AI integration and custom software for ${SERVICE_AREAS.region} businesses, run from ${CONTACT_INFO.address.suburb}.`}
      align="left"
      className="relative overflow-hidden"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Copy */}
        <div
          ref={contentRef}
          className={`lg:col-span-7 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="space-y-5 text-[1.03rem] leading-relaxed text-dark-text-secondary">
            <p>
              <strong className="font-semibold text-white">{BUSINESS_INFO.name}</strong>, founded and led by{' '}
              <strong className="font-semibold text-white">{BUSINESS_INFO.founder.name}</strong>, is {SERVICE_AREAS.primary}&apos; technology
              partner for custom web development, AI integration and software that solves real operational problems.
              Based in {CONTACT_INFO.address.suburb}, we&apos;ve been helping local and national businesses thrive since 2019.
            </p>
            <p>
              Our understanding of the {SERVICE_AREAS.region} business environment, combined with enterprise engineering
              experience, makes us the right partner for {SERVICE_AREAS.primary} businesses looking to innovate, automate and grow.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <span className="icon-tile h-10 w-10"><GraduationCap className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold text-white">{BUSINESS_INFO.founder.name}</p>
                  <p className="text-xs text-dark-text-secondary">{BUSINESS_INFO.founder.title}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-dark-text-secondary">
                {BUSINESS_INFO.founder.qualifications.map((q) => (
                  <li key={q} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-accent" strokeWidth={2.5} />{q}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <span className="icon-tile h-10 w-10"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold text-white">{SERVICE_AREAS.primary} based</p>
                  <p className="text-xs text-dark-text-secondary">{CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.stateCode} {CONTACT_INFO.address.postcode}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-dark-text-secondary">
                {['Australian Business Number', `${CONTACT_INFO.address.state} registered`, `Local ${SERVICE_AREAS.primary} references`].map((q) => (
                  <li key={q} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-accent" strokeWidth={2.5} />{q}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why choose */}
          <div className="mt-8 rounded-2xl border border-hairline bg-white/[0.02] p-6">
            <h3 className="font-semibold text-white">Why {SERVICE_AREAS.primary} businesses choose {BUSINESS_INFO.shortName}</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              {reasons.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" strokeWidth={2.5} />
                  <span className="text-dark-text-secondary">
                    <strong className="font-medium text-white">{item.label}.</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Side */}
        <div
          ref={sideRef}
          className={`space-y-5 lg:col-span-5 transition-all duration-700 delay-100 ${sideVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="glass-card hover-glow group relative overflow-hidden !rounded-3xl !p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={Sunrise}
                alt={`Sunrise over the ${SERVICE_AREAS.primary} Esplanade and Trinity Bay, home base for ${BUSINESS_INFO.shortName}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display font-semibold text-white">{SERVICE_AREAS.primary} Esplanade</p>
                <p className="text-xs text-dark-text-secondary">Our home base in {SERVICE_AREAS.region}</p>
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-4">
                <dt className="flex items-center gap-2 text-xs text-dark-text-secondary">
                  <span className="text-brand-accent">{stat.icon}</span>{stat.label}
                </dt>
                <dd className="mt-1.5 font-display text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="glass-card p-5">
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <Globe className="h-4 w-4 text-brand-accent" />
              Service coverage
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICE_AREAS.areas.slice(0, 8).map((area) => (
                <span key={area} className="chip">{area}</span>
              ))}
            </div>
            <p className="mt-3 text-xs text-dark-muted">{SERVICE_AREAS.remoteService} &middot; {SERVICE_AREAS.onSiteRange}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
