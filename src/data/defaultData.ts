import { ServiceItem, BeautyPackage, BeforeAfterItem, TestimonialItem, SpecialOffer, GalleryItem, SalonSettings, Appointment } from '../types';

export const defaultSettings: SalonSettings = {
  salonName: "Royal NB Unisex Salon",
  tagline: "Luxury Grooming. Timeless Beauty. Where Royal Style Meets Elegance.",
  phone: "+91 98765 43210",
  altPhone: "+91 99766 43210",
  whatsappNumber: "919876543210",
  email: "concierge@royalnbsalon.com",
  address: "123, Royal Heritage Avenue, Opp. Grand Galleria, South Delhi, New Delhi - 110065",
  city: "New Delhi",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.995958611319!2d77.2167!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2123456789%3A0x123456789abcdef!2sSouth%20Delhi%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googlePlaceId: "ChIJ_3838383838_NB_SALON",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ_3838383838_NB_SALON",
  googleRating: 4.9,
  googleReviewCount: 428,
  openingHoursWeekday: "10:00 AM – 09:00 PM (Mon - Fri)",
  openingHoursWeekend: "09:30 AM – 09:30 PM (Sat - Sun)",
  yearsOfExcellence: 8,
  happyClientsCount: 18500,
  stylistsCount: 22,
  currencySymbol: "₹"
};

