import React, { useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KitImportance } from './components/KitImportance';
import { TargetAudience } from './components/TargetAudience';
import { ActivityGallery } from './components/ActivityGallery';
import { ExtraWorkbookSection } from './components/ExtraWorkbookSection';
import { PricingPlans } from './components/PricingPlans';
import { EuropeanPayments } from './components/EuropeanPayments';
import { FAQSection } from './components/FAQSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { TimedComplementaryOfferModal } from './components/TimedComplementaryOfferModal';
import { ExtraWorkbookModal } from './components/ExtraWorkbookModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { useVisibleTimeTracker } from './hooks/useVisibleTimeTracker';
import { loadUTMifyTracker } from './services/tracking';

const PREFERRED_LANG_KEY = 'preferred_lang';
const TEST_MODE_STORAGE_KEY = 'pedagogia_internal_test_mode';

export const App: React.FC = () => {
  // 1. Language state with local storage persistence
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem(PREFERRED_LANG_KEY);
    if (saved === 'pt-PT' || saved === 'es-ES' || saved === 'it-IT') {
      return saved;
    }
    return 'pt-PT';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem(PREFERRED_LANG_KEY, lang);
  };

  // Sync document lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Load UTMify tracker if consent was previously granted
  useEffect(() => {
    loadUTMifyTracker();
  }, []);

  const t = TRANSLATIONS[currentLang];

  // Checkout links are available on the public landing page.
  const isInternalTestMode = true;
  const handleToggleTestMode = () => {};

  // Modal alert when clicking a disabled CTA in public mode
  const [isDisabledAlertOpen, setIsDisabledAlertOpen] = useState(false);

  // 3. Timed Complementary Offer Modal State ("Jogos de Letras e Números" - 1,99 €)
  const [isComplementaryOpen, setIsComplementaryOpen] = useState(false);
  const [isExtraWorkbookOpen, setIsExtraWorkbookOpen] = useState(false);
  const [isCookieBannerForced, setIsCookieBannerForced] = useState(false);
  const [isLeavingForCheckout, setIsLeavingForCheckout] = useState(false);

  // Hook tracks 60 seconds of cumulative VISIBLE page presence for the 1,99 € offer
  useVisibleTimeTracker({
    onTrigger: () => {
      setIsComplementaryOpen(true);
    },
    isBlocked:
      isLeavingForCheckout ||
      isComplementaryOpen ||
      isExtraWorkbookOpen ||
      isDisabledAlertOpen,
  });

  const handleCheckoutClick = () => {
    setIsLeavingForCheckout(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EA] text-[#16223F] font-sans antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* Top Navbar with Real Logo, Top Ribbon, Language Switcher, Safe Mode Toggle, and Direct CTA */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
        isInternalTestMode={isInternalTestMode}
        onToggleTestMode={handleToggleTestMode}
        onCheckoutClick={handleCheckoutClick}
        onDisabledCtaClick={() => setIsDisabledAlertOpen(true)}
      />

      <main>
        {/* Hero Section with 6 Real Sheet Showcase, 3,99 € Price, and Safe Commercial CTA */}
        <Hero
          t={t}
          currentLang={currentLang}
          isInternalTestMode={isInternalTestMode}
          onCheckoutClick={handleCheckoutClick}
          onDisabledCtaClick={() => setIsDisabledAlertOpen(true)}
        />

        {/* Kit Objectives & Educational Goals */}
        <KitImportance t={t} />

        {/* Audience Fit Analysis */}
        <TargetAudience t={t} />

        {/* Activity Examples Carousel (6 real sheets) */}
        <ActivityGallery
          t={t}
          currentLang={currentLang}
          isInternalTestMode={isInternalTestMode}
          onCheckoutClick={handleCheckoutClick}
          onDisabledCtaClick={() => setIsDisabledAlertOpen(true)}
        />

        {/* Discrete "Mais atividades" section with button to discover the Extra Workbook */}
        <ExtraWorkbookSection
          t={t}
          onOpenModal={() => setIsExtraWorkbookOpen(true)}
        />

        {/* Transparent Pricing Card with Direct Real Hotmart Link */}
        <PricingPlans
          t={t}
          isInternalTestMode={isInternalTestMode}
          onCheckoutClick={handleCheckoutClick}
          onDisabledCtaClick={() => setIsDisabledAlertOpen(true)}
        />

        {/* European Payment Methods Section with Conditional Hotmart Disclosures */}
        <EuropeanPayments t={t} />

        {/* FAQ Section */}
        <FAQSection t={t} />

        {/* 7-Day Guarantee */}
        <GuaranteeSection t={t} />
      </main>

      {/* Footer & Legal/Cookie Modals */}
      <Footer
        t={t}
        onOpenCookieConsent={() => setIsCookieBannerForced(true)}
        onToggleTestMode={handleToggleTestMode}
      />

      {/* Timed Pre-Purchase Complementary Offer Pop-up (1,99 € · 60s visible presence) */}
      <TimedComplementaryOfferModal
        isOpen={isComplementaryOpen}
        onClose={() => setIsComplementaryOpen(false)}
        onCheckoutClick={handleCheckoutClick}
        t={t}
      />

      {/* Informative Modal for Caderno Extra de Atividades (7,99 € · Cobrança Desativada) */}
      <ExtraWorkbookModal
        isOpen={isExtraWorkbookOpen}
        onClose={() => setIsExtraWorkbookOpen(false)}
        t={t}
      />

      {/* Public Sales Deactivated Modal Alert */}
      {isDisabledAlertOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disabled-sales-title"
        >
          <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-[#16223F] shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-2xl font-bold mb-3">
              🔒
            </div>
            <h3 id="disabled-sales-title" className="text-xl font-black mb-2">
              {t.commercialMode.disabledModalTitle}
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {t.commercialMode.disabledModalText}
            </p>
            <button
              type="button"
              onClick={() => setIsDisabledAlertOpen(false)}
              className="bg-[#16223F] hover:bg-[#2563EB] text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer"
            >
              {t.commercialMode.disabledModalClose}
            </button>
          </div>
        </div>
      )}

      {/* GDPR / ePrivacy Cookie Consent Banner with Equal Accept/Reject Options */}
      <CookieConsentBanner
        t={t}
        forceOpen={isCookieBannerForced}
        onCloseForceOpen={() => setIsCookieBannerForced(false)}
      />
    </div>
  );
};

export default App;
