import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DemoBusiness, DemoService } from '../../../../lib/demo/types';
import { demoBusinesses } from '../../../../lib/demo/businesses';
import { getIcon } from '../../../../lib/demo/iconMap';
import { useInView } from '../../../../lib/demo/hooks';
import DemoBanner from '../../../../lib/demo/templates/shared/DemoBanner';
import DemoFooter from '../../../../lib/demo/templates/shared/DemoFooter';

interface ServicesPageProps {
  business: DemoBusiness;
  slug: string;
  services: DemoService[];
}

export default function ServicesPage({ business, slug, services }: ServicesPageProps) {
  const heroView = useInView(0.2);
  const gridView = useInView(0.1);
  const ctaView = useInView(0.2);

  return (
    <>
      <Head>
        <title>Services | {business.name} | Demo</title>
        <meta name="description" content={`Explore the full range of services offered by ${business.name}.`} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Inter', system-ui, sans-serif; }
          html { scroll-behavior: smooth; }
          .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
          .service-image { transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
          .group:hover .service-image { transform: scale(1.08); }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <DemoBanner business={business} />

        {/* Header */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link href={`/demo/${slug}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to {business.name}
              </Link>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
              >
                {business.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section
          ref={heroView.setRef}
          className="relative py-20 md:py-28 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor})` }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full" />
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${business.accentColor}, transparent 70%)` }} />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl" style={heroView.inView ? { animation: 'fadeInUp 0.8s ease-out both' } : { opacity: 0 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                What We Offer
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
                Our <span style={{ color: business.accentColor }}>Services</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                {business.custom?.servicesSubtitle || 'Explore our comprehensive range of products and services designed to meet your needs.'}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={gridView.setRef} className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => (
                <Link
                  key={service.id}
                  href={`/demo/${slug}/services/${service.id}`}
                  className="group hover-lift block rounded-3xl overflow-hidden bg-white shadow-sm"
                  style={gridView.inView ? { animation: `scaleIn 0.5s ease-out ${i * 0.08}s both` } : { opacity: 0 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="service-image object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${business.primaryColor}cc` }}
                      >
                        {getIcon(service.icon, 'h-5 w-5 text-white')}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-opacity-80 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-end">
                      <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: business.primaryColor }}>
                        Learn More
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          ref={ctaView.setRef}
          className="py-16 md:py-20"
          style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor})` }}
        >
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={ctaView.inView ? { animation: 'fadeInUp 0.8s ease-out both' } : { opacity: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              {business.custom?.ctaSubtitle || 'Get in touch today for a free, no-obligation quote.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/demo/${slug}#contact`}
                className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                style={{ color: business.primaryColor }}
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <DemoFooter business={business} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.entries(demoBusinesses)
    .filter(([, biz]) => biz.services.some((s) => s.id))
    .map(([slug]) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicesPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const business = demoBusinesses[slug];
  if (!business) return { notFound: true };

  const services = business.services.filter((s) => s.id);
  if (services.length === 0) return { notFound: true };

  return { props: { business, slug, services } };
};
