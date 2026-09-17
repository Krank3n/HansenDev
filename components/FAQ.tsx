import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import Section from './common/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQ_DATA } from '../constants/business';
import { trackFAQOpen } from '../lib/gtag';

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div
      className={`glass-card overflow-hidden !rounded-2xl transition-all duration-500 ${
        isOpen ? '!border-brand-accent/30' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-dark-text group-hover:text-white'}`}>
          {question}
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            isOpen ? 'rotate-45 border-brand-accent/50 bg-brand-accent/15 text-brand-soft' : 'border-hairline bg-white/[0.03] text-dark-text-secondary group-hover:border-hairline-strong'
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div style={{ height: isOpen ? height : 0 }} className="overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div ref={contentRef}>
          <div className={`px-6 pb-6 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
            <p className="leading-relaxed text-dark-text-secondary">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const toggle = (index: number) => {
    if (openIndex !== index) trackFAQOpen(FAQ_DATA[index].question);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions, answered."
      subtitle="Quick answers to the things Cairns business owners ask us most."
      align="left"
      aside={
        <a href="#contact-question" className="btn-ghost text-sm">
          Ask something else <ArrowRight className="h-4 w-4" />
        </a>
      }
    >
      <div ref={ref} className={`grid gap-3 lg:grid-cols-2 lg:gap-4 stagger-children ${isVisible ? 'revealed' : ''}`}>
        {FAQ_DATA.map((item, index) => (
          <div key={index} className="self-start">
            <FAQItem
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
