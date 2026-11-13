import React from 'react';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/919500975083?text=${encodeURIComponent(
    'Hello Ar. Karthikraja G, I would like to consult about an architectural project with Nedunthatchan Architects.'
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 group select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ar. Karthikraja on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 md:w-16 md:h-16 rounded-full liquid-emerald-btn text-white shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#01040D]"
      >
        {/* Breathing ambient beacon ring */}
        <span
          className="absolute -inset-1 rounded-full bg-emerald-400/35 animate-ping opacity-60 pointer-events-none"
          aria-hidden="true"
        />

        {/* Online status indicator dot on top-right */}
        <span
          className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center"
          title="Architect Online"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-slate-950" />
        </span>

        {/* Official WhatsApp Icon Vector */}
        <svg
          viewBox="0 0 448 512"
          className="w-6 h-6 md:w-8 md:h-8 fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:rotate-6"
          aria-hidden="true"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>

        {/* Hover Glass Pill Tooltip on Desktop */}
        <div
          role="tooltip"
          className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl liquid-glass-dock border border-cyan-400/30 shadow-[0_8px_30px_rgba(1,4,13,0.9)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-slate-100 tracking-wide">
              Chat on WhatsApp
            </span>
            <span className="text-[10px] font-mono-data text-cyan-300 uppercase tracking-wider">
              Ar. Karthikraja G · Direct Consultation
            </span>
          </div>
          {/* Subtle triangle point */}
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-[#020817]" />
        </div>
      </a>
    </aside>
  );
};
