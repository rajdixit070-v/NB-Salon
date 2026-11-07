import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  BeautyPackage,
  BeforeAfterItem,
  TestimonialItem,
  SpecialOffer,
  GalleryItem,
  Appointment,
  SalonSettings
} from '../types';
import {
  defaultSettings,
  defaultServices,
  defaultPackages,
  defaultOffers,
  defaultTransformations,
  defaultTestimonials,
  defaultGallery,
  defaultAppointments
} from '../data/defaultData';

export type PageRoute = '/' | '/about' | '/services' | '/packages' | '/gallery' | '/contact' | '/admin';

interface SalonContextType {
  // Navigation / Routing
  currentPage: PageRoute;
  navigate: (page: PageRoute, gender?: 'women' | 'men') => void;
  activeGender: 'women' | 'men';
  setActiveGender: (gender: 'women' | 'men') => void;

  settings: SalonSettings;
  updateSettings: (newSettings: Partial<SalonSettings>) => void;

  services: ServiceItem[];
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;

  packages: BeautyPackage[];
  updatePackage: (id: string, pkg: Partial<BeautyPackage>) => void;

  transformations: BeforeAfterItem[];
  addTransformation: (item: Omit<BeforeAfterItem, 'id'>) => void;
  updateTransformation: (id: string, item: Partial<BeforeAfterItem>) => void;
  deleteTransformation: (id: string) => void;
  togglePublishTransformation: (id: string) => void;

  testimonials: TestimonialItem[];
  addTestimonial: (item: Omit<TestimonialItem, 'id' | 'date'>) => void;
  updateTestimonial: (id: string, item: Partial<TestimonialItem>) => void;
  deleteTestimonial: (id: string) => void;
  togglePublishTestimonial: (id: string) => void;

  offers: SpecialOffer[];
  updateOffer: (id: string, offer: Partial<SpecialOffer>) => void;
  addOffer: (offer: Omit<SpecialOffer, 'id'>) => void;
  deleteOffer: (id: string) => void;

  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;

