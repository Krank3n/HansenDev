import React, { useEffect, useState } from 'react';
import { List, ChevronRight } from 'lucide-react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface ArticleTableOfContentsProps {
    content: string;
}

const ArticleTableOfContents: React.FC<ArticleTableOfContentsProps> = ({ content }) => {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Parse headings from HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const elements = doc.querySelectorAll('h2, h3');

        const items: TOCItem[] = [];
        elements.forEach((el, index) => {
            const text = el.textContent || '';
            // Skip CTA sections and conclusion-like headings at the end
            if (text.toLowerCase().includes('ready to') && text.includes('?')) return;

            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            items.push({
                id: `heading-${index}-${id}`,
                text,
                level: el.tagName === 'H2' ? 2 : 3
            });
        });

        setHeadings(items);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0% -35% 0%' }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length < 3) return null;

    return (
        <nav className="glass-card p-6 mb-8" aria-label="Table of contents">
            <div className="flex items-center gap-2 text-white font-semibold mb-4">
                <List className="h-5 w-5 text-brand-accent" />
                <span>In This Article</span>
            </div>
            <ol className="space-y-2">
                {headings.filter(h => h.level === 2).map((heading, index) => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className={`flex items-start gap-2 text-sm transition-colors duration-200 ${
                                activeId === heading.id
                                    ? 'text-brand-accent'
                                    : 'text-dark-text-secondary hover:text-white'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{heading.text}</span>
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default ArticleTableOfContents;
