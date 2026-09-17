import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Award, Code, Briefcase, ArrowRight } from 'lucide-react';
import { AUTHOR, BUSINESS_INFO, ONLINE_PRESENCE, CONTACT_INFO } from '../constants/business';

interface AuthorBioProps {
    compact?: boolean;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ compact = false }) => {
    if (compact) {
        return (
            <Link href={AUTHOR.path} className="flex items-center gap-4 py-4 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src="/assets/thomas-hansen-founder.webp"
                        alt={`${BUSINESS_INFO.founder.name}, ${BUSINESS_INFO.founder.title} at ${BUSINESS_INFO.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="48px"
                    />
                </div>
                <div>
                    <div className="font-semibold text-white group-hover:text-brand-accent transition-colors">{BUSINESS_INFO.founder.name}</div>
                    <div className="text-sm text-dark-text-secondary">{BUSINESS_INFO.founder.title}</div>
                </div>
            </Link>
        );
    }

    return (
        <div className="glass-card p-6">
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Author Avatar */}
                <div className="flex-shrink-0">
                    <Link href={AUTHOR.path} className="block relative w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src="/assets/thomas-hansen-founder.webp"
                            alt={`${BUSINESS_INFO.founder.name}, ${BUSINESS_INFO.founder.title} at ${BUSINESS_INFO.name}`}
                            fill
                            className="object-cover object-top"
                            sizes="80px"
                        />
                    </Link>
                </div>

                {/* Author Info */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                        <Link href={AUTHOR.path} className="hover:text-brand-accent transition-colors">
                            {BUSINESS_INFO.founder.name}
                        </Link>
                    </h3>
                    <p className="text-brand-accent font-medium mb-3">{BUSINESS_INFO.founder.title}</p>

                    <p className="text-dark-text-secondary text-sm mb-4 leading-relaxed">
                        Thomas founded {BUSINESS_INFO.shortName} in {CONTACT_INFO.address.city} after engineering the trading
                        platform behind nabtrade at NAB and enterprise systems at DXC Technology. He builds and runs
                        QuoteMate, Call Katie and TalkMyShiz, and writes every article on this site.
                    </p>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-3 mb-4">
                        {BUSINESS_INFO.founder.qualifications.map((qual, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 text-xs text-dark-text-secondary bg-white/5 px-2 py-1 rounded"
                            >
                                {index === 0 && <Award className="h-3 w-3" />}
                                {index === 1 && <Code className="h-3 w-3" />}
                                {index === 2 && <Briefcase className="h-3 w-3" />}
                                {qual}
                            </span>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={AUTHOR.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-text-secondary hover:text-brand-accent transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href={AUTHOR.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-text-secondary hover:text-brand-accent transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <Link
                            href={AUTHOR.path}
                            className="inline-flex items-center gap-1.5 text-sm text-brand-accent hover:underline ml-auto"
                        >
                            <span>About Thomas</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
