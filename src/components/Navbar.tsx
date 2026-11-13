import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Menu, X, MessageSquare, Compass, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Project', id: 'project' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        {/* Neon Azure to Electric Blue Scroll Progress Laser */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 transition-all duration-150 z-50 shadow-[0_0_14px_rgba(56,189,248,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full transition-all duration-500 ${
              scrolled
                ? 'liquid-glass-dock liquid-sheen-navy shadow-[0_20px_50px_rgba(1,4,13,0.9)] border-cyan-400/25'
                : 'bg-[#020817]/65 backdrop-blur-xl border border-cyan-500/20 shadow-[0_10px_30px_rgba(1,4,13,0.6)]'
            }`}
          >
            {/* Brand Left: Logo + Title with Sapphire Refraction Frame */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="flex items-center gap-3 group whitespace-nowrap shrink-0 transition-transform duration-300 active:scale-95"
              aria-label="Nedunthatchan Architects"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden p-0.5 border border-cyan-400/40 group-hover:border-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0">
                <img
                  src={STUDIO_INFO.logo}
                  alt="Nedunthatchan Architects Logo"
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold tracking-[0.16em] text-white uppercase group-hover:text-cyan-200 transition-colors drop-shadow-sm">
                    NEDUNTHATCHAN
                  </span>
                  <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono-data bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    COA REG.
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-cyan-400/90 uppercase font-medium">
                  ARCHITECTS · ERODE
                </span>
              </div>
            </a>

            {/* Right Side Navigation Menu: Sculpted Liquid Glass Pills */}
            <div className="hidden md:flex items-center gap-5 text-xs sm:text-sm tracking-widest uppercase font-medium">
              <nav className="flex items-center gap-1.5 p-1 rounded-full neu-inset-navy">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`relative px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/60 via-cyan-500/40 to-blue-600/60 text-white font-bold border border-cyan-400/60 shadow-[0_0_20px_rgba(56,189,248,0.45),inset_0_1px_1px_rgba(255,255,255,0.6)]'
                          : 'text-slate-300 hover:text-cyan-200 hover:bg-white/5'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Direct Quick WhatsApp Consultation: Luminous Liquid Emerald Capsule */}
              <a
                href={`https://wa.me/919500975083?text=${encodeURIComponent(
                  'Hello Ar. Karthikraja G, I would like to schedule an architectural consultation with Nedunthatchan Architects.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-emerald-btn text-white font-bold text-xs font-mono-data tracking-wider uppercase active:scale-95 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button: Liquid Glass Pill */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="p-2 text-cyan-300 hover:text-white rounded-xl neu-inset-navy focus:outline-none transition-colors cursor-pointer"
                aria-label="Call Studio Directly"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-cyan-300 rounded-xl neu-inset-navy focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer: Deep Navy Liquid Glass Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-7xl mx-auto px-3 mt-2">
            <div className="liquid-glass-dock rounded-2xl p-4 space-y-3 shadow-2xl border border-cyan-400/30 animate-fadeIn">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`text-left px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 text-white border border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                          : 'text-slate-300 hover:text-cyan-200 hover:bg-white/5 neu-inset-navy'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 text-center text-[10px] font-mono-data text-cyan-300/80 border-t border-cyan-500/20">
                Ar. Karthikraja G · +91 9500975083 · Kasipalayam, Erode
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
