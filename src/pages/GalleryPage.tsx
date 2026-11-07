import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { useSalon } from '../context/SalonContext';

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

export const GalleryPage: React.FC = () => {
  const { gallery, openLightbox, openBookingModal } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(g => g.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] min-h-screen relative z-10">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-2">
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
          <span className="font-serif italic text-base sm:text-lg">Lookbook & Atelier Portfolio</span>
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5EBDD]">
          Salon <span className="text-[#D5AD55]">Visual Gallery</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-3 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our visual portfolio of couture hair transformations, bridal looks, executive men's grooming, and tranquil salon aesthetics.
        </p>

        {/* Category Filter */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar mt-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#D5AD55] to-[#B8923C] text-[#073B27] font-bold border-[#FFF4D2] shadow-gold-glow scale-105'
                  : 'bg-[#0B291B]/80 text-[#F5EBDD]/80 border-[#D5AD55]/30 hover:border-[#D5AD55]/70 hover:text-[#FFF4D2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.image, item.title, item.category)}
              className="relative rounded-2xl overflow-hidden border border-[#D5AD55]/40 hover:border-[#D5AD55] shadow-luxury group cursor-pointer aspect-[3/4] bg-black transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-[#073B27]/90 text-[#D5AD55] border border-[#D5AD55]/50 shadow-md">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5AD55] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#F5EBDD]">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Mobile label */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-[#D5AD55] border border-white/10 group-hover:hidden">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => openBookingModal()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 transition-all"
          >
            BOOK YOUR SALON EXPERIENCE
          </button>
        </div>
      </div>

    </div>
  );
};
