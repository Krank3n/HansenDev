import React from 'react';
import Image from 'next/image';
import Section from './common/Section';
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

// Import business constants
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
  return (
      <Section
          id="about"
          title={`About ${BUSINESS_INFO.name}`}
          subtitle={`Your Trusted Technology Partner in ${SERVICE_AREAS.primary}, ${CONTACT_INFO.address.state}`}
          className="bg-gradient-to-b from-dark-bg to-dark-card/50"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Main description with local SEO focus using constants */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-text mb-4">
                Leading Web Development & AI Integration in {SERVICE_AREAS.region}
              </h3>
              <p className="text-lg text-dark-text-secondary leading-relaxed">
                <strong className="text-brand-accent">{BUSINESS_INFO.name}</strong>, founded and led by
                <strong className="text-brand-primary"> {BUSINESS_INFO.founder.name}</strong>, is {SERVICE_AREAS.primary}' premier technology
                partner specializing in custom web development, AI integration, and innovative software solutions.
                Based in the heart of <strong className="text-brand-accent">{CONTACT_INFO.address.suburb}, {SERVICE_AREAS.primary}</strong>, we've been
                helping local and national businesses thrive in the digital landscape since 2019.
              </p>
              <p className="text-lg text-dark-text-secondary leading-relaxed">
                Our deep understanding of the <strong className="text-brand-accent">{SERVICE_AREAS.region}</strong> business
                environment, combined with cutting-edge technology expertise, makes us the perfect partner for {SERVICE_AREAS.primary}
                businesses looking to innovate, automate, and grow. We specialize in translating complex business
                challenges into elegant technological solutions that deliver measurable results.
              </p>
            </div>

            {/* Local credentials and certifications using constants */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-dark-card/80 p-6 rounded-xl border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300">
                <User className="h-12 w-12 text-brand-accent mb-4" />
                <h4 className="font-bold text-dark-text text-lg mb-2">{BUSINESS_INFO.founder.name}</h4>
                <p className="text-dark-text-secondary text-sm mb-3">{BUSINESS_INFO.founder.title}</p>
                <div className="space-y-2 text-xs">
                  {BUSINESS_INFO.founder.qualifications.map((qualification, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-dark-text-secondary">{qualification}</span>
                      </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-card/80 p-6 rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300">
                <MapPin className="h-12 w-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-dark-text text-lg mb-2">{SERVICE_AREAS.primary} Location</h4>
                <p className="text-dark-text-secondary text-sm mb-3">
                  {CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city} {CONTACT_INFO.address.stateCode} {CONTACT_INFO.address.postcode}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-dark-text-secondary">Australian Business Number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-dark-text-secondary">{CONTACT_INFO.address.state} Registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-dark-text-secondary">Local {SERVICE_AREAS.primary} References</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local business achievements using constants */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-dark-card/50 rounded-lg hover:bg-dark-card/70 transition-all duration-300">
                <Award className="h-8 w-8 text-brand-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{BUSINESS_METRICS.stats.projectsCompleted}</div>
                <div className="text-xs text-gray-400">{SERVICE_AREAS.primary} Projects</div>
              </div>
              <div className="text-center p-4 bg-dark-card/50 rounded-lg hover:bg-dark-card/70 transition-all duration-300">
                <Users className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{BUSINESS_METRICS.stats.reviewCount}</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-dark-card/50 rounded-lg hover:bg-dark-card/70 transition-all duration-300">
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{BUSINESS_METRICS.stats.averageRating}</div>
                <div className="text-xs text-gray-400">Average Rating</div>
              </div>
              <div className="text-center p-4 bg-dark-card/50 rounded-lg hover:bg-dark-card/70 transition-all duration-300">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
            </div>

            {/* Why choose us - local focus using constants */}
            <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 p-6 rounded-xl border border-brand-accent/20">
              <h4 className="font-bold text-dark-text text-xl mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-400" />
                Why {SERVICE_AREAS.primary} Businesses Choose {BUSINESS_INFO.shortName}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                    <strong className="text-brand-accent">Local Knowledge:</strong> Deep understanding of {SERVICE_AREAS.primary}
                      business environment and customer base
                  </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                    <strong className="text-brand-primary">Face-to-Face Service:</strong> In-person consultations
                    throughout {SERVICE_AREAS.region}
                  </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                    <strong className="text-brand-accent">Tourism Focus:</strong> Specialized experience with
                      {SERVICE_AREAS.primary} tourism and hospitality businesses
                  </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                    <strong className="text-brand-primary">Rapid Response:</strong> {BUSINESS_METRICS.stats.responseTime} support for urgent
                    issues across {SERVICE_AREAS.primary} region
                  </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                    <strong className="text-brand-accent">Competitive Pricing:</strong> Fair, transparent pricing
                    tailored for local market conditions
                  </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-text-secondary">
                    <strong className="text-brand-primary">Long-term Partnership:</strong> Ongoing support and
                    growth planning for your business
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced image section with local context using constants */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <div className="relative w-full aspect-[4/3]">
                <Image
                    src={Sunrise}
                    alt={`Breathtaking sunrise over ${SERVICE_AREAS.primary} Esplanade and Trinity Bay, showcasing the natural beauty of ${SERVICE_AREAS.region} where ${BUSINESS_INFO.shortName} provides web development and AI integration services to local businesses`}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium mb-1">Beautiful {SERVICE_AREAS.primary} Esplanade</p>
                <p className="text-gray-300 text-xs">Where innovation meets tropical paradise - our home base in {SERVICE_AREAS.region}</p>
              </div>
            </div>

            {/* Service areas map visualization using constants */}
            <div className="bg-dark-card/80 p-6 rounded-xl border border-brand-accent/20">
              <h4 className="font-bold text-dark-text text-lg mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-brand-accent" />
                Our Service Coverage Area
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-dark-bg/50 rounded-lg">
                  <span className="text-dark-text font-medium">Primary Service Area</span>
                  <span className="text-brand-accent text-sm font-semibold">{SERVICE_AREAS.primary} & Surrounds</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {SERVICE_AREAS.areas.slice(0, 6).map((area, index) => {
                    const colorClasses = [
                      'bg-brand-accent/10 text-dark-text-secondary',
                      'bg-brand-accent/10 text-dark-text-secondary',
                      'bg-brand-primary/10 text-dark-text-secondary',
                      'bg-brand-primary/10 text-dark-text-secondary',
                      'bg-green-500/10 text-dark-text-secondary',
                      'bg-green-500/10 text-dark-text-secondary'
                    ];
                    const dotColors = [
                      'bg-brand-accent',
                      'bg-brand-accent',
                      'bg-brand-primary',
                      'bg-brand-primary',
                      'bg-green-400',
                      'bg-green-400'
                    ];

                    return (
                        <div key={area} className={`flex items-center gap-2 p-2 rounded ${colorClasses[index]}`}>
                          <div className={`w-2 h-2 rounded-full ${dotColors[index]}`}></div>
                          <span className="text-dark-text-secondary">{area}</span>
                        </div>
                    );
                  })}
                </div>
                <p className="text-xs text-dark-text-secondary mt-4 text-center">
                  {SERVICE_AREAS.remoteService} • {SERVICE_AREAS.onSiteRange}
                </p>
              </div>
            </div>

            {/* Call to action using constants */}
            <div className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 p-6 rounded-xl border border-brand-accent/30 text-center">
              <h4 className="font-bold text-dark-text text-xl mb-3">Ready to Transform Your {SERVICE_AREAS.primary} Business?</h4>
              <p className="text-dark-text-secondary text-sm mb-4">
                Join {BUSINESS_METRICS.stats.projectsCompleted} successful {SERVICE_AREAS.primary} businesses who've enhanced their digital presence with {BUSINESS_INFO.shortName}
              </p>
              <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  aria-label={`Contact ${BUSINESS_INFO.shortName} for web development services in ${SERVICE_AREAS.primary}`}
              >
                <span>Get Your Free Consultation</span>
                <Zap className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hidden SEO content for local search terms using constants */}
        <div className="sr-only">
          <h3>Web Development Services in {SERVICE_AREAS.primary}, {CONTACT_INFO.address.state}</h3>
          <p>
            {BUSINESS_INFO.name} provides professional web development, AI integration, and custom software development services
            throughout {SERVICE_AREAS.primary} and {SERVICE_AREAS.region}. Based in {CONTACT_INFO.address.suburb}, we serve businesses in {SERVICE_AREAS.areas.slice(0, 6).join(', ')}, and surrounding areas.
          </p>

          <h4>Local {SERVICE_AREAS.primary} Business Technology Solutions</h4>
          <p>
            Our {SERVICE_AREAS.primary}-based team specializes in helping local businesses with website design, e-commerce development,
            mobile applications, AI chatbots, business automation, and digital marketing solutions. We understand the unique needs of {SERVICE_AREAS.region} businesses.
          </p>

          <h4>{BUSINESS_INFO.founder.name} - {SERVICE_AREAS.primary} Web Developer</h4>
          <p>
            {BUSINESS_INFO.founder.name}, founder of {BUSINESS_INFO.name}, is an experienced web developer and AI specialist based in {SERVICE_AREAS.primary}, {CONTACT_INFO.address.state}.
            With deep local knowledge and cutting-edge technical expertise, {BUSINESS_INFO.founder.name} helps {SERVICE_AREAS.primary} businesses grow through innovative technology solutions.
          </p>

          <h4>Business Information</h4>
          <p>ABN: {BUSINESS_INFO.abn}</p>
          <p>Address: {getFullAddress()}</p>
          <p>Phone: {CONTACT_INFO.phone.primary}</p>
          <p>Email: {CONTACT_INFO.email.primary}</p>
          <p>Serving: {SERVICE_AREAS.areas.join(', ')}</p>
          <p>Industries: {SERVICES_OFFERED.industries.join(', ')}</p>
        </div>
      </Section>
  );
};

export default About;