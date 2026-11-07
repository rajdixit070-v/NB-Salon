import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { BeforeAfterItem } from '../../types';

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
  onOpenLightbox?: (url: string, title: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item, onOpenLightbox }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-[#0B291B]/80 border border-[#D5AD55]/30 rounded-2xl overflow-hidden shadow-luxury hover:border-[#D5AD55]/60 transition-all duration-300 flex flex-col group">
      {/* Visual Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none cursor-ew-resize overflow-hidden bg-black"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full width background) */}
        <img
          src={item.afterImage}
          alt={`After: ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImage}
            alt={`Before: ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover select-none max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
            loading="lazy"
          />
          {/* Label Before */}
          <div className="absolute top-3 left-3 bg-[#491D2B]/90 text-[#F5EBDD] backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider border border-[#D5AD55]/40 shadow-md">
            BEFORE
          </div>
        </div>

        {/* Label After */}
        <div className="absolute top-3 right-3 bg-[#073B27]/90 text-[#D5AD55] backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider border border-[#D5AD55]/40 shadow-md pointer-events-none">
          AFTER
        </div>

        {/* Draggable Divider Line & Gold Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] pointer-events-none shadow-[0_0_12px_rgba(213,173,85,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#073B27] border-2 border-[#D5AD55] shadow-gold-glow flex items-center justify-center text-[#D5AD55] text-xs font-bold pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <span className="flex items-center space-x-0.5">
              <span>‹</span>
              <span>›</span>
            </span>
          </div>
        </div>

        {/* Lightbox / Zoom Action */}
        {onOpenLightbox && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(item.afterImage, item.title);
            }}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-[#D5AD55] hover:text-[#FFF4D2] hover:bg-black/90 border border-[#D5AD55]/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
            title="View Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        )}

        {/* Sample / Demo Tag if applicable */}
        {item.isSample && (
          <div className="absolute bottom-3 left-3 bg-black/70 text-gray-300 text-[10px] px-2 py-0.5 rounded border border-white/20">
            Transformation Portfolio
          </div>
        )}
      </div>

      {/* Info Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs uppercase font-medium tracking-widest text-[#D5AD55] flex items-center gap-1">
              <Sparkles size={12} className="text-[#D5AD55]" />
              {item.category}
            </span>
            <span className="text-xs text-[#F5EBDD]/60 italic font-serif">
              {item.service}
            </span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-[#F5EBDD]/75 line-clamp-2 mb-3 leading-relaxed">
            {item.description}
          </p>
        </div>

        {item.clientFeedback && (
          <div className="mt-2 pt-3 border-t border-[#D5AD55]/20 flex items-start gap-2 text-xs italic text-[#F5EBDD]/70 bg-[#073B27]/40 p-2.5 rounded-lg">
            <span className="text-[#D5AD55] font-serif text-base leading-none">“</span>
            <span>{item.clientFeedback}</span>
          </div>
        )}
      </div>
    </div>
  );
};
