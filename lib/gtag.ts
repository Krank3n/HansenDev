export const GA_MEASUREMENT_ID = 'G-TPK07P99GQ';

// Core gtag helper
export const event = (action: string, params?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};

// CTA clicks
export const trackCTA = (ctaName: string, location: string) => {
  event('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
};

// Contact form
export const trackFormSubmit = (service?: string, budget?: string) => {
  event('form_submit', {
    form_type: 'contact',
    ...(service && { service_selected: service }),
    ...(budget && { budget_selected: budget }),
  });
};

// Newsletter signup
export const trackNewsletterSignup = () => {
  event('newsletter_signup');
};

// Outbound link clicks
export const trackOutboundLink = (url: string, label: string) => {
  event('outbound_click', {
    link_url: url,
    link_label: label,
  });
};

// Demo page views
export const trackDemoView = (demoName: string) => {
  event('demo_view', { demo_name: demoName });
};

// FAQ interactions
export const trackFAQOpen = (question: string) => {
  event('faq_open', { question });
};

// Video interactions
export const trackVideoPlay = (videoName: string) => {
  event('video_play', { video_name: videoName });
};

// WhatsApp clicks
export const trackWhatsApp = (context: string) => {
  event('whatsapp_click', { context });
};

// Phone call clicks
export const trackPhoneCall = (location: string) => {
  event('phone_call', { call_location: location });
};

// Service/product page views
export const trackProductView = (productName: string) => {
  event('product_view', { product_name: productName });
};
