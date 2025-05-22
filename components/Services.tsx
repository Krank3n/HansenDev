
import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { ServiceCardProps } from '../types';
import { CodeBracketSquareIcon, CpuChipIcon, LightBulbIcon } from './icons/CustomIcons';

const servicesData: ServiceCardProps[] = [
  {
    icon: <CodeBracketSquareIcon className="h-12 w-12 text-brand-accent mb-4" />,
    title: 'Custom Web Development',
    description: "From sleek marketing sites to complex enterprise platforms, we build responsive, high-performance web applications that engage users and drive results. Specializing in modern frameworks and user-centric design.",
    keywords: ['React', 'Next.js', 'Node.js', 'Python/Django', 'E-commerce', 'Business Portals', 'Cairns Web Design'],
  },
  {
    icon: <CpuChipIcon className="h-12 w-12 text-brand-accent mb-4" />,
    title: 'AI Integration & Automation',
    description: "Unlock the power of Artificial Intelligence. We integrate AI solutions like chatbots, data analysis tools, and machine learning models to automate processes, enhance decision-making, and create smarter customer experiences.",
    keywords: ['Machine Learning', 'NLP', 'Chatbots', 'Data Analytics', 'AI Cairns', 'Process Automation'],
  },
  {
    icon: <LightBulbIcon className="h-12 w-12 text-brand-accent mb-4" />,
    title: 'Strategic Tech Consulting',
    description: "Navigating the digital landscape can be complex. We provide expert advice to help you identify the right technologies and strategies to achieve your business goals, ensuring your IT investments deliver maximum ROI.",
    keywords: ['Digital Transformation', 'Tech Strategy', 'Solution Architecture', 'IT Roadmaps', 'Cairns Tech Consulting'],
  },
];

const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Our Expertise" 
      subtitle="Delivering tailored technology solutions to propel your business forward."
      className="bg-gray-800/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <Card key={service.title}>
            {service.icon}
            <h3 className="text-2xl font-semibold text-dark-text mb-3">{service.title}</h3>
            <p className="text-dark-text-secondary mb-4 text-sm leading-relaxed">{service.description}</p>
            <div className="mt-auto pt-4">
              <p className="text-xs text-gray-500 mb-1">Keywords:</p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span key={keyword} className="bg-gray-700 text-teal-400 px-2 py-1 rounded-full text-xs font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;
