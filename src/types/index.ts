export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  durationMinutes?: number;
  image: string;
  isPopular?: boolean;
  gender: 'women' | 'men';
}

export type ServiceCategory =
  | 'Hair Styling'
  | 'Hair Care'
  | 'Hair Texture Treatments'
  | 'Hair Colour'
  | 'Beard & Men\'s Grooming'
  | 'Skin Care & Facial'
  | 'Makeup'
  | 'Nail Care'
  | 'Bridal Services'
  | 'Spa & Relaxation'
  | 'Manicure & Pedicure';

export interface BeautyPackage {
  id: string;
  title: string;
  tagline?: string;
  price: number;
  originalPrice?: number;
  image: string;
  inclusions: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  service: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  clientFeedback?: string;
  published: boolean;
  isSample?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  serviceUsed: string;
  avatar?: string;
  source: 'google' | 'direct';
  verified: boolean;
  published: boolean;
}

export interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  gender: 'female' | 'male' | 'other';
  serviceId?: string;
  serviceName?: string;
  packageId?: string;
  packageName?: string;
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string; // e.g. "11:00 AM"
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Rejected' | 'Completed' | 'Cancelled';
  createdAt: string;
  totalPrice?: number;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  description: string;
  price?: number;
  originalPrice?: number;
  validUntil?: string;
  image: string;
  features: string[];
  active: boolean;
  claimCode?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface SalonSettings {
  salonName: string;
  tagline: string;
  phone: string;
  altPhone?: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  googleMapsEmbedUrl: string;
  googlePlaceId: string;
  googleReviewUrl: string;
  googleRating: number;
  googleReviewCount: number;
  openingHoursWeekday: string;
  openingHoursWeekend: string;
  yearsOfExcellence: number;
  happyClientsCount: number;
  stylistsCount: number;
  currencySymbol: string;
}
