export type Language = 'en' | 'ar';

export interface EventType {
  id: string;
  category: 'celebrations' | 'brand' | 'workshops';
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  capacity: {
    en: string;
    ar: string;
  };
  suitableFor: {
    en: string[];
    ar: string[];
  };
  features: {
    en: string[];
    ar: string[];
  };
  popularPackageId: string;
}

export interface StudioZone {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  highlights: {
    en: string[];
    ar: string[];
  };
  dimensions: string;
}

export interface PricingPackage {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  badge?: {
    en: string;
    ar: string;
  };
  priceSAR: number;
  unit: {
    en: string;
    ar: string;
  };
  durationText: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  includes: {
    en: string[];
    ar: string[];
  };
  idealFor: {
    en: string;
    ar: string;
  };
  isPopular?: boolean;
}

export interface Review {
  id: string;
  authorName: string;
  authorRole: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  rating: number;
  date: string;
  eventType: {
    en: string;
    ar: string;
  };
}

export interface FAQ {
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}
