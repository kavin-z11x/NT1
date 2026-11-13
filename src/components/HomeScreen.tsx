import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { TrueImageViewer, TrueImageItem } from './TrueImageViewer';
import { Move, Eye } from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTrueViewerOpen, setIsTrueViewerOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // Range: -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // Range: -1 to 1
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setOffset({ x: 0, y: 0 });
  };

  const trueHouseImage: TrueImageItem = {
    src: STUDIO_INFO.mainHousePhoto,
    title: 'Residence 12/02 · Approved Architectural Elevation',
    subtitle: 'High-Resolution 3D Render & Materiality Analysis',
    category: 'Flagship Bespoke Residence',
  };

  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#01040D] overflow-hidden"
    >
      {/* Navy Blue Universe: Multi-Layer Atmospheric Mesh & Radial Lighting */}
      <div className="absolute inset-0 bg-navy-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/6 w-[550px] h-[550px] bg-blue-600/12 rounded-full blur-[150px] pointer-events-none animate-liquid-mesh" />
      <div
        className="absolute top-1/2 right-1/6 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none animate-liquid-mesh"
        style={{ animationDelay: '5s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-blue-800/15 rounded-full blur-[140px] pointer-events-none animate-liquid-mesh"
        style={{ animationDelay: '9s' }}
      />

      {/* Top Header Eyebrow: Studio Active Status Capsule in Deep Navy Glass */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mb-3 flex items-center justify-between text-xs font-mono-data">
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full liquid-glass-panel border border-cyan-400/25 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          data-aos="fade-down"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.95)]" />
          </span>
          <span className="text-cyan-200 text-[11px] font-medium tracking-wide">
            Studio Active · Kasipalayam, Erode
          </span>
        </div>

       
      </div>

      {/* Contained Architectural Showcase Frame (Full Image, NOT Full Screen) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovering
              ? `perspective(1200px) rotateX(${-offset.y * 2.8}deg) rotateY(${offset.x * 3.2}deg) translateY(-3px)`
              : 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)',
            transition: isHovering ? 'transform 0.15s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-full rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 liquid-glass-panel liquid-sheen-navy group cursor-grab active:cursor-grabbing select-none shadow-[0_30px_70px_rgba(1,4,13,0.95)] border border-cyan-400/25"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          {/* Exact Aspect Ratio (1024/571): 100% Full Uncropped Image */}
          <div className="relative w-full aspect-[1024/571] rounded-xl sm:rounded-2xl bg-[#020817] overflow-hidden shadow-2xl">
            <img
              src={STUDIO_INFO.mainHousePhoto}
              alt="Residence 12/02 by Nedunthatchan Architects"
              className="w-full h-full object-contain pointer-events-none select-none block"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Navy Blue Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/75 via-transparent to-[#020817]/30 pointer-events-none group-hover:opacity-60 transition-opacity duration-500" />

            {/* Floating Architectural Badge on bottom-left */}
            <div
              className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 flex flex-col gap-1 p-2.5 sm:px-4 sm:py-2.5 rounded-2xl liquid-glass-panel border border-cyan-400/30 text-xs text-slate-100 transition-all duration-300 group-hover:border-cyan-300 max-w-[85%] pointer-events-none shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              
            </div>
            </div>
           </div>
        {/* Ambient Ground Glow */}
        <div className="w-3/4 h-6 bg-blue-600/20 blur-2xl rounded-full mx-auto mt-4 pointer-events-none animate-pulse-glow-navy" />
      </div>

      {/* Global True Image Viewer Lightbox */}
      <TrueImageViewer
        isOpen={isTrueViewerOpen}
        images={[trueHouseImage]}
        currentIndex={0}
        onClose={() => setIsTrueViewerOpen(false)}
        onNavigate={() => {}}
      />
    </section>
  );
};
