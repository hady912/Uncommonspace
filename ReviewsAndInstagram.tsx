import React from 'react';
import { Language } from '../types';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface ReviewsAndInstagramProps {
  lang: Language;
}

export const ReviewsAndInstagram: React.FC<ReviewsAndInstagramProps> = ({ lang }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F9F7F2] border-t border-[#E5E1D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Instagram Feed Link & Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2D2926] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
          <div className="space-y-3 text-center md:text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B07D62] border border-white/15">
              <Instagram className="w-3.5 h-3.5 text-[#B07D62]" />
              <span>@uncommonspace.sa</span>
            </div>
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-light text-white">
              {lang === 'en' ? 'Follow Our Visual Journal' : 'تابعوا لحظاتنا الإبداعية على إنستغرام'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
              {lang === 'en'
                ? 'Explore daily behind-the-scenes, recent photoshoot setups, and event inspiration in Qurtubah, Riyadh.'
                : 'استكشف كواليس التصوير اليومية، وتجهيزات المناسبات في حسابنا بقرطبة بالرياض.'}
            </p>
          </div>

          <a
            href="https://instagram.com/uncommonspace.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#B07D62] hover:bg-[#966850] transition-all shadow-md shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>{lang === 'en' ? 'Visit @uncommonspace.sa' : 'زيارة حساب الإنستغرام'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
