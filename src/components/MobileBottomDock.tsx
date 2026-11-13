import React from 'react';
import { Home, Compass, UserCheck, PhoneCall } from 'lucide-react';

interface MobileBottomDockProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'project', label: 'Projects', icon: Compass },
    { id: 'about', label: 'Studio', icon: UserCheck },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-4 inset-x-4 z-40 md:hidden select-none pointer-events-none"
    >
      <div className="max-w-sm mx-auto pointer-events-auto">
        {/* Floating Liquid Glass Dock Frame */}
        <div className="relative p-1.5 rounded-full liquid-glass-dock border border-cyan-400/30 shadow-[0_16px_40px_rgba(1,4,13,0.95)] backdrop-blur-2xl flex items-center justify-around">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`relative flex-1 flex flex-col items-center justify-center py-2 px-3 rounded-full transition-all duration-300 active:scale-90 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-cyan-200'
                }`}
                aria-label={`Navigate to ${tab.label}`}
              >
                {/* Active Floating Glowing Pill Indicator */}
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-blue-600/40 border border-cyan-400/50 shadow-[0_0_16px_rgba(56,189,248,0.5)] -z-10 animate-pulse"
                    aria-hidden="true"
                  />
                )}

                <Icon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isActive ? 'scale-110 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]' : ''
                  }`}
                />
                <span className="text-[10px] tracking-wider mt-0.5 font-mono-data">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
