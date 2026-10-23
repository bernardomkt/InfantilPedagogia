import React, { useState, useEffect } from 'react';
import { getConsentStatus, setConsentStatus, ConsentStatus } from '../services/tracking';
import { Translations } from '../translations';

interface CookieConsentBannerProps {
  t: Translations;
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  t,
  forceOpen = false,
  onCloseForceOpen,
}) => {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = getConsentStatus();
    setConsent(current);
    if (current === 'pending' || forceOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [forceOpen]);

  const handleAccept = () => {
    setConsentStatus('granted');
    setConsent('granted');
    setIsVisible(false);
    if (onCloseForceOpen) onCloseForceOpen();
  };

  const handleReject = () => {
    setConsentStatus('denied');
    setConsent('denied');
    setIsVisible(false);
    if (onCloseForceOpen) onCloseForceOpen();
  };

  if (!isVisible && !forceOpen) return null;

  return (
    <div
      role="region"
      aria-label={t.consent.regionAria}
      className="cookie-consent-panel fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-white border-t border-gray-200 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed text-center md:text-left flex-1">
          <p className="font-bold text-[#16223F] mb-1">
            {t.consent.title}
          </p>
          <p className="text-gray-600">
            {t.consent.description}
          </p>
        </div>

        {/* Botoes com acessibilidade e destaque visual equilibrados */}
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center">
          <button
            type="button"
            onClick={handleReject}
            className="flex-1 md:flex-none px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg cursor-pointer transition text-center focus:ring-2 focus:ring-gray-400 focus:outline-none"
          >
            {t.consent.rejectBtn}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#16223F] hover:bg-[#2563EB] rounded-lg shadow-sm cursor-pointer transition text-center focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
          >
            {t.consent.acceptBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
