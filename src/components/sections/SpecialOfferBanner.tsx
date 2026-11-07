import React from 'react';
import { useSalon } from '../../context/SalonContext';

export const SpecialOfferBanner: React.FC = () => {
  const { openBookingModal } = useSalon();

  return (
    <section id="special-offer" className="relative py-12 sm:py-16 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Exact Luxe Gold-Framed Banner from Image 1 */}
        <div className="relative rounded-2xl border-2 border-[#D5AD55] bg-gradient-to-r from-[#041B12] via-[#073B27] to-[#041B12] p-5 sm:p-10 shadow-gold-glow flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden">
          
          {/* Subtle Corner Flourishes */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D5AD55]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D5AD55]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D5AD55]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D5AD55]" />

          {/* Left Text & CTA */}
          <div className="space-y-2 sm:space-y-3 text-center md:text-left z-10 w-full md:w-auto">
            <span className="font-serif italic text-lg sm:text-2xl text-[#D5AD55] block">
              Special Offer
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5EBDD] leading-none break-words">
              GET 20% OFF
            </h2>

            <p className="font-serif text-sm sm:text-lg text-[#F5EBDD]/90">
              On Your First Visit
            </p>

            <div className="pt-2">
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-7 py-3 rounded-md bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
              >
                CLAIM OFFER
              </button>
            </div>
          </div>

          {/* Right: Model Photo with 20% OFF Gold Circular Badge */}
          <div className="relative shrink-0 flex items-center justify-center pt-2 sm:pt-0">
            <div className="relative w-44 h-40 xs:w-52 xs:h-44 sm:w-64 sm:h-52 rounded-xl overflow-hidden border border-[#D5AD55]/40 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Special 20% Off Offer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Circular Gold 20% OFF Badge (Exact Luxe Badge) */}
            <div className="absolute -right-2 xs:-right-4 sm:-right-5 top-1/2 -translate-y-1/2 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D5AD55] bg-[#073B27]/95 shadow-gold-glow flex flex-col items-center justify-center text-center p-1">
              <span className="font-serif text-base xs:text-xl sm:text-2xl font-black text-[#D5AD55] leading-none">
                20%
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-[#F5EBDD] uppercase tracking-wider">
                OFF
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
