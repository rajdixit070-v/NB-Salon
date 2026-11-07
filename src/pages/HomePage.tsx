import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles, X, MessageSquare, Clock, Scissors, Heart, Eye, Gem, Crown, Flower2, User, Users } from 'lucide-react';
import { useSalon } from '../context/SalonContext';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SpecialOfferBanner } from '../components/sections/SpecialOfferBanner';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { LocationSection } from '../components/sections/LocationSection';
import { ServiceItem } from '../types';

// ==========================================
// 100% SEPARATED SERVICES ARCHITECTURE
// ==========================================

// 1. WOMEN'S EXCLUSIVE CARDS
const WOMEN_SERVICES = [
  {
    id: 'w-hair-styling',
    name: "Hair Styling & Cuts",
    description: 'Designer cuts, luxury wash, blowouts & red carpet curls.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    icon: Scissors,
    priceStarting: 499,
    categoryKey: 'Hair'
  },
  {
    id: 'w-hair-texture',
    name: 'Keratin & Nanoplastia',
    description: 'Brazilian keratin, Nanoplastia, Botox & permanent smoothening.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    icon: Sparkles,
    priceStarting: 3499,
    categoryKey: 'HairTexture'
  },
  {
    id: 'w-hair-colour',
    name: 'Colour & Balayage',
    description: 'French Balayage, root touchup, no-bleach highlights & global color.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
    icon: Heart,
    priceStarting: 1199,
    categoryKey: 'HairColour'
  },
  {
    id: 'w-skin-care',
    name: 'Skin Care & Facials',
    description: 'Instant glow 30-min facials, hydra medi facial & anti-acne therapy.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    icon: Flower2,
    priceStarting: 499,
    categoryKey: 'Skin'
  },
  {
    id: 'w-makeup',
    name: 'Makeup & Bridal',
    description: 'HD camera-ready party glam, airbrush & royal bridal couture.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    icon: Eye,
    priceStarting: 2999,
    categoryKey: 'Makeup'
  },
  {
    id: 'w-nail-care',
    name: 'Nail Art & Extensions',
    description: 'Gel sculpted extensions, chrome glazed donut art & gel manicure.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80',
    icon: Gem,
    priceStarting: 999,
    categoryKey: 'Nail'
  }
];

// 2. MEN'S EXCLUSIVE CARDS
const MEN_SERVICES = [
  {
    id: 'm-haircuts',
    name: "Precision Haircut & Fade",
    description: 'Low/mid/high taper fade, scissor cut, texturizing & clay styling.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    icon: Scissors,
    priceStarting: 350,
    categoryKey: 'MenHair'
  },
  {
    id: 'm-beard-shave',
    name: 'Beard Sculpting & Shave',
    description: 'Royal hot towel shave, straight razor cheek definition & beard oil.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    icon: Crown,
    priceStarting: 250,
    categoryKey: 'MenBeard'
  },
  {
    id: 'm-combos',
    name: "Men's Value Combos",
    description: 'Cut + Beard + D-Tan (₹800), Cut + Spa (₹1,050), Cut + Facial (₹2,450).',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    icon: Sparkles,
    priceStarting: 600,
    categoryKey: 'MenCombos'
  },
  {
    id: 'm-dtan-face',
    name: 'Face D-Tan & Cleanups',
    description: 'Instant 30m glow, face D-Tan, anti-acne charcoal pore facial.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=600&q=80',
    icon: Flower2,
    priceStarting: 499,
    categoryKey: 'MenSkin'
  },
  {
    id: 'm-hair-spa',
    name: 'Hair Spa & Massage',
    description: 'Anti-stress scalp spa, almond oil head massage, anti-dandruff care.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    icon: Heart,
    priceStarting: 600,
    categoryKey: 'MenSpa'
  },
  {
    id: 'm-colour-treatments',
    name: 'Colour & Treatments',
    description: 'Natural grey coverage, modern hair perming, botox + haircut.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    icon: Gem,
    priceStarting: 1400,
    categoryKey: 'MenTreatments'
  }
];

