import React, { useState } from 'react';
import { Sparkles, Calendar, X, Clock, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory, ServiceItem } from '../../types';

// The 11 Core Service Categories for Circular Hubs
interface CategoryMeta {
  name: ServiceCategory;
  shortName: string;
  image: string;
  startingPrice: number;
}

const CATEGORIES_CIRCLES: CategoryMeta[] = [
  {
    name: 'Hair Styling',
    shortName: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80',
    startingPrice: 450
  },
  {
    name: 'Hair Care',
    shortName: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80',
    startingPrice: 650
  },
  {
    name: 'Hair Texture Treatments',
    shortName: 'Hair Texture',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80',
    startingPrice: 1499
  },
  {
    name: 'Hair Colour',
    shortName: 'Hair Colour',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    startingPrice: 1199
  },
  {
    name: 'Beard & Men\'s Grooming',
    shortName: 'Men\'s Grooming',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80',
    startingPrice: 600
  },
  {
    name: 'Skin Care & Facial',
    shortName: 'Skin & Facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
    startingPrice: 499
  },
  {
    name: 'Makeup',
    shortName: 'Makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
    startingPrice: 2999
  },
  {
    name: 'Nail Care',
    shortName: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=400&q=80',
    startingPrice: 999
  },
  {
    name: 'Bridal Services',
    shortName: 'Bridal',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80',
    startingPrice: 4999
  },
  {
    name: 'Spa & Relaxation',
    shortName: 'Spa Rituals',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80',
    startingPrice: 2499
  },
  {
    name: 'Manicure & Pedicure',
    shortName: 'Mani & Pedi',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=400&q=80',
    startingPrice: 1199
  }
];

// The 6 Signature Showcase Cards matching Image 1
const SHOWCASE_CARDS = [
  {
    category: 'Hair Styling' as ServiceCategory,
    name: 'Hair Styling',
    description: 'Cut, color, style – perfect for you.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Skin Care & Facial' as ServiceCategory,
    name: 'Skin Care',
    description: 'Rejuvenate and glow with our treatments.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Makeup' as ServiceCategory,
    name: 'Makeup',
    description: 'Look stunning for every occasion.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Nail Care' as ServiceCategory,
    name: 'Nail Art',
    description: 'Trendy designs for beautiful nails.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Bridal Services' as ServiceCategory,
    name: 'Bridal Package',
    description: 'Special bridal care for your big day.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'Spa & Relaxation' as ServiceCategory,
    name: 'Spa & Relaxation',
    description: 'Relax your mind and revitalize your body.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
  }
];

