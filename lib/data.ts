import {
  Plane,
  Hotel,
  Briefcase,
  ShieldCheck,
  FileCheck2,
  Car,
  Package,
  Globe2,
  Headphones,
  MapPin,
  Award,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  business: "Green Miles Travel & Tourism",
  shortName: "Green Miles",
  tagline: "Your trusted travel partner for premium travel support.",
  phoneDisplay: "+961 3 054 003",
  phoneHref: "tel:+9613054003",
  whatsappDisplay: "+961 3 054 003",
  whatsappHref:
    "https://wa.me/9613054003?text=Hello%20Green%20Miles%2C%20I%20would%20like%20to%20plan%20a%20trip.",
  instagramHandle: "@travelgreenmiles",
  instagramHref: "https://www.instagram.com/travelgreenmiles/",
  facebookHandle: "Green Miles Travel",
  facebookHref: "https://www.facebook.com/greenmilestravel/",
  mapsHref: "https://maps.app.goo.gl/aCDjejSdG8jM36kv7",
  location: "Lebanon",
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tourism", href: "#tourism" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export type OverlayDirection =
  | "bottom-emerald"
  | "bottom-gold"
  | "left-green"
  | "right-emerald"
  | "top-gold"
  | "bottom-dark"
  | "diagonal-green-gold";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  /** CSS object-position used to crop each image flatteringly per the image guide. */
  objectPosition?: string;
  /** Per-card zoom level (1 = no zoom). Used to focus on different micro-details
   *  when several service images share a near-identical composition. */
  zoom?: number;
  /** CSS filter string applied to the image (e.g. "saturate(0.7) sepia(0.1)").
   *  Lets each card read in a different mood even when the photo content is similar. */
  filter?: string;
  /** Direction/colour of the gradient overlay on the image strip. */
  overlay: OverlayDirection;
  /** Short label rendered on the image strip. */
  tag: string;
  /** Wider feature variant — used for Freight on desktop. */
  featured?: boolean;
}

export const services: Service[] = [
  {
    title: "Tour Packages",
    description:
      "Organized travel packages for planned trips, tourism experiences, and destination support.",
    icon: Briefcase,
    image: "/images/tour-packages.jpg",
    objectPosition: "center center",
    overlay: "bottom-emerald",
    tag: "Planned Trips",
  },
  {
    title: "Hotel Bookings",
    description:
      "Hotel reservation support for different budgets, destinations, and travel needs.",
    icon: Hotel,
    image: "/images/hotel-booking.jpg",
    objectPosition: "center center",
    overlay: "bottom-gold",
    tag: "Stay Support",
  },
  {
    title: "Flight Tickets",
    description:
      "Local and international flight ticket assistance for smooth travel planning.",
    icon: Plane,
    image: "/images/airport-lounge.jpg",
    objectPosition: "center right",
    overlay: "left-green",
    tag: "Air Travel",
  },
  {
    title: "Travel Insurance",
    description:
      "Insurance support to help clients travel with more protection and peace of mind.",
    icon: ShieldCheck,
    image: "/images/travel-insurance.jpg",
    objectPosition: "center center",
    overlay: "bottom-emerald",
    tag: "Protection",
  },
  {
    title: "Visa Services",
    description:
      "Visa assistance and travel document support depending on the client's destination and requirements.",
    icon: FileCheck2,
    image: "/images/visa-services.jpg",
    objectPosition: "center center",
    overlay: "top-gold",
    tag: "Documents",
  },
  {
    title: "Car Rental",
    description:
      "Car rental support for clients who need transportation during their trip.",
    icon: Car,
    image: "/images/car-rental.jpg",
    objectPosition: "center center",
    overlay: "bottom-dark",
    tag: "Mobility",
  },
  {
    title: "Freight Services",
    description:
      "Freight and shipping support for clients who need cargo or delivery coordination.",
    icon: Package,
    image: "/images/freight-services.jpg",
    objectPosition: "center center",
    overlay: "diagonal-green-gold",
    tag: "Cargo",
    featured: true,
  },
];

export const processSteps = [
  {
    n: "1",
    title: "Share Your Plans",
    description: "Tell us your destination, dates, and travel needs.",
  },
  {
    n: "2",
    title: "We Prepare Options",
    description: "We suggest suitable travel solutions based on your request.",
  },
  {
    n: "3",
    title: "Confirm the Details",
    description: "You review the options and confirm what works best.",
  },
  {
    n: "4",
    title: "We Coordinate",
    description: "We help arrange the needed travel details.",
  },
  {
    n: "5",
    title: "Travel With Support",
    description: "You stay connected for support during the journey.",
  },
];

