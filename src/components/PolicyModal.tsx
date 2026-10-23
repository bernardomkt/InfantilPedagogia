import React, { useEffect, useRef } from 'react';
import { Translations } from '../translations';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  t: Translations;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  type,
  onClose,
  t,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (type) {
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
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy
    ? t.policies.privacyTitle
    : t.policies.termsTitle;
  const content = isPrivacy
    ? t.policies.privacyContent
    : t.policies.termsContent;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-[#16223F] shadow-2xl max-h-[85vh] overflow-y-auto focus:outline-none"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label={t.policies.closeBtn}
          className="absolute top-4 right-4 text-gray-400 hover:text-black font-bold text-2xl w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition"
        >
          &times;
        </button>

        <h3 id="policy-modal-title" className="text-xl font-bold mb-4 text-[#16223F]">
          {title}
        </h3>

        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            type="button"
            className="bg-[#16223F] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#2563EB] transition cursor-pointer"
          >
            {t.policies.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
