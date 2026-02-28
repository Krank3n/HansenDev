import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, MapPin, Calendar, Building2, Tag, CheckCircle, Phone,
} from 'lucide-react';
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
  challenge: string;
  solution: string;
  images: string[];
  featured: boolean;
}

interface ProjectPageProps {
  business: DemoBusiness;
  slug: string;
  project: Project;
  prevProject: { id: string; title: string } | null;
  nextProject: { id: string; title: string } | null;
}

export default function ProjectPage({ business, slug, project, prevProject, nextProject }: ProjectPageProps) {
  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <>
      <Head>
        <title>{project.title} | {business.name} | Demo</title>
        <meta name="description" content={project.description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Inter', system-ui, sans-serif; }
          html { scroll-behavior: smooth; }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <DemoBanner business={business} />

        {/* Header */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link href={`/demo/${slug}/projects`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                <ArrowLeft className="h-4 w-4" />
                All Projects
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images[activeImage]}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Category + Featured badges */}
            <div className="absolute top-6 left-6 flex gap-2">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                style={{ background: `${business.primaryColor}cc` }}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-yellow-400/90 text-yellow-900 backdrop-blur-sm">
                  Featured
                </span>
              )}
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 md:p-10 md:pb-16">
              <div className="container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight max-w-3xl">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4" />
                    {project.client}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image thumbnails */}
          {project.images.length > 1 && (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex gap-3 -mt-8 relative z-10 overflow-x-auto pb-4">
                {project.images.map((img, i) => (
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Project Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                </div>

                {/* Challenge */}
                <div className="rounded-2xl border border-gray-100 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${business.primaryColor}15` }}
                    >
                      <Tag className="h-5 w-5" style={{ color: business.primaryColor }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">The Challenge</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>

                {/* Solution */}
                <div className="rounded-2xl border border-gray-100 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${business.primaryColor}15` }}
                    >
                      <CheckCircle className="h-5 w-5" style={{ color: business.primaryColor }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Solution</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Details Card */}
                <div className="rounded-2xl border border-gray-100 p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-5">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Client</div>
                        <div className="text-gray-900 font-medium">{project.client}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</div>
                        <div className="text-gray-900 font-medium">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Year</div>
                        <div className="text-gray-900 font-medium">{project.year}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Category</div>
                        <div className="text-gray-900 font-medium">{project.category}</div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-6 border-gray-100" />

                  <h4 className="text-sm font-bold text-gray-900 mb-3">Interested in a similar project?</h4>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        {(prevProject || nextProject) && (
          <section className="border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                {prevProject ? (
                  <Link
                    href={`/demo/${slug}/projects/${prevProject.id}`}
                    className="group flex items-center gap-3 py-8 pr-6 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Previous</div>
                      <div className="text-gray-900 font-bold text-sm truncate">{prevProject.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextProject ? (
                  <Link
                    href={`/demo/${slug}/projects/${nextProject.id}`}
                    className="group flex items-center justify-end gap-3 py-8 pl-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-right min-w-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Next</div>
                      <div className="text-gray-900 font-bold text-sm truncate">{nextProject.title}</div>
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
  const paths: { params: { slug: string; projectId: string } }[] = [];
  Object.entries(demoBusinesses).forEach(([slug, biz]) => {
    if (biz.custom?.projects) {
      biz.custom.projects.forEach((project: Project) => {
        paths.push({ params: { slug, projectId: project.id } });
      });
    }
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const projectId = params?.projectId as string;
  const business = demoBusinesses[slug];
  if (!business || !business.custom?.projects) return { notFound: true };

  const projects: Project[] = business.custom.projects;
  const index = projects.findIndex((p) => p.id === projectId);
  if (index === -1) return { notFound: true };

  const project = projects[index];
  const prevProject = index > 0 ? { id: projects[index - 1].id, title: projects[index - 1].title } : null;
  const nextProject = index < projects.length - 1 ? { id: projects[index + 1].id, title: projects[index + 1].title } : null;

  return { props: { business, slug, project, prevProject, nextProject } };
};
