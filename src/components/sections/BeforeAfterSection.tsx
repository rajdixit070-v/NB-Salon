import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, Info, ShieldCheck, ChevronRight } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

const BA_CATEGORIES = [
  'All',
  'Haircut Transformations',
  'Hair Colour',
  'Hair Smoothening',
  'Keratin Treatment',
  'Hair Spa',
  'Bridal Makeup',
  'Skin Treatment',
  'Facial & Cleanup',
  'Nail Art',
  'Men\'s Grooming'
];

export const BeforeAfterSection: React.FC = () => {
  const { transformations, openLightbox, openBookingModal } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter published transformations
  const publishedTransformations = transformations.filter(t => t.published);

  const filteredTransformations = selectedCategory === 'All'
    ? publishedTransformations
    : publishedTransformations.filter(t => t.category === selectedCategory);

  return (
    <section id="transformations" className="relative py-24 bg-gradient-to-b from-[#041B12] via-[#073B27] to-[#0B291B] text-[#F5EBDD] overflow-hidden">
      
      {/* Editorial Luxury Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#491D2B]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D5AD55]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> Visible Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            Before & After{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Drag the golden slider to inspect real styling, color corrections, keratin alignments, and skin rejuvenation results.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-[#0B291B]/80 border border-[#D5AD55]/30 text-[11px] text-[#D5AD55]">
            <Info size={13} />
            <span>Interactive comparison slider • Drag left/right to compare</span>
          </div>
        </div>

        {/* Category Filter Pills (Scrollable) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2">
          {BA_CATEGORIES.map((cat) => (
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

        {/* Transformation Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTransformations.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              item={item}
              onOpenLightbox={(url, title) => openLightbox(url, title, item.category)}
            />
          ))}
        </div>

        {filteredTransformations.length === 0 && (
          <div className="text-center py-16 bg-[#0B291B]/40 rounded-2xl border border-[#D5AD55]/20 p-8 max-w-md mx-auto">
            <SlidersHorizontal size={36} className="mx-auto text-[#D5AD55]/60 mb-3" />
            <p className="text-sm text-[#F5EBDD]/80 font-serif">
              No published transformations in this category yet.
            </p>
            <p className="text-xs text-[#F5EBDD]/50 mt-1">
              Authorized salon staff can upload new genuine client transformations via the Staff Portal.
            </p>
          </div>
        )}

        {/* Book consultation CTA bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#073B27] via-[#0B291B] to-[#491D2B] border border-[#D5AD55]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-[#F5EBDD]">
              Desire a personalized hair or skin transformation?
            </h4>
            <p className="text-xs text-[#F5EBDD]/80 mt-1">
              Book a 1-on-1 consultation with our senior art directors and master colorists.
            </p>
          </div>

          <button
            onClick={() => openBookingModal()}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Book Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
