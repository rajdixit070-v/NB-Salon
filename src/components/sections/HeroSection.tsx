import React from 'react';
import { Calendar, Compass, Crown, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { GoldParticles } from '../common/GoldParticles';

export const HeroSection: React.FC = () => {
  const { openBookingModal } = useSalon();

  const trustBadges = [
    {
      icon: Crown,
      title: "PREMIUM QUALITY",
      desc: "We use top quality products for the best results."
    },
    {
      icon: Award,
      title: "EXPERT STYLISTS",
      desc: "Our experienced professionals bring out the best in you."
    },
    {
      icon: Sparkles,
      title: "LUXURIOUS EXPERIENCE",
      desc: "Relax and enjoy world-class services in luxury."
    },
    {
      icon: ShieldCheck,
      title: "CUSTOMER SATISFACTION",
      desc: "Your satisfaction is our top priority."
    }
  ];

  return (
    <section id="home" className="relative pt-20 sm:pt-28 bg-gradient-to-b from-[#03170F]/85 via-[#073B27]/80 to-[#0B291B]/85 text-[#F5EBDD] overflow-hidden">
      
      {/* Canvas Gold Dust Particles */}
      <GoldParticles count={35} />

      {/* Bokeh Glows & Palm Frond Silhouette */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#D5AD55]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-6 sm:pt-14 pb-10 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs (Exact Luxe Layout with Royal NB Identity) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B27] border border-[#D5AD55]/60 text-[#D5AD55] text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-gold-glow">
              <Crown size={13} className="text-[#D5AD55]" />
              <span>Royal NB Unisex Salon & Spa</span>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5EBDD] leading-[1.08] break-words">
                Royal Grooming.
              </h1>
              <h2 className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#D5AD55] italic leading-[1.08] break-words">
                Timeless Beauty.
              </h2>
            </div>

            <p className="text-xs sm:text-base text-[#F5EBDD]/85 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Welcome to Royal NB Unisex Salon – where bespoke styling, couture hairdressing, and royal grooming meet world-class luxury for both men and women.
            </p>

            {/* Buttons Side-by-Side as in Reference */}
            <div className="pt-2 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => openBookingModal()}
                className="w-full xs:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-[#FFF4D2]/60"
              >
                <span>BOOK APPOINTMENT</span>
                <Calendar size={15} />
              </button>

              <a
                href="#services"
                className="w-full xs:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#041B12]/60 hover:bg-[#D5AD55]/15 border border-[#D5AD55] text-[#D5AD55] hover:text-[#FFF4D2] font-bold text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2"
              >
                <span>EXPLORE SERVICES</span>
              </a>
            </div>

          </div>

          {/* Right Column: Model Photography with Emerald Glow */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              
              {/* Backing Gold Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D5AD55]/30 to-transparent blur-2xl pointer-events-none" />

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D5AD55]/40 group">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85"
                  alt="Royal NB Unisex Salon & Spa"
                  className="w-full h-auto object-cover object-top scale-102 group-hover:scale-105 transition-transform duration-700 max-h-[380px] sm:max-h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041B12]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Unisex Crest Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#041B12]/80 backdrop-blur-md border border-[#D5AD55]/40 flex items-center justify-between text-xs text-[#F5EBDD]">
                  <div className="flex items-center gap-2">
                    <Crown size={15} className="text-[#D5AD55]" />
                    <span className="font-serif font-bold">Royal NB Unisex Atelier & Barber Lounge</span>
                  </div>
                  <span className="text-[#D5AD55] font-semibold text-[10px] uppercase">South Delhi</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Golden Wave Divider (Exact Luxe flowing ribbon curve) */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-20 object-fill preserve-3d"
        >
          {/* Gold ribbon stroke */}
          <path
            d="M0,45 C320,120 420,-10 740,40 C1060,90 1220,-20 1440,35"
            stroke="#D5AD55"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Section Fill */}
          <path
            d="M0,45 C320,120 420,-10 740,40 C1060,90 1220,-20 1440,35 L1440,120 L0,120 Z"
            fill="#0B291B"
            fillOpacity="0.9"
          />
        </svg>
      </div>

      {/* 4 Feature Badges Row (Exact Luxe Layout, 2x2 grid on mobile) */}
      <div className="bg-[#0B291B]/90 py-8 sm:py-10 border-b border-[#D5AD55]/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2 group p-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D5AD55]/60 flex items-center justify-center text-[#D5AD55] mb-1 group-hover:scale-110 group-hover:border-[#D5AD55] group-hover:shadow-gold-glow transition-all">
                  <badge.icon size={18} className="text-[#D5AD55]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold tracking-widest text-[#D5AD55] uppercase">
                  {badge.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#F5EBDD]/75 font-light leading-relaxed max-w-[200px]">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
