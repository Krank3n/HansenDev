import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
    BookOpen,
    Calendar,
    Clock,
    ArrowRight,
    Tag
} from 'lucide-react';
import {
    getAllArticles,
    getProductDirectories,
    getProductName,
    ArticlePreview
} from '../../lib/articles';
import { BUSINESS_INFO, ONLINE_PRESENCE } from '../../constants/business';

interface ArticlesPageProps {
    articles: ArticlePreview[];
    products: string[];
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ articles, products }) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/articles`;

    // Structured data for the articles collection
    const collectionStructuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `Articles & Guides | ${BUSINESS_INFO.name}`,
        "description": "Expert articles, tutorials, and guides on web development, AI integration, productivity tools, and more from HansenDev.",
        "url": canonicalUrl,
        "publisher": {
            "@type": "Organization",
            "name": BUSINESS_INFO.name,
            "url": ONLINE_PRESENCE.website.primary
        },
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": articles.length,
            "itemListElement": articles.slice(0, 10).map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${ONLINE_PRESENCE.website.primary}/articles/${article.frontmatter.product}/${article.frontmatter.slug}`
            }))
        }
    };

    // Breadcrumb structured data
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": ONLINE_PRESENCE.website.primary
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": canonicalUrl
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Articles & Guides | {BUSINESS_INFO.name}</title>
                <meta name="title" content={`Articles & Guides | ${BUSINESS_INFO.name}`} />
                <meta name="description" content="Expert articles, tutorials, and guides on web development, AI integration, productivity tools for tradies, and more. Learn from HansenDev's experience building successful products." />
                <meta name="keywords" content="web development articles, AI integration guides, tradie business tips, productivity tutorials, software development, technology guides" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`Articles & Guides | ${BUSINESS_INFO.name}`} />
                <meta property="og:description" content="Expert articles, tutorials, and guides on web development, AI integration, productivity tools, and more." />
                <meta property="og:image" content={`${ONLINE_PRESENCE.website.primary}/assets/og-articles.png`} />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={canonicalUrl} />
                <meta name="twitter:title" content={`Articles & Guides | ${BUSINESS_INFO.name}`} />
                <meta name="twitter:description" content="Expert articles, tutorials, and guides on web development, AI integration, productivity tools, and more." />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
                />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <BookOpen className="h-4 w-4" />
                                <span>Knowledge Base</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Articles & Guides
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto mb-10">
                                Expert insights, tutorials, and tips on web development, AI integration, productivity tools, and building successful software products.
                            </p>

                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link
                                    href="/articles"
                                    className="px-4 py-2 bg-brand-accent text-white rounded-full text-sm font-medium transition-all"
                                >
                                    All Articles
                                </Link>
                                {products.map((product) => (
                                    <Link
                                        key={product}
                                        href={`/articles/${product}`}
                                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all"
                                    >
                                        {getProductName(product)}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="pb-16 lg:pb-24">
                    <div className="container-custom">
                        {articles.length === 0 ? (
                            <div className="text-center py-16">
                                <BookOpen className="h-16 w-16 text-dark-text-secondary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-2">No Articles Yet</h2>
                                <p className="text-dark-text-secondary">
                                    Check back soon for new content!
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {articles.map((article, index) => (
                                    <article
                                        key={index}
                                        className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* Featured Image */}
                                        {article.frontmatter.featuredImage && (
                                            <Link href={`/articles/${article.frontmatter.product}/${article.frontmatter.slug}`}>
                                                <div className="relative aspect-video overflow-hidden">
                                                    <Image
                                                        src={article.frontmatter.featuredImage}
                                                        alt={article.frontmatter.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </Link>
                                        )}

                                        <div className="p-6">
                                            {/* Category */}
                                            <Link
                                                href={`/articles/${article.frontmatter.product}`}
                                                className="inline-flex items-center gap-1 text-brand-accent text-sm font-medium mb-3 hover:underline"
                                            >
                                                <Tag className="h-3 w-3" />
                                                {getProductName(article.frontmatter.product)}
                                            </Link>

                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                                                <Link href={`/articles/${article.frontmatter.product}/${article.frontmatter.slug}`}>
                                                    {article.frontmatter.title}
                                                </Link>
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-dark-text-secondary text-sm mb-4 line-clamp-2">
                                                {article.excerpt}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center justify-between text-xs text-dark-text-secondary">
                                                <div className="flex items-center gap-4">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {new Date(article.frontmatter.publishDate).toLocaleDateString('en-AU', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {article.frontmatter.readingTime}
                                                    </span>
                                                </div>
                                                <Link
                                                    href={`/articles/${article.frontmatter.product}/${article.frontmatter.slug}`}
                                                    className="flex items-center gap-1 text-brand-accent hover:underline"
                                                >
                                                    Read <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-16 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-t border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Stay Updated
                            </h2>
                            <p className="text-lg text-dark-text-secondary mb-8">
                                Get the latest articles and product updates delivered to your inbox.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                            >
                                Get In Touch
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const articles = getAllArticles();
    const products = getProductDirectories();

    return {
        props: {
            articles,
            products
        }
    };
};

export default ArticlesPage;
