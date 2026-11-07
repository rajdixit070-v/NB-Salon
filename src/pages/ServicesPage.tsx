import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MessageSquare, Search, User, Users, Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSalon } from '../context/SalonContext';
import { ServiceItem } from '../types';

export const ServicesPage: React.FC = () => {
  const { services, settings, openBookingModal, activeGender, setActiveGender } = useSalon();

  // 1. PRIMARY GENDER TOGGLE (MENS & WOMENS 100% SEPARATED WITH ZERO MIXING)
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMainService, setExpandedMainService] = useState<string | null>(null);

  // Women's Categories & Men's Categories
  const womenSubTabs = [
    { id: 'all', label: 'All Women Services' },
    { id: 'hair-styling', label: 'Hair Cut & Styling' },
    { id: 'hair-care', label: 'Hair Spa & Care' },
    { id: 'hair-texture', label: 'Keratin, Smoothening & Botox' },
    { id: 'hair-colour', label: 'Hair Colour & Balayage' },
    { id: 'skin', label: 'Skin Care & Facials' },
    { id: 'makeup', label: 'Bridal & Makeup' },
    { id: 'nails', label: 'Nail Care & Extensions' },
    { id: 'spa', label: 'Spa & Pedicure' }
  ];

  const menSubTabs = [
    { id: 'all', label: 'All Men Services' },
    { id: 'hair-beard', label: 'Haircut & Fade' },
    { id: 'beard-shave', label: 'Beard Sculpting & Royal Shave' },
    { id: 'combos', label: 'Men\'s Value Combos' },
    { id: 'spa-care', label: 'Hair Spa & Scalp Massage' },
    { id: 'skin-facials', label: 'D-Tan, Cleanups & Facials' },
    { id: 'treatments', label: 'Hair Colour & Perming' },
    { id: 'groom', label: 'Pre-Groom Wedding Packages' }
  ];

  // 100% Strict separation: zero unisex mixing
  const isServiceForActiveGender = (s: ServiceItem) => {
    return s.gender === activeGender;
  };

  // Sub-category filter mapping
  const matchesSubCategory = (s: ServiceItem) => {
    if (activeSubCategory === 'all') return true;
    if (activeGender === 'women') {
      if (activeSubCategory === 'hair-styling') return s.category === 'Hair Styling';
      if (activeSubCategory === 'hair-care') return s.category === 'Hair Care';
      if (activeSubCategory === 'hair-texture') return s.category === 'Hair Texture Treatments';
      if (activeSubCategory === 'hair-colour') return s.category === 'Hair Colour';
      if (activeSubCategory === 'skin') return s.category === 'Skin Care & Facial';
      if (activeSubCategory === 'makeup') return s.category === 'Makeup' || s.category === 'Bridal Services';
      if (activeSubCategory === 'nails') return s.category === 'Nail Care';
      if (activeSubCategory === 'spa') return s.category === 'Spa & Relaxation' || s.category === 'Manicure & Pedicure';
    } else {
      if (activeSubCategory === 'hair-beard') return s.category === 'Hair Styling';
      if (activeSubCategory === 'beard-shave') return s.category === 'Beard & Men\'s Grooming' && (s.name.toLowerCase().includes('shave') || s.name.toLowerCase().includes('beard'));
      if (activeSubCategory === 'combos') return s.category === 'Beard & Men\'s Grooming' && s.name.includes('+');
      if (activeSubCategory === 'spa-care') return s.category === 'Hair Care';
      if (activeSubCategory === 'skin-facials') return s.category === 'Skin Care & Facial';
      if (activeSubCategory === 'treatments') return s.category === 'Hair Texture Treatments' || s.category === 'Hair Colour';
      if (activeSubCategory === 'groom') return s.category === 'Bridal Services';
    }
    return true;
  };

  const filteredServices = services
    .filter(isServiceForActiveGender)
    .filter(matchesSubCategory)
    .filter((s) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return s.name.toLowerCase().includes(q) ||
             s.description.toLowerCase().includes(q) ||
             s.category.toLowerCase().includes(q) ||
             s.price.toString().includes(q);
    });

  const handleWhatsAppBooking = (service: ServiceItem) => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${settings.salonName}! I want to book: *${service.name}* (${settings.currencySymbol}${service.price.toLocaleString('en-IN')}) for ${activeGender.toUpperCase()}. Please let me know your available slots.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-2">
            <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
            <span className="font-serif italic text-base sm:text-lg">Atelier Tariff</span>
            <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5EBDD]">
            Salon Services & <span className="text-[#D5AD55]">Pricing Menu</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-2 font-light">
            Pure transparent salon pricing. Choose your menu below to view all treatments and book instantly.
          </p>
        </div>

        {/* 1. PRIMARY GENDER TOGGLE (SEPARATING MEN & WOMEN AS IN RAGHAV SALON) */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="p-1 sm:p-1.5 bg-[#041B12] border-2 border-[#D5AD55]/60 rounded-full inline-flex shadow-gold-glow">
            <button
              onClick={() => {
                setActiveGender('women');
                setActiveSubCategory('all');
              }}
              className={`flex items-center justify-center gap-2 px-6 sm:px-10 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                activeGender === 'women'
                  ? 'bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] shadow-lg scale-102'
                  : 'text-[#F5EBDD]/70 hover:text-white'
              }`}
            >
              <Users size={16} />
              <span>WOMEN'S MENU</span>
            </button>

            <button
              onClick={() => {
                setActiveGender('men');
                setActiveSubCategory('all');
              }}
              className={`flex items-center justify-center gap-2 px-6 sm:px-10 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                activeGender === 'men'
                  ? 'bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] shadow-lg scale-102'
                  : 'text-[#F5EBDD]/70 hover:text-white'
              }`}
            >
              <User size={16} />
              <span>MEN'S MENU</span>
            </button>
          </div>

          <p className="text-[11px] text-[#D5AD55] mt-2.5 uppercase font-medium tracking-wider">
            {activeGender === 'women'
              ? '✨ Couture Hairdressing, Keratin, Skin Facials, Makeup & Bridal for Women'
              : '✂️ Precision Fades, Beard Sculpting, Combos, D-Tan & Grooming for Men'}
          </p>
        </div>

        {/* 2. SUB-FILTERS & SEARCH BAR */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-[#0B291B]/80 p-3 rounded-2xl border border-[#D5AD55]/30">
          
          {/* Sub-Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {(activeGender === 'women' ? womenSubTabs : menSubTabs).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  activeSubCategory === tab.id
                    ? 'bg-[#D5AD55] text-[#073B27] font-bold border-[#D5AD55] shadow-sm'
                    : 'bg-[#073B27]/80 text-[#F5EBDD]/75 border-[#D5AD55]/20 hover:border-[#D5AD55]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search size={14} className="absolute left-3.5 top-3 text-[#D5AD55]/70 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeGender} treatments or price...`}
              className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-full pl-9 pr-4 py-2 text-xs text-[#F5EBDD] placeholder-[#F5EBDD]/40 focus:border-[#D5AD55] focus:outline-none"
            />
          </div>

        </div>

        {/* 3. PURE PRICING LIST ROWS (User requested: "uspr hi sirf pricing dikhaye image wagaira nhi") */}
        <div className="space-y-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0B291B]/90 hover:bg-[#0B291B] border border-[#D5AD55]/30 hover:border-[#D5AD55] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-md group"
            >
              {/* Service Information (No Cluttering Images!) */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] text-[#D5AD55] uppercase font-bold tracking-wider">
                    {service.category}
                  </span>
                  {service.durationMinutes && (
                    <span className="text-[10px] text-[#F5EBDD]/60 flex items-center gap-0.5">
                      • <Clock size={11} className="inline ml-0.5" /> {service.durationMinutes} mins
                    </span>
                  )}
                  {service.isPopular && (
                    <span className="px-2 py-0.2 bg-[#D5AD55]/20 text-[#FFF4D2] border border-[#D5AD55]/40 rounded text-[9px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-[#F5EBDD]/75 mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price & Book Now Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#D5AD55]/20">
                <div className="text-left sm:text-right">
                  <span className="text-[9px] uppercase text-[#F5EBDD]/50 block leading-none">Rate</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#D5AD55]">
                    {settings.currencySymbol}{service.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppBooking(service)}
                    className="p-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 transition-colors"
                    title="Book on WhatsApp"
                  >
                    <MessageSquare size={15} />
                  </button>

                  <button
                    onClick={() => openBookingModal(service)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <Calendar size={13} />
                    BOOK NOW
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-[#0B291B]/40 rounded-2xl border border-[#D5AD55]/20 p-8 text-[#F5EBDD]/70 text-xs">
            No matching treatments found for "{searchQuery}". Try browsing by category above.
          </div>
        )}

      </div>
    </div>
  );
};
