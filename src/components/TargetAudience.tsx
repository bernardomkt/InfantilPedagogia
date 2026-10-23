import React from 'react';
import { Translations } from '../translations';

interface TargetAudienceProps {
  t: Translations;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ t }) => {
  return (
    <section className="bg-[#FFF8EA] py-14 px-4 border-y border-[#FEEAC2]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For You */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#2563EB] shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-[#16223F] text-xl sm:text-2xl font-bold mb-5 leading-snug">
              {t.audience.forYouTitle}
            </h2>
            <ul className="space-y-4">
              {t.audience.forYouItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#16223F]"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Not For You */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-300 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-[#16223F] text-xl sm:text-2xl font-bold mb-5 leading-snug">
              {t.audience.notForYouTitle}
            </h2>
            <ul className="space-y-4">
              {t.audience.notForYouItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#16223F]"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
