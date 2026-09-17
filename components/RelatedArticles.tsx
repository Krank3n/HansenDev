import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ArticlePreview, getProductName } from '../lib/articles';

interface RelatedArticlesProps {
    articles: ArticlePreview[];
    heading?: string;
    intro?: string;
    // Where "read everything" points. Defaults to the product's article index.
    product?: string;
}

/**
 * Article links for the programmatic templates. Service, trade and industry pages
 * previously linked to no article at all, leaving the article set reachable only
 * through the nav and footer.
 */
const RelatedArticles: React.FC<RelatedArticlesProps> = ({
    articles,
    heading = 'Related reading',
    intro,
    product,
}) => {
    if (!articles.length) return null;

    return (
        <section className="py-12 lg:py-16 bg-white/[0.02]">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                            <BookOpen className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                            {heading}
                        </h2>
                        <Link
                            href={product ? `/articles/${product}` : '/articles'}
                            className="inline-flex items-center gap-2 text-brand-accent hover:text-teal-400 transition-colors font-medium text-sm"
                        >
                            <span>All articles</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    {intro && <p className="text-dark-text-secondary mb-8 max-w-2xl">{intro}</p>}

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {articles.map((article) => (
                            <Link
                                key={`${article.frontmatter.product}/${article.frontmatter.slug}`}
                                href={`/articles/${article.frontmatter.product}/${article.frontmatter.slug}`}
                                className="glass-card p-5 group flex flex-col"
                            >
                                <span className="text-xs uppercase tracking-wider text-brand-accent font-medium">
                                    {getProductName(article.frontmatter.product)}
                                </span>
                                <h3 className="text-base font-bold text-white group-hover:text-brand-accent transition-colors mt-2 mb-2 leading-snug">
                                    {article.frontmatter.title}
                                </h3>
                                <p className="text-sm text-dark-text-secondary leading-relaxed line-clamp-3 flex-grow">
                                    {article.frontmatter.description}
                                </p>
                                <span className="text-xs text-dark-text-secondary/70 mt-3">
                                    {article.frontmatter.readingTime}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedArticles;
