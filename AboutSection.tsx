import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { Sun, Palette, Sparkles, Coffee, Wifi, Truck, MapPin } from 'lucide-react';
import zoneLoungeImg from '../assets/images/studio_zone_lounge_1785184407422.jpg';
import { motion } from 'motion/react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#B07D62]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#B07D62]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#B07D62]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#8C927D]" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#8C927D]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#8C927D]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B07D62]" />;
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F9F7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[10px] font-bold uppercase tracking-[0.2em] text-[#B07D62]">
              <MapPin className="w-3.5 h-3.5 text-[#B07D62]" />
              <span>Qurtubah, Riyadh — @uncommonspace.sa</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926] leading-tight">
              {UI_TEXT.about.title[lang]}
            </h2>

            <p className="text-base sm:text-lg text-[#2D2926]/80 font-light leading-relaxed">
              {UI_TEXT.about.subtitle[lang]}
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E1D8] text-xs sm:text-sm text-[#2D2926]/90 space-y-3 shadow-xs">
              <p className="font-semibold text-[#2D2926] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B07D62]" />
                {lang === 'en' ? 'Designed for versatility and seamless creative workflow' : 'مرونة فائقة لتسهيل كافة الأعمال الإبداعية والفعاليات'}
              </p>
              <p className="text-xs sm:text-sm font-light leading-relaxed opacity-80">
                {lang === 'en'
                  ? 'Whether hosting a brand campaign, an abaya lookbook shoot, an intimate bridal shower dinner, or a creative workshop, Uncommon Space provides an elevated neutral canvas with natural light and refined architectural sets.'
                  : 'سواء كنت تخطط لحملة أزياء، تصوير عبايات، عشاء خاص لحفل شوير، أو ورشة عمل إبداعية، تمنحك أنكومون سبيس مساحة محايدة وراقية تحفز الإبداع وتمنحك صوراً استثنائية.'}
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E1D8] bg-white shadow-md">
              <img
                src={zoneLoungeImg}
                alt="Uncommon Space Interior Lounge Set Qurtubah Riyadh"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#F9F7F2]/95 backdrop-blur-md border border-[#E5E1D8] text-[#2D2926] shadow-sm">
                <p className="font-serif-heading text-lg font-bold">
                  {lang === 'en' ? 'Uncommon Space Studio' : 'استوديو أنكومون سبيس'}
                </p>
                <p className="text-xs text-[#2D2926]/70 mt-1 font-light">
                  {lang === 'en' ? 'Aesthetic venue space in Qurtubah, Riyadh' : 'مساحة وأستوديو عصري بقرطبة، الرياض'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
