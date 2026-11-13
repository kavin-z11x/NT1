import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#01040D] border-t border-cyan-500/15 pt-16 pb-24 md:pb-14 text-slate-400 overflow-hidden">
      {/* Background Liquid Ambient Light in Deep Navy & Cyan */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid with AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cyan-500/15" data-aos="fade-up">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full p-0.5 border border-cyan-400/40 shadow-md shrink-0">
                <img
                  src={STUDIO_INFO.logo}
                  alt="Nedunthatchan Architects Crest"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-base font-bold tracking-[0.16em] text-white uppercase block drop-shadow-sm font-serif-title">
                  NEDUNTHATCHAN
                </span>
                <span className="text-[10px] tracking-[0.24em] text-cyan-400 uppercase font-medium">
                  ARCHITECTS · ERODE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-md font-sans">
              Architecture and interior design studio dedicated to transforming spaces into timeless pieces of art, creating innovative, functional, and aesthetic solutions that enhance indoor climatic conditions.
            </p>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono-data uppercase tracking-wider text-cyan-400 block font-semibold">
              Studio Headquarters
            </span>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg neu-inset-navy text-cyan-400 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="leading-relaxed">
                  {STUDIO_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg neu-inset-navy text-cyan-400 shrink-0">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="font-mono-data hover:text-cyan-300 transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg neu-inset-navy text-cyan-400 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <a href={`mailto:${STUDIO_INFO.email}`} className="font-mono-data hover:text-cyan-300 transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top with smooth hover */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-data">
          <div className="text-slate-400">
            © {new Date().getFullYear()} Nedunthatchan Architects. Ar. Karthikraja G (COA: CA/2022/149864).
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-200 transition-all py-2 px-4 rounded-full liquid-glass-dock cursor-pointer active:scale-95 group shadow-sm border border-cyan-400/30"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 transform group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
};
