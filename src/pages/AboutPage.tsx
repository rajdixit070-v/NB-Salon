import React from 'react';
import { Scissors, Sparkles, ShieldCheck, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useSalon } from '../context/SalonContext';

export const AboutPage: React.FC = () => {
  const { settings, navigate, openBookingModal } = useSalon();

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#073B27]/85 backdrop-blur-[1px] text-[#F5EBDD] min-h-screen relative z-10">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="flex items-center justify-center gap-3 text-[#D5AD55] mb-2">
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
          <span className="font-serif italic text-base sm:text-lg">Our Story & Heritage</span>
          <span className="w-8 h-[1px] bg-[#D5AD55]/60" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5EBDD]">
          Redefining Beauty, <span className="text-[#D5AD55]">The Royal Way</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-3 max-w-2xl mx-auto font-light leading-relaxed">
          Where master craftsmanship meets personalized luxury. An international atelier created for both discerning men and women.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Layout (matching Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Salon Interior Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D5AD55]/40 shadow-2xl max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80"
                alt="Royal NB Salon Interior with Arched Illuminated Mirrors"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#073B27]/90 backdrop-blur-md border border-[#D5AD55]/30 text-xs italic font-serif text-[#D5AD55]">
                "An oasis of refined luxury where style meets elegance."
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Plaque */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EBDD]">
                Our Philosophy & Vision
              </h2>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                At Royal NB Unisex Salon & Spa, we believe beauty is more than just looks – it's about confidence, self-care, and expression. Our mission is to provide you with an exceptional salon experience with personalized care and premium services.
              </p>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                Every client journey begins with an in-depth consultation. Whether you are looking for an executive taper fade, clinical skin rejuvenation, or couture bridal glam, our team of directors and master colorists craft a personalized ritual for you.
              </p>
            </div>

            {/* Plaque & Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl border-2 border-[#D5AD55] bg-[#0B291B] shadow-gold-glow flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#073B27] border border-[#D5AD55]/60 flex items-center justify-center text-[#D5AD55] shrink-0">
                  <Scissors size={26} className="transform -rotate-45" />
                </div>
                <div>
                  <div className="font-serif text-3xl font-extrabold text-[#D5AD55]">5+ Years</div>
                  <div className="text-[11px] text-[#F5EBDD]/80 uppercase font-semibold">Of Excellence in Beauty</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-2 border-[#D5AD55]/40 bg-[#0B291B] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#073B27] border border-[#D5AD55]/60 flex items-center justify-center text-[#D5AD55] shrink-0">
                  <Award size={26} />
                </div>
                <div>
                  <div className="font-serif text-3xl font-extrabold text-[#D5AD55]">18,000+</div>
                  <div className="text-[11px] text-[#F5EBDD]/80 uppercase font-semibold">Happy Unisex Guests</div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3 rounded-md bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:scale-105 transition-all"
              >
                BOOK AN APPOINTMENT
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-6 py-3 rounded-md border border-[#D5AD55] text-[#D5AD55] font-bold text-xs uppercase tracking-widest hover:bg-[#D5AD55] hover:text-[#073B27] transition-all"
              >
                VIEW ALL SERVICES & PRICING
              </button>
            </div>
          </div>

        </div>

        {/* 4 Core Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#D5AD55]/20">
          {[
            { title: "Pure Gold Hygiene", desc: "Hospital-grade autoclaved instruments & sealed single-use kits." },
            { title: "Global Formulations", desc: "100% authentic Redken, L'Oréal Majirel, Olaplex & Kérastase." },
            { title: "Director Consultations", desc: "Detailed hair & skin diagnostic analysis before every ritual." },
            { title: "Unisex Comfort", desc: "Private styling bays & dedicated gentlemen's executive grooming lounge." }
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#0B291B]/80 border border-[#D5AD55]/30">
              <CheckCircle2 size={18} className="text-[#D5AD55] mb-2" />
              <h4 className="font-serif text-sm font-bold text-[#F5EBDD]">{item.title}</h4>
              <p className="text-xs text-[#F5EBDD]/70 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
