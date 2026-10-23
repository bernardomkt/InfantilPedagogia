import React from 'react';
import { Translations } from '../translations';

interface ExtraWorkbookSectionProps {
  t: Translations;
  onOpenModal: () => void;
}

export const ExtraWorkbookSection: React.FC<ExtraWorkbookSectionProps> = ({
  t,
  onOpenModal,
}) => {
  return (
    <section id="mais-atividades" className="bg-amber-50/70 py-12 px-4 border-t border-[#FEEAC2] scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-white text-[#F97316] border border-[#F97316] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
          {t.moreActivities.badge}
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-[#16223F] mb-2">
          {t.moreActivities.title}
        </h2>

        <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-6 leading-relaxed">
          {t.moreActivities.description}
        </p>

        <div>
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#16223F] hover:text-[#2563EB] font-bold text-sm sm:text-base px-6 py-3 rounded-full border-2 border-[#16223F] shadow-sm hover:shadow transition transform hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer"
          >
            <span>📖</span>
            <span>{t.moreActivities.buttonLabel}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