export const ServicesSection: React.FC = () => {
  const { services, settings, openBookingModal } = useSalon();
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<ServiceCategory | null>(null);

  // Filter services for the selected modal
  const modalServices = selectedCategoryModal
    ? services.filter(s => s.category === selectedCategoryModal)
    : [];

  const handleOpenCategory = (cat: ServiceCategory) => {
    setSelectedCategoryModal(cat);
  };

  const handleWhatsAppBooking = (service: ServiceItem) => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const message = `Hello ${settings.salonName}! I want to book: *${service.name}* (${settings.currencySymbol}${service.price.toLocaleString('en-IN')}). Please confirm available slots.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0B291B] text-[#F5EBDD] overflow-hidden border-t border-[#D5AD55]/20">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D5AD55]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#491D2B]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Luxe Styling with flourishes) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-1">
            <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
            <span className="font-serif italic text-base sm:text-lg">Our Services</span>
            <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD]">
            Premium Services <span className="text-[#D5AD55]">Just For You</span>
          </h2>
          <p className="text-xs text-[#F5EBDD]/70 mt-2 font-light">
            Tap any service circle below to explore full treatments, details and complete transparent pricing.
          </p>
        </div>

        {/* 1. CIRCULAR SERVICE HUBS (User requested: "jo bhi services hai sbka name alg alg wo circle me kr do aur us services ko usi ke andr rakho jb particular ek services pe click kre tb wo page open hoye aur pricing jaisa jo kuch hai sb dikhe") */}
        <div className="mb-16">
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-4 sm:gap-6 no-scrollbar pt-2">
            {CATEGORIES_CIRCLES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenCategory(cat.name)}
                className="flex flex-col items-center group shrink-0 focus:outline-none transition-transform hover:scale-105 active:scale-95"
              >
                {/* The Golden Circle Frame */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] shadow-gold-glow group-hover:shadow-[0_0_20px_rgba(213,173,85,0.8)] transition-all">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#073B27] relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Circle Category Name */}
                <span className="mt-2.5 text-xs font-serif font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors max-w-[90px] text-center leading-tight">
                  {cat.shortName}
                </span>
                <span className="text-[10px] text-[#D5AD55]/80 font-sans mt-0.5">
                  From {settings.currencySymbol}{cat.startingPrice}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. SIX FEATURED ARCHED SERVICE CARDS (Exact Luxe Layout from Image 1) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {SHOWCASE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#073B27]/90 border border-[#D5AD55]/40 rounded-xl p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-lg hover:border-[#D5AD55] hover:shadow-gold-glow transition-all duration-300 group"
            >
              {/* Arched Photo Frame (Exact Luxe Arch) */}
              <div
                onClick={() => handleOpenCategory(card.category)}
                className="w-full aspect-[4/5] rounded-t-full rounded-b-xl overflow-hidden border border-[#D5AD55]/50 relative mb-3 cursor-pointer group-hover:scale-[1.02] transition-transform"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Center Gold Crest Icon overlay */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#073B27] border border-[#D5AD55] text-[#D5AD55] flex items-center justify-center text-[10px] font-bold shadow-md">
                  ✨
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-between mb-3 w-full">
                <h3
                  onClick={() => handleOpenCategory(card.category)}
                  className="font-serif text-sm sm:text-base font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors cursor-pointer"
                >
                  {card.name}
                </h3>
                <p className="text-[11px] text-[#F5EBDD]/70 mt-1 line-clamp-2 leading-snug">
                  {card.description}
                </p>
              </div>

              {/* Book Now Button (Exact Luxe small gold outline button) */}
              <button
                onClick={() => handleOpenCategory(card.category)}
                className="w-full py-1.5 px-3 rounded text-[10px] font-bold uppercase tracking-widest text-[#D5AD55] hover:text-[#073B27] bg-transparent hover:bg-[#D5AD55] border border-[#D5AD55] transition-all"
              >
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* DEDICATED CATEGORY SERVICE PAGE / MODAL WITH ALL PRICING */}
      {selectedCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#073B27] to-[#041B12] border-2 border-[#D5AD55]/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#F5EBDD] max-h-[90vh] flex flex-col overflow-hidden my-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#D5AD55]/30">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D5AD55] font-bold">
                  <Sparkles size={14} /> Complete Treatment & Pricing Menu
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EBDD] mt-1">
                  {selectedCategoryModal}
                </h3>
                <p className="text-xs text-[#F5EBDD]/70 mt-0.5">
                  Authentic global formulations with transparent pricing. No hidden fees.
                </p>
              </div>

              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="p-2 rounded-full bg-[#0B291B] text-[#D5AD55] hover:text-white border border-[#D5AD55]/40 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* List of all Treatments in this Category with exact prices */}
            <div className="flex-1 overflow-y-auto py-5 space-y-3.5 pr-1">
              {modalServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-[#0B291B]/80 hover:bg-[#0B291B] border border-[#D5AD55]/30 hover:border-[#D5AD55]/70 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 shadow-md group"
                >
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#D5AD55]/40 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors">
                          {service.name}
                        </h4>
                        {service.isPopular && (
                          <span className="px-2 py-0.5 rounded-full bg-[#D5AD55] text-[#073B27] text-[9px] font-black uppercase tracking-wider shrink-0">
                            Signature
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#F5EBDD]/75 mt-1 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>

                      {service.durationMinutes && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#D5AD55]/80 mt-1.5 font-medium">
                          <Clock size={12} /> {service.durationMinutes} Minutes Duration
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & Booking Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#D5AD55]/20">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase text-[#F5EBDD]/50 block">Price</span>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#D5AD55]">
                        {settings.currencySymbol}{service.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleWhatsAppBooking(service)}
                        className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-500/40 text-emerald-300 transition-colors"
                        title="Book via WhatsApp"
                      >
                        <MessageSquare size={16} />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCategoryModal(null);
                          openBookingModal(service);
                        }}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                      >
                        <Calendar size={13} />
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {modalServices.length === 0 && (
                <div className="text-center py-12 text-[#F5EBDD]/60 text-xs">
                  Services for this category will be updated shortly. You can book a custom consultation anytime.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#D5AD55]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#F5EBDD]/70 text-[11px]">
                Need a combination treatment? Call our desk at <a href={`tel:${settings.phone}`} className="text-[#D5AD55] underline">{settings.phone}</a>
              </span>

              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="px-5 py-2 rounded-md bg-[#0B291B] border border-[#D5AD55]/40 text-[#D5AD55] font-semibold hover:bg-[#D5AD55] hover:text-[#073B27] transition-all"
              >
                Back to Salon
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
