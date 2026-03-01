import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, CheckCircle, Phone, Layers, Target, Award,
} from 'lucide-react';
import { DemoBusiness, DemoService } from '../../../../lib/demo/types';
import { demoBusinesses } from '../../../../lib/demo/businesses';
import { getIcon } from '../../../../lib/demo/iconMap';
import { useInView } from '../../../../lib/demo/hooks';
import DemoBanner from '../../../../lib/demo/templates/shared/DemoBanner';
import DemoFooter from '../../../../lib/demo/templates/shared/DemoFooter';

interface ServicePageProps {
  business: DemoBusiness;
  slug: string;
  service: DemoService;
  prevService: { id: string; title: string } | null;
  nextService: { id: string; title: string } | null;
  relatedProjects: { id: string; title: string; category: string; images: string[] }[];
}

export default function ServicePage({ business, slug, service, prevService, nextService, relatedProjects }: ServicePageProps) {
  const [activeImage, setActiveImage] = React.useState(0);
  const allImages = service.images && service.images.length > 0 ? service.images : (service.image ? [service.image] : []);
  const contentView = useInView(0.1);

  return (
    <>
      <Head>
        <title>{service.title} | {business.name} | Demo</title>
        <meta name="description" content={service.description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Inter', system-ui, sans-serif; }
          html { scroll-behavior: smooth; }
          .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <DemoBanner business={business} />

        {/* Header */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link href={`/demo/${slug}/services`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                <ArrowLeft className="h-4 w-4" />
                All Services
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

        {/* Hero Image */}
        <section className="relative">
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-gray-100">
            <Image
              src={allImages[activeImage]}
              alt={service.title}
              fill
              sizes="100vw"
              className="object-cover object-top transition-opacity duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Icon badge */}
            <div className="absolute top-6 left-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                style={{ background: `${business.primaryColor}cc` }}
              >
                {getIcon(service.icon, 'h-6 w-6 text-white')}
              </div>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 md:p-10 md:pb-16">
              <div className="container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight max-w-3xl">
                  {service.title}
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          {/* Image thumbnails */}
          {allImages.length > 1 && (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex gap-3 -mt-8 relative z-10 overflow-x-auto pb-4">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === i
                        ? 'shadow-lg scale-105'
                        : 'border-white/50 opacity-70 hover:opacity-100'
                    }`}
                    style={activeImage === i ? { borderColor: business.primaryColor } : undefined}
                  >
                    <Image src={img} alt={`${service.title} ${i + 1}`} fill sizes="128px" className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Service Content */}
        <section ref={contentView.setRef} className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Main Content */}
              <div
                className="lg:col-span-2 space-y-10"
                style={contentView.inView ? { animation: 'slideInLeft 0.8s ease-out both' } : { opacity: 0 }}
              >
                {/* Overview */}
                {service.detailedDescription && (
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.detailedDescription}</p>
                  </div>
                )}

                {/* Credential */}
                {service.credential && (
                  <div className="rounded-2xl border-2 p-5 flex items-center gap-4" style={{ borderColor: `${business.primaryColor}30`, background: `${business.primaryColor}08` }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${business.primaryColor}20` }}>
                      <Award className="h-6 w-6" style={{ color: business.primaryColor }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Accreditation</div>
                      <div className="text-gray-900 font-bold">{service.credential}</div>
                    </div>
                  </div>
                )}

                {/* Applications */}
                {service.applications && service.applications.length > 0 && (
                  <div className="rounded-2xl border border-gray-100 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${business.primaryColor}15` }}
                      >
                        <Target className="h-5 w-5" style={{ color: business.primaryColor }} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Applications</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.applications.map((app, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: business.primaryColor }} />
                          <span className="text-gray-600">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Advantages */}
                {service.advantages && service.advantages.length > 0 && (
                  <div className="rounded-2xl border border-gray-100 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${business.primaryColor}15` }}
                      >
                        <Layers className="h-5 w-5" style={{ color: business.primaryColor }} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Key Advantages</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.advantages.map((adv, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: business.primaryColor }} />
                          <span className="text-gray-600">{adv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fabric/Material Info */}
                {service.fabricInfo && (
                  <div className="rounded-2xl p-6 md:p-8" style={{ background: `${business.primaryColorDark}` }}>
                    <h3 className="text-xl font-bold text-white mb-3">Materials & Fabrics</h3>
                    <p className="text-white/70 leading-relaxed">{service.fabricInfo}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div
                className="space-y-6"
                style={contentView.inView ? { animation: 'slideInRight 0.8s ease-out 0.2s both' } : { opacity: 0 }}
              >
                <div className="rounded-2xl border border-gray-100 p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-5">Interested in this service?</h3>
                  <div className="space-y-3">
                    <Link
                      href={`/demo/${slug}#contact`}
                      className="w-full inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                      style={{ background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` }}
                    >
                      Get a Free Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:bg-gray-200"
                    >
                      <Phone className="h-4 w-4" />
                      {business.phone}
                    </a>
                  </div>

                  {/* Related Projects */}
                  {relatedProjects.length > 0 && (
                    <>
                      <hr className="my-6 border-gray-100" />
                      <h4 className="text-sm font-bold text-gray-900 mb-3">Related Projects</h4>
                      <div className="space-y-3">
                        {relatedProjects.slice(0, 3).map((project) => (
                          <Link
                            key={project.id}
                            href={`/demo/${slug}/projects/${project.id}`}
                            className="group flex items-center gap-3 hover:bg-gray-50 rounded-lg p-1.5 -mx-1.5 transition-colors"
                          >
                            <div className="w-14 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                <Image src={project.images[0]} alt={project.title} fill sizes="56px" className="object-cover" unoptimized />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-gray-900 truncate group-hover:text-opacity-80">{project.title}</div>
                              <div className="text-xs text-gray-400">{project.category}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        {(prevService || nextService) && (
          <section className="border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                {prevService ? (
                  <Link
                    href={`/demo/${slug}/services/${prevService.id}`}
                    className="group flex items-center gap-3 py-8 pr-6 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Previous</div>
                      <div className="text-gray-900 font-bold text-sm truncate">{prevService.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextService ? (
                  <Link
                    href={`/demo/${slug}/services/${nextService.id}`}
                    className="group flex items-center justify-end gap-3 py-8 pl-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-right min-w-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Next</div>
                      <div className="text-gray-900 font-bold text-sm truncate">{nextService.title}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        )}

        <DemoFooter business={business} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string; serviceId: string } }[] = [];
  Object.entries(demoBusinesses).forEach(([slug, biz]) => {
    biz.services.forEach((service) => {
      if (service.id) {
        paths.push({ params: { slug, serviceId: service.id } });
      }
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const serviceId = params?.serviceId as string;
  const business = demoBusinesses[slug];
  if (!business) return { notFound: true };

  const servicesWithId = business.services.filter((s) => s.id);
  const index = servicesWithId.findIndex((s) => s.id === serviceId);
  if (index === -1) return { notFound: true };

  const service = servicesWithId[index];
  const prevService = index > 0 ? { id: servicesWithId[index - 1].id!, title: servicesWithId[index - 1].title } : null;
  const nextService = index < servicesWithId.length - 1 ? { id: servicesWithId[index + 1].id!, title: servicesWithId[index + 1].title } : null;

  // Find related projects by matching service title keywords to project categories
  const projects = business.custom?.projects || [];
  const serviceKeywords = service.title.toLowerCase().split(/[\s&]+/).filter((w: string) => w.length > 3);
  const relatedProjects = projects.filter((p: { category: string }) =>
    serviceKeywords.some((kw: string) => p.category.toLowerCase().includes(kw))
  ).map((p: { id: string; title: string; category: string; images: string[] }) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    images: p.images,
  }));

  return { props: { business, slug, service, prevService, nextService, relatedProjects } };
};
