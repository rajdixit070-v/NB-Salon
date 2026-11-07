import React, { useState } from 'react';
import { Sparkles, Maximize2, Eye } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

const GALLERY_CATEGORIES = [
  'All',
  'Hair Styling',
  'Hair Transformations',
  'Bridal Looks',
  'Makeup',
  'Skin Care',
  'Nail Art',
  'Men\'s Grooming',
  'Salon Interior'
];

export const GallerySection: React.FC = () => {
  const { gallery, openLightbox } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(g => g.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 bg-[#073B27] text-[#F5EBDD] overflow-hidden border-t border-[#D5AD55]/20">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#491D2B]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D5AD55]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> Visual Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            The Salon{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Lookbook & Gallery
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Immerse yourself in our portfolio of editorial hair designs, bespoke bridal styling, precision men's grooming, and tranquil salon aesthetics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#D5AD55] to-[#B8923C] text-[#073B27] font-bold border-[#FFF4D2] shadow-gold-glow scale-105'
                  : 'bg-[#0B291B]/80 text-[#F5EBDD]/75 border-[#D5AD55]/30 hover:border-[#D5AD55]/70 hover:text-[#FFF4D2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.image, item.title, item.category)}
              className="relative rounded-2xl overflow-hidden border border-[#D5AD55]/30 hover:border-[#D5AD55] shadow-luxury group cursor-pointer aspect-[3/4] bg-black transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Hover Details & Zoom Icon */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-[#073B27]/80 text-[#D5AD55] border border-[#D5AD55]/40 shadow-md">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5AD55] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#F5EBDD] leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Static category tag on mobile */}
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-[#D5AD55] border border-white/10 group-hover:hidden">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
