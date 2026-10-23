import React from 'react';
import { Language, Translations, HOTMART_CHECKOUT_URL } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
  isInternalTestMode: boolean;
  onToggleTestMode: () => void;
  onCheckoutClick?: () => void;
  onDisabledCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  t,
  isInternalTestMode,
  onToggleTestMode,
  onCheckoutClick,
  onDisabledCtaClick,
}) => {
  const languages: Array<{ code: Language; label: string; flag: string }> = [
    { code: 'pt-PT', label: 'Português', flag: '🇵🇹' },
    { code: 'es-ES', label: 'Español', flag: '🇪🇸' },
    { code: 'it-IT', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <>
      {/* Top Banner Ribbon */}
      <div className="bg-[#16223F] text-white text-xs sm:text-sm font-bold text-center py-2 px-3 tracking-wide border-b border-black/10 flex flex-wrap items-center justify-center gap-2">
        <span>{t.topBanner}</span>

      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#FFF8EA]/95 backdrop-blur-md border-b border-[#FEEAC2] shadow-2xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 min-h-16 sm:h-20 py-2 sm:py-0 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo Container on the Top-Left - Real PNG logo, preserving aspect ratio & transparency */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 shrink-0 no-underline hover:opacity-95 transition"
            aria-label={t.nav.homeAriaLabel}
          >
            <div className="h-10 sm:h-14 w-auto flex items-center justify-start shrink-0">
              <img
                src="/images/logo-infantil-pedagogia.png"
                alt={t.brand}
                className="h-10 sm:h-14 w-auto object-contain block"
                loading="eager"
              />
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-[#16223F]/85">
            <a
              href="#objetivos"
              className="hover:text-[#16223F] transition no-underline"
            >
              {t.nav.objectives}
            </a>
            <a
              href="#exemplos"
              className="hover:text-[#16223F] transition no-underline"
            >
              {t.nav.examples}
            </a>
            <a
              href="#mais-atividades"
              className="hover:text-[#16223F] transition no-underline"
            >
              {t.nav.moreActivities}
            </a>
            <a
              href="#planos"
              className="hover:text-[#16223F] transition no-underline"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#16223F] transition no-underline"
            >
              {t.nav.faq}
            </a>
          </nav>

          {/* Controls: Language Selector + Direct Checkout Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Native mobile picker: large touch target without crowding the checkout. */}
            <select
              aria-label={t.nav.langAriaLabel}
              value={currentLang}
              onChange={(event) => onLanguageChange(event.target.value as Language)}
              className="sm:hidden h-11 w-[104px] rounded-lg border border-[#E5E9F2] bg-white px-2 text-base font-semibold text-[#16223F]"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.flag} {lang.code.split('-')[0].toUpperCase()}</option>
              ))}
            </select>
            {/* Desktop language buttons */}
            <div className="hidden sm:inline-flex items-center bg-white border border-[#E5E9F2] rounded-lg p-0.5 shadow-2xs text-xs font-semibold">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  aria-label={`${t.nav.langAriaLabel}: ${lang.label}`}
                  className={`min-h-11 min-w-11 px-1.5 sm:px-2 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                    currentLang === lang.code
                      ? 'bg-[#16223F] text-white shadow-2xs'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm leading-none">{lang.flag}</span>
                  <span className="hidden sm:inline text-xs font-bold">
                    {lang.code.split('-')[0].toUpperCase()}
                  </span>
                </button>
              ))}
            </div>

            {/* Direct Checkout Button (Links directly to Hotmart in test mode, or informs disabled in public mode) */}
            {isInternalTestMode ? (
              <a
                aria-label={t.nav.checkoutBtn}
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCheckoutClick}
                className="inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#16a34a] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_2px_0_0_#16A34A] transition-all transform hover:-translate-y-0.5 active:translate-y-0.5 no-underline cursor-pointer whitespace-nowrap"
              >
                <span className="sm:hidden">{currentLang === 'it-IT' ? 'Acquista' : 'Comprar'}</span>
                <span className="hidden sm:inline">{t.nav.checkoutBtn}</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={onDisabledCtaClick}
                className="inline-flex items-center justify-center bg-gray-200 text-gray-500 text-xs sm:text-sm font-bold uppercase tracking-wider px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-gray-300 cursor-not-allowed whitespace-nowrap"
              >
                🔒 {t.commercialMode.disabledCtaText}
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
