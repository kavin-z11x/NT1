import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import {
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Clock,
  Sparkles,
  Star,
  ShieldCheck,
  Navigation,
} from 'lucide-react';

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 shrink-0' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.42 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.58 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STUDIO_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#01040D] overflow-hidden border-t border-cyan-500/15">
      {/* Background Navy Blue Universe: Multi-layered radial lighting */}
      <div className="absolute inset-0 bg-navy-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-blue-700/10 rounded-full blur-[150px] pointer-events-none animate-liquid-mesh" />
      <div
        className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-liquid-mesh"
        style={{ animationDelay: '5s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Pure Architectural Authority */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-panel text-cyan-300 text-xs font-mono-data tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(56,189,248,0.25)] border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Direct Architectural Consultations
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-medium text-white tracking-tight drop-shadow-sm">
            Contact & Studio Suite
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed mt-3 font-sans">
            Schedule an architectural consultation with Ar. Karthikraja G. We welcome bespoke residential commissions, commercial landmarks, and site feasibility visits across Tamil Nadu.
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
        </div>

        {/* 2-Column Professional Architecture Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Studio Details, Principal Architect & Communication (5 cols) */}
          <div 
            className="lg:col-span-5 liquid-glass-panel liquid-sheen-navy rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl border border-cyan-400/25"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="space-y-5">
              
              {/* Studio Crest & Principal Architect Credential */}
              <div className="flex items-center justify-between gap-3 pb-5 border-b border-cyan-500/20">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full p-0.5 border border-cyan-400/40 overflow-hidden shadow-md shrink-0">
                    <img
                      src={STUDIO_INFO.logo}
                      alt="Nedunthatchan Architects Crest"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase drop-shadow-sm font-serif-title">
                      {STUDIO_INFO.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono-data font-medium">
                      {STUDIO_INFO.principalArchitect}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-data bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 font-semibold shrink-0">
                  COA REG.
                </span>
              </div>

              {/* Physical Studio Address with One-Click Actions */}
              <div className="p-4 rounded-2xl neu-inset-navy space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl neu-inset-navy text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono-data tracking-wider text-cyan-400 font-semibold block">
                      Kasipalayam Studio Headquarters
                    </span>
                    <div className="text-sm font-medium text-slate-100 leading-relaxed font-sans">
                      <div>193A, Near Lakshmi Nei Store,</div>
                      <div>Valayakara Street, Kasipalayam,</div>
                      <div>Erode – 638009, Tamil Nadu</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-cyan-500/10">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-200 py-1.5 px-3.5 rounded-full liquid-glass-dock cursor-pointer active:scale-95 transition-all"
                    title="Copy full studio address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyan-300" />
                        <span className="text-cyan-300 font-medium">Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={STUDIO_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono-data ml-auto py-1"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Communication Channels: Phone & Email */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl liquid-glass-panel hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl neu-inset-navy text-cyan-400">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono-data uppercase block">Direct Consultation Line</span>
                      <span className="text-sm font-bold text-white font-mono-data group-hover:text-cyan-300 transition-colors">
                        {STUDIO_INFO.phone}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl liquid-glass-panel hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl neu-inset-navy text-cyan-400">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono-data uppercase block">Architectural Inquiries</span>
                      <span className="text-sm font-bold text-white font-mono-data group-hover:text-cyan-300 transition-colors">
                        {STUDIO_INFO.email}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>

              {/* Studio Hours Banner */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset-navy text-xs text-slate-300 font-mono-data">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex items-center justify-between w-full flex-wrap gap-1">
                  <span>Mon – Sat: 9:30 AM – 7:30 PM IST</span>
                  <span className="text-cyan-400 font-semibold text-[11px]">By Appointment</span>
                </div>
              </div>

              {/* Google Verified Review Strip */}
              <div className="p-3.5 rounded-2xl liquid-glass-panel flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                    <GoogleIcon className="w-full h-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono-data">5.0 / 5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-cyan-300 font-mono-data flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Business Rating on Google
                    </span>
                  </div>
                </div>

                <a
                  href={STUDIO_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1 rounded-full neu-inset-navy text-[10px] text-white font-mono-data uppercase hover:text-cyan-300 transition-colors shrink-0"
                >
                  Reviews ↗
                </a>
              </div>
            </div>

            {/* Bottom Actions: WhatsApp Direct & Direct Call */}
            <div className="pt-4 border-t border-cyan-500/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/919500975083?text=${encodeURIComponent('Hello Ar. Karthikraja G, I would like to consult about an architectural project with Nedunthatchan Architects.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl liquid-emerald-btn text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl liquid-sapphire-btn text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
              >
                <Phone className="w-4 h-4 text-cyan-200" />
                <span>Call Studio</span>
              </a>
            </div>

          </div>

          {/* Column 2: Architectural Map Frame (7 cols) */}
          <div 
            className="lg:col-span-7 liquid-glass-panel liquid-sheen-navy rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl p-2 border border-cyan-400/25"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Map Top Bar: Studio Coordinates & Location Status */}
            <div className="px-4 py-3 rounded-t-2xl bg-[#020817]/90 backdrop-blur-md border-b border-cyan-500/20 flex items-center justify-between flex-wrap gap-2 text-xs font-mono-data">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
                </span>
                <span className="font-semibold text-white drop-shadow-sm">Kasipalayam Studio Location · Erode</span>
              </div>

              <span className="text-[11px] text-cyan-300 font-mono-data bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                {STUDIO_INFO.coordinates}
              </span>
            </div>

            {/* Google Maps Embed */}
            <div className="relative w-full flex-1 min-h-[420px] sm:min-h-[500px] rounded-b-2xl overflow-hidden bg-[#01040D]">
              <iframe
                title="Nedunthatchan Architects Local Studio Location in Erode"
                src={STUDIO_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px] sm:min-h-[500px]"
              />

              {/* Floating Google Maps Action Pill */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={STUDIO_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-dock text-xs font-mono-data text-white hover:text-cyan-300 transition-all shadow-2xl cursor-pointer active:scale-95 border border-cyan-400/40"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
