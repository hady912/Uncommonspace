import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { Logo } from './Logo';
import { MessageCircle, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import heroImg from '../assets/images/hero_uncommon_space_1785184394514.jpg';
import { motion } from 'motion/react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#2D2926]">
      {/* Background Hero Image with Rich Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Uncommon Space Creative Studio & Event Venue Riyadh"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/70 to-[#2D2926]/40" />
        <div className="absolute inset-0 bg-[#2D2926]/30" />
      </div>

      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#E5E1D812_1px,transparent_1px),linear-gradient(to_bottom,#E5E1D812_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
        
        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B07D62]/20 border border-[#B07D62]/40 backdrop-blur-md text-[10px] sm:text-xs font-bold text-[#B07D62] uppercase tracking-[0.25em] mb-4 shadow-sm"
        >
          <Logo iconOnly className="h-4 w-4" />
          <span>{UI_TEXT.hero.badge[lang]}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-4"
        >
          <span className="block font-light text-[#F9F7F2]">{UI_TEXT.hero.titleLine1[lang]}</span>
          <span className="block italic text-[#B07D62] font-normal">
            {UI_TEXT.hero.titleLine2[lang]}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-[#F9F7F2]/80 font-light leading-relaxed mb-8"
        >
          {UI_TEXT.hero.subheadline[lang]}
        </motion.p>

        {/* Action Buttons Stack */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3.5 mb-12 max-w-md mx-auto"
        >
          {/* Main Book Button */}
          <a
            href="https://wa.me/966535505230?text=Hello%20Uncommon%20Space%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#B07D62] hover:bg-[#966850] transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300/20" />
            <span>{UI_TEXT.nav.whatsAppBtn[lang]}</span>
          </a>

          {/* Pricing Button directly under the Book Button */}
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#2D2926] bg-[#F9F7F2] hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-md border border-[#E5E1D8]"
          >
            <Tag className="w-4 h-4 text-[#B07D62]" />
            <span>
              {lang === 'en' ? 'View Pricing (From 150 SAR / Hour)' : 'عرض الأسعار (يبدأ من 150 ريال / ساعة)'}
            </span>
          </button>

          {/* Secondary Explore Button */}
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-stone-300 hover:text-white transition-all opacity-80 hover:opacity-100"
          >
            <span>{UI_TEXT.hero.exploreBtn[lang]}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </motion.div>

        {/* Key Feature Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-[#E5E1D8]/20 text-start"
        >
          {UI_TEXT.hero.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F9F7F2]/5 border border-[#E5E1D8]/15 backdrop-blur-xs">
              <p className="text-xl sm:text-2xl font-serif-heading font-bold text-[#B07D62] mb-0.5">
                {stat.number}
              </p>
              <p className="text-[11px] text-[#F9F7F2]/70 font-light">
                {stat.label[lang]}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
