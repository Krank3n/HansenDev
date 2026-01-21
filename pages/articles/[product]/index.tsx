import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
    BookOpen,
    Calendar,
    Clock,
    ArrowRight,
    ArrowLeft,
    Tag,
    ChevronRight
} from 'lucide-react';
import {
    getArticlesByProduct,
    getProductDirectories,
    getProductName,
    ArticlePreview
} from '../../../lib/articles';
import { BUSINESS_INFO, ONLINE_PRESENCE } from '../../../constants/business';

interface ProductArticlesPageProps {
    articles: ArticlePreview[];
    product: string;
    productName: string;
}

// Product descriptions for SEO
const productDescriptions: Record<string, string> = {
    quotemate: 'Discover tips, tutorials, and guides for Australian tradies. Learn how to create better quotes, save time, and grow your business with QuoteMate.',
    chatspark: 'Explore articles about building social confidence, overcoming anxiety, and improving communication skills with ChatSpark.',
    shredindex: 'Find ski resort guides, travel tips, and industry insights. Discover the best mountains and career opportunities in skiing.',
    hansendev: 'Expert articles on web development, AI integration, and technology consulting for Australian businesses.',
    wakeindex: 'Wakeboarding guides, spot reviews, and water sports tips to help you find your perfect ride.'
};

const ProductArticlesPage: React.FC<ProductArticlesPageProps> = ({ articles, product, productName }) => {
    const canonicalUrl = `${ONLINE_PRESENCE.website.primary}/articles/${product}`;
    const description = productDescriptions[product] || `Articles and guides about ${productName} from ${BUSINESS_INFO.name}.`;

    // Structured data
    const collectionStructuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${productName} Articles | ${BUSINESS_INFO.name}`,
        "description": description,
        "url": canonicalUrl,
        "publisher": {
            "@type": "Organization",
            "name": BUSINESS_INFO.name,
            "url": ONLINE_PRESENCE.website.primary
        },
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": articles.length,
            "itemListElement": articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${ONLINE_PRESENCE.website.primary}/articles/${product}/${article.frontmatter.slug}`
            }))
        }
    };

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
                "item": `${ONLINE_PRESENCE.website.primary}/articles`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": productName,
                "item": canonicalUrl
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{productName} Articles & Guides | {BUSINESS_INFO.name}</title>
                <meta name="title" content={`${productName} Articles & Guides | ${BUSINESS_INFO.name}`} />
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`${productName} Articles & Guides`} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={BUSINESS_INFO.name} />
                <meta property="og:locale" content="en_AU" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={canonicalUrl} />
                <meta name="twitter:title" content={`${productName} Articles & Guides`} />
                <meta name="twitter:description" content={description} />

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
                {/* Breadcrumb Navigation */}
                <nav className="border-b border-white/10" aria-label="Breadcrumb">
                    <div className="container-custom py-4">
                        <ol className="flex items-center gap-2 text-sm text-dark-text-secondary">
                            <li>
                                <Link href="/" className="hover:text-brand-accent transition-colors">
                                    Home
                                </Link>
                            </li>
                            <ChevronRight className="h-4 w-4" />
                            <li>
                                <Link href="/articles" className="hover:text-brand-accent transition-colors">
                                    Articles
                                </Link>
                            </li>
                            <ChevronRight className="h-4 w-4" />
                            <li className="text-white" aria-current="page">
                                {productName}
                            </li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-12 lg:py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto">
                            {/* Back Link */}
                            <div className="mb-6">
                                <Link
                                    href="/articles"
                                    className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>All Articles</span>
                                </Link>
                            </div>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-4">
                                <Tag className="h-4 w-4" />
                                <span>{productName}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {productName} Articles
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-dark-text-secondary max-w-2xl">
                                {description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="pb-16 lg:pb-24">
                    <div className="container-custom">
                        {articles.length === 0 ? (
                            <div className="text-center py-16 max-w-xl mx-auto">
                                <BookOpen className="h-16 w-16 text-dark-text-secondary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-2">No Articles Yet</h2>
                                <p className="text-dark-text-secondary mb-6">
                                    We're working on creating helpful content for {productName}. Check back soon!
                                </p>
                                <Link
                                    href="/articles"
                                    className="inline-flex items-center gap-2 text-brand-accent hover:underline"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Browse All Articles
                                </Link>
                            </div>
                        ) : (
                            <div className="max-w-4xl mx-auto">
                                <div className="space-y-8">
                                    {articles.map((article, index) => (
                                        <article
                                            key={index}
                                            className="group flex flex-col md:flex-row gap-6 bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-accent/30 transition-all duration-300"
                                        >
                                            {/* Featured Image */}
                                            {article.frontmatter.featuredImage && (
                                                <Link
                                                    href={`/articles/${product}/${article.frontmatter.slug}`}
                                                    className="md:w-1/3 flex-shrink-0"
                                                >
                                                    <div className="relative aspect-video md:aspect-square h-full overflow-hidden">
                                                        <Image
                                                            src={article.frontmatter.featuredImage}
                                                            alt={article.frontmatter.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                </Link>
                                            )}

                                            <div className="flex-1 p-6 flex flex-col justify-center">
                                                {/* Title */}
                                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                                                    <Link href={`/articles/${product}/${article.frontmatter.slug}`}>
                                                        {article.frontmatter.title}
                                                    </Link>
                                                </h2>

                                                {/* Description */}
                                                <p className="text-dark-text-secondary mb-4 line-clamp-2">
                                                    {article.frontmatter.description}
                                                </p>

                                                {/* Meta */}
                                                <div className="flex items-center justify-between text-sm text-dark-text-secondary">
                                                    <div className="flex items-center gap-4">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            {new Date(article.frontmatter.publishDate).toLocaleDateString('en-AU', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4" />
                                                            {article.frontmatter.readingTime}
                                                        </span>
                                                    </div>
                                                    <Link
                                                        href={`/articles/${product}/${article.frontmatter.slug}`}
                                                        className="flex items-center gap-1 text-brand-accent hover:underline font-medium"
                                                    >
                                                        Read Article <ArrowRight className="h-4 w-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Product CTA */}
                <section className="py-16 bg-gradient-to-br from-brand-primary/10 via-brand-accent/10 to-brand-primary/10 border-t border-brand-accent/20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Interested in {productName}?
                            </h2>
                            <p className="text-lg text-dark-text-secondary mb-8">
                                Learn more about how {productName} can help you achieve your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={product === 'hansendev' ? '/' : `/projects/${product}`}
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                                >
                                    Learn About {productName}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/articles"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-white/20"
                                >
                                    Browse All Articles
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const products = getProductDirectories();

    return {
        paths: products.map(product => ({
            params: { product }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = params?.product as string;
    const articles = getArticlesByProduct(product);
    const productName = getProductName(product);

    return {
        props: {
            articles,
            product,
            productName
        }
    };
};

export default ProductArticlesPage;
