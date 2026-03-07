import React from 'react';
import Image from 'next/image';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Award,
  Users,
  Clock,
  Zap,
  Heart,
  Star,
  CheckCircle,
  Globe,
  MapPin,
  User
} from 'lucide-react';
import Sunrise from '@/public/assets/Sunrise esplanade.jpg';

import {
  BUSINESS_INFO,
  CONTACT_INFO,
  ONLINE_PRESENCE,
  SERVICE_AREAS,
  SERVICES_OFFERED,
  BUSINESS_METRICS,
  getFullAddress,
  getFormattedPhone,
  getBusinessName
} from '../constants/business';

const About: React.FC = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <Section
      id="about"
      title={`About ${BUSINESS_INFO.name}`}
      subtitle={`Your Trusted Technology Partner in ${SERVICE_AREAS.primary}, ${CONTACT_INFO.address.state}`}
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/[0.02] to-transparent pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div
          ref={contentRef}
          className={`space-y-8 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              Leading Web Development & AI Integration in {SERVICE_AREAS.region}
            </h3>
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              <strong className="gradient-text">{BUSINESS_INFO.name}</strong>, founded and led by
              <strong className="text-brand-primary"> {BUSINESS_INFO.founder.name}</strong>, is {SERVICE_AREAS.primary}' premier technology
              partner specializing in custom web development, AI integration, and innovative software solutions.
              Based in the heart of <strong className="gradient-text">{CONTACT_INFO.address.suburb}, {SERVICE_AREAS.primary}</strong>, we've been
              helping local and national businesses thrive in the digital landscape since 2019.
            </p>
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              Our deep understanding of the <strong className="gradient-text">{SERVICE_AREAS.region}</strong> business
              environment, combined with cutting-edge technology expertise, makes us the perfect partner for {SERVICE_AREAS.primary}
              businesses looking to innovate, automate, and grow.
            </p>
          </div>

          {/* Credential cards - gradient backgrounds, no borders */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-6 hover-glow transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="h-6 w-6 text-brand-accent" />
              </div>
              <h4 className="font-bold text-dark-text text-lg mb-2">{BUSINESS_INFO.founder.name}</h4>
              <p className="text-dark-text-secondary text-sm mb-3">{BUSINESS_INFO.founder.title}</p>
              <div className="space-y-2 text-xs">
                {BUSINESS_INFO.founder.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-brand-accent/60" />
                    <span className="text-dark-text-secondary">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 hover-glow transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-dark-text text-lg mb-2">{SERVICE_AREAS.primary} Location</h4>
              <p className="text-dark-text-secondary text-sm mb-3">
                {CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city} {CONTACT_INFO.address.stateCode} {CONTACT_INFO.address.postcode}
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-accent/60" />
                  <span className="text-dark-text-secondary">Australian Business Number</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-accent/60" />
                  <span className="text-dark-text-secondary">{CONTACT_INFO.address.state} Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-accent/60" />
                  <span className="text-dark-text-secondary">Local {SERVICE_AREAS.primary} References</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - animated counters with gradient accents */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children ${statsVisible ? 'revealed' : ''}`}
          >
            {[
              { icon: <Award className="h-7 w-7" />, color: 'text-brand-accent', gradient: 'from-brand-accent/15 to-brand-accent/5', value: BUSINESS_METRICS.stats.projectsCompleted, label: `${SERVICE_AREAS.primary} Projects` },
              { icon: <Users className="h-7 w-7" />, color: 'text-brand-primary', gradient: 'from-brand-primary/15 to-brand-primary/5', value: BUSINESS_METRICS.stats.reviewCount, label: 'Happy Clients' },
              { icon: <Star className="h-7 w-7" />, color: 'text-yellow-400', gradient: 'from-yellow-500/15 to-yellow-500/5', value: BUSINESS_METRICS.stats.averageRating, label: 'Average Rating' },
              { icon: <Clock className="h-7 w-7" />, color: 'text-green-400', gradient: 'from-green-500/15 to-green-500/5', value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-dark-text-secondary/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why choose us - gradient background */}
          <div className="rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/[0.05] to-brand-primary/[0.05]"></div>
            <div className="relative">
              <h4 className="font-bold text-dark-text text-xl mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-400" />
                Why {SERVICE_AREAS.primary} Businesses Choose {BUSINESS_INFO.shortName}
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  { label: 'Local Knowledge', color: 'text-brand-accent', desc: `Deep understanding of ${SERVICE_AREAS.primary} business environment and customer base` },
                  { label: 'Face-to-Face Service', color: 'text-brand-primary', desc: `In-person consultations throughout ${SERVICE_AREAS.region}` },
                  { label: 'Tourism Focus', color: 'text-brand-accent', desc: `Specialized experience with ${SERVICE_AREAS.primary} tourism and hospitality businesses` },
                  { label: 'Rapid Response', color: 'text-brand-primary', desc: `${BUSINESS_METRICS.stats.responseTime} support for urgent issues across ${SERVICE_AREAS.primary} region` },
                  { label: 'Competitive Pricing', color: 'text-brand-accent', desc: 'Fair, transparent pricing tailored for local market conditions' },
                  { label: 'Long-term Partnership', color: 'text-brand-primary', desc: 'Ongoing support and growth planning for your business' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-brand-accent/50 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                      <strong className={item.color}>{item.label}:</strong> {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div
          ref={imageRef}
          className={`space-y-6 transition-all duration-700 delay-200 ${
            imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden group hover-glow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={Sunrise}
                alt={`Breathtaking sunrise over ${SERVICE_AREAS.primary} Esplanade and Trinity Bay, showcasing the natural beauty of ${SERVICE_AREAS.region} where ${BUSINESS_INFO.shortName} provides web development and AI integration services to local businesses`}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-dark-bg/60 backdrop-blur-md rounded-xl p-4">
              <p className="text-white text-sm font-medium mb-1">Beautiful {SERVICE_AREAS.primary} Esplanade</p>
              <p className="text-gray-400 text-xs">Where innovation meets tropical paradise - our home base in {SERVICE_AREAS.region}</p>
            </div>
          </div>

          {/* Service coverage */}
          <div className="glass-card p-6">
            <h4 className="font-bold text-dark-text text-lg mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-brand-accent" />
              Our Service Coverage Area
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.03]">
                <span className="text-dark-text font-medium">Primary Service Area</span>
                <span className="gradient-text text-sm font-semibold">{SERVICE_AREAS.primary} & Surrounds</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {SERVICE_AREAS.areas.slice(0, 6).map((area, index) => {
                  const colors = ['text-brand-accent', 'text-brand-accent', 'text-brand-primary', 'text-brand-primary', 'text-green-400', 'text-green-400'];
                  return (
                    <div key={area} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors[index]} opacity-60`}></div>
                      <span className="text-dark-text-secondary">{area}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-dark-text-secondary/50 mt-4 text-center">
                {SERVICE_AREAS.remoteService} &bull; {SERVICE_AREAS.onSiteRange}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative rounded-2xl p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/[0.08] to-brand-primary/[0.08]"></div>
            <div className="relative">
              <h4 className="font-bold text-dark-text text-xl mb-3">Ready to Transform Your {SERVICE_AREAS.primary} Business?</h4>
              <p className="text-dark-text-secondary text-sm mb-4">
                Join {BUSINESS_METRICS.stats.projectsCompleted} successful {SERVICE_AREAS.primary} businesses who've enhanced their digital presence with {BUSINESS_INFO.shortName}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 btn-gradient text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/15 hover:scale-105"
                aria-label={`Contact ${BUSINESS_INFO.shortName} for web development services in ${SERVICE_AREAS.primary}`}
              >
                <span>Get Your Free Consultation</span>
                <Zap className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default About;
