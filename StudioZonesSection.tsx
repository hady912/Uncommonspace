import React, { useState } from 'react';
import { Language, StudioZone } from '../types';
import { STUDIO_ZONES } from '../data/translations';
import { Maximize2, Sparkles, Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface StudioZonesSectionProps {
  lang: Language;
}

export const StudioZonesSection: React.FC<StudioZonesSectionProps> = ({ lang }) => {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const activeZone = STUDIO_ZONES[activeZoneIndex];
  const isRtl = lang === 'ar';

  return (
    <section id="zones" className="py-12 sm:py-16 bg-[#2D2926] text-white relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B07D62]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8C927D]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] text-[#B07D62] font-bold uppercase tracking-[0.25em] block mb-2">
            04 / STUDIO SETS
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-light text-white mb-4">
            {lang === 'en' ? 'Aesthetic Sets & Curated Corners' : 'تصميم معماري محايد يخدم مخيلتك'}
          </h2>
          <p className="text-base sm:text-lg text-[#F9F7F2]/80 font-light">
            {lang === 'en'
              ? 'Every corner inside Uncommon Space in Qurtubah is crafted with texture, lighting, and architectural intent.'
              : 'كل زاوية داخل أنكومون سبيس بقرطبة مصممة بعناية فائقة لتكون خلفية طبيعية لصورك وحفلاتك.'}
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {STUDIO_ZONES.map((zone, idx) => (
            <button
              key={zone.id}
              onClick={() => setActiveZoneIndex(idx)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all border ${
                activeZoneIndex === idx
                  ? 'bg-[#B07D62] text-white border-[#B07D62] shadow-sm'
                  : 'bg-white/5 text-stone-300 hover:bg-white/10 border-white/15'
              }`}
            >
              {zone.title[lang]}
            </button>
          ))}
        </div>

        {/* Selected Zone Showcase */}
        <motion.div
          key={activeZone.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-md"
        >
          {/* Image Side */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-black/40">
            <img
              src={activeZone.image}
              alt={activeZone.title[lang]}
              className="w-full h-[380px] sm:h-[480px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Dimensions Badge */}
            <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-stone-200 border border-white/20 flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#B07D62]" />
              <span>{activeZone.dimensions}</span>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div>
              <span className="text-[10px] font-bold text-[#B07D62] uppercase tracking-[0.2em] block mb-1">
                {activeZone.tagline[lang]}
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-4xl font-light text-white leading-tight">
                {activeZone.title[lang]}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              {activeZone.description[lang]}
            </p>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-[10px] font-bold text-stone-300 uppercase tracking-widest mb-4">
                {lang === 'en' ? 'Set Highlights & Furniture:' : 'مميزات وأثاث الزاوية:'}
              </h4>
              <ul className="space-y-3">
                {activeZone.highlights[lang].map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-stone-300">
                    <span className="w-5 h-5 rounded-full bg-[#B07D62]/20 text-[#B07D62] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pagination Controls */}
            <div className="pt-6 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-stone-400 font-mono">
                0{activeZoneIndex + 1} / 0{STUDIO_ZONES.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveZoneIndex((prev) => (prev > 0 ? prev - 1 : STUDIO_ZONES.length - 1))}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous set"
                >
                  {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveZoneIndex((prev) => (prev < STUDIO_ZONES.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next set"
                >
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
