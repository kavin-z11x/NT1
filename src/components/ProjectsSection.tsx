import React, { useState, useEffect } from 'react';
import { DEMO_PROJECTS, Project } from '../data/studioData';
import { TrueImageViewer, TrueImageItem } from './TrueImageViewer';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MessageSquare,
  Eye,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  // True Image Lightbox State
  const [isTrueViewerOpen, setIsTrueViewerOpen] = useState<boolean>(false);
  const [trueViewerItems, setTrueViewerItems] = useState<TrueImageItem[]>([]);
  const [trueViewerIndex, setTrueViewerIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActivePhotoIdx(0);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : selectedProject.photos.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActivePhotoIdx((prev) => (prev < selectedProject.photos.length - 1 ? prev + 1 : 0));
  };

  // Open True Image Viewer with uncropped images and zoom
  const openTrueImageFromProject = (project: Project, startIndex: number = 0, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const items: TrueImageItem[] = project.photos.map((photo, i) => ({
      src: photo,
      title: `${project.title} · True View ${i + 1}`,
      subtitle: project.subtitle,
      category: project.category,
    }));
    setTrueViewerItems(items);
    setTrueViewerIndex(startIndex);
    setIsTrueViewerOpen(true);
  };

  return (
    <section id="project" className="relative py-24 sm:py-32 bg-[#01040D] border-t border-cyan-500/15 overflow-hidden">
      {/* Background Navy Blue Universe: Multi-layered radial lighting */}
      <div className="absolute inset-0 bg-navy-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-blue-700/12 rounded-full blur-[160px] pointer-events-none animate-liquid-mesh" />
      <div
        className="absolute bottom-1/4 -right-48 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none animate-liquid-mesh"
        style={{ animationDelay: '6s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Centered in the middle */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-medium text-white tracking-tight drop-shadow-sm">
            Projects
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* MAIN PROJECTS GRID (All 6 Signature Commissions) */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120}
              data-aos-duration="800"
              className="group relative rounded-3xl overflow-hidden liquid-glass-panel liquid-sheen-navy cursor-pointer flex flex-col justify-between select-none border border-cyan-400/25 hover:border-cyan-400/50 shadow-[0_20px_50px_rgba(1,4,13,0.9)]"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#020817]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040D]/90 via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Category Chip */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full liquid-glass-dock text-[10px] font-mono-data text-cyan-300 uppercase tracking-wider border border-cyan-400/30">
                  {project.category}
                </div>

                {/* Quick True Image inspect button on hover */}
                <button
                  onClick={(e) => openTrueImageFromProject(project, 0, e)}
                  className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full liquid-sapphire-btn text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl text-[10px] font-mono-data uppercase cursor-pointer"
                  title="Inspect True Image at 100% uncropped fidelity"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-200" />
                  <span>True Image</span>
                </button>
              </div>

              {/* Card Footer: Liquid Surface & Typography */}
              <div className="p-5 bg-gradient-to-b from-[#06152E]/70 to-[#020817]/90 rounded-b-3xl space-y-2 border-t border-cyan-500/15">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors duration-200 truncate font-serif-title">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light truncate mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full neu-inset-navy flex items-center justify-center shrink-0 group-hover:border-cyan-400/60 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </div>

                <div className="flex items-center justify-end pt-2 border-t border-cyan-500/10 text-[10px] font-mono-data">
                  <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* Interactive Project Case Study Modal: Sculpted Liquid Glass Window */}
      {/* ------------------------------------------------------------- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl liquid-glass-panel liquid-sheen-navy rounded-2xl sm:rounded-3xl shadow-[0_30px_80px_rgba(1,4,13,0.98)] overflow-hidden my-auto transform transition-all duration-300 border border-cyan-400/35"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Liquid Glass Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#020817]/90 backdrop-blur-md">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <span className="text-sm sm:text-base font-bold text-white font-mono-data truncate drop-shadow-sm">
                  {selectedProject.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl neu-inset-navy text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
              
              {/* Photo Showcase: Inset Stage */}
              <div className="relative rounded-2xl overflow-hidden min-h-[320px] max-h-[500px] neu-inset-navy group flex items-center justify-center p-2">
                {/* Ambient Blur Backdrop */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-xl pointer-events-none"
                  style={{ backgroundImage: `url(${selectedProject.photos[activePhotoIdx] || selectedProject.heroImage})` }}
                />

                <img
                  src={selectedProject.photos[activePhotoIdx] || selectedProject.heroImage}
                  alt={`${selectedProject.title} view ${activePhotoIdx + 1}`}
                  onClick={() => openTrueImageFromProject(selectedProject, activePhotoIdx)}
                  className="relative z-10 max-h-[460px] max-w-full object-contain cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] rounded-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Carousel Controls */}
                {selectedProject.photos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full liquid-sapphire-btn text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg cursor-pointer active:scale-95"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full liquid-sapphire-btn text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg cursor-pointer active:scale-95"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full liquid-glass-dock text-[11px] font-mono-data text-white">
                      {activePhotoIdx + 1} / {selectedProject.photos.length}
                    </div>
                  </>
                )}

                {/* Button to inspect True Fullscreen Image */}
                <button
                  onClick={() => openTrueImageFromProject(selectedProject, activePhotoIdx)}
                  className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full liquid-sapphire-btn text-white text-xs font-mono-data flex items-center gap-1.5 transition-all shadow-xl cursor-pointer active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Inspect True Image</span>
                </button>
              </div>

              {/* Photo Thumbnails: Neumorphic Rail */}
              {selectedProject.photos.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin p-1 rounded-2xl neu-inset-navy">
                  {selectedProject.photos.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`relative w-22 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-200 cursor-pointer ${
                        activePhotoIdx === i
                          ? 'border-cyan-400 scale-105 shadow-[0_0_12px_rgba(56,189,248,0.7)] ring-2 ring-cyan-400/30'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Description */}
              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-white tracking-wide font-serif-title">
                  Architectural Intent & Concept
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono-data uppercase tracking-wider text-cyan-400">
                    Design Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 p-3 rounded-xl neu-inset-navy">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct WhatsApp Consultation Action: Sculpted Liquid Emerald Button */}
              <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between gap-4 flex-wrap">
                <div className="text-xs text-slate-400 font-mono-data">
                  Interested in a similar bespoke architectural design?
                </div>
                <a
                  href={`https://wa.me/919500975083?text=${encodeURIComponent(
                    `Hello Ar. Karthikraja G, I am interested in an architectural consultation similar to: ${selectedProject.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full liquid-emerald-btn text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Consult on WhatsApp →</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Global True Image Viewer Lightbox */}
      <TrueImageViewer
        isOpen={isTrueViewerOpen}
        images={trueViewerItems}
        currentIndex={trueViewerIndex}
        onClose={() => setIsTrueViewerOpen(false)}
        onNavigate={(idx) => setTrueViewerIndex(idx)}
      />

    </section>
  );
};
