import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { DemoBusiness } from '../../../../lib/demo/types';
import { demoBusinesses } from '../../../../lib/demo/businesses';
import DemoBanner from '../../../../lib/demo/templates/shared/DemoBanner';
import DemoFooter from '../../../../lib/demo/templates/shared/DemoFooter';

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  description: string;
  images: string[];
  featured: boolean;
}

interface ProjectsPageProps {
  business: DemoBusiness;
  slug: string;
  projects: Project[];
}

export default function ProjectsPage({ business, slug, projects }: ProjectsPageProps) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Projects | {business.name} | Demo</title>
        <meta name="description" content={`View our portfolio of projects at ${business.name}.`} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Inter', system-ui, sans-serif; }
          html { scroll-behavior: smooth; }
          .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
          .project-image { transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
          .group:hover .project-image { transform: scale(1.08); }
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
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor})` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white/10" />
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${business.accentColor}, transparent 70%)` }} />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-semibold tracking-wider uppercase rounded-full px-5 py-2 mb-6 text-white/70">
                Our Work
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
                Our <span style={{ color: business.accentColor }}>Projects</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                {business.custom?.gallerySubtitle || `Explore our portfolio of completed projects showcasing our expertise and commitment to quality.`}
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-gray-100 sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={activeCategory === cat ? { background: `linear-gradient(135deg, ${business.primaryColor}, ${business.accentColor})` } : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/demo/${slug}/projects/${project.id}`}
                  className="group hover-lift block rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: `${business.primaryColor}cc` }}
                      >
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-opacity-80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: business.primaryColor }}>
                        View
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
        <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${business.primaryColorDark}, ${business.primaryColor})` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Get in touch today for a free, no-obligation quote.
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
    .filter(([, biz]) => biz.custom?.projects?.length > 0)
    .map(([slug]) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const business = demoBusinesses[slug];
  if (!business || !business.custom?.projects) return { notFound: true };
  return { props: { business, slug, projects: business.custom.projects } };
};