export const defaultServices: ServiceItem[] = [
  // ==========================================
  // WOMEN'S LUXURY SALON & SPA MENU (EXCLUSIVELY WOMEN)
  // ==========================================

  // WOMEN: HAIR CARE & SPAS
  {
    id: "w-hc-1",
    name: "Hair Spa (Women)",
    category: "Hair Care",
    description: "Deep nourishing crème bath with scalp pressure point massage and hot towel therapy to revitalize dull hair.",
    price: 1099,
    durationMinutes: 45,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-hc-2",
    name: "Anti Dandruff Hair Spa",
    category: "Hair Care",
    description: "Targeted zinc and tea tree scalp clarifying formula that eliminates flakes, soothes itching, and restores microflora.",
    price: 1849,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-hc-3",
    name: "Anti Hair Fall Hair Spa",
    category: "Hair Care",
    description: "Follicle-stimulating peptide complex with essential botanical amino acids to strengthen roots and curb breakage.",
    price: 1849,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-hc-4",
    name: "Protein Hair Spa",
    category: "Hair Care",
    description: "Intensive keratin-protein restructuring mask infused with hydrolyzed silk for chemically treated or brittle hair.",
    price: 1799,
    durationMinutes: 50,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-hc-5",
    name: "Scalp Soothing Hair Spa",
    category: "Hair Care",
    description: "Calming aloe, chamomile, and mint cooling elixir designed for sensitive, inflamed, or sun-stressed scalps.",
    price: 1799,
    durationMinutes: 50,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-hc-6",
    name: "Hair Spa + Hair Cut",
    category: "Hair Care",
    description: "Complete rejuvenation combining our bespoke hair spa ritual with an expert precision haircut and blowdry.",
    price: 1499,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-hc-7",
    name: "Redken Treatment",
    category: "Hair Care",
    description: "Exclusive US salon-grade Redken Acidic Bonding Concentrate therapy for maximum repair and mirror-like shine.",
    price: 2549,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-hc-8",
    name: "Premium Hair Spa",
    category: "Hair Care",
    description: "Quick revitalizing nourishing hair mask with steaming and relaxing wash.",
    price: 650,
    durationMinutes: 35,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },

  // WOMEN: HAIRCUTS & STYLING
  {
    id: "w-hs-1",
    name: "Signature Designer Haircut & Blowout",
    category: "Hair Styling",
    description: "Face-framing personalized haircut by senior art directors, includes luxury wash and runway blowout.",
    price: 999,
    durationMinutes: 45,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-hs-2",
    name: "Glamour Curls & Red Carpet Waves",
    category: "Hair Styling",
    description: "Hollywood waves, voluminous curls, or sleek glass iron styling for galas, dates, and celebrations.",
    price: 799,
    durationMinutes: 40,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-hs-3",
    name: "Classic Blowdry & Finish",
    category: "Hair Styling",
    description: "Wash and expert blowout using round brushes for natural volume, bounce, and shine.",
    price: 499,
    durationMinutes: 30,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },

  // WOMEN: HAIR TEXTURE & KERATIN TREATMENTS
  {
    id: "w-htt-1",
    name: "Smoothening / Straightening + Haircut",
    category: "Hair Texture Treatments",
    description: "Permanent sleek, silky straight finish with advanced rebonding technology, finished with a flattering bespoke cut.",
    price: 3999,
    durationMinutes: 180,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-htt-2",
    name: "No Bleach Highlights + Haircut",
    category: "Hair Texture Treatments",
    description: "Gentle high-lift color highlights without harsh bleaching chemicals, preserving hair integrity with customized layers.",
    price: 4199,
    durationMinutes: 150,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-htt-3",
    name: "Global Color + Haircut",
    category: "Hair Texture Treatments",
    description: "Full head rich lustrous hair color with ammonia-free Italian dyes, complemented with an expert designer haircut.",
    price: 3499,
    durationMinutes: 120,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-htt-4",
    name: "French Balayage + Haircut",
    category: "Hair Texture Treatments",
    description: "Hand-painted seamless sun-kissed gradient with French gloss toner and movement-enhancing haircut.",
    price: 4999,
    durationMinutes: 180,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-htt-5",
    name: "Brazilian Keratin",
    category: "Hair Texture Treatments",
    description: "World-renowned anti-frizz keratin infusion that seals the cuticle, adds lustrous gloss and cuts blow-dry time by 50%.",
    price: 3499,
    durationMinutes: 150,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-htt-6",
    name: "Nanoplastia",
    category: "Hair Texture Treatments",
    description: "Organic, formaldehyde-free amino acid straightening that deeply penetrates the hair cortex for ultra-straight, glass-like shine.",
    price: 5499,
    durationMinutes: 180,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-htt-7",
    name: "Protein Treatment",
    category: "Hair Texture Treatments",
    description: "Deep molecular bond building therapy that reconstructs chemically compromised, bleached, or heat-damaged tresses.",
    price: 4999,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-htt-8",
    name: "Hair Botox",
    category: "Hair Texture Treatments",
    description: "Non-chemical deep conditioning treatment with collagen and vitamins that fills in fiber gaps and eliminates frizz.",
    price: 4999,
    durationMinutes: 120,
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-htt-9",
    name: "Botox + Haircut",
    category: "Hair Texture Treatments",
    description: "Frizz-taming hair botox infusion coupled with custom texturizing haircut for effortlessly manageable hair.",
    price: 1499,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-htt-10",
    name: "Root Touchup (100% Grey Coverage)",
    category: "Hair Colour",
    description: "Precise up to 1.5 inches regrowth color match blending seamlessly with existing hair shade.",
    price: 1199,
    durationMinutes: 45,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },

  // WOMEN: NAIL CARE & EXTENSIONS
  {
    id: "w-nc-1",
    name: "Gel Extensions",
    category: "Nail Care",
    description: "Flawless builder gel sculpted nail extensions with high-shine mirror finish, lasting 3 to 4 chip-free weeks.",
    price: 2199,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-nc-2",
    name: "Nail Extensions",
    category: "Nail Care",
    description: "Classic acrylic nail extensions with custom shaping (Almond, Coffin, Square) and durable protective topcoat.",
    price: 1299,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-nc-3",
    name: "Gel Polish",
    category: "Nail Care",
    description: "LED-cured long-lasting chip resistant gel color with premium cuticle oil application and hydrating hand massage.",
    price: 999,
    durationMinutes: 45,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-nc-4",
    name: "Gel Manicure",
    category: "Nail Care",
    description: "Complete cuticle detailing, exfoliating hand scrub, relaxing massage, and high-gloss long-wearing gel polish.",
    price: 1499,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },

  // WOMEN: SKIN CARE & FACIALS
  {
    id: "w-sk-1",
    name: "Anti Acne / Glowing / Anti Ageing Facial",
    category: "Skin Care & Facial",
    description: "Targeted clinical facial tailored to your exact skin concern with lymphatic massage and cryo-globe finish.",
    price: 1699,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-sk-2",
    name: "Instant Glow in 30 Minutes",
    category: "Skin Care & Facial",
    description: "Rapid radiance booster utilizing mild lactic acid brightening serum, ozone steam, and a dewy gold peptide mask.",
    price: 999,
    durationMinutes: 30,
    image: "https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-sk-3",
    name: "15 Minutes Quick Glow",
    category: "Skin Care & Facial",
    description: "Express on-the-go brightening cleanse, micro-exfoliation, and instant hydrating mist for busy schedules.",
    price: 499,
    durationMinutes: 15,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-sk-4",
    name: "Hydra Medi Facial",
    category: "Skin Care & Facial",
    description: "9-step medical grade hydra-dermabrasion extracting impurities while drenching skin in hyaluronic acid and antioxidants.",
    price: 2999,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },

  // WOMEN: MAKEUP & BRIDAL
  {
    id: "w-mu-1",
    name: "HD Party Glamour Makeup",
    category: "Makeup",
    description: "High-definition camera-ready makeup with contouring, eye glam, luxury mink lashes, and setting mist.",
    price: 2999,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },
  {
    id: "w-mu-2",
    name: "Airbrush Flawless Glam Makeup",
    category: "Makeup",
    description: "Micro-fine airbrush silicone foundation application ensuring 16-hour sweat-proof, poreless luxury perfection.",
    price: 4999,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-br-1",
    name: "Royal Bridal Ceremony Couture",
    category: "Bridal Services",
    description: "Complete pre-bridal skin radiance, luxury hair dressing, dupatta draping, jewelry setting, and waterproof bridal makeup.",
    price: 14999,
    durationMinutes: 240,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },

  // WOMEN: SPA & RELAXATION
  {
    id: "w-spa-1",
    name: "Aromatherapy Full Body Relaxation (Women)",
    category: "Spa & Relaxation",
    description: "Therapeutic Swedish strokes using pure warm lavender and lemongrass essential oils to melt away tension.",
    price: 2499,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-mp-1",
    name: "Luxury Rose Petal Pedicure",
    category: "Manicure & Pedicure",
    description: "Warm milk and rose petal soak, dead sea salt exfoliation, callus buffing, and relaxing calf massage.",
    price: 1199,
    durationMinutes: 45,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    gender: "women"
  },
  {
    id: "w-mp-2",
    name: "Crystal Spa Manicure & Pedicure Duo",
    category: "Manicure & Pedicure",
    description: "Detox crystal soak, collagen hand/foot mask, hot stone massage, and neat nail buffing or polish.",
    price: 1999,
    durationMinutes: 80,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "women"
  },

  // ==========================================
  // MEN'S BARBER & GROOMING MENU (EXCLUSIVELY MEN)
  // ==========================================

  // MEN: SIGNATURE VALUE COMBOS
  {
    id: "m-cb-1",
    name: "Cut + Beard + Face D-Tan",
    category: "Beard & Men's Grooming",
    description: "Precision clipper/scissor haircut, hot towel beard grooming and alignment, plus instant brightening tan-removal pack.",
    price: 800,
    durationMinutes: 50,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "men"
  },
  {
    id: "m-cb-2",
    name: "Cut + Oil Massage",
    category: "Beard & Men's Grooming",
    description: "Signature tailored haircut followed by an invigorating warm almond & bhringraj oil scalp and shoulder massage.",
    price: 600,
    durationMinutes: 40,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-cb-3",
    name: "Cut + Hair Colour",
    category: "Beard & Men's Grooming",
    description: "Modern professional haircut combined with natural grey coverage or trend hair color with scalp wash.",
    price: 1400,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-cb-4",
    name: "Cut + Beard + Facial",
    category: "Beard & Men's Grooming",
    description: "Complete executive grooming: signature haircut, luxury beard shaping, and a deep-pore rejuvenating facial.",
    price: 2450,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1517832606589-7157be3953e2?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "men"
  },
  {
    id: "m-cb-5",
    name: "Cut + Beard + D-Tan + Cleanup",
    category: "Beard & Men's Grooming",
    description: "Comprehensive men's package with haircut, beard styling, sun tan removal, and ultrasonic blackhead cleanup.",
    price: 1870,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-cb-6",
    name: "Cut + Beard + Manicure + Pedicure",
    category: "Beard & Men's Grooming",
    description: "Full head-to-toe gentlemen's renewal: stylish haircut, razor sharp beard line, and foot/hand spa grooming.",
    price: 1820,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-cb-7",
    name: "Cut + Beard + Hair Spa",
    category: "Beard & Men's Grooming",
    description: "Gentlemen's essential maintenance: sharp haircut, beard sculpting, and an anti-stress hair spa with head massage.",
    price: 1050,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },

  // MEN: HAIRCUTS & BEARD SCULPTING
  {
    id: "m-hs-1",
    name: "Men's Luxury Fade & Textured Styling",
    category: "Hair Styling",
    description: "Low/mid/high taper fade or classic gentleman's cut with texturizing shears, hot towel neck clean, and matte clay styling.",
    price: 450,
    durationMinutes: 30,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "men"
  },
  {
    id: "m-hs-2",
    name: "Executive Gentleman's Haircut",
    category: "Hair Styling",
    description: "Classic scissor-over-comb corporate haircut with energizing scalp wash and blowdry finish.",
    price: 350,
    durationMinutes: 30,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-brd-1",
    name: "Royal Hot Towel Shave",
    category: "Beard & Men's Grooming",
    description: "Traditional barbershop straight razor shave with essential pre-shave oil, hot steam towel, and cooling balm.",
    price: 350,
    durationMinutes: 30,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-brd-2",
    name: "Precision Beard Sculpting & Razor Line",
    category: "Beard & Men's Grooming",
    description: "Detailed beard shaping, cheek line razor definition, neck taper, and nourishing beard oil finish.",
    price: 250,
    durationMinutes: 25,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-brd-3",
    name: "Organic Beard Colour / Black Henna",
    category: "Beard & Men's Grooming",
    description: "Natural black or dark brown beard tinting for youthful, uniform look without skin irritation.",
    price: 400,
    durationMinutes: 25,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },

  // MEN: HAIR SPA & TREATMENTS
  {
    id: "m-hc-1",
    name: "Men's Anti-Stress Hair Spa",
    category: "Hair Care",
    description: "Revitalizing scalp crème massage with warm steam to relieve tension and nourish hair follicles.",
    price: 650,
    durationMinutes: 35,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-hc-2",
    name: "Men's Anti-Dandruff Scalp Spa",
    category: "Hair Care",
    description: "Intense zinc-pyrithione clarifying treatment with cooling menthol wash to permanently eradicate flakes.",
    price: 1050,
    durationMinutes: 45,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-htt-1",
    name: "Men's Perming (Medium Texture)",
    category: "Hair Texture Treatments",
    description: "Modern textured Korean or wavy perm adding volume and style definition to short and medium men's hair.",
    price: 2200,
    durationMinutes: 120,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-htt-2",
    name: "Botox + Haircut (Men)",
    category: "Hair Texture Treatments",
    description: "Frizz-eliminating collagen botox treatment with tailored scissor cut for smooth, manageable hair.",
    price: 1499,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },

  // MEN: SKIN CARE, D-TAN & FACIALS
  {
    id: "m-sk-1",
    name: "Men's Face D-Tan Treatment",
    category: "Skin Care & Facial",
    description: "Active eucalyptus and clove tan-removal formula clearing pollution grime, sun darkening, and dullness.",
    price: 499,
    durationMinutes: 25,
    image: "https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "men"
  },
  {
    id: "m-sk-2",
    name: "Instant Glow in 30 Minutes (Men)",
    category: "Skin Care & Facial",
    description: "Rapid radiance booster designed for rougher men's skin texture, including ozone steam and peptide mask.",
    price: 999,
    durationMinutes: 30,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-sk-3",
    name: "15 Minutes Quick Glow (Men)",
    category: "Skin Care & Facial",
    description: "Express on-the-go brightening scrub, pore clear spray, and hydrating mist for gentlemen on the go.",
    price: 499,
    durationMinutes: 15,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },
  {
    id: "m-sk-4",
    name: "Anti Acne / Charcoal Deep Pore Facial",
    category: "Skin Care & Facial",
    description: "Detoxifying activated charcoal facial extracting deep comedones and regulating excess oil sebum production.",
    price: 1699,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    gender: "men"
  },

  // MEN: PRE-GROOM & WEDDING
  {
    id: "m-br-1",
    name: "Royal Groom Styling & D-Tan Ritual",
    category: "Bridal Services",
    description: "Bespoke wedding day beard alignment, gold d-tan facial, hair design, and discreet matte skin finishing.",
    price: 4999,
    durationMinutes: 120,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    gender: "men"
  }
];

