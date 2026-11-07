import React, { useState } from 'react';
import { MessageSquare, Phone, X, Send, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

export const FloatingConcierge: React.FC = () => {
  const { settings, openBookingModal } = useSalon();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`*Client Concierge Enquiry:*\n${inputMessage.trim()}\n\n(Sent via ${settings.salonName} Website Concierge)`);
    const waUrl = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(waUrl, '_blank');
    setInputMessage('');
    setIsOpen(false);
  };

  const openWhatsAppDirect = () => {
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`Hello ${settings.salonName}! I would like to enquire about salon services and availability.`);
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Concierge Chat Bubble (Glamour style) */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-gradient-to-b from-[#36141F] to-[#291713] border border-[#D5AD55]/50 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden text-[#F5EBDD] animate-fadeIn">
          {/* Header */}
          <div className="bg-[#491D2B] p-4 border-b border-[#D5AD55]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Concierge Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#D5AD55]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#491D2B]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#F5EBDD]">Salon Concierge</h4>
                <p className="text-[10px] text-[#D5AD55]">Online • Instant Assistance</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#D5AD55] hover:text-white p-1 rounded-full hover:bg-black/20"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-xs">
            <div className="bg-[#491D2B]/60 p-3 rounded-xl border border-[#D5AD55]/20">
              <p className="leading-relaxed">
                Hi! Need help booking an appointment or customized styling consultation?
              </p>
            </div>

            {/* Quick Action Pills */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openBookingModal();
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#073B27]/80 hover:bg-[#073B27] border border-[#D5AD55]/30 flex items-center justify-between text-[#F5EBDD] font-medium group transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#D5AD55]" />
                  Book an appointment
                </span>
                <ChevronRight size={14} className="text-[#D5AD55] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  const s = document.querySelector('#services');
                  if (s) s.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#291713]/80 hover:bg-[#291713] border border-[#D5AD55]/30 flex items-center justify-between text-[#F5EBDD] font-medium group transition-all"
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#D5AD55]" />
                  View all services & prices
                </span>
                <ChevronRight size={14} className="text-[#D5AD55] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openWhatsAppDirect}
                className="w-full text-left p-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900/90 border border-emerald-500/40 flex items-center justify-between text-emerald-200 font-medium group transition-all"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare size={14} className="text-emerald-400" />
                  Chat directly on WhatsApp
                </span>
                <ChevronRight size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick input */}
            <form onSubmit={handleSendQuery} className="pt-2 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-[#1C0F0C] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] placeholder-[#F5EBDD]/40 focus:border-[#D5AD55] focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#D5AD55] text-[#073B27] hover:bg-[#FFF4D2] transition-colors font-bold shadow-gold-glow flex items-center justify-center"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#36141F]/90 backdrop-blur-md border border-[#D5AD55]/50 text-xs font-semibold text-[#F5EBDD] shadow-xl cursor-pointer hover:border-[#D5AD55] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>Need salon assistance?</span>
          </div>
        )}

        {/* WhatsApp & Concierge Toggle Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Call */}
          <a
            href={`tel:${settings.phone}`}
            className="w-11 h-11 rounded-full bg-[#073B27] border border-[#D5AD55]/50 text-[#D5AD55] hover:text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all"
            title="Call Salon"
          >
            <Phone size={18} />
          </a>

          {/* Toggle Concierge */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-13 h-13 p-3 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] flex items-center justify-center shadow-gold-glow hover:scale-110 active:scale-95 transition-all relative group"
            aria-label="Open Salon Concierge"
          >
            {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-[#073B27]" />
          </button>
        </div>
      </div>
    </div>
  );
};
