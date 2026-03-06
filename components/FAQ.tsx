import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQ_DATA } from '../constants/business';

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen
          ? 'bg-white/[0.04] shadow-lg shadow-brand-accent/5'
          : 'bg-white/[0.02] hover:bg-white/[0.03]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-2xl transition-colors duration-300 group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-medium pr-4 transition-colors duration-300 ${
            isOpen ? 'gradient-text' : 'text-dark-text group-hover:text-dark-text'
          }`}
        >
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? 'bg-gradient-to-br from-brand-accent/20 to-brand-primary/10 rotate-180' : 'bg-white/[0.04] group-hover:bg-white/[0.08]'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-colors duration-300 ${
              isOpen ? 'text-brand-accent' : 'text-gray-500 group-hover:text-gray-400'
            }`}
          />
        </div>
      </button>
      <div
        style={{ height: isOpen ? height : 0 }}
        className="transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden"
      >
        <div ref={contentRef}>
          <div
            className={`px-6 pb-6 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="gradient-line mb-4" />
            <p className="text-dark-text-secondary leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Quick answers to common questions about our services."
    >
      <div
        ref={ref}
        className={`max-w-3xl mx-auto space-y-3 stagger-children ${isVisible ? 'revealed' : ''}`}
      >
        {FAQ_DATA.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
