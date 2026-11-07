import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, Sparkles, PhoneCall } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

export const LocationSection: React.FC = () => {
  const { settings, openBookingModal } = useSalon();

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(settings.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleWhatsApp = () => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(settings.salonName)},%20I%20would%20like%20to%20visit%20the%20salon.`, '_blank');
  };

  return (
    <section id="location" className="relative py-16 sm:py-24 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] overflow-hidden border-t border-[#D5AD55]/30">
      
      {/* Golden Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D5AD55]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> Visit The Salon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            Our Location &{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Reservation Desk
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Conveniently situated in the luxury quarter with dedicated valet parking and private dressing lounges.
          </p>
        </div>

        {/* Master Location Card (Glamour & Luxe Fusion) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border-2 border-[#D5AD55]/40 bg-[#0B291B] shadow-luxury p-2">
          
          {/* Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 min-h-[350px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#D5AD55]/30 relative">
            <iframe
              src={settings.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className="w-full h-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#073B27]/95 backdrop-blur-md p-3 rounded-xl border border-[#D5AD55]/40 text-xs shadow-lg max-w-xs">
              <span className="font-serif font-bold text-[#D5AD55] block">
                {settings.salonName}
              </span>
              <span className="text-[11px] text-[#F5EBDD]/70 line-clamp-1">
                {settings.address}
              </span>
            </div>
          </div>

          {/* Details & Actions (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#073B27] text-[#D5AD55] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D5AD55]/30">
                <MapPin size={13} /> Flagship Sanctuary
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#F5EBDD] leading-snug">
                Reserve Your Appointment Today
              </h3>

              <div className="mt-6 space-y-4 text-xs">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">
                      Business Address
                    </span>
                    <span className="text-[#F5EBDD]/80 leading-relaxed block mt-0.5">
                      {settings.address}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">
                      Direct Concierge
                    </span>
                    <a href={`tel:${settings.phone}`} className="text-[#F5EBDD]/90 hover:text-[#D5AD55] font-semibold block mt-0.5">
                      {settings.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">
                      VIP Enquiries
                    </span>
                    <a href={`mailto:${settings.email}`} className="text-[#F5EBDD]/80 hover:text-[#D5AD55] block mt-0.5">
                      {settings.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <Clock size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-[#F5EBDD]/80 block mt-0.5">
                      {settings.openingHoursWeekday}
                    </span>
                    <span className="text-[#F5EBDD]/80 block">
                      {settings.openingHoursWeekend}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#D5AD55]/20 space-y-3">
              <button
                onClick={handleGetDirections}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <Navigation size={15} />
                Get Directions via Google Maps
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${settings.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-[#073B27] border border-[#D5AD55]/40 text-[#D5AD55] hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall size={14} /> Call Now
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="py-2.5 px-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare size={14} /> WhatsApp
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
