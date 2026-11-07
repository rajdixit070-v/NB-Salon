import React from 'react';
import { Sparkles, Check, Calendar, Flame, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import { useSalon } from '../context/SalonContext';

export const PackagesPage: React.FC = () => {
  const { packages, settings, openBookingModal } = useSalon();

  const handleWhatsAppPackage = (pkgTitle: string, price: number) => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${settings.salonName}! I want to book: *${pkgTitle}* (${settings.currencySymbol}${price.toLocaleString('en-IN')}). Please confirm available slots.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] min-h-screen relative z-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-2">
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
          <span className="font-serif italic text-base sm:text-lg">Exclusive Bundles</span>
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5EBDD]">
          Six Curated <span className="text-[#D5AD55]">Beauty Packages</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-3 max-w-2xl mx-auto font-light leading-relaxed">
          Complete head-to-toe beauty rituals with maximum indulgence and significant privilege savings.
        </p>
      </div>

      {/* 6 Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="bg-[#0B291B]/95 border-2 border-[#D5AD55]/40 hover:border-[#D5AD55] rounded-3xl overflow-hidden shadow-luxury hover:shadow-gold-glow flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Reliable, High-Quality Crisp Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B291B] via-transparent to-transparent pointer-events-none" />

                {pkg.badge && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D5AD55] to-[#B8923C] text-[#073B27] font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#D5AD55]/40 text-[#D5AD55] text-xs font-serif font-bold">
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
                    <p className="text-xs text-[#D5AD55] italic font-serif mt-1 mb-4">
                      {pkg.tagline}
                    </p>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-3 my-4 pb-4 border-b border-[#D5AD55]/20">
                    <span className="font-serif text-3xl font-extrabold text-[#D5AD55]">
                      {settings.currencySymbol}{pkg.price.toLocaleString('en-IN')}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm line-through text-[#F5EBDD]/40">
                        {settings.currencySymbol}{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-[10px] uppercase font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/40 ml-auto">
                      Privilege Bundle
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[#D5AD55] block">
                      Included In Package:
                    </span>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5EBDD]/90 leading-relaxed">
                          <span className="w-4 h-4 rounded-full bg-[#073B27] border border-[#D5AD55]/50 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} className="text-[#D5AD55]" />
                          </span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Buttons */}
                <div className="flex gap-2.5 pt-2 border-t border-[#D5AD55]/20">
                  <button
                    onClick={() => handleWhatsAppPackage(pkg.title, pkg.price)}
                    className="p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-500/40 text-emerald-300 transition-colors"
                    title="Book via WhatsApp"
                  >
                    <MessageSquare size={16} />
                  </button>

                  <button
                    onClick={() => openBookingModal(undefined, pkg)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} />
                    Book This Package
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Festival Ready Skin in 30 Min Banner */}
        <div className="mt-16 rounded-3xl overflow-hidden border-2 border-[#D5AD55] p-6 sm:p-10 bg-gradient-to-r from-[#041B12] via-[#073B27] to-[#041B12] shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5AD55] text-[#073B27] text-xs font-black uppercase tracking-widest shadow-md">
                <Flame size={14} /> Spotlight Festive Offer
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#F5EBDD] leading-tight">
                FESTIVAL READY SKIN IN JUST 30 MINUTES –{' '}
                <span className="text-[#D5AD55]">
                  {settings.currencySymbol}999
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                Rapid radiance booster utilizing mild lactic acid brightening serum, ozone steam, and a dewy gold peptide mask.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {["Instant Radiant Glow", "Deep Pore Cleanse", "Brighter Skin", "Perfect for Festivities"].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-black/40 border border-[#D5AD55]/30 text-[11px] font-semibold text-[#D5AD55]">
                    <Zap size={13} className="shrink-0 text-[#FFF4D2]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const festSrv = {
                  id: 'fest-999',
                  name: 'Festival Ready Skin in Just 30 Minutes',
                  category: 'Skin Care & Facial' as const,
                  description: 'Instant Glow, Deep Cleanse, Brighter Skin - Perfect for Festivities',
                  price: 999,
                  durationMinutes: 30,
                  image: 'https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80',
                  gender: 'women' as const
                };
                openBookingModal(festSrv);
              }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-black text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Claim Offer at {settings.currencySymbol}999</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
