export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: 'HOT' | 'SALE' | 'NEW';
  isFeatured?: boolean;
  isFlashSale?: boolean;
};

export type Category = {
  id: string;
  name: string;
  iconUrl: string;
};

export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 17 Pro Max',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600', // Unsplash mobile phone placeholder
    category: 'Smartphones',
    badge: 'HOT',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Galaxy S26 Ultra',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    category: 'Smartphones',
    badge: 'SALE',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'AirPods Pro 3',
    price: 249,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aecb4b2f27?auto=format&fit=crop&q=80&w=600', // Unsplash earbuds placeholder
    category: 'Audio',
    badge: 'NEW',
    isFeatured: true,
    isFlashSale: true,
  },
  {
    id: '4',
    name: 'MacBook Pro M5',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
    category: 'Laptops',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Honor X8D',
    price: 399,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600',
    category: 'Smartphones',
    badge: 'SALE',
    isFeatured: true,
    isFlashSale: true,
  },
  {
    id: '6',
    name: 'Apple Watch Series 10',
    price: 399,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=600',
    category: 'Wearables',
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Sony WH-1000XM6',
    price: 349,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600',
    category: 'Audio',
    isFeatured: false,
    isFlashSale: true,
  },
  {
    id: '8',
    name: 'iPad Pro 13"',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    category: 'Tablets',
    isFeatured: false,
  }
];

export const categories: Category[] = [
  { id: 'c1', name: 'Smartphones', iconUrl: '📱' },
  { id: 'c2', name: 'Audio', iconUrl: '🎧' },
  { id: 'c3', name: 'Wearables', iconUrl: '⌚' },
  { id: 'c4', name: 'Laptops', iconUrl: '💻' },
  { id: 'c5', name: 'Tablets', iconUrl: '📱' }, // Reusing phone emoji for tablet for now
  { id: 'c6', name: 'Accessories', iconUrl: '🔌' },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed K.',
    rating: 5,
    text: 'Best prices in the market! Delivery was super fast and the packaging was premium. Highly recommend Q Store.',
  },
  {
    id: 't2',
    name: 'Sarah M.',
    rating: 5,
    text: 'Upgraded to the new iPhone and the process was seamless. The customer service team was very helpful.',
  },
  {
    id: 't3',
    name: 'Karim D.',
    rating: 4,
    text: 'Great deals on accessories. The AirPods arrived the next day. Will definitely shop here again.',
  },
];
