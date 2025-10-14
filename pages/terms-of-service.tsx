import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    FileText,
    Scale,
    AlertTriangle,
    Shield,
    Mail,
    Phone
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO } from '../constants/business';

const TermsOfService: React.FC = () => {
    return (
        <>
            <Head>
                <title>Terms of Service | {BUSINESS_INFO.name}</title>
                <meta name="description" content={`Terms of service for ${BUSINESS_INFO.name}. Review our service terms, user responsibilities, and legal agreements.`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CONTACT_INFO.website}/terms-of-service`} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="border-b border-white/10">
                    <div className="container-custom py-6">
                        <Link href="/" className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-brand-accent transition-colors duration-300">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
                    <div className="container-custom relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium uppercase tracking-wider mb-6">
                                <Scale className="h-4 w-4" />
                                <span>Legal</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Terms of Service
                            </h1>

                            <p className="text-xl text-dark-text-secondary mb-4">
                                Last updated: October 14, 2025
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">

                                {/* Introduction */}
                                <div className="mb-12">
                                    <p className="text-dark-text-secondary text-lg leading-relaxed mb-4">
                                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the {CONTACT_INFO.website} website and services operated by {BUSINESS_INFO.name} ("we", "us", "our").
                                    </p>
                                    <p className="text-dark-text-secondary text-lg leading-relaxed">
                                        Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the service.
                                    </p>
                                </div>

                                {/* Agreement to Terms */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <FileText className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">Agreement to Terms</h2>
                                    </div>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                                    </p>
                                </div>

                                {/* Services */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Shield className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">Services</h2>
                                    </div>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        {BUSINESS_INFO.name} provides web development, AI integration, mobile app development, e-commerce solutions, and technology consulting services. All services are subject to:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Written agreement and project scope documentation</li>
                                        <li>Payment of agreed fees and deposit requirements</li>
                                        <li>Provision of necessary information and materials by the client</li>
                                        <li>Timely feedback and approval from the client</li>
                                        <li>Compliance with all applicable laws and regulations</li>
                                    </ul>
                                </div>

                                {/* Payment Terms */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Payment Terms</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        Payment terms are as follows:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 mb-6 ml-4">
                                        <li>A deposit (typically 30-50%) is required before work commences</li>
                                        <li>Progress payments may be required for larger projects</li>
                                        <li>Final payment is due upon project completion and delivery</li>
                                        <li>Late payments may incur additional fees</li>
                                        <li>All fees are in Australian Dollars (AUD) unless otherwise stated</li>
                                    </ul>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        We accept payment via bank transfer, credit card, PayPal, and other agreed methods. GST applies to all services provided to Australian businesses where applicable.
                                    </p>
                                </div>

                                {/* Intellectual Property */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property</h2>

                                    <h3 className="text-xl font-bold text-white mb-4">Client IP</h3>
                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        Upon full payment, ownership of the final deliverables will transfer to the client. This includes custom designs, code, and materials created specifically for the project, excluding any pre-existing materials, templates, or third-party components.
                                    </p>

                                    <h3 className="text-xl font-bold text-white mb-4">Our IP</h3>
                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        We retain ownership of all development tools, processes, methodologies, and any pre-existing intellectual property. This includes frameworks, libraries, and reusable code components.
                                    </p>

                                    <h3 className="text-xl font-bold text-white mb-4">Third-Party IP</h3>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Any third-party software, plugins, or services used in your project remain the property of their respective owners and are subject to their own licensing terms.
                                    </p>
                                </div>

                                {/* Client Responsibilities */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Client Responsibilities</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        The client agrees to:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Provide accurate and complete information for the project</li>
                                        <li>Provide timely feedback and approvals</li>
                                        <li>Ensure all content provided is legally owned or licensed</li>
                                        <li>Maintain confidentiality of login credentials and sensitive information</li>
                                        <li>Not use services for any illegal or unauthorized purpose</li>
                                        <li>Comply with all applicable laws and regulations</li>
                                    </ul>
                                </div>

                                {/* Warranties and Disclaimers */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertTriangle className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">Warranties and Disclaimers</h2>
                                    </div>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        We warrant that:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 mb-6 ml-4">
                                        <li>Services will be performed with reasonable skill and care</li>
                                        <li>Work will be original and will not infringe on third-party rights</li>
                                        <li>We have the right to enter into this agreement</li>
                                    </ul>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        However, we do not warrant that:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Services will be uninterrupted or error-free</li>
                                        <li>Results will meet your specific requirements unless expressly agreed</li>
                                        <li>Third-party services or platforms will remain available or unchanged</li>
                                    </ul>
                                </div>

                                {/* Limitation of Liability */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        To the maximum extent permitted by Australian law, {BUSINESS_INFO.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses.
                                    </p>
                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Our total liability for any claims arising from or related to our services shall not exceed the amount paid by the client for the specific service giving rise to the claim.
                                    </p>
                                </div>

                                {/* Termination */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        Either party may terminate services with written notice. In the event of termination:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Client must pay for all work completed up to the termination date</li>
                                        <li>We will provide all completed deliverables upon receipt of payment</li>
                                        <li>Deposits are non-refundable unless otherwise agreed</li>
                                        <li>Termination fees may apply depending on project stage</li>
                                    </ul>
                                </div>

                                {/* Confidentiality */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Confidentiality</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This obligation continues after project completion or termination.
                                    </p>
                                </div>

                                {/* Portfolio and Promotion */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Portfolio and Promotion</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Unless otherwise agreed in writing, we reserve the right to display completed projects in our portfolio and promotional materials, and to include your company name in our client list.
                                    </p>
                                </div>

                                {/* Governing Law */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        These Terms shall be governed by and construed in accordance with the laws of Queensland, Australia, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts of Queensland.
                                    </p>
                                </div>

                                {/* Changes to Terms */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Changes to Terms</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Continued use of our services after changes constitutes acceptance of the new Terms.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="border-t border-white/10 pt-8">
                                    <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        If you have any questions about these Terms of Service, please contact us:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <FileText className="h-5 w-5 text-brand-accent mt-1" />
                                            <div>
                                                <p className="text-white font-semibold">{BUSINESS_INFO.name}</p>
                                                <p className="text-dark-text-secondary">{BUSINESS_INFO.registeredName}</p>
                                                <p className="text-dark-text-secondary">ABN: {BUSINESS_INFO.abn}</p>
                                                <p className="text-dark-text-secondary">{CONTACT_INFO.address.full}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-brand-accent" />
                                            <a href={`mailto:${CONTACT_INFO.email.primary}`} className="text-brand-accent hover:text-brand-primary transition-colors">
                                                {CONTACT_INFO.email.primary}
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-brand-accent" />
                                            <a href={`tel:${CONTACT_INFO.phone.primary}`} className="text-brand-accent hover:text-brand-primary transition-colors">
                                                {CONTACT_INFO.phone.display}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TermsOfService;
