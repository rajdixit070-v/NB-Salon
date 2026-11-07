import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Shield, MessageSquare } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

export const Footer: React.FC = () => {
  const { settings, navigate } = useSalon();

  return (
    <footer className="relative bg-[#041B12] text-[#F5EBDD] border-t border-[#D5AD55]/30 pt-12 sm:pt-16 pb-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Pillars Row matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#D5AD55]/20">
          
          {/* Col 1: Our Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#D5AD55] uppercase tracking-wider">
              <MapPin size={15} />
              <span>Our Location</span>
            </div>
            <p className="text-xs text-[#F5EBDD]/80 leading-relaxed max-w-[240px]">
              {settings.address}
            </p>
          </div>

          {/* Col 2: Call Us */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#D5AD55] uppercase tracking-wider">
              <Phone size={15} />
              <span>Call Us</span>
            </div>
            <a
              href={`tel:${settings.phone}`}
              className="text-xs text-[#F5EBDD]/80 hover:text-[#D5AD55] block font-medium"
            >
              {settings.phone}
            </a>
          </div>

          {/* Col 3: Email Us */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#D5AD55] uppercase tracking-wider">
              <Mail size={15} />
              <span>Email Us</span>
            </div>
            <a
              href={`mailto:${settings.email}`}
              className="text-xs text-[#F5EBDD]/80 hover:text-[#D5AD55] block font-medium"
            >
              {settings.email}
            </a>
          </div>

          {/* Col 4: Follow Us */}
          <div className="space-y-2">
            <span className="text-xs font-serif font-bold text-[#D5AD55] uppercase tracking-wider block">
              Follow Us
            </span>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#073B27] border border-[#D5AD55]/50 text-[#D5AD55] hover:text-[#073B27] hover:bg-[#D5AD55] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#073B27] border border-[#D5AD55]/50 text-[#D5AD55] hover:text-[#073B27] hover:bg-[#D5AD55] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#073B27] border border-[#D5AD55]/50 text-[#D5AD55] hover:text-[#073B27] hover:bg-emerald-500 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#073B27] border border-[#D5AD55]/50 text-[#D5AD55] hover:text-[#073B27] hover:bg-red-600 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Navigation Links & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5EBDD]/60 gap-3">
          <p>© 2026 {settings.salonName}. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button onClick={() => navigate('/')} className="hover:text-[#D5AD55]">Home</button>
            <button onClick={() => navigate('/about')} className="hover:text-[#D5AD55]">About</button>
            <button onClick={() => navigate('/services')} className="hover:text-[#D5AD55]">Services & Pricing</button>
            <button onClick={() => navigate('/packages')} className="hover:text-[#D5AD55]">Packages</button>
            <button onClick={() => navigate('/gallery')} className="hover:text-[#D5AD55]">Gallery</button>
            <button onClick={() => navigate('/contact')} className="hover:text-[#D5AD55]">Contact</button>
            <span>|</span>
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-1 text-[#D5AD55] hover:text-white transition-colors"
            >
              <Shield size={12} />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