export const defaultPackages: BeautyPackage[] = [
  {
    id: "pkg-1",
    title: "PACKAGE 1 – CLASSIC CLEANUP",
    tagline: "Essential Refresh & Grooming Care",
    price: 1999,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    badge: "Great Value",
    inclusions: [
      "Classic Cleanup",
      "Waxing (FA, HL, UA)",
      "Threading (EB, UL)"
    ]
  },
  {
    id: "pkg-2",
    title: "PACKAGE 2 – CLASSIC FACIAL",
    tagline: "Hydrating Facial & Sun-Tan Reversal",
    price: 3099,
    originalPrice: 4200,
    image: "https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    inclusions: [
      "Classic Facial",
      "Waxing (FA, HL, UA)",
      "Threading (EB, UL)",
      "Face D-Tan"
    ]
  },
  {
    id: "pkg-3",
    title: "PACKAGE 3 – GLOWING SKIN FACIAL",
    tagline: "Radiance Facial with Hair & Foot Pampering",
    price: 4299,
    originalPrice: 5800,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    badge: "Client Favourite",
    isPopular: true,
    inclusions: [
      "Glowing Skin Facial",
      "Root Touchup (1 inch)",
      "Waxing (FA, HL, UA)",
      "Threading (EB, UL)",
      "Express Pedicure",
      "Face D-Tan"
    ]
  },
  {
    id: "pkg-4",
    title: "PACKAGE 4 – ANTI AGING FACIAL",
    tagline: "Youth Restoring Firmness & Gel Elegance",
    price: 5999,
    originalPrice: 8200,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    badge: "Luxury Care",
    inclusions: [
      "Anti Aging Facial",
      "Root Touchup",
      "Waxing (FA, HL, UA)",
      "Threading (EB, UL)",
      "Express Pedicure",
      "Gel Manicure"
    ]
  },
  {
    id: "pkg-5",
    title: "PACKAGE 5 – BRIGHTENING FACIAL",
    tagline: "Luminous Complexion with Detox Pedicure",
    price: 4999,
    originalPrice: 6900,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    inclusions: [
      "Brightening Facial",
      "Waxing (FA, HL, UA)",
      "Threading (EB, UL)",
      "Classic Pedicure",
      "Face D-Tan",
      "Glowing Mask"
    ]
  },
  {
    id: "pkg-6",
    title: "PACKAGE 6 – COMPLETE BEAUTY PACKAGE",
    tagline: "The Ultimate Head-to-Toe Luxury Indulgence",
    price: 6999,
    originalPrice: 10500,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    badge: "VIP Signature",
    isPopular: true,
    inclusions: [
      "Facial",
      "Touchup (1 inch)",
      "Waxing (FA, HL, UA)",
      "Threading (EB, UL)",
      "Classic Manicure",
      "Classic Pedicure",
      "Glowing Mask",
      "Hair Spa"
    ]
  }
];

