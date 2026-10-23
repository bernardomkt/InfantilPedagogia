import React, { useState } from 'react';
import { Translations } from '../translations';
import { PolicyModal } from './PolicyModal';

interface FooterProps {
  t: Translations;
  onOpenCookieConsent: () => void;
  onToggleTestMode?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  onOpenCookieConsent,
  onToggleTestMode,
}) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#16223F] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          {/* Logo with preserved proportion & transparency */}
          <div className="h-12 sm:h-14 w-auto flex items-center justify-center">
            <img
              src="/images/logo-infantil-pedagogia.png"
              alt={t.brand}
              className="h-12 sm:h-14 w-auto object-contain brightness-0 invert opacity-95"
              loading="lazy"
            />
          </div>

          {/* Legal Navigation Links & Consent Management */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold tracking-wider">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="text-white/80 hover:text-white uppercase transition cursor-pointer"
            >
              {t.footer.privacyLink}
            </button>
            <span className="text-gray-500">•</span>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="text-white/80 hover:text-white uppercase transition cursor-pointer"
            >
              {t.footer.termsLink}
            </button>
            <span className="text-gray-500">•</span>
            <button
              type="button"
              onClick={onOpenCookieConsent}
              className="text-white/80 hover:text-amber-300 uppercase transition cursor-pointer text-xs"
            >
              {t.footer.cookiePreferencesLink}
            </button>
          </div>

          {/* Copyright text (clickable for developer internal preview toggle without visible UI controls) */}
          <p
            className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl border-t border-white/10 pt-4 mt-2 select-none cursor-default"
            title="Infantil Pedagogia"
          >
            {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal
        type={modalType}
        onClose={() => setModalType(null)}
        t={t}
      />
    </>
  );
};
