import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS, UI_TEXT } from '../data/translations';
import { MapPin, Clock, Phone, Instagram, MessageCircle, ChevronDown, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LocationAndContactProps {
  lang: Language;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ lang }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Photoshoot / Brand Campaign',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL
    const textEn = `Hello Uncommon Space! New Booking Inquiry from Website:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Preferred Date: ${formData.date}
- Event Category: ${formData.eventType}
- Notes: ${formData.message || 'N/A'}`;

    const textAr = `مرحباً أنكومون سبيس! طلب استفسار حجز جديد من الموقع الإلكتروني:
- الاسم: ${formData.name}
- الجوال: ${formData.phone}
- التاريخ المفضل: ${formData.date}
- نوع الفعالية: ${formData.eventType}
- الملاحظات: ${formData.message || 'لا يوجد'}`;

    const text = lang === 'ar' ? textAr : textEn;
    const waUrl = `https://wa.me/966535505230?text=${encodeURIComponent(text)}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F9F7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] text-[#B07D62] font-bold uppercase tracking-[0.25em] block mb-2">
            07 / LOCATION & CONTACT
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-light text-[#2D2926] mb-4">
            {UI_TEXT.contact.title[lang]}
          </h2>
          <p className="text-base sm:text-lg text-[#2D2926]/75 font-light">
            {UI_TEXT.contact.subtitle[lang]}
          </p>
        </div>

        {/* Top Info Grid: Location Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Details & Map Preview */}
          <div className="lg:col-span-5 space-y-6 text-start">
            
            {/* Info Cards */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E1D8] space-y-6 shadow-xs">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F2] border border-[#E5E1D8] text-[#B07D62] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#2D2926] uppercase tracking-widest">
                    {UI_TEXT.contact.addressLabel[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D2926]/80 mt-1 font-light leading-relaxed">
                    {UI_TEXT.contact.addressVal[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E5E1D8]">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F2] border border-[#E5E1D8] text-[#B07D62] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#2D2926] uppercase tracking-widest">
                    {UI_TEXT.contact.hoursLabel[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D2926]/80 mt-1 font-light">
                    {UI_TEXT.contact.hoursVal[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E5E1D8]">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F2] border border-[#E5E1D8] text-[#B07D62] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#2D2926] uppercase tracking-widest">
                    {UI_TEXT.contact.phoneLabel[lang]}
                  </h4>
                  <a
                    href="https://wa.me/966535505230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#B07D62] font-semibold mt-1 inline-block hover:underline"
                  >
                    {UI_TEXT.contact.phoneVal[lang]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E5E1D8]">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F2] border border-[#E5E1D8] text-[#B07D62] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#2D2926] uppercase tracking-widest">
                    {UI_TEXT.contact.instagramLabel[lang]}
                  </h4>
                  <a
                    href="https://instagram.com/uncommonspace.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#2D2926] font-semibold mt-1 inline-block hover:underline"
                  >
                    {UI_TEXT.contact.instagramVal[lang]}
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map Direction Widget - Expanded */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#2D2926] text-white space-y-5 shadow-xl border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-[#B07D62] font-bold uppercase tracking-widest block">
                    {lang === 'en' ? 'Qurtubah District, Riyadh' : 'حي قرطبة، الرياض'}
                  </span>
                  <h4 className="text-lg font-serif-heading font-semibold text-white mt-1">
                    {lang === 'en' ? 'Interactive Location & Map' : 'خريطة الموقع والملاحة'}
                  </h4>
                </div>
              </div>

              {/* Embedded Google Map Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-stone-800 shadow-inner">
                <iframe
                  title="Uncommon Space Location Qurtubah Riyadh"
                  src="https://maps.google.com/maps?q=Qurtubah%2C%20Riyadh%20Saudi%20Arabia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[240px] sm:h-[280px] border-0 filter contrast-[0.95]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Big Google Maps Button with Logo */}
              <a
                href="https://maps.google.com/?q=Qurtubah+Riyadh+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest bg-white text-[#2D2926] hover:bg-[#F9F7F2] transition-all shadow-md group"
              >
                {/* Official Red/White Google Maps Pin Icon */}
                <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#EA4335" />
                  <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
                </svg>
                <span>{lang === 'en' ? 'Get Directions on Google Maps' : 'الاطلاع على الموقع في خرائط جوجل'}</span>
              </a>
            </div>

          </div>

          {/* Right Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E5E1D8] shadow-xs text-start">
            <h3 className="font-serif-heading text-2xl font-bold text-[#2D2926] mb-2">
              {UI_TEXT.contact.formTitle[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-[#2D2926]/70 font-light mb-8">
              {lang === 'en'
                ? 'Fill out your request details below for instant WhatsApp confirmation.'
                : 'فضلاً عبئ تفاصيل الطلب أدناه لإرسال الاستفسار مباشرة عبر الواتساب.'}
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#F9F7F2] border border-[#E5E1D8] text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif-heading text-xl font-bold text-[#2D2926]">
                  {lang === 'en' ? 'Inquiry Sent via WhatsApp!' : 'تم إرسال الاستفسار بنجاح!'}
                </h4>
                <p className="text-xs sm:text-sm text-[#2D2926]/75 font-light">
                  {lang === 'en'
                    ? 'Thank you for reaching out to Uncommon Space. We will confirm your requested slot shortly!'
                    : 'شكراً لتواصلكم مع أنكومون سبيس. سنتواصل معكم فوراً لتأكيد الموعد والتفاصيل!'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#2D2926] bg-white border border-[#E5E1D8] hover:bg-[#F9F7F2]"
                >
                  {lang === 'en' ? 'Send Another Request' : 'إرسال طلب آخر'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 text-start">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-[#2D2926] uppercase tracking-widest mb-2">
                      {UI_TEXT.contact.formName[lang]} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? 'Full Name' : 'الاسم الثلاثي'}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#F9F7F2] text-xs sm:text-sm text-[#2D2926] focus:outline-none focus:border-[#B07D62]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#2D2926] uppercase tracking-widest mb-2">
                      {UI_TEXT.contact.formPhone[lang]} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="05X XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#F9F7F2] text-xs sm:text-sm text-[#2D2926] focus:outline-none focus:border-[#B07D62]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-[#2D2926] uppercase tracking-widest mb-2">
                      {UI_TEXT.contact.formDate[lang]} *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#F9F7F2] text-xs sm:text-sm text-[#2D2926] focus:outline-none focus:border-[#B07D62]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#2D2926] uppercase tracking-widest mb-2">
                      {UI_TEXT.contact.formEventType[lang]}
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#F9F7F2] text-xs sm:text-sm text-[#2D2926] focus:outline-none focus:border-[#B07D62]"
                    >
                      <option value="Photoshoot / Brand Campaign">
                        {lang === 'en' ? 'Photoshoot / Abaya Campaign' : 'تصوير أزياء / عبايات / منتجات'}
                      </option>
                      <option value="Private Celebration / Birthday">
                        {lang === 'en' ? 'Birthday / Bridal Shower / Gathering' : 'عيد ميلاد / شوير / تجمع خاص'}
                      </option>
                      <option value="Workshop / Masterclass">
                        {lang === 'en' ? 'Workshop / Educational Masterclass' : 'ورشة عمل / دورة تعليمية'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#2D2926] uppercase tracking-widest mb-2">
                    {UI_TEXT.contact.formMessage[lang]}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={lang === 'en' ? 'Any specific decor requests, estimated guest count, or required setups...' : 'تفاصيل إضافية، عدد الحضور التقديري، أو طلبات تجهيز خاصة...'}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#F9F7F2] text-xs sm:text-sm text-[#2D2926] focus:outline-none focus:border-[#B07D62]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#B07D62] hover:bg-[#966850] transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{UI_TEXT.contact.formSubmit[lang]}</span>
                </button>

              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-16 border-t border-[#E5E1D8] max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] text-[#B07D62] font-bold uppercase tracking-[0.25em] block mb-2">
              08 / FAQ
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-light text-[#2D2926]">
              {UI_TEXT.faq.title[lang]}
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden transition-colors text-start"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-start flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif-heading text-base sm:text-lg font-semibold text-[#2D2926]">
                      {faq.question[lang]}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2D2926]/50 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#B07D62]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-[#2D2926]/75 font-light leading-relaxed border-t border-[#E5E1D8] pt-4"
                      >
                        {faq.answer[lang]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
