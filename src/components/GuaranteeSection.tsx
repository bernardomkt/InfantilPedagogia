import React from 'react';
import { Translations } from '../translations';

interface GuaranteeSectionProps {
  t: Translations;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ t }) => {
  return (
    <section id="garantia" className="bg-white pb-14 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto border border-[#E5E9F2] rounded-3xl bg-white p-6 sm:p-9 text-center text-[#16223F] shadow-2xs">
        <div className="flex flex-col items-center gap-3">
          <img
            src="/images/garantia7.png"
            alt={t.guarantee.badgeAlt}
            className="w-24 sm:w-28 h-auto object-contain drop-shadow-xs"
            loading="lazy"
          />
          <h3 className="text-xl sm:text-2xl font-black text-[#16A34A] mt-1 mb-1">
            {t.guarantee.title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 max-w-xl">
            {t.guarantee.p1}
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-500 max-w-xl">
            {t.guarantee.p2}
          </p>
        </div>
      </div>
    </section>
  );
};
