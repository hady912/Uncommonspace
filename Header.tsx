import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { Logo } from './Logo';
import { Globe, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'pricing', label: UI_TEXT.nav.pricing[lang] },
    { id: 'about', label: UI_TEXT.nav.about[lang] },
    { id: 'events', label: UI_TEXT.nav.events[lang] },
    { id: 'contact', label: UI_TEXT.nav.contact[lang] },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E5E1D8] py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center focus:outline-none"
            aria-label="Uncommon Space Home"
          >
            <Logo
              className="h-8 sm:h-9"
              isScrolled={isScrolled}
              showLocation={true}
              locationText={UI_TEXT.locationShort[lang]}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[11px] uppercase tracking-[0.1em] font-semibold transition-all ${
                  isScrolled
                    ? 'text-[#2D2926] opacity-70 hover:opacity-100'
                    : 'text-stone-200 opacity-80 hover:opacity-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls: Lang Switcher + WhatsApp CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Language Switcher Pill */}
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'ar' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all border ${
                isScrolled
                  ? 'border-[#E5E1D8] text-[#2D2926] bg-[#F9F7F2] hover:bg-white'
                  : 'bg-white/15 border-white/30 text-white backdrop-blur-xs hover:bg-white/25'
              }`}
              title={lang === 'en' ? 'التحويل للعربية' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/966535505230?text=Hello%20Uncommon%20Space%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#B07D62] hover:bg-[#966850] transition-all shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{UI_TEXT.nav.whatsAppBtn[lang]}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md lg:hidden transition-colors ${
                isScrolled ? 'text-[#2D2926] hover:bg-[#E5E1D8]/40' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F9F7F2] border-b border-[#E5E1D8] shadow-lg overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-start px-4 py-3 rounded-lg text-xs uppercase tracking-widest font-semibold text-[#2D2926] hover:bg-[#E5E1D8]/50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-[#E5E1D8]">
                <a
                  href="https://wa.me/966535505230?text=Hello%20Uncommon%20Space%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#B07D62] hover:bg-[#966850] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{UI_TEXT.nav.whatsAppBtn[lang]}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
