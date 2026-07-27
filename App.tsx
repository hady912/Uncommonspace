import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './Header';
import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { EventTypesSection } from './EventTypesSection';
import { PricingCalculator } from './PricingCalculator';
import { ReviewsAndInstagram } from './ReviewsAndInstagram';
import { LocationAndContact } from './LocationAndContact';
import { Footer } from './Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  // Sync HTML dir and lang attributes on language change
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D2926] font-sans antialiased overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Header lang={lang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero lang={lang} />

        {/* Packages & Interactive Cost Calculator (Moved up for easy price checking) */}
        <PricingCalculator lang={lang} />

        {/* About Uncommon Space */}
        <AboutSection lang={lang} />

        {/* Event Types & Categories (Celebrations, Fashion, Workshops) */}
        <EventTypesSection lang={lang} />

        {/* Community Reviews & Instagram Showcase */}
        <ReviewsAndInstagram lang={lang} />

        {/* Contact, Booking Form & FAQ */}
        <LocationAndContact lang={lang} />
      </main>

      {/* Footer & Floating WhatsApp Widget */}
      <Footer lang={lang} />
    </div>
  );
}