  appointments: Appointment[];
  createAppointment: (appointment: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => { success: boolean; id?: string; error?: string };
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  deleteAppointment: (id: string) => void;

  // Booking Modal State
  bookingModalOpen: boolean;
  preselectedService?: ServiceItem;
  preselectedPackage?: BeautyPackage;
  openBookingModal: (service?: ServiceItem, pkg?: BeautyPackage) => void;
  closeBookingModal: () => void;

  // Lightbox State
  lightboxImage: { url: string; title: string; category?: string } | null;
  openLightbox: (url: string, title: string, category?: string) => void;
  closeLightbox: () => void;

  // Admin Auth State
  isAdmin: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

function getSaved<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Failed reading ${key} from localStorage`, e);
    return fallback;
  }
}

export const SalonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hash-based Page Routing
  const getInitialRoute = (): PageRoute => {
    const hash = window.location.hash.replace(/^#/, '');
    if (['/about', '/services', '/packages', '/gallery', '/contact', '/admin'].includes(hash)) {
      return hash as PageRoute;
    }
    return '/';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);
  const [activeGender, setActiveGender] = useState<'women' | 'men'>('women');

  const navigate = (page: PageRoute, gender?: 'women' | 'men') => {
    if (gender) {
      setActiveGender(gender);
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (['/', '/about', '/services', '/packages', '/gallery', '/contact', '/admin'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [settings, setSettings] = useState<SalonSettings>(() => {
    const saved = getSaved<SalonSettings | null>('nb_settings_v3', null);
    if (saved && saved.salonName === 'Royal NB Unisex Salon') {
      return saved;
    }
    return defaultSettings;
  });
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = getSaved<ServiceItem[] | null>('nb_services_v3', null);
    if (saved && Array.isArray(saved) && saved.length > 0) {
      return saved;
    }
    return defaultServices;
  });
  const [packages, setPackages] = useState<BeautyPackage[]>(() => getSaved('nb_packages', defaultPackages));
  const [transformations, setTransformations] = useState<BeforeAfterItem[]>(() => getSaved('nb_transformations', defaultTransformations));
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => getSaved('nb_testimonials', defaultTestimonials));
  const [offers, setOffers] = useState<SpecialOffer[]>(() => getSaved('nb_offers', defaultOffers));
  const [gallery, setGallery] = useState<GalleryItem[]>(() => getSaved('nb_gallery', defaultGallery));
  const [appointments, setAppointments] = useState<Appointment[]>(() => getSaved('nb_appointments', defaultAppointments));

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | undefined>(undefined);
  const [preselectedPackage, setPreselectedPackage] = useState<BeautyPackage | undefined>(undefined);

  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; category?: string } | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem('nb_admin_auth') === 'true';
  });

  // Sync to localStorage
  useEffect(() => { localStorage.setItem('nb_settings_v3', JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem('nb_services_v3', JSON.stringify(services)); }, [services]);
  useEffect(() => { localStorage.setItem('nb_packages', JSON.stringify(packages)); }, [packages]);
  useEffect(() => { localStorage.setItem('nb_transformations', JSON.stringify(transformations)); }, [transformations]);
  useEffect(() => { localStorage.setItem('nb_testimonials', JSON.stringify(testimonials)); }, [testimonials]);
  useEffect(() => { localStorage.setItem('nb_offers', JSON.stringify(offers)); }, [offers]);
  useEffect(() => { localStorage.setItem('nb_gallery', JSON.stringify(gallery)); }, [gallery]);
  useEffect(() => { localStorage.setItem('nb_appointments', JSON.stringify(appointments)); }, [appointments]);

  const updateSettings = (newSettings: Partial<SalonSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addService = (item: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = { ...item, id: `srv-${Date.now()}` };
    setServices(prev => [newService, ...prev]);
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const updatePackage = (id: string, updated: Partial<BeautyPackage>) => {
    setPackages(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const addTransformation = (item: Omit<BeforeAfterItem, 'id'>) => {
    const newItem: BeforeAfterItem = { ...item, id: `ba-${Date.now()}` };
    setTransformations(prev => [newItem, ...prev]);
  };

  const updateTransformation = (id: string, item: Partial<BeforeAfterItem>) => {
    setTransformations(prev => prev.map(t => t.id === id ? { ...t, ...item } : t));
  };

  const deleteTransformation = (id: string) => {
    setTransformations(prev => prev.filter(t => t.id !== id));
  };

  const togglePublishTransformation = (id: string) => {
    setTransformations(prev => prev.map(t => t.id === id ? { ...t, published: !t.published } : t));
  };

  const addTestimonial = (item: Omit<TestimonialItem, 'id' | 'date'>) => {
    const newTestimonial: TestimonialItem = {
      ...item,
      id: `rev-${Date.now()}`,
      date: 'Just now'
    };
    setTestimonials(prev => [newTestimonial, ...prev]);
  };

  const updateTestimonial = (id: string, item: Partial<TestimonialItem>) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, ...item } : t));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const togglePublishTestimonial = (id: string) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, published: !t.published } : t));
  };

  const updateOffer = (id: string, offer: Partial<SpecialOffer>) => {
    setOffers(prev => prev.map(o => o.id === id ? { ...o, ...offer } : o));
  };

  const addOffer = (offer: Omit<SpecialOffer, 'id'>) => {
    const newOffer: SpecialOffer = { ...offer, id: `off-${Date.now()}` };
    setOffers(prev => [newOffer, ...prev]);
  };

  const deleteOffer = (id: string) => {
    setOffers(prev => prev.filter(o => o.id !== id));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = { ...item, id: `gal-${Date.now()}` };
    setGallery(prev => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  };

  // Appointment management with double booking check
  const createAppointment = (appointmentData: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => {
    const isSlotTaken = appointments.some(
      apt => apt.preferredDate === appointmentData.preferredDate &&
             apt.preferredTime === appointmentData.preferredTime &&
             apt.status === 'Confirmed'
    );

    if (isSlotTaken) {
      return {
        success: false,
        error: `The slot ${appointmentData.preferredTime} on ${appointmentData.preferredDate} is already confirmed. Please pick another slot.`
      };
    }

    const newId = `APT-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const createdAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newAppointment: Appointment = {
      ...appointmentData,
      id: newId,
      status: 'Pending',
      createdAt
    };

    setAppointments(prev => [newAppointment, ...prev]);
    return { success: true, id: newId };
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status } : apt));
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  const openBookingModal = (service?: ServiceItem, pkg?: BeautyPackage) => {
    setPreselectedService(service);
    setPreselectedPackage(pkg);
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
    setPreselectedService(undefined);
    setPreselectedPackage(undefined);
  };

  const openLightbox = (url: string, title: string, category?: string) => {
    setLightboxImage({ url, title, category });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const loginAdmin = (password: string) => {
    if (password === 'admin123' || password === 'nbsalon2026' || password === 'luxury@salon') {
      setIsAdmin(true);
      sessionStorage.setItem('nb_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('nb_admin_auth');
  };

  return (
    <SalonContext.Provider
      value={{
        currentPage,
        navigate,
        activeGender,
        setActiveGender,
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
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        togglePublishTestimonial,
        offers,
        updateOffer,
        addOffer,
        deleteOffer,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        appointments,
        createAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        bookingModalOpen,
        preselectedService,
        preselectedPackage,
        openBookingModal,
        closeBookingModal,
        lightboxImage,
        openLightbox,
        closeLightbox,
        isAdmin,
        loginAdmin,
        logoutAdmin
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
};
