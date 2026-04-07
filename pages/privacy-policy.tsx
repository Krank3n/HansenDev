import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    Shield,
    Lock,
    Eye,
    FileText,
    Mail,
    Phone
} from 'lucide-react';
import { BUSINESS_INFO, CONTACT_INFO, ONLINE_PRESENCE } from '../constants/business';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | {BUSINESS_INFO.name}</title>
                <meta name="description" content={`Privacy policy for ${BUSINESS_INFO.name}. Learn how we collect, use, and protect your personal information.`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${ONLINE_PRESENCE.website.primary}/privacy-policy`} />
            </Head>

            <div className="min-h-screen bg-dark-bg text-dark-text">
                {/* Back Navigation */}
                <div className="">
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
                                <Shield className="h-4 w-4" />
                                <span>Legal</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Privacy Policy
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
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">

                                {/* Introduction */}
                                <div className="mb-12">
                                    <p className="text-dark-text-secondary text-lg leading-relaxed mb-4">
                                        {BUSINESS_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                    </p>
                                </div>

                                {/* Information We Collect */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Eye className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        We may collect personal information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 mb-6 ml-4">
                                        <li>Contact us via email, phone, or contact forms</li>
                                        <li>Request a quote or consultation</li>
                                        <li>Subscribe to our newsletter</li>
                                        <li>Engage our services</li>
                                    </ul>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        This information may include:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Name and contact details (email, phone number, address)</li>
                                        <li>Business information (company name, industry, website)</li>
                                        <li>Project requirements and specifications</li>
                                        <li>Payment and billing information</li>
                                    </ul>
                                </div>

                                {/* How We Use Your Information */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <FileText className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
                                    </div>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        We use the information we collect to:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Provide, operate, and maintain our services</li>
                                        <li>Respond to your inquiries and provide customer support</li>
                                        <li>Process your transactions and send related information</li>
                                        <li>Send you technical notices, updates, and administrative messages</li>
                                        <li>Improve our website and services</li>
                                        <li>Monitor and analyze usage and trends</li>
                                        <li>Send you marketing communications (with your consent)</li>
                                        <li>Detect, prevent, and address technical issues or fraud</li>
                                    </ul>
                                </div>

                                {/* Cookies and Tracking */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Lock className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">Cookies and Tracking Technologies</h2>
                                    </div>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                                    </p>
                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                                    </p>
                                </div>

                                {/* Data Security */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Shield className="h-6 w-6 text-brand-accent" />
                                        <h2 className="text-3xl font-bold text-white">Data Security</h2>
                                    </div>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                                    </p>
                                </div>

                                {/* Third-Party Services */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                                    </p>
                                </div>

                                {/* Your Rights */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-4">
                                        Under Australian privacy law, you have the right to:
                                    </p>
                                    <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                                        <li>Access the personal information we hold about you</li>
                                        <li>Request correction of inaccurate information</li>
                                        <li>Request deletion of your personal information</li>
                                        <li>Object to our processing of your personal information</li>
                                        <li>Withdraw consent for marketing communications</li>
                                    </ul>
                                </div>

                                {/* Data Retention */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                                    </p>
                                </div>

                                {/* Children's Privacy */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                                    </p>
                                </div>

                                {/* Changes to Privacy Policy */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>

                                    <p className="text-dark-text-secondary leading-relaxed">
                                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="pt-8">
                                    <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>

                                    <p className="text-dark-text-secondary leading-relaxed mb-6">
                                        If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <FileText className="h-5 w-5 text-brand-accent mt-1" />
                                            <div>
                                                <p className="text-white font-semibold">{BUSINESS_INFO.name}</p>
                                                <p className="text-dark-text-secondary">{BUSINESS_INFO.registeredName}</p>
                                                <p className="text-dark-text-secondary">ABN: {BUSINESS_INFO.abn}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-brand-accent" />
                                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-accent hover:text-brand-primary transition-colors">
                                                {CONTACT_INFO.email}
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

export default PrivacyPolicy;
