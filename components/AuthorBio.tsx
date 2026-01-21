import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Award, Code, Briefcase } from 'lucide-react';
import { BUSINESS_INFO, ONLINE_PRESENCE, CONTACT_INFO } from '../constants/business';

interface AuthorBioProps {
    compact?: boolean;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ compact = false }) => {
    if (compact) {
        return (
            <div className="flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center text-white font-bold text-lg">
                    TH
                </div>
                <div>
                    <div className="font-semibold text-white">{BUSINESS_INFO.founder.name}</div>
                    <div className="text-sm text-dark-text-secondary">{BUSINESS_INFO.founder.title}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Author Avatar */}
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center text-white font-bold text-2xl">
                        TH
                    </div>
                </div>

                {/* Author Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{BUSINESS_INFO.founder.name}</h3>
                        <span className="px-2 py-0.5 bg-brand-accent/20 text-brand-accent text-xs rounded-full font-medium">
                            Verified Author
                        </span>
                    </div>
                    <p className="text-brand-accent font-medium mb-3">{BUSINESS_INFO.founder.title}</p>

                    <p className="text-dark-text-secondary text-sm mb-4 leading-relaxed">
                        Thomas is the founder of {BUSINESS_INFO.shortName}, specializing in web development, AI integration,
                        and building practical software solutions for Australian businesses. Based in {CONTACT_INFO.address.city},
                        he has delivered {BUSINESS_INFO.founder.qualifications[2].toLowerCase()} helping businesses grow through technology.
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
                            href={ONLINE_PRESENCE.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-text-secondary hover:text-brand-accent transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href={ONLINE_PRESENCE.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-text-secondary hover:text-brand-accent transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <Link
                            href="/#contact"
                            className="text-sm text-brand-accent hover:underline ml-auto"
                        >
                            Contact Author
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
