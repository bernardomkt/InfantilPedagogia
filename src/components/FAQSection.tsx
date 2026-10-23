import React, { useState } from 'react';
import { Translations } from '../translations';

interface FAQSectionProps {
  t: Translations;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="bg-white py-14 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#16223F] text-2xl sm:text-3xl font-extrabold mb-1">
            {t.faq.title}
          </h2>
          <p className="text-gray-600 text-base">{t.faq.subtitle}</p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#D5D8DC] rounded-xl overflow-hidden bg-white shadow-2xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-base sm:text-lg text-[#16223F] hover:bg-gray-50/70 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <span className="text-[#2563EB] text-2xl font-black shrink-0 leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
