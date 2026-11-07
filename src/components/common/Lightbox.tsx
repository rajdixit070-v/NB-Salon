import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

export const Lightbox: React.FC = () => {
  const { lightboxImage, closeLightbox } = useSalon();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage, closeLightbox]);

  if (!lightboxImage) return null;

  return (
    <div
      onClick={closeLightbox}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      <button
        onClick={closeLightbox}
        className="absolute top-5 right-5 z-10 p-3 rounded-full bg-[#073B27] text-[#D5AD55] hover:text-white border border-[#D5AD55]/40 transition-colors shadow-gold-glow"
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
      >
        <img
          src={lightboxImage.url}
          alt={lightboxImage.title}
          className="max-h-[80vh] w-auto max-w-full rounded-xl border border-[#D5AD55]/40 object-contain shadow-2xl"
        />
        <div className="mt-4 text-center">
          {lightboxImage.category && (
            <span className="text-xs uppercase tracking-widest text-[#D5AD55] font-semibold block mb-1">
              {lightboxImage.category}
            </span>
          )}
          <h3 className="font-serif text-xl text-[#F5EBDD] font-medium">
            {lightboxImage.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
