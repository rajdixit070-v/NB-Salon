import React from 'react';
import { Scissors, Sparkles, ShieldCheck, HeartHandshake, Award, Coffee, Star } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

export const WhyChooseUsSection: React.FC = () => {
  const { settings } = useSalon();

  const reasons = [
    {
      icon: Scissors,
      title: "Master Artists & Stylists",
      desc: "Internationally trained master hairdressers and bridal artisans with years of runway and editorial expertise."
    },
    {
      icon: Sparkles,
      title: "Haute Luxury Ambience",
      desc: "Opulent emerald and champagne gold aesthetic with sound-insulated suites, mood lighting, and barista espresso bar."
    },
    {
      icon: Award,
      title: "100% Authentic Global Brands",
      desc: "We formulate strictly with official salon ranges: Redken, Olaplex, L'Oréal Majirel, Kérastase & Casmara."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Hygiene",
      desc: "Autoclaved titanium instruments, sealed single-use towel kits, and rigorous medical sterilization protocols."
    },
    {
      icon: HeartHandshake,
      title: "Bespoke Consultations",
      desc: "Detailed hair texture and skin mapping before any chemical service, ensuring zero guesswork and optimal results."
    },
    {
      icon: Star,
      title: "Guaranteed Satisfaction",
      desc: "Complimentary tone refinement within 7 days if your hair color or smoothing doesn't exceed your expectations."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B291B] to-[#041B12] text-[#F5EBDD] overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D5AD55]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> The Gold Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            Why Discerning Clients{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Choose NB Salon
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Where uncompromised hygiene meets couture styling. We turn ordinary salon visits into transcendent self-care ceremonies.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#073B27]/80 to-[#0B291B]/80 border border-[#D5AD55]/30 hover:border-[#D5AD55] transition-all duration-300 shadow-luxury group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0B291B] border border-[#D5AD55]/50 flex items-center justify-center text-[#D5AD55] mb-5 shadow-gold-glow group-hover:scale-110 group-hover:bg-[#D5AD55] group-hover:text-[#073B27] transition-all duration-300">
                <reason.icon size={22} />
              </div>

              <h3 className="font-serif text-lg font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors mb-2">
                {reason.title}
              </h3>

              <p className="text-xs text-[#F5EBDD]/70 leading-relaxed font-light">
                {reason.desc}
              </p>

              {/* Decorative Corner Gold Accent */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D5AD55]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