export interface Review {
  name: string;
  rating: number;
  date: string;
  review: string;
}

export const reviews: Review[] = [
  {
    name: "Ismail Mroueh",
    rating: 5,
    date: "7 years ago",
    review: "Pro travel agency.",
  },
  {
    name: "Rima Dirany",
    rating: 5,
    date: "7 years ago",
    review: "Best travel agency!",
  },
  {
    name: "Prographic Print",
    rating: 5,
    date: "Edited 4 years ago",
    review: "Amazing service. Thanks Green Miles.",
  },
  {
    name: "Ali Bachar",
    rating: 5,
    date: "8 years ago",
    review: "Amazing service.",
  },
  {
    name: "Maysaa Yazbek",
    rating: 5,
    date: "7 years ago",
    review: "Great offers and best available price.",
  },
  {
    name: "Moudy Nassar",
    rating: 5,
    date: "4 years ago",
    review: "Best price. Best team. Best services.",
  },
  {
    name: "Gheinwa Dirani",
    rating: 5,
    date: "Edited 4 years ago",
    review:
      "Get all services in one place. Best price, best services, best team.",
  },
  {
    name: "Ibrahim Mortada",
    rating: 5,
    date: "9 years ago",
    review:
      "Excellent customer service. The owner is respectful and accommodating.",
  },
];

export const benefits: { title: string; icon: LucideIcon }[] = [
  { title: "9+ Years of Trust", icon: ShieldCheck },
  { title: "Tour Packages", icon: Briefcase },
  { title: "Flight & Hotel Support", icon: Plane },
  { title: "Visa Services", icon: FileCheck2 },
  { title: "Travel Insurance", icon: ShieldCheck },
  { title: "Car Rental Support", icon: Car },
  { title: "Freight Services", icon: Package },
  { title: "Easy WhatsApp Contact", icon: Headphones },
];

export const aboutFeatures: { title: string; icon: LucideIcon }[] = [
  { title: "Travel Planning Support", icon: Briefcase },
  { title: "Lebanon & Worldwide", icon: Globe2 },
  { title: "Personal Assistance", icon: MapPin },
  { title: "9+ Years of Trust", icon: Award },
];

export interface BranchPhone {
  display: string;
  href: string;
}

export interface Branch {
  name: string;
  region: string;
  area: string;
  phones: BranchPhone[];
}

export const branches: Branch[] = [
  {
    name: "First Branch",
    region: "Bekaa",
    area: "Niha",
    phones: [
      { display: "+961 71 600 663", href: "tel:+96171600663" },
      { display: "+961 70 322 220", href: "tel:+96170322220" },
    ],
  },
  {
    name: "Second Branch",
    region: "South",
    area: "Zrarieh",
    phones: [
      { display: "+961 78 888 535", href: "tel:+96178888535" },
    ],
  },
  {
    name: "Third Branch",
    region: "Bekaa",
    area: "Rayak",
    phones: [
      { display: "+961 71 322 220", href: "tel:+96171322220" },
    ],
  },
];

export interface Accreditation {
  shortName: string;
  fullName: string;
  description: string;
  logo: string;
  alt: string;
}

export const accreditations: Accreditation[] = [
  {
    shortName: "IATA",
    fullName: "International Air Transport Association",
    description:
      "Recognition by the global organization that sets standards for international air travel.",
    logo: "/images/verification/iata.png",
    alt: "IATA — International Air Transport Association",
  },
  {
    shortName: "ATTAL",
    fullName: "Association of Travel & Tourist Agents in Lebanon",
    description:
      "Member of the Lebanese association that represents accredited travel and tourism agencies.",
    logo: "/images/verification/attal.jpg",
    alt: "ATTAL — Association of Travel & Tourist Agents in Lebanon",
  },
];

export const trustStripItems: { title: string; icon: LucideIcon }[] = [
  { title: "9+ Years of Trust", icon: Award },
  { title: "Tour Packages", icon: Briefcase },
  { title: "Flight & Hotel Support", icon: Plane },
  { title: "Visa Services", icon: FileCheck2 },
  { title: "Travel Insurance", icon: ShieldCheck },
  { title: "Easy WhatsApp Contact", icon: Headphones },
];

export const media = {
  hero: "/images/hero-travel.jpg",
  heroMain: "/images/hero-main.png",
  heroVideo: "/media/hero-travel.mp4",
  hotel: "/images/hotel-booking.jpg",
  airport: "/images/airport-lounge.jpg",
  tour: "/images/tour-packages.jpg",
  tourismAlt: "/images/tourism-alt.jpg",
  detail: "/images/travel-detail.jpg",
};
