import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';

interface OpeningIntroProps {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 38);

    // Show the intro for ~2.3 seconds, then start smooth fade out
    const timer = setTimeout(() => {
      setFadingOut(true);
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(finishTimer);
    }, 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 bg-[#01040D] flex flex-col items-center justify-center p-6 cursor-pointer select-none transition-all duration-700 ease-out ${
        fadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Navy Blue Universe: Multi-layered radial lighting & Mesh */}
      <div className="absolute inset-0 bg-navy-grid opacity-25 pointer-events-none" />
      <div className="absolute w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-liquid-mesh" />
      <div
        className="absolute w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[160px] pointer-events-none animate-liquid-mesh"
        style={{ animationDelay: '4s' }}
      />

      {/* Blueprint Coordinates in Neon Azure */}
      <div className="absolute top-8 left-8 text-cyan-400/40 font-mono-data text-xs tracking-widest">
        + 11.3209° N, 77.7073° E
      </div>
      <div className="absolute bottom-8 right-8 text-cyan-400/40 font-mono-data text-xs tracking-widest">
        ERODE · TAMIL NADU +
      </div>

      {/* Center Stage: ONLY IMAGE LOADS with Liquid Glass Sapphire Ring */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-fadeIn">
        
        {/* Breathing Liquid Sapphire Ambient Halo */}
        <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-blue-500/25 blur-3xl pointer-events-none animate-pulse-glow-navy" />

        {/* Luminous Animated Circular Progress Ring Framing the Logo */}
        <div className="relative flex items-center justify-center">
          <svg
            className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] -rotate-90 pointer-events-none"
            viewBox="0 0 140 140"
          >
            {/* Track */}
            <circle
              cx="70"
              cy="70"
              r="64"
              className="stroke-blue-950/60"
              strokeWidth="2.5"
              fill="transparent"
            />
            {/* Molten Liquid Azure to Sapphire Progress Arc */}
            <circle
              cx="70"
              cy="70"
              r="64"
              className="stroke-cyan-400 transition-all duration-100 ease-out"
              strokeWidth="3.5"
              strokeDasharray={402.12}
              strokeDashoffset={402.12 - (progress / 100) * 402.12}
              strokeLinecap="round"
              fill="transparent"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.95))',
              }}
            />
          </svg>

          {/* Pure Centered Studio Crest Image with Refraction Rim */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 border border-cyan-400/40 shadow-[0_0_50px_rgba(37,99,235,0.45),0_20px_50px_rgba(1,4,13,0.95)] transition-transform duration-500 hover:scale-105">
            <img
              src={STUDIO_INFO.logo}
              alt="Nedunthatchan Architects"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Minimalist Studio Subtitle in Crystal White */}
        <div className="mt-8 text-center">
          <h2 className="text-xs font-mono-data uppercase tracking-[0.3em] text-cyan-300/90 font-medium">
            Nedunthatchan Architects
          </h2>
          <p className="text-[10px] font-mono-data text-slate-400 uppercase tracking-widest mt-1">
            Ar. Karthikraja G · Kasipalayam, Erode
          </p>
        </div>

      </div>
    </div>
  );
};