export const defaultOffers: SpecialOffer[] = [
  {
    id: "off-1",
    title: "Festival Ready Skin in Just 30 Minutes",
    subtitle: "Quick Glow & Deep Cleanse for Festivities",
    discountBadge: "FESTIVE SPECIAL",
    price: 999,
    originalPrice: 1800,
    description: "Get luminous, camera-ready skin in half an hour before celebrations, parties, or family gatherings.",
    image: "https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Instant Radiant Glow",
      "Deep Pore Cleanse & Detox",
      "Brighter, Velvety Skin",
      "Perfect for Festivities & Weddings"
    ],
    active: true,
    claimCode: "FESTIVAL999"
  },
  {
    id: "off-2",
    title: "GET 20% OFF On Your First Visit",
    subtitle: "Welcome to NB Luxury Experience",
    discountBadge: "20% OFF",
    description: "Enjoy an exclusive 20% privilege savings on any premium hair, skincare, or spa service on your very first appointment.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Valid on all individual services above ₹999",
      "Complimentary skin or hair consultation",
      "Welcome detox beverage"
    ],
    active: true,
    claimCode: "FIRST20"
  }
];

export const defaultTransformations: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Brazilian Keratin & Glass Hair Realignment",
    category: "Keratin Treatment",
    service: "Brazilian Keratin Infusion",
    description: "Frizzy, unmanageable wavy hair transformed into silky smooth, high-gloss strands with natural fluid motion.",
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    clientFeedback: "My hair has never felt so soft and manageable! The humidity doesn't make it puff anymore.",
    published: true,
    isSample: true
  },
  {
    id: "ba-2",
    title: "French Balayage & Dimensional Tone",
    category: "Hair Colour",
    service: "French Balayage + Toner",
    description: "Transitioned from brassy overgrown roots to seamless, dimensional honey-caramel balayage tones.",
    beforeImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    clientFeedback: "The color blend is so seamless! The stylists here really know color harmony.",
    published: true,
    isSample: true
  },
  {
    id: "ba-3",
    title: "Gentlemen's Executive Taper & Beard Sculpting",
    category: "Men's Grooming",
    service: "Cut + Beard + Face D-Tan",
    description: "Overgrown scruff redefined with a razor-sharp mid taper fade, contoured beard line, and sun-tan brightening pack.",
    beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    clientFeedback: "Top notch precision beard trim and hair fade. The ambience is truly world class.",
    published: true,
    isSample: true
  },
  {
    id: "ba-4",
    title: "Deep Skin Rejuvenation & Pigment Clarity",
    category: "Skin Treatment",
    service: "Anti Acne & Glowing Facial",
    description: "Congested, fatigued skin restored to a luminous, even-toned texture with clear hydrated contours.",
    beforeImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1512290900672-1f41d063a8a3?auto=format&fit=crop&w=800&q=80",
    clientFeedback: "My skin felt completely renewed. The instant glow lasted for over a week!",
    published: true,
    isSample: true
  },
  {
    id: "ba-5",
    title: "Royal Bridal Glamour & Hair Ornamentation",
    category: "Bridal Makeup",
    service: "HD Bridal Makeup & Styling",
    description: "Editorial bridal beauty with jewel-toned smokey eyes, radiant glass skin, and intricate floral hair updo.",
    beforeImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
    clientFeedback: "I felt like a queen on my wedding day! Makeup stayed pristine all night through the pheras.",
    published: true,
    isSample: true
  },
  {
    id: "ba-6",
    title: "Almond Gel Sculpting & Custom Chrome Nail Art",
    category: "Nail Art",
    service: "Gel Extensions + Custom Art",
    description: "Short brittle nails extended to elegant almond silhouette adorned with champagne glazed donut chrome finish.",
    beforeImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    clientFeedback: "Stunning nail architecture and didn't lift or chip for almost an entire month!",
    published: true,
    isSample: true
  }
];

