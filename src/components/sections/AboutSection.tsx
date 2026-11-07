import React from 'react';
import { Scissors } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

export const AboutSection: React.FC = () => {
  const { openBookingModal } = useSalon();

  return (
    <section id="about" className="relative py-16 sm:py-28 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] overflow-hidden">
      
      {/* Corner Tropical Green Leaves Ambient Shadows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-950/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-950/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Salon Interior Photo with Arched Mirrors (Image 1) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D5AD55]/40 shadow-2xl max-w-xs sm:max-w-sm w-full group">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                alt="Luxe Salon Interior with Arched Illuminated Mirrors"
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#041B12]/80 backdrop-blur-md border border-[#D5AD55]/30 text-center">
                <span className="font-serif text-xs text-[#D5AD55] font-bold">Royal NB Unisex Atelier & Studio</span>
              </div>
            </div>
          </div>

          {/* Middle Column: Editorial Content (Exact Luxe Copy) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-center lg:text-left">
            <span className="font-serif italic text-base sm:text-xl text-[#D5AD55] block">
              About Us
            </span>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] leading-tight break-words">
              Redefining Beauty,<br />
              <span className="text-[#D5AD55]">The Royal Way</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light pt-1">
              At Royal NB Unisex Salon & Spa, we believe beauty is more than just looks – it's about confidence, self-care, and expression. Our mission is to provide you with an exceptional salon experience with personalized care and premium services.
            </p>

            <div className="pt-2 sm:pt-3">
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-2.5 sm:py-3 rounded-md bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 transition-all"
              >
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Right Column: Ornate Gold Plaque (Exact Luxe Plaque) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl border-2 border-[#D5AD55] bg-[#0B291B]/95 shadow-gold-glow flex flex-col items-center justify-center text-center max-w-[200px] sm:max-w-[220px] w-full">
              {/* Gold double decorative line corner style */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#D5AD55] mb-2">
                <Scissors size={28} className="text-[#D5AD55] transform -rotate-45" />
              </div>

              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#D5AD55] leading-none mb-1.5 sm:mb-2">
                5+
              </div>

              <div className="text-[11px] sm:text-xs font-semibold text-[#F5EBDD] uppercase tracking-wider leading-snug">
                Years of Excellence<br />
                <span className="text-[9px] sm:text-[10px] text-[#D5AD55] font-light">in Beauty Services</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
