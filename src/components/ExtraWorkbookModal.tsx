import React, { useEffect, useRef } from 'react';
import { Translations } from '../translations';

interface ExtraWorkbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  futureCheckoutUrl?: string | null;
}

export const ExtraWorkbookModal: React.FC<ExtraWorkbookModalProps> = ({
  isOpen,
  onClose,
  t,
  futureCheckoutUrl = null,
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
      aria-labelledby="extra-workbook-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-white rounded-3xl border-2 border-[#F97316] max-w-lg w-full p-6 sm:p-8 text-[#16223F] shadow-2xl z-10 focus:outline-none"
      >
        {/* Close Button X */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.extraWorkbookModal.closeAria}
          className="absolute top-4 right-4 text-gray-400 hover:text-black w-8 h-8 rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer transition"
        >
          &times;
        </button>

        {/* Badge */}
        <div className="text-center mb-3">
          <span className="inline-block bg-orange-100 text-orange-700 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            {t.extraWorkbookModal.badge}
          </span>
        </div>

        {/* Title */}
        <h3
          id="extra-workbook-title"
          className="text-center font-black text-xl sm:text-2xl text-[#16223F] mb-1"
        >
          {t.extraWorkbookModal.title}
        </h3>

        {/* Price Tag */}
        <div className="text-center my-3 py-2 bg-amber-50 rounded-xl border border-amber-200">
          <div className="text-2xl sm:text-3xl font-black text-[#16A34A]">
            {t.extraWorkbookModal.priceValue}
          </div>
          <div className="text-xs font-bold text-gray-700">
            {t.extraWorkbookModal.priceVat}
          </div>
        </div>

        {/* Status notice */}
        <div className="text-xs text-amber-900 bg-amber-100/70 p-3 rounded-xl border border-amber-300/80 mb-4 leading-relaxed text-center font-medium">
          {t.extraWorkbookModal.statusNotice}
        </div>

        {/* The Real 6 Sheets List (Simetria, Labirinto, Sequências numéricas, Forma diferente, Subtração, Cópia de grelha) */}
        <div className="mb-4 bg-[#FFF8EA] p-4 rounded-xl border border-[#FEEAC2]">
          <div className="text-xs font-bold text-[#16223F] uppercase tracking-wider mb-2 text-center">
            {t.extraWorkbookModal.sheetsTitle}
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#16223F]">
            {t.extraWorkbookModal.sheets.map((sheet, i) => (
              <li key={i} className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#FEEAC2]">
                <span className="shrink-0 w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <span className="font-semibold">{sheet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clarity Note */}
        <p className="text-[11px] text-gray-500 leading-normal mb-5 text-center">
          {t.extraWorkbookModal.futureNote}
        </p>

        {/* Action Buttons: Charging is disabled without fake purchase */}
        <div className="flex flex-col gap-2.5">
          {futureCheckoutUrl ? (
            <a
              href={futureCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#22C55E] hover:bg-[#16a34a] text-white font-extrabold text-sm uppercase tracking-wider py-3 px-6 rounded-full shadow-sm transition"
            >
              {t.moreActivities.buttonLabel}
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="w-full text-center bg-gray-200 text-gray-500 font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-6 rounded-full cursor-not-allowed border border-gray-300"
            >
              🔒 {t.extraWorkbookModal.disabledBtn}
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="w-full text-center text-xs sm:text-sm text-gray-500 hover:text-gray-800 font-semibold py-2 cursor-pointer transition"
          >
            {t.extraWorkbookModal.dismissBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
