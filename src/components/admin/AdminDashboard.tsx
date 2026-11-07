import React, { useState } from 'react';
import {
  Shield, X, Calendar, DollarSign, Package, Image as ImageIcon,
  MessageSquare, Settings, Check, Trash2, Edit2, Plus, SlidersHorizontal,
  Lock, LogOut, CheckCircle2, AlertCircle, Eye, EyeOff, Save, Phone, MapPin
} from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { ServiceItem, BeautyPackage, BeforeAfterItem, SpecialOffer, ServiceCategory } from '../../types';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const {
    settings,
    updateSettings,
    services,
    addService,
    updateService,
    deleteService,
    packages,
    updatePackage,
    transformations,
    addTransformation,
    updateTransformation,
    deleteTransformation,
    togglePublishTransformation,
    testimonials,
    deleteTestimonial,
    togglePublishTestimonial,
    offers,
    updateOffer,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    appointments,
    updateAppointmentStatus,
    deleteAppointment,
    isAdmin,
    loginAdmin,
    logoutAdmin
  } = useSalon();

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'appointments' | 'services' | 'packages' | 'transformations' | 'testimonials' | 'offers' | 'gallery' | 'settings'
  >('appointments');

  // Editing state for Services
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceCategory, setNewServiceCategory] = useState<ServiceCategory>('Hair Care');
  const [newServicePrice, setNewServicePrice] = useState<number>(999);
  const [newServiceDesc, setNewServiceDesc] = useState('');
  const [newServiceImage, setNewServiceImage] = useState('');

  // Editing state for Before & After
  const [newBATitle, setNewBATitle] = useState('');
  const [newBACategory, setNewBACategory] = useState('Hair Colour');
  const [newBAService, setNewBAService] = useState('');
  const [newBABeforeImg, setNewBABeforeImg] = useState('');
  const [newBAAfterImg, setNewBAAfterImg] = useState('');
  const [newBADesc, setNewBADesc] = useState('');

  // Editing state for Gallery
  const [newGalTitle, setNewGalTitle] = useState('');
  const [newGalCat, setNewGalCat] = useState('Hair Styling');
  const [newGalImg, setNewGalImg] = useState('');

  // Settings local state
  const [tempSettings, setTempSettings] = useState(settings);
  const [settingsSaved, setSettingsSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(passwordInput)) {
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('Invalid administrator password. Please try again.');
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(tempSettings);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  const handleCreateService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceName.trim()) return;
    addService({
      name: newServiceName.trim(),
      category: newServiceCategory,
      price: Number(newServicePrice) || 999,
      description: newServiceDesc.trim() || 'Premium bespoke salon service conducted with international formulations.',
      image: newServiceImage.trim() || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      durationMinutes: 45,
      gender: newServiceCategory.includes('Men') || newServiceCategory.includes('Beard') ? 'men' : 'women'
    });
    setNewServiceName('');
    setNewServiceDesc('');
    setNewServiceImage('');
  };

  const handleCreateBA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBATitle.trim() || !newBABeforeImg.trim() || !newBAAfterImg.trim()) return;
    addTransformation({
      title: newBATitle.trim(),
      category: newBACategory,
      service: newBAService.trim() || 'Salon Transformation',
      beforeImage: newBABeforeImg.trim(),
      afterImage: newBAAfterImg.trim(),
      description: newBADesc.trim() || 'Genuine client before and after transformation.',
      published: true,
      isSample: false
    });
    setNewBATitle('');
    setNewBAService('');
    setNewBABeforeImg('');
    setNewBAAfterImg('');
    setNewBADesc('');
  };

  const handleCreateGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalTitle.trim() || !newGalImg.trim()) return;
    addGalleryItem({
      title: newGalTitle.trim(),
      category: newGalCat,
      image: newGalImg.trim()
    });
    setNewGalTitle('');
    setNewGalImg('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[94vh] bg-[#073B27] border-2 border-[#D5AD55]/60 rounded-3xl shadow-2xl text-[#F5EBDD] flex flex-col overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="bg-[#041B12] px-6 py-4 border-b border-[#D5AD55]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D5AD55] text-[#073B27] flex items-center justify-center font-bold shadow-gold-glow">
              <Shield size={18} />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#F5EBDD] leading-tight">
                {settings.salonName} • Management Suite
              </h2>
              <p className="text-[10px] text-[#D5AD55] uppercase tracking-wider">
                Authorized Personnel Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={logoutAdmin}
                className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900/80 text-xs flex items-center gap-1.5 transition-colors"
              >
                <LogOut size={13} />
                Logout
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#073B27] text-[#D5AD55] hover:text-white border border-[#D5AD55]/30"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {!isAdmin ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-14 max-w-md mx-auto text-center my-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#0B291B] border-2 border-[#D5AD55] flex items-center justify-center text-[#D5AD55] mx-auto mb-6 shadow-gold-glow">
              <Lock size={32} />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#F5EBDD] mb-2">
              Staff Portal Login
            </h3>
            <p className="text-xs text-[#F5EBDD]/70 mb-6">
              Enter the staff credentials to update live prices, manage appointments, and configure salon details.
            </p>

            {authError && (
              <div className="mb-4 p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-red-300 text-xs flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter Admin Password (e.g. admin123)"
                  className="w-full bg-[#041B12] border border-[#D5AD55]/40 rounded-xl px-4 py-3 text-sm text-[#F5EBDD] placeholder-[#F5EBDD]/40 text-center focus:border-[#D5AD55] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.02] transition-all"
              >
                Access Control Panel
              </button>
            </form>

            <p className="text-[11px] text-[#F5EBDD]/40 mt-6">
              Default password: <span className="font-mono text-[#D5AD55]">admin123</span> or <span className="font-mono text-[#D5AD55]">nbsalon2026</span>
            </p>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-56 bg-[#041B12] p-3 border-r border-[#D5AD55]/20 flex md:flex-col gap-1 overflow-x-auto shrink-0 no-scrollbar text-xs">
              {[
                { id: 'appointments', label: 'Appointments', icon: Calendar, badge: appointments.filter(a => a.status === 'Pending').length },
                { id: 'services', label: 'Services & Prices', icon: DollarSign },
                { id: 'packages', label: '6 Packages', icon: Package },
                { id: 'transformations', label: 'Before & After', icon: SlidersHorizontal },
                { id: 'testimonials', label: 'Reviews', icon: MessageSquare },
                { id: 'offers', label: 'Special Offers', icon: CheckCircle2 },
                { id: 'gallery', label: 'Gallery Images', icon: ImageIcon },
                { id: 'settings', label: 'Salon Settings', icon: Settings },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#D5AD55] text-[#073B27] font-bold shadow-md'
                      : 'text-[#F5EBDD]/80 hover:bg-[#073B27] hover:text-[#FFF4D2]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <tab.icon size={15} />
                    <span>{tab.label}</span>
                  </span>
                  {Boolean(tab.badge) && (
                    <span className="px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px] font-bold">
                      {tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="flex-1 p-5 sm:p-7 overflow-y-auto bg-[#073B27]/80">
              
              {/* TAB 1: APPOINTMENTS */}
              {activeTab === 'appointments' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                        Customer Appointments ({appointments.length})
                      </h3>
                      <p className="text-xs text-[#F5EBDD]/70">
                        Review, confirm, complete, or reject client reservations.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {appointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="bg-[#0B291B] border border-[#D5AD55]/30 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#D5AD55] text-sm">
                              {apt.id}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              apt.status === 'Confirmed'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                                : apt.status === 'Pending'
                                ? 'bg-amber-950 text-amber-400 border border-amber-500/40'
                                : apt.status === 'Completed'
                                ? 'bg-blue-950 text-blue-400 border border-blue-500/40'
                                : 'bg-red-950 text-red-400 border border-red-500/40'
                            }`}>
                              {apt.status}
                            </span>
                            <span className="text-[#F5EBDD]/50 text-[10px]">
                              {apt.createdAt}
                            </span>
                          </div>

                          <div className="font-semibold text-sm text-[#F5EBDD]">
                            {apt.customerName} ({apt.gender}) •{' '}
                            <a href={`tel:${apt.phone}`} className="text-[#D5AD55] underline">
                              {apt.phone}
                            </a>
                          </div>

                          <div className="text-[#F5EBDD]/80">
                            <span className="text-[#D5AD55] font-medium">Service:</span>{' '}
                            {apt.packageName || apt.serviceName || 'General Consultation'}{' '}
                            {apt.totalPrice ? `(${settings.currencySymbol}${apt.totalPrice})` : ''}
                          </div>

                          <div className="text-[#F5EBDD]/70">
                            <span className="text-[#D5AD55] font-medium">Date & Slot:</span>{' '}
                            {apt.preferredDate} at {apt.preferredTime}
                          </div>

                          {apt.notes && (
                            <div className="text-[#F5EBDD]/60 italic bg-black/30 p-2 rounded-lg mt-1">
                              "{apt.notes}"
                            </div>
                          )}
                        </div>

                        {/* Status Controls */}
                        <div className="flex flex-wrap items-center gap-2 self-end md:self-center">
                          {apt.status === 'Pending' && (
                            <>
                              <button
                                onClick={() => updateAppointmentStatus(apt.id, 'Confirmed')}
                                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1"
                              >
                                <Check size={14} /> Approve
                              </button>
                              <button
                                onClick={() => updateAppointmentStatus(apt.id, 'Rejected')}
                                className="px-3 py-1.5 rounded-lg bg-red-800 hover:bg-red-700 text-white font-semibold text-xs"
                              >
                                Reject
                              </button>
                            </>
                          )}

                          {apt.status === 'Confirmed' && (
                            <button
                              onClick={() => updateAppointmentStatus(apt.id, 'Completed')}
                              className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs"
                            >
                              Mark Completed
                            </button>
                          )}

                          <button
                            onClick={() => deleteAppointment(apt.id)}
                            className="p-1.5 rounded-lg bg-black/40 text-[#F5EBDD]/50 hover:text-red-400 border border-white/10"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: SERVICES & PRICING */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Individual Services & Pricing
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Update service prices in real-time or add new offerings.
                    </p>
                  </div>

                  {/* Add New Service Form */}
                  <form onSubmit={handleCreateService} className="bg-[#0B291B] p-4 sm:p-5 rounded-2xl border border-[#D5AD55]/30 space-y-3 text-xs">
                    <span className="font-bold text-[#D5AD55] uppercase tracking-wider block">
                      + Add New Service
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Service Name (e.g. Nanoplastia)"
                        value={newServiceName}
                        onChange={(e) => setNewServiceName(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />

                      <select
                        value={newServiceCategory}
                        onChange={(e) => setNewServiceCategory(e.target.value as ServiceCategory)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      >
                        {[
                          'Hair Styling', 'Hair Care', 'Hair Texture Treatments', 'Hair Colour',
                          'Beard & Men\'s Grooming', 'Skin Care & Facial', 'Makeup', 'Nail Care',
                          'Bridal Services', 'Spa & Relaxation', 'Manicure & Pedicure'
                        ].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>

                      <input
                        type="number"
                        required
                        placeholder="Price (₹)"
                        value={newServicePrice}
                        onChange={(e) => setNewServicePrice(Number(e.target.value))}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Image URL (Unsplash or CDN)"
                        value={newServiceImage}
                        onChange={(e) => setNewServiceImage(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                      <input
                        type="text"
                        placeholder="Short description"
                        value={newServiceDesc}
                        onChange={(e) => setNewServiceDesc(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#D5AD55] text-[#073B27] font-bold text-xs uppercase tracking-wider"
                    >
                      Save Service
                    </button>
                  </form>

                  {/* Existing Services List */}
                  <div className="space-y-2">
                    {services.map((s) => (
                      <div
                        key={s.id}
                        className="bg-[#0B291B]/80 border border-[#D5AD55]/20 p-3 rounded-xl flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-[#D5AD55] uppercase font-bold">{s.category}</span>
                          <h4 className="font-bold text-[#F5EBDD] truncate">{s.name}</h4>
                        </div>

                        {/* Price Edit Input */}
                        <div className="flex items-center gap-2">
                          <span className="text-[#D5AD55] font-bold">₹</span>
                          <input
                            type="number"
                            value={s.price}
                            onChange={(e) => updateService(s.id, { price: Number(e.target.value) })}
                            className="w-24 bg-[#073B27] border border-[#D5AD55]/40 rounded-lg px-2 py-1 text-right text-xs font-bold text-[#D5AD55]"
                          />
                          <button
                            onClick={() => deleteService(s.id)}
                            className="p-1.5 text-red-400 hover:text-red-300"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: PACKAGES */}
              {activeTab === 'packages' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Manage 6 Beauty Packages
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Configure package rates, headlines, and treatment inclusions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="bg-[#0B291B] border border-[#D5AD55]/30 rounded-2xl p-5 space-y-3 text-xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <input
                            type="text"
                            value={pkg.title}
                            onChange={(e) => updatePackage(pkg.id, { title: e.target.value })}
                            className="font-serif font-bold text-base text-[#D5AD55] bg-transparent border-b border-[#D5AD55]/30 focus:outline-none flex-1"
                          />

                          <div className="flex items-center gap-2">
                            <span className="text-[#F5EBDD]/70">Price: ₹</span>
                            <input
                              type="number"
                              value={pkg.price}
                              onChange={(e) => updatePackage(pkg.id, { price: Number(e.target.value) })}
                              className="w-24 bg-[#073B27] border border-[#D5AD55]/40 rounded-lg px-2 py-1 text-[#D5AD55] font-bold text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-[#D5AD55] uppercase font-bold block mb-1">
                            Inclusions (One per line)
                          </label>
                          <textarea
                            rows={3}
                            value={pkg.inclusions.join('\n')}
                            onChange={(e) => updatePackage(pkg.id, { inclusions: e.target.value.split('\n').filter(Boolean) })}
                            className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl p-2.5 text-[#F5EBDD] font-mono text-xs"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: BEFORE & AFTER */}
              {activeTab === 'transformations' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Before & After Transformation Gallery
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Upload genuine salon before/after results with slider support.
                    </p>
                  </div>

                  {/* Add form */}
                  <form onSubmit={handleCreateBA} className="bg-[#0B291B] p-5 rounded-2xl border border-[#D5AD55]/30 space-y-3 text-xs">
                    <span className="font-bold text-[#D5AD55] uppercase tracking-wider block">
                      + Add New Client Transformation
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Transformation Title"
                        value={newBATitle}
                        onChange={(e) => setNewBATitle(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                      <input
                        type="text"
                        placeholder="Category (e.g. Keratin Treatment)"
                        value={newBACategory}
                        onChange={(e) => setNewBACategory(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                      <input
                        type="text"
                        placeholder="Service Used"
                        value={newBAService}
                        onChange={(e) => setNewBAService(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Before Image URL"
                        value={newBABeforeImg}
                        onChange={(e) => setNewBABeforeImg(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="After Image URL"
                        value={newBAAfterImg}
                        onChange={(e) => setNewBAAfterImg(e.target.value)}
                        className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Transformation notes & results"
                      value={newBADesc}
                      onChange={(e) => setNewBADesc(e.target.value)}
                      className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                    />

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#D5AD55] text-[#073B27] font-bold text-xs uppercase"
                    >
                      Publish Transformation
                    </button>
                  </form>

                  {/* List */}
                  <div className="space-y-3">
                    {transformations.map((t) => (
                      <div
                        key={t.id}
                        className="bg-[#0B291B]/80 border border-[#D5AD55]/30 rounded-xl p-4 flex items-center justify-between gap-4 text-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={t.afterImage} alt="" className="w-12 h-12 rounded-lg object-cover border border-[#D5AD55]/40" />
                          <div>
                            <span className="text-[10px] text-[#D5AD55] uppercase font-bold">{t.category}</span>
                            <h4 className="font-bold text-[#F5EBDD] truncate">{t.title}</h4>
                            <span className="text-[10px] text-[#F5EBDD]/60">{t.service}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => togglePublishTransformation(t.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                              t.published ? 'bg-emerald-800 text-white' : 'bg-gray-800 text-gray-400'
                            }`}
                          >
                            {t.published ? 'Published' : 'Hidden'}
                          </button>
                          <button
                            onClick={() => deleteTransformation(t.id)}
                            className="p-1.5 text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: TESTIMONIALS */}
              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Customer Feedback & Testimonials
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Manage genuine customer submissions and toggle website visibility.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {testimonials.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-[#0B291B] border border-[#D5AD55]/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-[#F5EBDD]">{rev.name}</span>
                            <span className="text-amber-400 font-bold">{rev.rating}★</span>
                            <span className="text-[10px] text-[#D5AD55]">({rev.source})</span>
                          </div>
                          <p className="text-[#F5EBDD]/80 italic">"{rev.review}"</p>
                          <span className="text-[10px] text-[#F5EBDD]/50">{rev.serviceUsed} • {rev.date}</span>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <button
                            onClick={() => togglePublishTestimonial(rev.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                              rev.published ? 'bg-emerald-800 text-white' : 'bg-gray-800 text-gray-400'
                            }`}
                          >
                            {rev.published ? 'Published' : 'Hidden'}
                          </button>
                          <button
                            onClick={() => deleteTestimonial(rev.id)}
                            className="p-1.5 text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: SPECIAL OFFERS */}
              {activeTab === 'offers' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Special Offers & Banners
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Toggle active seasonal packages and update promo pricing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {offers.map((off) => (
                      <div
                        key={off.id}
                        className="bg-[#0B291B] border border-[#D5AD55]/30 rounded-2xl p-5 space-y-3 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            value={off.title}
                            onChange={(e) => updateOffer(off.id, { title: e.target.value })}
                            className="font-serif font-bold text-base text-[#D5AD55] bg-transparent border-b border-[#D5AD55]/30 focus:outline-none flex-1"
                          />
                          <button
                            onClick={() => updateOffer(off.id, { active: !off.active })}
                            className={`px-3 py-1 rounded-lg text-xs font-bold ${
                              off.active ? 'bg-emerald-700 text-white' : 'bg-gray-700 text-gray-300'
                            }`}
                          >
                            {off.active ? 'Active' : 'Inactive'}
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] text-[#D5AD55] uppercase font-bold block mb-1">Price (₹)</label>
                            <input
                              type="number"
                              value={off.price || ''}
                              onChange={(e) => updateOffer(off.id, { price: Number(e.target.value) })}
                              className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-[#D5AD55] uppercase font-bold block mb-1">Claim Code</label>
                            <input
                              type="text"
                              value={off.claimCode || ''}
                              onChange={(e) => updateOffer(off.id, { claimCode: e.target.value })}
                              className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: GALLERY */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Lookbook Gallery Management
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Add and remove photographs in the high-res salon gallery.
                    </p>
                  </div>

                  <form onSubmit={handleCreateGallery} className="bg-[#0B291B] p-4 rounded-2xl border border-[#D5AD55]/30 flex flex-col sm:flex-row gap-3 text-xs">
                    <input
                      type="text"
                      required
                      placeholder="Photo Title"
                      value={newGalTitle}
                      onChange={(e) => setNewGalTitle(e.target.value)}
                      className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD] flex-1"
                    />
                    <select
                      value={newGalCat}
                      onChange={(e) => setNewGalCat(e.target.value)}
                      className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                    >
                      {[
                        'Hair Styling', 'Hair Transformations', 'Bridal Looks', 'Makeup',
                        'Skin Care', 'Nail Art', 'Men\'s Grooming', 'Salon Interior'
                      ].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <input
                      type="text"
                      required
                      placeholder="Image URL"
                      value={newGalImg}
                      onChange={(e) => setNewGalImg(e.target.value)}
                      className="bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD] flex-1"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#D5AD55] text-[#073B27] font-bold uppercase shrink-0"
                    >
                      Add Photo
                    </button>
                  </form>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {gallery.map((g) => (
                      <div key={g.id} className="relative rounded-xl overflow-hidden aspect-square border border-[#D5AD55]/30 group">
                        <img src={g.image} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <button
                            onClick={() => deleteGalleryItem(g.id)}
                            className="p-2 rounded-full bg-red-600 text-white"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 8: SALON SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                      Salon Business Details & Location
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70">
                      Update brand name, phone, WhatsApp number, physical address, and Google Place ID.
                    </p>
                  </div>

                  {settingsSaved && (
                    <div className="p-3 bg-emerald-950 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      <span>Salon business information successfully updated across the website!</span>
                    </div>
                  )}

                  <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Salon Brand Name</label>
                        <input
                          type="text"
                          value={tempSettings.salonName}
                          onChange={(e) => setTempSettings({ ...tempSettings, salonName: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">WhatsApp Number (e.g. 919876543210)</label>
                        <input
                          type="text"
                          value={tempSettings.whatsappNumber}
                          onChange={(e) => setTempSettings({ ...tempSettings, whatsappNumber: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Contact Phone</label>
                        <input
                          type="text"
                          value={tempSettings.phone}
                          onChange={(e) => setTempSettings({ ...tempSettings, phone: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Concierge Email</label>
                        <input
                          type="email"
                          value={tempSettings.email}
                          onChange={(e) => setTempSettings({ ...tempSettings, email: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#D5AD55] font-bold mb-1">Full Physical Address</label>
                      <input
                        type="text"
                        value={tempSettings.address}
                        onChange={(e) => setTempSettings({ ...tempSettings, address: e.target.value })}
                        className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Google Review URL</label>
                        <input
                          type="text"
                          value={tempSettings.googleReviewUrl}
                          onChange={(e) => setTempSettings({ ...tempSettings, googleReviewUrl: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Google Place ID</label>
                        <input
                          type="text"
                          value={tempSettings.googlePlaceId}
                          onChange={(e) => setTempSettings({ ...tempSettings, googlePlaceId: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Weekday Hours</label>
                        <input
                          type="text"
                          value={tempSettings.openingHoursWeekday}
                          onChange={(e) => setTempSettings({ ...tempSettings, openingHoursWeekday: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#D5AD55] font-bold mb-1">Weekend Hours</label>
                        <input
                          type="text"
                          value={tempSettings.openingHoursWeekend}
                          onChange={(e) => setTempSettings({ ...tempSettings, openingHoursWeekend: e.target.value })}
                          className="w-full bg-[#041B12] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-[#F5EBDD]"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold uppercase tracking-wider shadow-gold-glow flex items-center gap-2"
                      >
                        <Save size={15} /> Save Business Settings
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
