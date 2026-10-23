import React from 'react';
import { Translations } from '../translations';

interface EuropeanPaymentsProps {
  t: Translations;
}

export const EuropeanPayments: React.FC<EuropeanPaymentsProps> = ({ t }) => {
  return (
    <section
      id="pagamentos"
      className="bg-[#FFFDF7] py-14 sm:py-16 px-4 sm:px-6 border-t border-[#FEEAC2] scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-2xs mb-3">
            🔒 {t.payments.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16223F] tracking-tight">
            {t.payments.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
            {t.payments.subtitle}
          </p>
        </div>

        {/* 3 Payment Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Cards & PayPal */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Badges strip */}
              <div className="flex items-center gap-2 flex-wrap mb-4" aria-hidden="true">
                <span className="inline-flex items-center justify-center font-black text-xs text-[#1A1F71] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                  VISA
                </span>
                <span className="inline-flex items-center justify-center font-black text-xs text-[#EB001B] bg-red-50 border border-red-200 px-2.5 py-1 rounded">
                  Mastercard
                </span>
                <span className="inline-flex items-center justify-center font-black text-xs text-[#003087] bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded">
                  PayPal
                </span>
              </div>
              <h3 className="font-extrabold text-lg text-[#16223F] mb-2">
                {t.payments.cardsAndPaypalTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t.payments.cardsAndPaypalDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
              <span>✓</span>
              <span>{t.payments.instantProcessingNotice}</span>
            </div>
          </div>

          {/* Card 2: Portugal (MB WAY & Multibanco) */}
          <div className="bg-white rounded-2xl border-2 border-emerald-300 p-5 sm:p-6 shadow-xs flex flex-col justify-between relative">
            <span className="absolute -top-3 right-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
              Portugal
            </span>
            <div>
              {/* Badges strip */}
              <div className="flex items-center gap-2 flex-wrap mb-4" aria-hidden="true">
                <span className="inline-flex items-center justify-center font-black text-xs text-[#E31B23] bg-red-50 border border-red-200 px-2.5 py-1 rounded">
                  MB WAY
                </span>
                <span className="inline-flex items-center justify-center font-black text-xs text-[#006699] bg-cyan-50 border border-cyan-200 px-2.5 py-1 rounded">
                  Multibanco
                </span>
              </div>
              <h3 className="font-extrabold text-lg text-[#16223F] mb-2">
                {t.payments.portugalTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                {t.payments.portugalDesc}
              </p>
              {/* Hotmart technical documentation limitation on MB WAY */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-[11px] text-amber-900 leading-snug">
                ⚠️ {t.payments.mbwayNotice}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
              <span>✓</span>
              <span>{t.payments.officialCheckoutNotice}</span>
            </div>
          </div>

          {/* Card 3: Other Local European Methods */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Badges strip */}
              <div className="flex items-center gap-2 flex-wrap mb-4" aria-hidden="true">
                <span className="inline-flex items-center justify-center font-black text-xs text-[#003399] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                  🇪🇺 Europa
                </span>
              </div>
              <h3 className="font-extrabold text-lg text-[#16223F] mb-2">
                {t.payments.localMethodsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t.payments.localMethodsDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-gray-500 text-xs font-medium">
              <span>ℹ️</span>
              <span>{t.payments.countryDependentNotice}</span>
            </div>
          </div>
        </div>

        {/* Clear Conditional Disclosure Callout */}
        <div className="bg-white border-2 border-amber-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5" aria-hidden="true">🛡️</span>
            <div className="text-xs sm:text-sm text-gray-700 space-y-2 leading-relaxed">
              <p className="font-semibold text-[#16223F]">
                {t.payments.conditionalNotice}
              </p>
              <p className="text-gray-500 text-xs">
                {t.payments.hotmartProcessingNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
