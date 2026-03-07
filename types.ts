// constants/business.ts

import React from "react";

export const BUSINESS_INFO = {
  // Core Business Details
  name: "HansenDev PTY LTD",
  shortName: "HansenDev",
  tagline: "Custom Web Development & AI Integration Cairns",
  description: "Professional web development, AI integration, and technology consulting services in Cairns, Queensland, Australia",

  // Legal Information
  abn: "12 345 678 901", // Replace with your actual ABN
  acn: "123 456 789",    // Replace with your actual ACN if applicable
  registeredName: "HansenDev PTY LTD",
  entityType: "Private Company",

  // Founder Information
  founder: {
    name: "Thomas Hansen",
    title: "Founder & Lead Developer",
    qualifications: [
      "Computer Science Graduate",
      "AI & ML Certified",
      "5+ Years Cairns Experience"
    ]
  }
} as const;

export const CONTACT_INFO = {
  // Primary Contact Details
  phone: {
    primary: "+61 480 232 922",
    display: "+61 480 232 922",
    raw: "61480232922"
  },

  email: {
    primary: "thomas@hansendev.com.au",
    info: "info@hansendev.com.au",
    support: "support@hansendev.com.au"
  },

  // Address Information
  address: {
    street: "Kamerunga",
    suburb: "Kamerunga",
    city: "Cairns",
    state: "Queensland",
    stateCode: "QLD",
    postcode: "4870",
    country: "Australia",
    countryCode: "AU",
    full: "Kamerunga, Cairns, Queensland 4870, Australia"
  },

  // Geographic Coordinates
  coordinates: {
    latitude: "-16.8500",
    longitude: "145.6833"
  },

  // Business Hours
  hours: {
    business: "Monday to Friday, 9:00 AM to 5:00 PM",
    support: "24/7 Emergency Support Available",
    timezone: "Australia/Brisbane",
    structured: [
      "Mo-Fr 09:00-17:00"
    ]
  }
} as const;

export const ONLINE_PRESENCE = {
  // Website Information
  website: {
    primary: "https://hansendev.com.au",
    domain: "hansendev.com.au"
  },

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/company/hansendev",
    github: "https://github.com/hansendev",
    facebook: "https://facebook.com/hansendev",
    instagram: "https://instagram.com/hansendev",
    twitter: "https://twitter.com/hansendev"
  },

  // Business Listings
  listings: {
    googleBusiness: "https://g.page/hansendev-cairns", // Replace with actual Google Business URL
    yelp: "https://yelp.com/biz/hansendev-cairns",
    trustedSite: "https://trustedsite.com/hansendev"
  }
} as const;

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}


export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  priceRange: string;       // ✅ Added missing property
  deliveryTime: string;     // ✅ Added missing property
  businessTypes: string[];  // ✅ Added missing property
}

export const SERVICE_AREAS = {
  // Primary Service Area
  primary: "Cairns",
  region: "Far North Queensland",

  // Specific Areas Served
  areas: [
    "Cairns CBD",
    "Northern Beaches",
    "Port Douglas",
    "Palm Cove",
    "Mission Beach",
    "Atherton Tablelands",
    "Mareeba",
    "Kuranda",
    "Mossman",
    "Daintree",
    "Cape Tribulation",
    "Cooktown",
    "Innisfail",
    "Tully"
  ],

  // Service Range
  onSiteRange: "100km radius from Cairns",
  remoteService: "Australia-wide",

  // Geographic Identifiers
  geoTags: {
    region: "AU-QLD",
    placename: "Cairns, Queensland",
    icbm: "-16.8500, 145.6833"
  }
} as const;

export const BUSINESS_METRICS = {
  // Key Statistics
  stats: {
    projectsCompleted: "50+",
    clientSatisfaction: "100%",
    averageRating: "5.0",
    reviewCount: "25+",
    yearsExperience: "5+",
    responseTime: "Same-day"
  },

  // Certifications & Trust Signals
  credentials: [
    "Australian Business Number (ABN) Registered",
    "Queensland Government Approved",
    "Local Cairns References Available",
    "Professional Indemnity Insurance",
    "Privacy Policy Compliant"
  ]
} as const;

