import React from 'react';
import { Translations, HOTMART_CHECKOUT_URL, Language } from '../translations';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  t: Translations;
  currentLang: Language;
  isInternalTestMode: boolean;
  onCheckoutClick?: () => void;
  onDisabledCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  isInternalTestMode,
  onCheckoutClick,
  onDisabledCtaClick,
}) => {
  return (
    <section className="relative bg-[#FFF8EA] pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden border-b border-[#FEEAC2]">
      {/* Playful background decorative aura */}
      <div
        className="absolute top-10 right-1/4 w-72 h-72 bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Inactive CountdownTimer hook (Configurable when real deadline exists; no fake urgency) */}
        <CountdownTimer t={t} deadlineIso={null} />

        {/* 2-Column Grid on Desktop, Linear conversion flow on Mobile (CTA & Price first, image below) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ========================================================
              LEFT COLUMN (Desktop: col-span-7) / TOP ON MOBILE
              Title, Subtitle, Price (3,99 € + IVA), CTA & Trust Badges
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status / Revision Badge */}
            <div className="mb-3">
              <span className="inline-block bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                📄 {t.hero.statusBadge}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-[#16223F] tracking-tight leading-[1.15] uppercase mb-3">
              {t.hero.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg font-semibold text-[#16223F]/90 mb-5 leading-snug">
              {t.hero.subtitle}
            </p>

            {/* Price Block (3,99 € + IVA) */}
            <div className="bg-white/95 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 shadow-xs mb-4 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span className="text-xs uppercase tracking-wider font-extrabold text-[#16223F]/75">
                  {t.hero.priceType}
                </span>
                <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block w-fit">
                  {t.hero.badgePdf}
                </span>
              </div>
              <div className="flex items-baseline gap-2 my-1">
                <span className="whitespace-nowrap text-[#16A34A] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  {t.hero.priceValue}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#16223F]">
                  {t.hero.priceVat}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1 leading-tight">
                {t.hero.priceNote}
              </p>
            </div>

            {/* Primary CTA (Direct Hotmart in Test Mode / Informative disabled in Public Mode) */}
            <div className="mb-4 max-w-xl">
              {isInternalTestMode ? (
                <>
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onCheckoutClick}
                    className="w-full block text-center bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-base sm:text-lg uppercase tracking-wide px-6 py-4 rounded-full transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0.5 shadow-[0_4px_0_0_#16A34A] no-underline cursor-pointer"
                  >
                    {t.hero.ctaButton}
                  </a>
                  <span className="block text-[11px] text-gray-500 text-center mt-1.5 font-medium">
                    {t.commercialMode.testNotice}
                  </span>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={onDisabledCtaClick}
                    className="w-full block text-center bg-gray-200 text-gray-500 font-bold text-base uppercase tracking-wide px-6 py-3.5 rounded-full border border-gray-300 cursor-not-allowed transition"
                  >
                    🔒 {t.commercialMode.disabledCtaText}
                  </button>
                  <span className="block text-[11px] text-gray-500 text-center mt-1.5 font-medium">
                    {t.commercialMode.publicDisabledBanner}
                  </span>
                </>
              )}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[#16223F] pt-1">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#22C55E] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-bold">{t.hero.badgeSecure}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#22C55E] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-bold">{t.hero.badgePdf}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#22C55E] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-bold">{t.hero.badgeGuarantee}</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN (Desktop: col-span-5) / BELOW CTA ON MOBILE
              Child-Friendly Boy Illustration with Soft Shadows, Subtle
              Playful Accents, Discreet Caption, and Link to Real Samples
             ======================================================== */}
          <div className="lg:col-span-5 w-full">
            <div className="relative max-w-[420px] sm:max-w-[460px] mx-auto">
              {/* Playful Floating Accents (respects prefers-reduced-motion via motion-safe) */}
              <div
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 text-amber-950 font-black rounded-full flex items-center justify-center shadow-md motion-safe:animate-pulse z-10 select-none text-base sm:text-lg border-2 border-white"
                aria-hidden="true"
              >
                ★
              </div>

              <div
                className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 bg-white/95 border-2 border-blue-200 text-[#2563EB] font-black text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 flex items-center gap-1.5 select-none"
                aria-hidden="true"
              >
                <span className="motion-safe:animate-bounce">✏️</span>
                <span>{t.hero.badgeActivitiesPill}</span>
              </div>

              {/* Central Illustration Card */}
              <div className="bg-white/95 border-2 border-amber-200/90 rounded-3xl p-3 sm:p-4 shadow-xl backdrop-blur-xs transition duration-300 motion-safe:hover:scale-[1.01]">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-amber-50/50 to-orange-50/40 border border-amber-100 flex items-center justify-center">
                  <img
                    src="/images/hero-menino-v2.png"
                    alt={t.hero.heroIllustrationAlt}
                    className="w-full h-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] object-contain rounded-xl block mx-auto"
                    fetchPriority="high"
                  />
                </div>

                {/* Discreet Translation Caption (PT/ES/IT) */}
                <p className="text-[11px] sm:text-xs text-center text-gray-500 italic mt-3 font-medium leading-snug">
                  {t.hero.heroIllustrationCaption}
                </p>

                {/* Direct Action Link to the 6 Real Sample Sheets Below */}
                <div className="text-center mt-2.5 pt-2 border-t border-amber-100/80">
                  <a
                    href="#exemplos"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#2563EB] hover:text-[#1d4ed8] bg-blue-50/80 hover:bg-blue-100 border border-blue-200 px-3.5 py-1.5 rounded-full transition cursor-pointer"
                  >
                    <span>🔍</span>
                    <span>{t.hero.viewRealSamplesAction}</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
