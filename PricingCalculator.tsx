import React from 'react';
import { Language } from '../types';
import { PRICING_PACKAGES, UI_TEXT } from '../data/translations';
import { Check, MessageCircle, ShieldCheck } from 'lucide-react';

interface PricingCalculatorProps {
  lang: Language;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ lang }) => {
  return (
    <section id="pricing" className="py-12 sm:py-16 bg-[#F9F7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] text-[#B07D62] font-bold uppercase tracking-[0.25em] block mb-2">
            02 / PRICING & PACKAGES
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-light text-[#2D2926] mb-3">
            {UI_TEXT.pricing.title[lang]}
          </h2>
          <p className="text-base sm:text-lg text-[#2D2926]/75 font-light mb-6">
            {UI_TEXT.pricing.subtitle[lang]}
          </p>

          {/* Deposit Notice Banner */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#B07D62]/10 border border-[#B07D62]/30 text-start sm:text-center max-w-2xl mx-auto shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#B07D62] shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[#2D2926]">
              {UI_TEXT.pricing.depositNotice[lang]}
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between text-start ${
                pkg.isPopular
                  ? 'border-[#B07D62] ring-1 ring-[#B07D62]/40 shadow-md z-10'
                  : 'border-[#E5E1D8] shadow-xs hover:border-[#B07D62]'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B07D62] text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
                  {pkg.badge[lang]}
                </div>
              )}

              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#2D2926] mb-2">
                  {pkg.name[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D2926]/70 font-light mb-6 min-h-[40px]">
                  {pkg.description[lang]}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-xl bg-[#F9F7F2] border border-[#E5E1D8] text-center">
                  <span className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#2D2926]">
                    {pkg.priceSAR.toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-[#B07D62] ml-1.5 rtl:mr-1.5">
                    {lang === 'en' ? 'SAR' : 'ريال'}
                  </span>
                  <p className="text-xs text-[#2D2926]/60 mt-1 font-light">
                    {pkg.unit[lang]}
                  </p>
                </div>

                {/* Includes List */}
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-[#2D2926] uppercase tracking-widest">
                    {lang === 'en' ? 'Package Includes:' : 'تتضمن الباقة:'}
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.includes[lang].map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D2926]/80">
                        <span className="w-4 h-4 rounded-full bg-[#B07D62]/15 text-[#B07D62] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Booking Link */}
              <a
                href={`https://wa.me/966535505230?text=Hello%20Uncommon%20Space%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.name.en)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                  pkg.isPopular
                    ? 'bg-[#B07D62] text-white hover:bg-[#966850] shadow-xs'
                    : 'bg-[#F9F7F2] text-[#2D2926] hover:bg-[#2D2926] hover:text-white border border-[#E5E1D8]'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{UI_TEXT.pricing.cta[lang]}</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