export const defaultTestimonials: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Aakash Malhotra",
    rating: 5,
    review: "Hands down the best luxury unisex salon in Delhi NCR. The beard grooming and hair spa combo is unmatched. The emerald aesthetic and private styling bays make you feel like royalty.",
    date: "2 weeks ago",
    serviceUsed: "Men's Executive Grooming & Hair Spa",
    source: "google",
    verified: true,
    published: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-2",
    name: "Dr. Priyamvada Sen",
    rating: 5,
    review: "I got the Nanoplastia treatment done and the results are unbelievable! Zero harsh chemical smell and my hair looks like liquid silk. The staff is courteous, warm, and highly professional.",
    date: "1 month ago",
    serviceUsed: "Nanoplastia & Hair Botox",
    source: "google",
    verified: true,
    published: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-3",
    name: "Rohan & Simran Kapoor",
    rating: 5,
    review: "We booked the couple's grooming package before our anniversary party. The 30-minute instant glow facial and French Balayage were both executed to sheer perfection. Will never visit any other salon!",
    date: "3 weeks ago",
    serviceUsed: "Complete Beauty Package & Hair Styling",
    source: "google",
    verified: true,
    published: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-4",
    name: "Neha Singhania",
    rating: 5,
    review: "Had my bridal makeup trials here and ended up booking the full royal package. The makeup artist understood my vision immediately. The emerald lounge ambience is breathtaking.",
    date: "2 months ago",
    serviceUsed: "Bridal HD Makeup Package",
    source: "direct",
    verified: true,
    published: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }
];

