import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageSquare, AlertCircle, PhoneCall, Sparkles } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';

const TIME_SLOTS = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '02:00 PM',
  '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
  '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM',
  '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'
];

export const BookingModal: React.FC = () => {
  const {
    bookingModalOpen,
    closeBookingModal,
    preselectedService,
    preselectedPackage,
    services,
    packages,
    settings,
    createAppointment
  } = useSalon();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState<'female' | 'male' | 'other'>('female');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [confirmedId, setConfirmedId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Default to tomorrow's date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Update when preselected items change
  useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
      setSelectedPackageId('');
      if (preselectedService.gender === 'men') setGender('male');
      else if (preselectedService.gender === 'women') setGender('female');
    } else if (preselectedPackage) {
      setSelectedPackageId(preselectedPackage.id);
      setSelectedServiceId('');
    } else {
      setSelectedServiceId('');
      setSelectedPackageId('');
    }
    setConfirmedId(null);
    setErrorMsg('');
  }, [preselectedService, preselectedPackage, bookingModalOpen]);

  if (!bookingModalOpen) return null;

  const currentService = services.find(s => s.id === selectedServiceId);
  const currentPackage = packages.find(p => p.id === selectedPackageId);
  const estimatedPrice = currentService ? currentService.price : currentPackage ? currentPackage.price : 0;

  const validate = () => {
    if (!customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return false;
    }
    if (!selectedServiceId && !selectedPackageId) {
      setErrorMsg('Please select at least one service or package.');
      return false;
    }
    if (!preferredDate) {
      setErrorMsg('Please select your preferred appointment date.');
      return false;
    }
    if (!preferredTime) {
      setErrorMsg('Please choose a preferred time slot.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleOnlineBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const result = createAppointment({
      customerName,
      phone,
      gender,
      serviceId: selectedServiceId || undefined,
      serviceName: currentService?.name,
      packageId: selectedPackageId || undefined,
      packageName: currentPackage?.title,
      preferredDate,
      preferredTime,
      notes: notes.trim() || undefined,
      totalPrice: estimatedPrice
    });

    setSubmitting(false);

    if (result.success && result.id) {
      setConfirmedId(result.id);
    } else {
      setErrorMsg(result.error || 'Failed to submit booking. Please try an alternate slot.');
    }
  };

  const handleWhatsAppBooking = () => {
    if (!validate()) return;

    // Create entry in booking system
    const result = createAppointment({
      customerName,
      phone,
      gender,
      serviceId: selectedServiceId || undefined,
      serviceName: currentService?.name,
      packageId: selectedPackageId || undefined,
      packageName: currentPackage?.title,
      preferredDate,
      preferredTime,
      notes: notes.trim() || undefined,
      totalPrice: estimatedPrice
    });

    const itemName = currentPackage ? currentPackage.title : currentService ? currentService.name : 'General Consultation';
    const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');

    const message = `*NEW APPOINTMENT BOOKING REQUEST* ✨
-----------------------------------------
🏛️ *Salon:* ${settings.salonName}
👤 *Client Name:* ${customerName}
📞 *Mobile:* ${phone}
🚻 *Gender:* ${gender.toUpperCase()}
💅 *Selected Service/Package:* ${itemName}
💰 *Est. Amount:* ${settings.currencySymbol}${estimatedPrice.toLocaleString('en-IN')}
📅 *Preferred Date:* ${preferredDate}
⏰ *Preferred Time:* ${preferredTime}
${notes ? `📝 *Special Notes:* ${notes}\n` : ''}-----------------------------------------
Please confirm my appointment slot. Thank you!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;

    if (result.success && result.id) {
      setConfirmedId(result.id);
    }

    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#0B291B] to-[#041B12] border border-[#D5AD55]/50 rounded-2xl p-6 sm:p-8 text-[#F5EBDD] shadow-luxury my-8">
        
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-4 right-4 p-2 text-[#D5AD55] hover:text-white rounded-full bg-[#073B27]/80 border border-[#D5AD55]/30 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {confirmedId ? (
          /* Confirmation View */
          <div className="text-center py-8 px-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#073B27] border-2 border-[#D5AD55] flex items-center justify-center text-[#D5AD55] shadow-gold-glow mb-6">
              <CheckCircle size={44} />
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#F5EBDD] mb-2">
              Appointment Request Received!
            </h3>
            <p className="text-sm text-[#D5AD55] font-semibold tracking-wider mb-4">
              BOOKING REFERENCE: {confirmedId}
            </p>

            <div className="bg-[#073B27]/60 border border-[#D5AD55]/30 rounded-xl p-5 max-w-md mx-auto text-left mb-6 text-sm">
              <div className="flex justify-between py-1 border-b border-[#D5AD55]/15">
                <span className="text-[#F5EBDD]/70">Guest Name:</span>
                <span className="font-semibold text-[#F5EBDD]">{customerName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D5AD55]/15">
                <span className="text-[#F5EBDD]/70">Service / Package:</span>
                <span className="font-semibold text-[#D5AD55]">
                  {currentPackage ? currentPackage.title : currentService ? currentService.name : 'Salon Service'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D5AD55]/15">
                <span className="text-[#F5EBDD]/70">Date & Time:</span>
                <span className="font-semibold text-[#F5EBDD]">{preferredDate} at {preferredTime}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#F5EBDD]/70">Estimated Amount:</span>
                <span className="font-semibold text-[#D5AD55]">
                  {settings.currencySymbol}{estimatedPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F5EBDD]/70 max-w-md mx-auto mb-6 leading-relaxed">
              * Note: Your appointment slot is currently registered as <span className="text-amber-400 font-semibold">Pending</span>. Our front desk concierge will confirm your slot via call or WhatsApp shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={closeBookingModal}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-semibold text-sm hover:shadow-gold-glow transition-all"
              >
                Done / Return to Salon
              </button>
              <a
                href={`tel:${settings.phone}`}
                className="px-6 py-2.5 rounded-full bg-[#073B27] border border-[#D5AD55]/50 text-[#F5EBDD] hover:text-[#D5AD55] font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall size={16} />
                Call Salon Desk
              </a>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#D5AD55] uppercase flex items-center justify-center gap-1.5 mb-1">
                <Sparkles size={14} /> VIP Concierge Booking
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EBDD]">
                Reserve Your Luxury Experience
              </h2>
              <p className="text-xs text-[#F5EBDD]/70 mt-1">
                Select your preferred ritual, date & time. Men and women welcome.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleOnlineBooking} className="space-y-4 text-xs">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#D5AD55] font-medium mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-3 text-[#D5AD55]/60" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rohini Sharma / Aryan Khanna"
                      className="w-full bg-[#073B27]/60 border border-[#D5AD55]/30 rounded-xl pl-9 pr-3 py-2.5 text-[#F5EBDD] placeholder-[#F5EBDD]/30 focus:border-[#D5AD55] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#D5AD55] font-medium mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-3 text-[#D5AD55]/60" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#073B27]/60 border border-[#D5AD55]/30 rounded-xl pl-9 pr-3 py-2.5 text-[#F5EBDD] placeholder-[#F5EBDD]/30 focus:border-[#D5AD55] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Gender Selector */}
              <div>
                <label className="block text-[#D5AD55] font-medium mb-1">
                  Guest Gender *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['female', 'male', 'other'] as const).map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setGender(g)}
                      className={`py-2 rounded-xl text-center font-medium capitalize border transition-all ${
                        gender === g
                          ? 'bg-[#D5AD55] text-[#073B27] border-[#D5AD55] font-bold shadow-gold-glow'
                          : 'bg-[#073B27]/40 text-[#F5EBDD]/80 border-[#D5AD55]/20 hover:border-[#D5AD55]/50'
                      }`}
                    >
                      {g === 'female' ? 'Women / Female' : g === 'male' ? 'Men / Grooming' : 'Other'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service & Package Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#D5AD55] font-medium mb-1">
                    Select Individual Service
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => {
                      setSelectedServiceId(e.target.value);
                      if (e.target.value) setSelectedPackageId('');
                    }}
                    className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2.5 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                  >
                    <option value="">-- Choose Individual Service --</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({settings.currencySymbol}{s.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#D5AD55] font-medium mb-1">
                    OR Select Beauty Package
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => {
                      setSelectedPackageId(e.target.value);
                      if (e.target.value) setSelectedServiceId('');
                    }}
                    className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2.5 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                  >
                    <option value="">-- Choose Beauty Package --</option>
                    {packages.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({settings.currencySymbol}{p.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#D5AD55] font-medium mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3 top-3 text-[#D5AD55]/60 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#073B27]/60 border border-[#D5AD55]/30 rounded-xl pl-9 pr-3 py-2 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#D5AD55] font-medium mb-1">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock size={15} className="absolute left-3 top-3 text-[#D5AD55]/60 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl pl-9 pr-3 py-2 text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[#D5AD55] font-medium mb-1">
                  Special Notes or Stylist Preference (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Sensitive scalp, bridal consultation, preference for quiet appointment..."
                  className="w-full bg-[#073B27]/60 border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD] placeholder-[#F5EBDD]/30 focus:border-[#D5AD55] focus:outline-none"
                />
              </div>

              {/* Price Estimate Summary */}
              {estimatedPrice > 0 && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#073B27]/60 border border-[#D5AD55]/30 text-xs">
                  <span className="text-[#F5EBDD]/80">Estimated Price:</span>
                  <span className="font-serif text-base font-bold text-[#D5AD55]">
                    {settings.currencySymbol}{estimatedPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              {/* Actions: Direct WhatsApp Booking & Online Booking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/30 transition-all border border-emerald-400/40"
                >
                  <MessageSquare size={16} />
                  Book Instantly on WhatsApp
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  <Sparkles size={16} />
                  {submitting ? 'Submitting...' : 'Submit Booking Enquiry'}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-[#F5EBDD]/50">
                  Appointments are subject to salon confirmation. Call{' '}
                  <a href={`tel:${settings.phone}`} className="text-[#D5AD55] underline hover:text-white">
                    {settings.phone}
                  </a>{' '}
                  for urgent slots.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
