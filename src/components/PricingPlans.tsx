import React from 'react';
import { Translations, HOTMART_CHECKOUT_URL } from '../translations';

interface PricingPlansProps {
  t: Translations;
  isInternalTestMode: boolean;
  onCheckoutClick?: () => void;
  onDisabledCtaClick: () => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({
  t,
  isInternalTestMode,
  onCheckoutClick,
  onDisabledCtaClick,
}) => {
  return (
    <section id="planos" className="bg-[#FFF8EA] py-16 px-4 border-t border-[#FEEAC2] scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#16223F] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            {t.pricing.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-amber-900 bg-amber-100/80 border border-amber-300 rounded-full px-4 py-1.5 inline-block mt-3 font-semibold">
            {t.pricing.statusNotice}
          </p>
        </div>

        {/* Single Transparent & Clear Plan Card */}
        <div className="bg-white rounded-3xl border-3 border-[#2563EB] p-6 sm:p-9 shadow-lg flex flex-col justify-between relative max-w-xl mx-auto">
          <div>
            {/* Top Badge */}
            <div className="text-center mb-4">
              <span className="inline-block bg-[#2563EB] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-4 py-1.5 rounded-full shadow-2xs">
                {t.pricing.planBadge}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-extrabold text-2xl text-[#16223F] text-center mb-2 leading-snug">
              {t.pricing.planTitle}
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed max-w-md mx-auto">
              {t.pricing.planSubtitle}
            </p>

            {/* Price Block */}
            <div className="text-center my-6 py-4 bg-amber-50/60 rounded-2xl border border-amber-200/70">
              <div className="text-xs uppercase tracking-wider font-extrabold text-[#16223F]/70">
                {t.hero.priceType}
              </div>
              <div className="inline-block my-1 text-[#16A34A] font-black text-4xl sm:text-5xl whitespace-nowrap">
                {t.pricing.priceValue}
              </div>
              <div className="text-sm font-bold text-[#16223F]">
                {t.pricing.priceVat}
              </div>
              <div className="text-xs text-gray-500 mt-2 max-w-sm mx-auto px-2">
                {t.pricing.hotmartNote}
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-3.5 mb-8">
              {t.pricing.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm sm:text-base text-[#16223F]"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                  <span className="font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real, Clickable Checkout CTA Link or Safe Disabled State */}
          <div className="space-y-4">
            {isInternalTestMode ? (
              <>
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCheckoutClick}
                  className="w-full block text-center bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-full shadow-[0_4px_0_0_#16A34A] transition-all transform hover:-translate-y-0.5 active:translate-y-0.5 no-underline cursor-pointer"
                >
                  {t.pricing.ctaButton}
                </a>
                <p className="text-center text-[11px] text-gray-500 font-medium">
                  {t.commercialMode.testNotice}
                </p>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onDisabledCtaClick}
                  className="w-full block text-center bg-gray-200 text-gray-500 font-bold text-base uppercase tracking-wide py-4 px-6 rounded-full border border-gray-300 cursor-not-allowed"
                >
                  🔒 {t.commercialMode.disabledCtaText}
                </button>
                <p className="text-center text-[11px] text-gray-500 font-medium">
                  {t.commercialMode.publicDisabledBanner}
                </p>
              </>
            )}

            {/* Payment security notice */}
            <div className="pt-2">
              <img
                src="/images/meios-de-pagamento-cinzas.svg"
                alt={t.pricing.paymentMethodsAlt}
                className="w-full max-w-[280px] sm:max-w-[320px] mx-auto h-auto opacity-75"
                loading="lazy"
              />
            </div>

            <p className="text-center text-xs text-gray-500 font-medium">
              {t.pricing.secureNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