export const SERVICES_OFFERED = {
  // Core Services
  primary: [
    "Web Development",
    "AI Integration",
    "Technology Consulting",
    "Custom Software Development"
  ],

  // Detailed Service Categories - Made flexible for concatenation
  categories: {
    webDevelopment: {
      name: "Custom Web Development",
      services: [
        "Website Design",
        "E-commerce Development",
        "Web Applications",
        "Responsive Design",
        "Mobile Optimization",
        "SEO Optimization"
      ] as string[] // Explicitly typed as string array for flexibility
    },
    aiIntegration: {
      name: "AI Integration & Automation",
      services: [
        "AI Chatbots",
        "Business Automation",
        "Machine Learning",
        "Process Optimization",
        "Data Analytics",
        "Predictive Analytics"
      ] as string[] // Explicitly typed as string array for flexibility
    },
    consulting: {
      name: "Technology Consulting",
      services: [
        "Digital Transformation",
        "IT Strategy",
        "Solution Architecture",
        "Technology Audits",
        "Cloud Migration",
        "Cybersecurity Strategy"
      ] as string[] // Explicitly typed as string array for flexibility
    }
  },

  // Industries Served
  industries: [
    "Tourism & Hospitality",
    "Retail & E-commerce",
    "Professional Services",
    "Healthcare",
    "Real Estate",
    "Restaurants",
    "Non-Profits",
    "Government Agencies"
  ]
} as const;

export const SEO_CONSTANTS = {
  // Primary Keywords
  primaryKeywords: [
    "web development cairns",
    "AI integration cairns",
    "technology consulting cairns",
    "custom software cairns",
    "website design cairns"
  ],

  // Local SEO Keywords
  localKeywords: [
    "cairns web developer",
    "far north queensland tech",
    "cairns website design",
    "port douglas web development",
    "mission beach technology services"
  ],

  // Brand Keywords
  brandKeywords: [
    "hansendev",
    "thomas hansen developer",
    "hansendev cairns",
    "hansendev pty ltd"
  ],

  // Schema.org Types
  schemaTypes: {
    business: "LocalBusiness",
    service: "ProfessionalService",
    website: "WebSite",
    person: "Person"
  }
} as const;

export const PRICING_INFO = {
  // Service Pricing Ranges
  webDevelopment: {
    starting: "From $2,500",
    range: "$$",
    timeline: "2-6 weeks"
  },
  aiIntegration: {
    starting: "From $3,500",
    range: "$$",
    timeline: "3-8 weeks"
  },
  consulting: {
    starting: "From $150/hour",
    range: "$$",
    timeline: "1-12 weeks"
  },

  // Payment Information
  paymentMethods: [
    "Cash",
    "Credit Card",
    "Bank Transfer",
    "PayPal",
    "Direct Debit"
  ],

  currency: "AUD",
  invoiceTerms: "Net 14 days"
} as const;

// Utility functions for accessing constants
export const getFullAddress = () => {
  const addr = CONTACT_INFO.address;
  return `${addr.street}, ${addr.city}, ${addr.state} ${addr.postcode}, ${addr.country}`;
};


export interface NavItem {
  name: string;
  href: string;
}

export const getFormattedPhone = () => {
  return CONTACT_INFO.phone.display;
};

export const getBusinessName = (includeType: boolean = false) => {
  return includeType ? BUSINESS_INFO.name : BUSINESS_INFO.shortName;
};

export const getServiceAreasString = () => {
  return SERVICE_AREAS.areas.join(", ");
};

export const getKeywordsString = () => {
  return [
    ...SEO_CONSTANTS.primaryKeywords,
    ...SEO_CONSTANTS.localKeywords,
    ...SEO_CONSTANTS.brandKeywords
  ].join(", ");
};

// Export all constants as a single object (optional)
export const HANSENDEV_CONSTANTS = {
  business: BUSINESS_INFO,
  contact: CONTACT_INFO,
  online: ONLINE_PRESENCE,
  serviceAreas: SERVICE_AREAS,
  metrics: BUSINESS_METRICS,
  services: SERVICES_OFFERED,
  seo: SEO_CONSTANTS,
  pricing: PRICING_INFO
} as const;