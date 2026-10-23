import React, { useEffect, useRef } from 'react';
import { Translations, HOTMART_CHECKOUT_URL } from '../translations';

interface TimedComplementaryOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckoutClick?: () => void;
  t: Translations;
}

export const TimedComplementaryOfferModal: React.FC<TimedComplementaryOfferModalProps> = ({
  isOpen,
  onClose,
  onCheckoutClick,
  t,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        if (
          previousActiveElementRef.current &&
          typeof previousActiveElementRef.current.focus === 'function'
        ) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="complementary-offer-title"
    >
      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-white rounded-3xl border-2 border-[#2563EB] max-w-lg w-full p-6 sm:p-8 text-[#16223F] shadow-2xl z-10 focus:outline-none"
      >
        {/* Close Button X */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.timedOffer.closeAria}
          className="absolute top-4 right-4 text-gray-400 hover:text-black w-8 h-8 rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer transition"
        >
          &times;
        </button>

        {/* Badge */}
        <div className="text-center mb-3">
          <span className="inline-block bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB] font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            {t.timedOffer.badge}
          </span>
        </div>

        {/* Title */}
        <h3
          id="complementary-offer-title"
          className="text-center font-black text-xl sm:text-2xl text-[#16223F] mb-1 leading-snug"
        >
          {t.timedOffer.title}
        </h3>

        {/* Price Tag */}
        <div className="text-center my-3 py-2 bg-amber-50/80 rounded-xl border border-amber-200/80">
          <div className="text-2xl sm:text-3xl font-black text-[#16A34A]">
            {t.timedOffer.priceValue}
          </div>
          <div className="text-xs font-bold text-gray-700">
            {t.timedOffer.priceVat}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center mb-4">
          {t.timedOffer.description}
        </p>

        {/* Real 4 Games List */}
        <div className="mb-5 bg-[#FFF8EA] p-4 rounded-xl border border-[#FEEAC2]">
          <div className="text-xs font-bold text-[#16223F] uppercase tracking-wider mb-2 text-center">
            {t.timedOffer.gamesTitle}
          </div>
          <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#16223F]">
            {t.timedOffer.games.map((game, i) => (
              <li key={i} className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#FEEAC2]">
                <span className="shrink-0 w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <span className="font-semibold">{game}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hotmart Clarity Disclosure */}
        <div className="text-[11px] text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-200 mb-5 leading-normal">
          {t.timedOffer.disclaimer}
        </div>

        {/* Actions (no pre-selection) */}
        <div className="flex flex-col gap-2.5">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (onCheckoutClick) onCheckoutClick();
              onClose();
            }}
            className="w-full text-center bg-[#22C55E] hover:bg-[#16a34a] text-white font-extrabold text-base uppercase tracking-wider py-3.5 px-6 rounded-full shadow-[0_3px_0_0_#16A34A] transition-all transform hover:-translate-y-0.5 active:translate-y-0.5 no-underline cursor-pointer"
          >
            {t.timedOffer.ctaButton}
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-center text-xs sm:text-sm text-gray-500 hover:text-gray-800 font-semibold py-2 cursor-pointer transition"
          >
            {t.timedOffer.dismissButton}
          </button>
        </div>
      </div>
    </div>
  );
};
