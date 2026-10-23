import React from 'react';
import { Translations } from '../translations';

interface KitImportanceProps {
  t: Translations;
}

export const KitImportance: React.FC<KitImportanceProps> = ({ t }) => {
  return (
    <section id="objetivos" className="bg-white py-14 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto bg-white border border-[#E5E9F2] rounded-3xl p-6 sm:p-9 shadow-xs">
        <div className="text-center mb-6">
          <span className="inline-block bg-blue-50 text-[#2563EB] border border-[#2563EB]/30 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            {t.objectives.badge}
          </span>
          <h2 className="text-[#16223F] text-2xl sm:text-3xl font-extrabold mb-3">
            {t.objectives.title}
          </h2>
          <p className="text-[#16223F] text-sm sm:text-base leading-relaxed opacity-90 max-w-2xl mx-auto">
            {t.objectives.intro}
          </p>
          <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200/80 rounded-xl px-4 py-2 mt-3 inline-block font-semibold">
            {t.objectives.sheetsCountNotice}
          </p>
        </div>

        {/* The 6 Real Activity Sheets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          {t.objectives.sheets.map((sheet, idx) => (
            <div
              key={idx}
              className="bg-[#FFF8EA]/60 border border-[#FEEAC2] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-[#2563EB]/40 transition"
            >
              <div>
                <span className="inline-block bg-[#16223F] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider mb-2">
                  {sheet.number}
                </span>
                <h3 className="text-base font-bold text-[#16223F] mb-1 leading-snug">
                  {sheet.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {sheet.description}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#FEEAC2]/80 flex items-center gap-1.5 text-xs text-[#16A34A] font-bold">
                <span>✓</span>
                <span>{t.objectives.sheetIncluded}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