export const defaultGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxury Styling Bays & Gold Mirrors",
    category: "Salon Interior",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-2",
    title: "Editorial Golden Balayage Waves",
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-3",
    title: "Gentlemen's Luxury Barber Lounge",
    category: "Men's Grooming",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-4",
    title: "High-Definition Bridal Glamour",
    category: "Bridal Looks",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-5",
    title: "Hydra Oxygen Infusion Facial",
    category: "Skin Care",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-6",
    title: "Almond Gel Chrome Extensions",
    category: "Nail Art",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-7",
    title: "Keratin Restructuring Treatment",
    category: "Hair Transformations",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-8",
    title: "Warm Essential Oil Scalp Massage",
    category: "Salon Interior",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
  }
];

export const defaultAppointments: Appointment[] = [
  {
    id: "APT-8821",
    customerName: "Vikramaditya Roy",
    phone: "+91 98112 34567",
    gender: "male",
    serviceName: "Cut + Beard + Face D-Tan",
    preferredDate: "2026-11-09",
    preferredTime: "11:30 AM",
    notes: "Prefer senior stylist, need extra focus on beard alignment.",
    status: "Confirmed",
    createdAt: "2026-11-07 14:20",
    totalPrice: 800
  },
  {
    id: "APT-8822",
    customerName: "Ananya Deshmukh",
    phone: "+91 98223 45678",
    gender: "female",
    packageName: "PACKAGE 3 – GLOWING SKIN FACIAL",
    preferredDate: "2026-11-10",
    preferredTime: "02:00 PM",
    notes: "Attending a sangeet evening function on 11th.",
    status: "Pending",
    createdAt: "2026-11-07 15:10",
    totalPrice: 4299
  }
];
