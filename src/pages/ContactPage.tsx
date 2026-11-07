import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, PhoneCall, Send, CheckCircle2 } from 'lucide-react';
import { useSalon } from '../context/SalonContext';

export const ContactPage: React.FC = () => {
  const { settings, openBookingModal } = useSalon();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const text = `*New Contact Query:*\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n💬 *Message:* ${message}`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const handleDirections = () => {
    const encoded = encodeURIComponent(settings.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] min-h-screen relative z-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-2">
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
          <span className="font-serif italic text-base sm:text-lg">Location & Concierge</span>
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5EBDD]">
          Contact & <span className="text-[#D5AD55]">Find Us</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-3 max-w-2xl mx-auto font-light leading-relaxed">
          We welcome you to our flagship atelier. Dedicated valet parking and private styling bays available upon appointment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info + Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Col: Contact Information (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B291B] border-2 border-[#D5AD55]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-luxury space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5AD55] bg-[#073B27] px-3 py-1 rounded-full border border-[#D5AD55]/30 inline-block mb-4">
                Flagship Sanctuary
              </span>

              <h2 className="font-serif text-2xl font-bold text-[#F5EBDD]">
                Concierge Desk
              </h2>

              <div className="mt-6 space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">Address</span>
                    <span className="text-[#F5EBDD]/85 leading-relaxed block mt-0.5">{settings.address}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">Call Desk</span>
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
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">Email</span>
                    <a href={`mailto:${settings.email}`} className="text-[#F5EBDD]/90 hover:text-[#D5AD55] block mt-0.5">
                      {settings.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#073B27] border border-[#D5AD55]/40 flex items-center justify-center text-[#D5AD55] shrink-0 mt-0.5">
                    <Clock size={15} />
                  </div>
                  <div>
                    <span className="font-bold text-[#D5AD55] uppercase block text-[10px] tracking-wider">Hours</span>
                    <span className="text-[#F5EBDD]/80 block mt-0.5">{settings.openingHoursWeekday}</span>
                    <span className="text-[#F5EBDD]/80 block">{settings.openingHoursWeekend}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#D5AD55]/20">
              <button
                onClick={handleDirections}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <Navigation size={15} />
                Get Directions on Google Maps
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${settings.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-[#073B27] border border-[#D5AD55]/40 text-[#D5AD55] text-xs font-semibold flex items-center justify-center gap-1.5 hover:text-white transition-colors"
                >
                  <PhoneCall size={14} /> Call Now
                </a>
                <button
                  onClick={() => openBookingModal()}
                  className="py-2.5 px-3 rounded-xl bg-[#073B27] border border-[#D5AD55]/40 text-[#D5AD55] text-xs font-semibold flex items-center justify-center gap-1.5 hover:text-white transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>

          {/* Right Col: Google Map (7 cols) */}
          <div className="lg:col-span-7 min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden border-2 border-[#D5AD55]/40 relative bg-black shadow-luxury">
            <iframe
              src={settings.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location Map"
              className="w-full h-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>

        {/* Quick Message Form */}
        <div className="max-w-2xl mx-auto bg-[#0B291B]/80 border border-[#D5AD55]/30 rounded-3xl p-6 sm:p-8">
          <h3 className="font-serif text-xl font-bold text-[#F5EBDD] text-center mb-1">
            Send a Direct Concierge Message
          </h3>
          <p className="text-xs text-[#F5EBDD]/70 text-center mb-6">
            Have questions regarding bridal consultations or bespoke hair color? Message us below.
          </p>

          {sent && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Query sent to concierge! We will respond shortly.</span>
            </div>
          )}

          <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#D5AD55] font-bold mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Shalini Roy"
                  className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#D5AD55] font-bold mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#D5AD55] font-bold mb-1">Your Message or Query</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you are looking for..."
                className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <Send size={14} /> Send Message via WhatsApp
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
