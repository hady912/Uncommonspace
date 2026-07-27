import React, { useState } from 'react';
import { Language, EventType } from '../types';
import { EVENT_TYPES, UI_TEXT } from '../data/translations';
import { Users, CheckCircle2, Sparkles, MessageCircle, ArrowRight, ArrowLeft, X, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EventTypesSectionProps {
  lang: Language;
}

export const EventTypesSection: React.FC<EventTypesSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'all' | 'celebrations' | 'brand' | 'workshops'>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const filteredEvents = activeTab === 'all'
    ? EVENT_TYPES
    : EVENT_TYPES.filter(e => e.category === activeTab);

  const tabs = [
    { id: 'all', label: { en: 'All Use Cases', ar: 'جميع الاستخدامات' } },
    { id: 'celebrations', label: { en: 'Private Celebrations', ar: 'الاحتفالات الخاصة' } },
    { id: 'brand', label: { en: 'Brand & Fashion', ar: 'العلامات والأزياء' } },
    { id: 'workshops', label: { en: 'Workshops & Education', ar: 'ورش العمل والدورات' } },
  ];

  const scrollToCalculator = () => {
    setSelectedEvent(null);
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-12 sm:py-16 bg-[#F9F7F2] border-y border-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] text-[#B07D62] font-bold uppercase tracking-[0.25em] block mb-2">
            05 / EVENT TYPES
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-light text-[#2D2926] mb-4">
            {lang === 'en' ? 'Designed for Every Moment' : 'مساحة واحدة لشتى المناسبات الإبداعية'}
          </h2>
          <p className="text-base sm:text-lg text-[#2D2926]/75 font-light">
            {lang === 'en'
              ? 'From intimate birthday dinners and bridal showers to high-fashion abaya lookbooks and creative masterclasses.'
              : 'من حفلات أعياد الميلاد والعشاء الفاخر وإطلاق العبايات إلى جلسات التصوير الاحترافية وورش العمل.'}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                activeTab === tab.id
                  ? 'bg-[#B07D62] text-white shadow-xs'
                  : 'bg-white text-[#2D2926]/80 hover:bg-white border border-[#E5E1D8]'
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E1D8] hover:border-[#B07D62] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-start"
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative h-60 overflow-hidden bg-[#F9F7F2]">
                  <img
                    src={event.image}
                    alt={event.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#2D2926] shadow-xs border border-[#E5E1D8]">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B07D62]" />
                      {event.capacity[lang]}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold leading-snug">
                      {event.title[lang]}
                    </h3>
                  </div>
                </div>

                {/* Event Description & Quick Bullet Points */}
                <div className="p-6 space-y-4">
                  <p className="text-xs font-semibold text-[#B07D62] uppercase tracking-wider">
                    {event.subtitle[lang]}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-[#2D2926]/70 font-light leading-relaxed line-clamp-3">
                    {event.description[lang]}
                  </p>

                  <div className="pt-2 border-t border-[#E5E1D8] space-y-2">
                    <p className="text-[10px] font-bold text-[#2D2926] uppercase tracking-widest">
                      {lang === 'en' ? 'Suitable For:' : 'مناسبة لـ:'}
                    </p>
                    <ul className="space-y-1.5">
                      {event.suitableFor[lang].slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#2D2926]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B07D62] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Trigger Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#2D2926] bg-[#F9F7F2] hover:bg-[#2D2926] hover:text-white border border-[#E5E1D8] transition-all"
                >
                  <span>{lang === 'en' ? 'View Setup & Features' : 'عرض التجهيزات والتفاصيل'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-xl border border-[#E5E1D8] my-8 text-start"
            >
              {/* Modal Banner */}
              <div className="relative h-64 sm:h-72 bg-[#2D2926]">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-widest text-white border border-white/30">
                    {selectedEvent.capacity[lang]}
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold mt-2">
                    {selectedEvent.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 font-light">
                    {selectedEvent.subtitle[lang]}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926] uppercase tracking-widest mb-2">
                    {lang === 'en' ? 'Overview' : 'نبذة عن الجلسة والفعالية'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D2926]/80 font-light leading-relaxed">
                    {selectedEvent.description[lang]}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E1D8]">
                  {/* Recommended For List */}
                  <div>
                    <h4 className="text-xs font-bold text-[#2D2926] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#B07D62]" />
                      {lang === 'en' ? 'Ideal For:' : 'المناسبات الملائمة:'}
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.suitableFor[lang].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#2D2926]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#B07D62] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Equipment & Amenities */}
                  <div>
                    <h4 className="text-xs font-bold text-[#2D2926] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#B07D62]" />
                      {lang === 'en' ? 'Included Amenities:' : 'التجهيزات المشمولة:'}
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.features[lang].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#2D2926]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#B07D62] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-[#F9F7F2] border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={scrollToCalculator}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#2D2926] bg-white border border-[#E5E1D8] hover:bg-[#E5E1D8]/40 transition-colors"
                >
                  {lang === 'en' ? 'Calculate Estimated Cost' : 'احسب التكلفة التقديرية'}
                </button>

                <a
                  href={`https://wa.me/966535505230?text=Hello%20Uncommon%20Space%2C%20I%20am%20interested%20in%20booking%20for%20${encodeURIComponent(selectedEvent.title.en)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#B07D62] hover:bg-[#966850] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Inquire on WhatsApp' : 'استفسر عبر الواتساب'}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
