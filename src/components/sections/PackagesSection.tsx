import React from 'react';
import { Sparkles, Check, Calendar, Flame, Zap, ArrowRight, Heart } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { Card3D } from '../common/Card3D';

export const PackagesSection: React.FC = () => {
  const { packages, settings, openBookingModal } = useSalon();

  return (
    <section id="packages" className="relative py-24 bg-gradient-to-b from-[#291713] via-[#36141F] to-[#0B291B] text-[#F5EBDD] overflow-hidden">
      
      {/* Pink, Warm Brown & Champagne Gold Ambient Atmospheric Lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D5AD55]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#491D2B]/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> Curated Luxury Rituals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            Six Premium{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Beauty Packages
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Inspired by haute Parisian beauty salons, our 6 signature bundled experiences deliver complete head-to-toe pampering with dramatic savings.
          </p>
        </div>

        {/* 6 Packages Grid with 3D Tilt & Pink / Cream / Gold Card Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <Card3D key={pkg.id} maxTilt={9} className="h-full">
              <div className={`relative rounded-3xl overflow-hidden border transition-all duration-300 h-full flex flex-col justify-between shadow-luxury group ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#491D2B]/90 via-[#36141F]/90 to-[#291713]/90 border-[#D5AD55] ring-1 ring-[#D5AD55]/40 shadow-gold-glow'
                  : 'bg-gradient-to-b from-[#36141F]/80 via-[#291713]/85 to-[#1C0F0C]/90 border-[#D5AD55]/30 hover:border-[#D5AD55]/70'
              }`}>
                
                {/* Header Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#291713] via-black/30 to-transparent" />

                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Package Number Indicator */}
                  <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#D5AD55]/40 text-[#D5AD55] text-xs font-serif font-bold">
                    Tier 0{idx + 1}
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    
                    {pkg.tagline && (
                      <p className="text-xs text-[#D5AD55]/90 italic font-serif mt-1 mb-4">
                        {pkg.tagline}
                      </p>
                    )}

                    {/* Pricing Display */}
                    <div className="flex items-baseline gap-3 my-4 pb-4 border-b border-[#D5AD55]/20">
                      <span className="font-serif text-3xl font-extrabold bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
                        {settings.currencySymbol}{pkg.price.toLocaleString('en-IN')}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm line-through text-[#F5EBDD]/40">
                          {settings.currencySymbol}{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-[10px] uppercase font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 ml-auto">
                        Special Privilege
                      </span>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] uppercase font-bold tracking-widest text-[#D5AD55] block">
                        Included Treatments:
                      </span>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5EBDD]/85 leading-relaxed">
                            <span className="w-4 h-4 rounded-full bg-[#073B27] border border-[#D5AD55]/50 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={10} className="text-[#D5AD55]" />
                            </span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Book This Package CTA */}
                  <button
                    onClick={() => openBookingModal(undefined, pkg)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} />
                    Book This Package
                  </button>

                </div>

              </div>
            </Card3D>
          ))}
        </div>

        {/* Promotional Festival Banner: FESTIVAL READY SKIN IN JUST 30 MINUTES – ₹999 */}
        <div className="mt-16 relative rounded-3xl overflow-hidden border-2 border-[#D5AD55] p-6 sm:p-10 bg-gradient-to-r from-[#491D2B] via-[#073B27] to-[#041B12] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Decorative Corner Flourish */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5AD55]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D5AD55] text-[#073B27] text-xs font-black uppercase tracking-widest shadow-md">
                <Flame size={14} /> Celebration Spotlight Offer
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5EBDD] leading-tight">
                FESTIVAL READY SKIN IN JUST 30 MINUTES –{' '}
                <span className="text-[#D5AD55] underline decoration-[#D5AD55]/60 underline-offset-4">
                  {settings.currencySymbol}999
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                Need an immediate, camera-ready luminosity before a wedding, festive puja, or evening dinner? Our 30-minute express glow combines mild lactic exfoliation, oxygen infusion, and dewy 24k gold peptide mask.
              </p>

              {/* 4 Key Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  "Instant Radiant Glow",
                  "Deep Pore Cleanse",
                  "Brighter, Velvety Skin",
                  "Perfect for Festivities"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-black/40 border border-[#D5AD55]/25 text-[11px] font-semibold text-[#D5AD55]">
                    <Zap size={13} className="shrink-0 text-[#FFF4D2]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="shrink-0 text-center">
              <button
                onClick={() => {
                  const festivalService = {
                    id: 'fest-999',
                    name: 'Festival Ready Skin in Just 30 Minutes',
                    category: 'Skin Care & Facial' as const,
                    description: 'Instant Glow, Deep Cleanse, Brighter Skin - Perfect for Festivities',
                    price: 999,
                    durationMinutes: 30,
                    image: 'https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80',
                    gender: 'women' as const
                  };
                  openBookingModal(festivalService);
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-black text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 mx-auto"
              >
                <span>Claim Offer at {settings.currencySymbol}999</span>
                <ArrowRight size={16} />
              </button>
              <span className="text-[10px] text-[#F5EBDD]/60 block mt-2">
                Limited time slots available daily
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
