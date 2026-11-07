import React, { useState } from 'react';
import { Sparkles, Search, Calendar, Check, Clock } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory } from '../../types';

export const PricingSection: React.FC = () => {
  const { services, settings, openBookingModal } = useSalon();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Unique categories in services
  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pricing" className="relative py-24 bg-[#041B12] text-[#F5EBDD] overflow-hidden border-t border-[#D5AD55]/20">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#491D2B]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#073B27]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> Transparent Luxury
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            Individual Service{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Pricing Menu
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Every ritual is conducted by master craftspeople using authentic global formulations. No hidden charges.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#073B27]/60 border border-[#D5AD55]/30 rounded-2xl p-4 mb-10 shadow-lg backdrop-blur-md flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-3 text-[#D5AD55]/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments (e.g. Keratin, Hair Spa, Beard)..."
              className="w-full bg-[#0B291B] border border-[#D5AD55]/30 rounded-xl pl-10 pr-4 py-2 text-xs text-[#F5EBDD] placeholder-[#F5EBDD]/40 focus:border-[#D5AD55] focus:outline-none"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#D5AD55] text-[#073B27] font-bold border-[#D5AD55]'
                    : 'bg-[#0B291B]/80 text-[#F5EBDD]/70 border-[#D5AD55]/20 hover:border-[#D5AD55]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Pricing List Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0B291B]/70 border border-[#D5AD55]/25 hover:border-[#D5AD55]/60 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:bg-[#0B291B] hover:shadow-lg group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5AD55]">
                    {service.category}
                  </span>
                  {service.durationMinutes && (
                    <span className="text-[10px] text-[#F5EBDD]/50 flex items-center gap-0.5">
                      • <Clock size={10} className="inline ml-1" /> {service.durationMinutes}m
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors truncate">
                  {service.name}
                </h4>

                <p className="text-xs text-[#F5EBDD]/65 line-clamp-1 mt-0.5">
                  {service.description}
                </p>
              </div>

              {/* Price & Book Button */}
              <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                <div className="font-serif text-lg sm:text-xl font-bold text-[#D5AD55]">
                  {settings.currencySymbol}{service.price.toLocaleString('en-IN')}
                </div>

                <button
                  onClick={() => openBookingModal(service)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#073B27] hover:bg-[#D5AD55] text-[#D5AD55] hover:text-[#073B27] border border-[#D5AD55]/40 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1"
                >
                  <Calendar size={12} />
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-[#F5EBDD]/60 text-sm">
            No matching services found for "{searchQuery}". Try browsing by category or reset search.
          </div>
        )}

        {/* Master Highlights Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#073B27]/80 via-[#0B291B]/80 to-[#491D2B]/80 border border-[#D5AD55]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#D5AD55]">
              Looking for a custom combination package?
            </h4>
            <p className="text-xs text-[#F5EBDD]/80 mt-1">
              Check out our 6 curated head-to-toe beauty and skin rejuvenation packages below for up to 35% bundled privileges.
            </p>
          </div>

          <a
            href="#packages"
            className="px-6 py-2.5 rounded-full bg-[#D5AD55] text-[#073B27] font-bold text-xs uppercase tracking-wider hover:bg-[#FFF4D2] transition-colors whitespace-nowrap shadow-gold-glow"
          >
            Explore 6 Packages
          </a>
        </div>

      </div>
    </section>
  );
};
