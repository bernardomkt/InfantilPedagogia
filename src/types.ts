export interface Plan {
  id: string;
  name: string;
  badge: string;
  badgeColor: 'blue' | 'orange';
  title: string;
  subtitle: string;
  oldPrice: string;
  currentPrice: string;
  discountBadge: string;
  savingsText: string;
  features: string[];
  ctaText: string;
  checkoutUrl: string;
  isPopular?: boolean;
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  image: string;
  oldPrice: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
