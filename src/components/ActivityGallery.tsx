import React, { useState, useRef, useEffect } from 'react';
import { ACTIVITY_EXAMPLES } from '../data/mockData';
import { Translations, HOTMART_CHECKOUT_URL, Language } from '../translations';

interface ActivityGalleryProps {
  t: Translations;
  currentLang: Language;
  isInternalTestMode: boolean;
  onCheckoutClick?: () => void;
  onDisabledCtaClick: () => void;
}

export const ActivityGallery: React.FC<ActivityGalleryProps> = ({
  t,
  currentLang,
  isInternalTestMode,
  onCheckoutClick,
  onDisabledCtaClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomSheetIndex, setZoomSheetIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const zoomModalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (zoomSheetIndex !== null) {
      previousActiveElementRef.current =
        document.activeElement as HTMLElement | null;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        if (zoomModalRef.current) {
          zoomModalRef.current.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          setZoomSheetIndex(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        if (
          previousActiveElementRef.current &&
          typeof previousActiveElementRef.current.focus === 'function'
        ) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [zoomSheetIndex]);

  const goToSlide = (index: number) => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.clientWidth;
      trackRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    const next = (activeIndex + 1) % ACTIVITY_EXAMPLES.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev =
      (activeIndex - 1 + ACTIVITY_EXAMPLES.length) % ACTIVITY_EXAMPLES.length;
    goToSlide(prev);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeoutId: number;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const slideWidth = track.clientWidth;
        if (slideWidth > 0) {
          const newIndex = Math.round(track.scrollLeft / slideWidth);
          setActiveIndex(newIndex);
        }
      }, 50);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="exemplos" className="bg-[#FFF8EA] py-14 px-4 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Pill */}
        <div className="mb-3">
          <span className="inline-block bg-[#EAF2FF] text-[#2563EB] border-2 border-[#2563EB] rounded-full px-5 py-1.5 font-extrabold text-xs tracking-wider uppercase">
            {t.gallery.badge}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[#16223F] text-2xl sm:text-3xl font-extrabold mb-2">
          {t.gallery.title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 mb-1 max-w-lg mx-auto">
          {t.gallery.subtitle}
        </p>

        {/* Discreet Language Notice */}
        <p className="text-xs text-gray-500 italic mb-4 max-w-md mx-auto">
          {t.gallery.sampleLangNotice}
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-[#FBBF24] rounded-full mx-auto mb-8"></div>

        {/* Carousel Wrap */}
        <div className="relative max-w-[360px] sm:max-w-[420px] mx-auto">
          {/* Arrow Left */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label={t.gallery.prevAria}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold shadow-md hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Carousel Slide Track */}
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl shadow-lg border border-gray-100 bg-white"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ACTIVITY_EXAMPLES.map((slide, idx) => (
              <div
                key={slide.id}
                className="shrink-0 w-full snap-center rounded-2xl overflow-hidden bg-white flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setZoomSheetIndex(idx)}
                  aria-label={`${t.gallery.openPreview}: ${slide.title[currentLang]}`}
                  className="relative block w-full aspect-[4/5] overflow-hidden text-left group cursor-pointer"
                  style={{ backgroundColor: ['#fff0b3','#d8f2ff','#f5dfff','#d8f7e2','#ffe2cd','#e4e1ff'][idx] }}
                >
                  <div aria-hidden="true" className="absolute inset-y-0 left-0 w-5 z-20 border-r border-black/10" style={{backgroundImage:'repeating-linear-gradient(to bottom, transparent 0px, transparent 18px, #566174 19px, #566174 23px, transparent 24px, transparent 32px)'}} />
                  <div className="absolute top-5 left-9 right-5 z-10 text-center">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-widest text-violet-700">INFANTIL PEDAGOGIA</span>
                    <h3 className="mt-3 text-3xl sm:text-4xl font-black leading-tight text-[#16223F]">{slide.title[currentLang]}</h3>
                    <div aria-hidden="true" className="mt-3 text-3xl font-black text-violet-600">{['A a','1 2 3','● ■ ●','〰 〰','A ↔ a','2 4 1'][idx]}</div>
                  </div>
                  <img src="/images/hero-menino-v2.png" alt="" loading="lazy" className="absolute bottom-0 left-5 w-[calc(100%-1.25rem)] h-[61%] object-cover object-top rounded-t-[38px] transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" />
                  <span className="absolute bottom-4 left-9 right-5 z-10 rounded-full bg-[#16223F]/90 px-4 py-2 text-center text-sm font-bold text-white shadow-lg">🔍 {t.gallery.openPreview}</span>
                </button>
                <div className="p-4 bg-white border-t border-gray-100 text-left">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                      {t.gallery.sheetLabel} {slide.sheetNumber} / 6
                    </span>
                    <span className="text-[11px] text-[#16A34A] font-bold">
                      ✓ PDF
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-[#16223F]">
                    {slide.title[currentLang]}
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {slide.description[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label={t.gallery.nextAria}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold shadow-md hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-0 mt-5 flex-wrap max-w-sm mx-auto">
          {ACTIVITY_EXAMPLES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`${t.gallery.dotAria} ${slide.sheetNumber}`}
              aria-pressed={activeIndex === idx}
              className="h-11 min-w-11 flex items-center justify-center cursor-pointer"
            >
              <span className={`h-2.5 rounded-full transition-all duration-200 ${activeIndex === idx ? 'bg-[#2563EB] w-6' : 'bg-[#D6DEEC] w-2.5'}`} />
            </button>
          ))}
        </div>

        {/* CTA Link or Safe Disabled State */}
        <div className="mt-8 max-w-md mx-auto">
          {isInternalTestMode ? (
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCheckoutClick}
              className="w-full sm:w-auto inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-lg sm:text-xl uppercase tracking-wide px-8 sm:px-12 py-3.5 rounded-full transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0.5 shadow-[0_4px_0_0_#16A34A] no-underline cursor-pointer"
            >
              {t.gallery.ctaButton}
            </a>
          ) : (
            <button
              type="button"
              onClick={onDisabledCtaClick}
              className="w-full sm:w-auto inline-block bg-gray-200 text-gray-500 font-bold text-base uppercase tracking-wide px-8 py-3 rounded-full border border-gray-300 cursor-not-allowed"
            >
              🔒 {t.commercialMode.disabledCtaText}
            </button>
          )}
        </div>
      </div>

      {/* Lightbox for Gallery Sheet Inspection */}
      {zoomSheetIndex !== null && (
        <div
          ref={zoomModalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 focus:outline-none"
          role="dialog"
          aria-modal="true"
          aria-label={ACTIVITY_EXAMPLES[zoomSheetIndex].alt[currentLang]}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setZoomSheetIndex(null);
            }
          }}
        >
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl flex flex-col items-center max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setZoomSheetIndex(null)}
              aria-label={t.gallery.closePreview}
              className="absolute top-4 right-4 text-gray-400 hover:text-black w-8 h-8 rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer transition"
            >
              &times;
            </button>

            <div className="text-center mb-3">
              <span className="text-xs font-black uppercase text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {t.gallery.sheetLabel} {ACTIVITY_EXAMPLES[zoomSheetIndex].sheetNumber} / 6
              </span>
              <h3 className="font-extrabold text-lg text-[#16223F] mt-1">
                {ACTIVITY_EXAMPLES[zoomSheetIndex].title[currentLang]}
              </h3>
              <p className="text-xs text-gray-600">
                {ACTIVITY_EXAMPLES[zoomSheetIndex].description[currentLang]}
              </p>
            </div>

            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-2">
              <img
                src={ACTIVITY_EXAMPLES[zoomSheetIndex].src}
                alt={ACTIVITY_EXAMPLES[zoomSheetIndex].alt[currentLang]}
                className="w-full h-auto object-contain block mx-auto max-h-[60vh]"
              />
            </div>

            <div className="flex items-center justify-between w-full mt-4 gap-2">
              <button
                type="button"
                onClick={() =>
                  setZoomSheetIndex(
                    (zoomSheetIndex - 1 + ACTIVITY_EXAMPLES.length) %
                      ACTIVITY_EXAMPLES.length
                  )
                }
                aria-label={t.gallery.prevAria}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#16223F] transition cursor-pointer"
              >
                ← {t.gallery.prevAria}
              </button>
              <button
                type="button"
                onClick={() => setZoomSheetIndex(null)}
                className="px-5 py-2 rounded-full bg-[#16223F] hover:bg-[#2563EB] text-xs font-bold text-white transition cursor-pointer"
              >
                {t.gallery.closePreview}
              </button>
              <button
                type="button"
                onClick={() =>
                  setZoomSheetIndex(
                    (zoomSheetIndex + 1) % ACTIVITY_EXAMPLES.length
                  )
                }
                aria-label={t.gallery.nextAria}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#16223F] transition cursor-pointer"
              >
                {t.gallery.nextAria} →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