export const HomePage: React.FC = () => {
  const { services, settings, navigate, openBookingModal, activeGender, setActiveGender } = useSalon();
  const [selectedMainModal, setSelectedMainModal] = useState<string | null>(null);

  // Active cards based on gender
  const currentCards = activeGender === 'women' ? WOMEN_SERVICES : MEN_SERVICES;

  // Filter 100% strictly by gender and category
  const getSubServices = (key: string, gender: 'women' | 'men'): ServiceItem[] => {
    if (gender === 'women') {
      const womenList = services.filter(s => s.gender === 'women');
      switch (key) {
        case 'Hair':
          return womenList.filter(s => s.category === 'Hair Styling');
        case 'HairTexture':
          return womenList.filter(s => s.category === 'Hair Texture Treatments');
        case 'HairColour':
          return womenList.filter(s => s.category === 'Hair Colour' || s.name.includes('Balayage') || s.name.includes('Highlights') || s.name.includes('Color'));
        case 'Skin':
          return womenList.filter(s => s.category === 'Skin Care & Facial');
        case 'Makeup':
          return womenList.filter(s => s.category === 'Makeup' || s.category === 'Bridal Services');
        case 'Nail':
          return womenList.filter(s => s.category === 'Nail Care' || s.category === 'Manicure & Pedicure');
        default:
          return womenList.slice(0, 8);
      }
    } else {
      const menList = services.filter(s => s.gender === 'men');
      switch (key) {
        case 'MenHair':
          return menList.filter(s => s.category === 'Hair Styling');
        case 'MenBeard':
          return menList.filter(s => s.category === 'Beard & Men\'s Grooming' && (s.name.toLowerCase().includes('shave') || s.name.toLowerCase().includes('beard')));
        case 'MenCombos':
          return menList.filter(s => s.name.includes('+'));
        case 'MenSkin':
          return menList.filter(s => s.category === 'Skin Care & Facial');
        case 'MenSpa':
          return menList.filter(s => s.category === 'Hair Care' || s.name.toLowerCase().includes('massage'));
        case 'MenTreatments':
          return menList.filter(s => s.category === 'Hair Texture Treatments' || s.category === 'Hair Colour' || s.category === 'Bridal Services');
        default:
          return menList.slice(0, 8);
      }
    }
  };

  const activeModalService = currentCards.find(m => m.id === selectedMainModal);
  const activeSubList = activeModalService ? getSubServices(activeModalService.categoryKey, activeGender) : [];

  const handleWhatsApp = (service: ServiceItem) => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${settings.salonName}! I want to book: *${service.name}* (${settings.currencySymbol}${service.price.toLocaleString('en-IN')}) for ${activeGender.toUpperCase()}. Please confirm available slots.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative z-10">
      
      {/* 1. Hero Section + 4 Badges Row (Image 1 Layout) */}
      <HeroSection />

      {/* 2. About Us Section (Image 1 Layout) */}
      <AboutSection />

      {/* 3. STRICTLY SEPARATED SERVICES SECTION */}
      <section className="relative py-16 sm:py-28 bg-[#0B291B]/85 backdrop-blur-[1px] text-[#F5EBDD] overflow-hidden border-t border-[#D5AD55]/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-1">
              <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
              <span className="font-serif italic text-base sm:text-lg">Atelier Services</span>
              <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] break-words">
              Select Your <span className="text-[#D5AD55]">Salon Discipline</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EBDD]/70 mt-1.5 sm:mt-2 font-light max-w-md mx-auto">
              Men's grooming and Women's salon are strictly separated. Choose your salon below to view dedicated treatments.
            </p>
          </div>

          {/* MASTER GENDER DUAL-SWITCH (100% UNMIXED & MOBILE FLUID) */}
          <div className="flex justify-center mb-8 sm:mb-12 px-2">
            <div className="p-1 sm:p-1.5 bg-[#041B12] border-2 border-[#D5AD55]/60 rounded-full inline-flex shadow-gold-glow max-w-full">
              <button
                onClick={() => {
                  setActiveGender('women');
                  setSelectedMainModal(null);
                }}
                className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 xs:px-6 sm:px-10 py-2 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest font-bold transition-all duration-300 ${
                  activeGender === 'women'
                    ? 'bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] shadow-gold-glow scale-102'
                    : 'text-[#F5EBDD]/70 hover:text-white'
                }`}
              >
                <Users size={14} className="shrink-0" />
                <span className="whitespace-nowrap">WOMEN'S SALON</span>
              </button>

              <button
                onClick={() => {
                  setActiveGender('men');
                  setSelectedMainModal(null);
                }}
                className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 xs:px-6 sm:px-10 py-2 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest font-bold transition-all duration-300 ${
                  activeGender === 'men'
                    ? 'bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] shadow-gold-glow scale-102'
                    : 'text-[#F5EBDD]/70 hover:text-white'
                }`}
              >
                <User size={14} className="shrink-0" />
                <span className="whitespace-nowrap">MEN'S GROOMING</span>
              </button>
            </div>
          </div>

          {/* Active Category Subheading */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#073B27] border border-[#D5AD55]/40 text-[#D5AD55] mb-1.5 sm:mb-2">
              {activeGender === 'women' ? '✨ Exclusive Women Atelier' : '✂️ Exclusive Men Barber Lounge'}
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#F5EBDD]">
              {activeGender === 'women' ? "Women's Beauty & Hairdressing" : "Men's Barbering & Combos"}
            </h3>
            <p className="text-[11px] sm:text-xs text-[#F5EBDD]/70 max-w-lg mx-auto mt-1 px-4">
              {activeGender === 'women'
                ? "Tap any service card to view complete women's rates & instant booking."
                : "Tap any card to view complete men's rates, haircut combos & grooming tariffs."}
            </p>
          </div>

          {/* 6 Arched Cards Grid (Fluid 2-col on mobile, 6-col on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
            {currentCards.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#073B27]/90 border border-[#D5AD55]/40 rounded-xl p-2.5 xs:p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-lg hover:border-[#D5AD55] hover:shadow-gold-glow transition-all duration-300 group"
              >
                {/* Arched Photo Frame */}
                <div
                  onClick={() => setSelectedMainModal(srv.id)}
                  className="w-full aspect-[4/5] rounded-t-full rounded-b-xl overflow-hidden border border-[#D5AD55]/50 relative mb-2.5 sm:mb-3 cursor-pointer group-hover:scale-[1.02] transition-transform bg-black"
                >
                  <img
                    src={srv.image}
                    alt={srv.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Round Gold Medallion Badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#073B27] border-2 border-[#D5AD55] text-[#D5AD55] flex items-center justify-center shadow-gold-glow">
                    <srv.icon size={12} className="text-[#D5AD55]" />
                  </div>
                </div>

                {/* Title, Description & Starting Rate */}
                <div className="flex-1 flex flex-col justify-between mb-2.5 sm:mb-3 w-full">
                  <h3
                    onClick={() => setSelectedMainModal(srv.id)}
                    className="font-serif text-xs xs:text-sm sm:text-base font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors cursor-pointer leading-snug"
                  >
                    {srv.name}
                  </h3>
                  <p className="text-[10px] xs:text-[11px] text-[#F5EBDD]/70 mt-1 line-clamp-2 leading-tight">
                    {srv.description}
                  </p>
                  <span className="font-serif text-[11px] sm:text-xs font-bold text-[#D5AD55] mt-1.5 block">
                    Starts {settings.currencySymbol}{srv.priceStarting.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Book Now Button (Direct In-Place Pure Pricing List, NO images) */}
                <button
                  onClick={() => setSelectedMainModal(srv.id)}
                  className="w-full py-1.5 px-2 sm:px-3 rounded text-[9px] xs:text-[10px] font-bold uppercase tracking-widest text-[#D5AD55] hover:text-[#073B27] bg-transparent hover:bg-[#D5AD55] border border-[#D5AD55] transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <Calendar size={11} />
                  BOOK NOW
                </button>
              </div>
            ))}
          </div>

          {/* Navigate to Dedicated Full Page Menu */}
          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => navigate('/services', activeGender)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#073B27] border border-[#D5AD55]/60 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D5AD55] hover:text-[#073B27] hover:bg-[#D5AD55] transition-all shadow-md active:scale-95"
            >
              <span>EXPLORE COMPLETE {activeGender === 'women' ? "WOMEN'S" : "MEN'S"} PRICING MENU</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* DIRECT IN-PLACE PRICING MODAL (100% Strictly That Gender's Rates, Zero Image Clutter) */}
      {selectedMainModal && activeModalService && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#041B12] border-2 border-[#D5AD55]/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#F5EBDD] max-h-[90vh] flex flex-col overflow-hidden my-auto">
            
            {/* Modal Header */}
            <div className="pb-4 border-b border-[#D5AD55]/30">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5AD55] block">
                    {activeGender === 'women' ? "Women's Atelier Tariff" : "Men's Barber Tariff"}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EBDD] mt-0.5">
                    {activeModalService.name}
                  </h3>
                  <p className="text-xs text-[#F5EBDD]/70 mt-0.5">
                    Fixed salon rates for {activeGender === 'women' ? "women" : "men"}. Instant booking confirmation.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMainModal(null)}
                  className="p-2 rounded-full bg-[#073B27] text-[#D5AD55] hover:text-white border border-[#D5AD55]/40"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Pure Pricing Rows (100% Filtered, NO Images!) */}
            <div className="flex-1 overflow-y-auto py-4 space-y-2.5 pr-1">
              {activeSubList.length === 0 ? (
                <div className="text-center py-8 text-[#F5EBDD]/60 text-xs">
                  No treatments found under this category. Please check the full menu.
                </div>
              ) : (
                activeSubList.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0B291B] hover:bg-[#073B27] border border-[#D5AD55]/30 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-[#D5AD55]">
                          {item.category}
                        </span>
                        {item.durationMinutes && (
                          <span className="text-[10px] text-[#F5EBDD]/50 flex items-center gap-0.5">
                            • <Clock size={10} className="inline" /> {item.durationMinutes}m
                          </span>
                        )}
                        <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-black/40 text-amber-300 border border-amber-500/20 font-bold">
                          {item.gender}
                        </span>
                      </div>

                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#F5EBDD]/70 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#D5AD55]/15">
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#D5AD55]">
                        {settings.currencySymbol}{item.price.toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleWhatsApp(item)}
                          className="p-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300"
                          title="Book via WhatsApp"
                        >
                          <MessageSquare size={14} />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedMainModal(null);
                            openBookingModal(item);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Bottom */}
            <div className="pt-3 border-t border-[#D5AD55]/30 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  setSelectedMainModal(null);
                  navigate('/services', activeGender);
                }}
                className="text-[#D5AD55] underline hover:text-white"
              >
                View Full {activeGender === 'women' ? "Women's" : "Men's"} Menu ›
              </button>
              <button
                onClick={() => setSelectedMainModal(null)}
                className="px-4 py-1.5 rounded-md bg-[#073B27] border border-[#D5AD55]/40 text-[#D5AD55] text-xs font-semibold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. Special Offer Banner (Image 1 Layout) */}
      <SpecialOfferBanner />

      {/* 5. Reviews & Google Rating */}
      <ReviewsSection />

      {/* 6. Location Desk & Google Map */}
      <LocationSection />

    </div>
  );
};
