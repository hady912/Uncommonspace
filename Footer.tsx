import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { Logo } from './Logo';
import { Instagram, MessageCircle, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2926] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo className="h-10" showLocation={false} />
            <p className="text-xs text-stone-300 font-light leading-relaxed max-w-sm">
              {UI_TEXT.tagline[lang]}
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#B07D62]" />
              <span>{UI_TEXT.contact.addressVal[lang]}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-[#B07D62] uppercase tracking-[0.2em]">
              {lang === 'en' ? 'Quick Navigation' : 'روابط السريعة'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {UI_TEXT.nav.pricing[lang]}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {UI_TEXT.nav.about[lang]}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  {UI_TEXT.nav.events[lang]}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {UI_TEXT.nav.contact[lang]}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Socials & WhatsApp */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-bold text-[#B07D62] uppercase tracking-[0.2em]">
              {lang === 'en' ? 'Direct Contact' : 'تواصل معنا مباشرة'}
            </h4>
            
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/966535505230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/uncommonspace.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-stone-200 hover:bg-[#B07D62] hover:text-white transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[11px] text-stone-400 font-mono">
              {lang === 'en' ? 'WhatsApp:' : 'الواتساب:'} +966 53 550 5230
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-light">
          <p>© {new Date().getFullYear()} Uncommon Space (@uncommonspace.sa). Qurtubah, Riyadh, Saudi Arabia. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors uppercase tracking-wider text-[10px] font-semibold"
          >
            <span>{lang === 'en' ? 'Back to Top' : 'العودة للأعلى'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Button (Bottom Right or Bottom Left based on RTL) */}
      <a
        href="https://wa.me/966535505230?text=Hello%20Uncommon%20Space%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 p-4 rounded-full bg-[#B07D62] text-white shadow-xl hover:bg-[#966850] hover:scale-105 transition-all flex items-center justify-center group border border-white/20"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};
