import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  Minimize2,
} from 'lucide-react';

export interface TrueImageItem {
  src: string;
  title?: string;
  subtitle?: string;
  category?: string;
  location?: string;
}

interface TrueImageViewerProps {
  isOpen: boolean;
  images: TrueImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const TrueImageViewer: React.FC<TrueImageViewerProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex] || images[0];

  // Reset zoom & pan when image changes or modal opens
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [currentIndex, isOpen]);

  // Lock body scroll and register keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (images.length > 1) {
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }
      } else if (e.key === 'ArrowRight') {
        if (images.length > 1) {
          onNavigate((currentIndex + 1) % images.length);
        }
      } else if (e.key === '+' || e.key === '=') {
        setZoom((z) => Math.min(z + 0.5, 3));
      } else if (e.key === '-') {
        setZoom((z) => Math.max(z - 0.5, 1));
      } else if (e.key === '0') {
        setZoom(1);
        setPan({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  const handleZoomIn = () => {
    setZoom((z) => Math.min(Number((z + 0.5).toFixed(1)), 3));
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(Number((z - 0.5).toFixed(1)), 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#01040D]/95 backdrop-blur-3xl flex flex-col justify-between animate-fadeIn select-none p-2 sm:p-4"
      onClick={onClose}
    >
      {/* Top Bar: Floating Liquid Glass Pill */}
      <div
        className="relative z-10 px-4 sm:px-6 py-3 liquid-glass-dock rounded-2xl sm:rounded-full flex items-center justify-between gap-4 border border-cyan-400/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full liquid-emerald-btn text-white text-[10px] font-mono-data uppercase font-bold shrink-0 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>True Verified Elevation</span>
          </div>

          <div className="min-w-0">
            <h3 className="text-white text-sm sm:text-base font-bold truncate drop-shadow-sm font-serif-title">
              {currentImage.title || 'Architectural True Image'}
            </h3>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center neu-inset-navy rounded-full p-1 border border-cyan-500/20">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className="p-1.5 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors cursor-pointer"
              title="Zoom Out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono-data text-cyan-300 min-w-[48px] text-center font-bold">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className="p-1.5 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors cursor-pointer"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoom > 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-cyan-400 hover:text-cyan-300 border-l border-cyan-500/20 ml-1 transition-colors cursor-pointer"
                title="Reset Zoom (0)"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Direct Raw File link */}
          <a
            href={currentImage.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-2 rounded-xl liquid-sapphire-btn text-white text-xs font-mono-data flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-lg"
            title="Open original true file directly in a new tab"
          >
            <ExternalLink className="w-4 h-4 text-cyan-200" />
            <span className="hidden sm:inline">Raw File</span>
          </a>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl neu-inset-navy text-slate-200 transition-colors hidden sm:flex cursor-pointer active:scale-95"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl neu-inset-navy border border-red-500/30 text-red-400 hover:text-white hover:bg-red-500/20 transition-all cursor-pointer active:scale-95"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Center Image Stage: 100% True Uncropped Image */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden my-2"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <img
          src={currentImage.src}
          alt={currentImage.title || 'True Architectural Image'}
          style={{
            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
            transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="max-h-[80vh] max-w-[94vw] object-contain rounded-2xl shadow-[0_25px_80px_rgba(1,4,13,0.95)] pointer-events-auto border border-cyan-400/20"
          referrerPolicy="no-referrer"
          draggable={false}
        />

        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full liquid-sapphire-btn text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer active:scale-95"
            aria-label="Previous true image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full liquid-sapphire-btn text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer active:scale-95"
            aria-label="Next true image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>

      {/* Bottom Bar: Image Index Counter & Thumbnail Strip */}
      <div
        className="relative z-10 px-4 py-3 liquid-glass-dock rounded-2xl sm:rounded-full border border-cyan-400/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs font-mono-data text-slate-400">
            <span className="text-cyan-300 font-bold px-2 py-0.5 rounded-full neu-inset-navy border border-cyan-400/30">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <span className="text-cyan-800">|</span>
            <span className="text-slate-300 truncate max-w-xs sm:max-w-md">
              {currentImage.subtitle || 'Uncropped True Resolution Architectural Capture'}
            </span>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 scrollbar-thin p-1 rounded-xl neu-inset-navy">
              {images.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-400/50'
                      : 'border-white/10 opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Jump to image ${idx + 1}`}
                >
                  <img
                    src={item.src}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
