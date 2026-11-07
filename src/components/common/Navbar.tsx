import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Shield } from 'lucide-react';
import { useSalon, PageRoute } from '../../context/SalonContext';

export const Navbar: React.FC = () => {
  const { currentPage, navigate, settings, openBookingModal, activeGender } = useSalon();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; route?: PageRoute; action?: () => void; isGender?: 'women' | 'men' }[] = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    {
      name: "Women's Salon",
      action: () => navigate('/services', 'women'),
      isGender: 'women'
    },
    {
      name: "Men's Salon",
      action: () => navigate('/services', 'men'),
      isGender: 'men'
    },
    { name: 'Packages', route: '/packages' },
    { name: 'Gallery', route: '/gallery' },
    { name: 'Contact', route: '/contact' },
  ];

  const handleNavClick = (target: PageRoute | { name: string; route?: PageRoute; action?: () => void; isGender?: 'women' | 'men' }) => {
    setMobileMenuOpen(false);
    if (typeof target === 'string') {
      navigate(target);
    } else if (target.action) {
      target.action();
    } else if (target.route) {
      navigate(target.route);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || currentPage !== '/'
            ? 'bg-[#073B27]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-[#D5AD55]/30'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Royal NB Crown Crest */}
          <button
            onClick={() => handleNavClick({ name: 'Home', route: '/' })}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] p-[1.5px] shadow-gold-glow group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#073B27] flex items-center justify-center">
                <span className="font-serif font-black text-[#D5AD55] text-xs sm:text-sm tracking-wider">RNB</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent leading-none">
                ROYAL NB
              </span>
              <span className="text-[7.5px] sm:text-[9px] uppercase tracking-[0.25em] text-[#D5AD55]/90 font-sans font-medium mt-0.5">
                UNISEX SALON & SPA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = link.isGender
                ? (currentPage === '/services' && activeGender === link.isGender)
                : (link.route ? currentPage === link.route : false);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`text-xs uppercase tracking-widest font-medium transition-all relative py-1 group/link ${
                    isActive ? 'text-[#D5AD55] font-bold' : 'text-[#F5EBDD]/90 hover:text-[#D5AD55]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#D5AD55] to-[#FFF4D2] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="px-5 py-2.5 rounded-md bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow hover:shadow-[0_0_25px_rgba(213,173,85,0.7)] hover:scale-105 active:scale-95 transition-all border border-[#FFF4D2]/40"
            >
              <Calendar size={14} className="text-[#073B27]" />
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Mobile Menu Toggle & Quick Action */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBookingModal()}
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#D5AD55] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center gap-1.5 active:scale-95 transition-transform"
              aria-label="Book"
            >
              <Calendar size={14} />
              <span className="hidden xs:inline">Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-lg bg-[#073B27] text-[#D5AD55] border border-[#D5AD55]/40 flex items-center justify-center shadow-md active:scale-90 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={22} className="text-[#D5AD55]" />
              ) : (
                <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                  <span className="w-5 h-[2px] bg-[#D5AD55] rounded-full transition-transform" />
                  <span className="w-3.5 h-[2px] bg-[#D5AD55] rounded-full self-start transition-all" />
                  <span className="w-5 h-[2px] bg-[#D5AD55] rounded-full transition-transform" />
                </div>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* LUXURY SLIDE-IN MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn flex justify-end">
          
          {/* Backdrop Dimmer */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Body */}
          <div className="relative w-full max-w-[320px] xs:max-w-sm h-full bg-[#041B12] border-l border-[#D5AD55]/40 shadow-2xl flex flex-col justify-between p-5 xs:p-6 z-10 overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D5AD55]/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] p-[1.5px] shadow-gold-glow">
                    <div className="w-full h-full rounded-full bg-[#073B27] flex items-center justify-center">
                      <span className="font-serif font-black text-[#D5AD55] text-xs">RNB</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#F5EBDD] leading-tight">
                      ROYAL NB <span className="text-[#D5AD55]">SALON</span>
                    </h3>
                    <span className="text-[9px] text-[#D5AD55]/80 uppercase tracking-widest block font-sans">
                      Unisex Salon & Spa
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#073B27] text-[#D5AD55] border border-[#D5AD55]/40 flex items-center justify-center active:scale-90 transition-transform"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Quick Gender Menu Tabs Inside Drawer */}
              <div className="grid grid-cols-2 gap-2 mt-4 p-1 rounded-xl bg-[#073B27]/90 border border-[#D5AD55]/30">
                <button
                  onClick={() => {
                    handleNavClick({ name: "Women's Salon", action: () => navigate('/services', 'women'), isGender: 'women' });
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-all ${
                    currentPage === '/services' && activeGender === 'women'
                      ? 'bg-gradient-to-r from-[#D5AD55] to-[#B8923C] text-[#073B27] shadow-sm'
                      : 'text-[#F5EBDD]/80 hover:text-white'
                  }`}
                >
                  👩 Women
                </button>
                <button
                  onClick={() => {
                    handleNavClick({ name: "Men's Salon", action: () => navigate('/services', 'men'), isGender: 'men' });
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-all ${
                    currentPage === '/services' && activeGender === 'men'
                      ? 'bg-gradient-to-r from-[#D5AD55] to-[#B8923C] text-[#073B27] shadow-sm'
                      : 'text-[#F5EBDD]/80 hover:text-white'
                  }`}
                >
                  👨 Men
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-4 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = link.isGender
                    ? (currentPage === '/services' && activeGender === link.isGender)
                    : (link.route ? currentPage === link.route : false);
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className={`text-left font-serif text-base transition-colors py-2.5 px-3 rounded-lg flex items-center justify-between ${
                        isActive
                          ? 'bg-[#073B27] text-[#D5AD55] font-bold border-l-4 border-[#D5AD55]'
                          : 'text-[#F5EBDD] hover:bg-[#073B27]/50 hover:text-[#D5AD55]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-[#D5AD55]">›</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="pt-4 border-t border-[#D5AD55]/30 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-gold-glow active:scale-98 transition-all"
              >
                <Calendar size={15} />
                <span>BOOK APPOINTMENT</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${settings.phone}`}
                  className="py-2.5 rounded-lg bg-[#073B27] text-[#D5AD55] border border-[#D5AD55]/40 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Phone size={13} /> Call
                </a>

                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Luxe%20Salon!%20I%20want%20to%20inquire%20about%20salon%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95"
                >
                  💬 WhatsApp
                </a>
              </div>

              {/* Salon Micro-Details */}
              <div className="pt-2 text-[10px] text-[#F5EBDD]/60 text-center space-y-0.5 font-light">
                <p>📍 123, Luxury Street, South Delhi - 110065</p>
                <p>⏰ 10:00 AM – 09:00 PM (Daily)</p>
              </div>

              <div className="text-center pt-1">
                <button
                  onClick={() => handleNavClick('/admin')}
                  className="text-[10px] text-[#D5AD55]/70 hover:text-[#D5AD55] underline flex items-center justify-center gap-1 mx-auto"
                >
                  <Shield size={11} /> Staff Login Portal
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
