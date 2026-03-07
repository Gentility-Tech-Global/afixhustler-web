export interface Listing {
  id: string;
  title: string;
  category: 'commodity' | 'service';
  subcategory: string;
  price: number;
  description: string;
  images: string[];
  hustler: {
    id: string;
    name: string;
    avatar: string;
    hustleScore: number;
    location: string;
    verified: boolean;
  };
  availability: 'available' | 'out_of_stock' | 'unavailable';
  quantity?: number;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'hustler' | 'buyer';
  avatar: string;
  hustleScore?: number;
  location: string;
  bio?: string;
  bankDetails?: {
    accountNumber: string;
    bankName: string;
    accountName: string;
  };
  verified: boolean;
  joinedDate: string;
}

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Premium Aba Leather Shoes - Brown Oxford',
    category: 'commodity',
    subcategory: 'Footwear',
    price: 15000,
    description: 'Handcrafted premium leather Oxford shoes from Aba. Made with 100% genuine leather, durable sole, and elegant finish. Perfect for corporate and casual wear.',
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    ],
    hustler: {
      id: 'h1',
      name: 'Chinedu Okafor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      hustleScore: 850,
      location: 'Aba, Abia State',
      verified: true,
    },
    availability: 'available',
    quantity: 25,
    rating: 4.8,
    reviews: 47,
    tags: ['Made-in-Naija', 'Premium', 'Handcrafted'],
  },
  {
    id: '2',
    title: 'Fresh Cassava & Garri - Farm Direct',
    category: 'commodity',
    subcategory: 'Agriculture',
    price: 3500,
    description: 'Fresh cassava tubers and high-quality garri directly from the farm. 100% organic, no chemicals. Available in bulk for wholesalers.',
    images: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    ],
    hustler: {
      id: 'h2',
      name: 'Mama Ngozi Okeke',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      hustleScore: 720,
      location: 'Enugu Rural',
      verified: true,
    },
    availability: 'available',
    quantity: 100,
    rating: 4.6,
    reviews: 32,
    tags: ['Organic', 'Farm Direct', 'Bulk Available'],
  },
  {
    id: '3',
    title: 'Professional Plumbing Services',
    category: 'service',
    subcategory: 'Plumbing',
    price: 5000,
    description: 'Expert plumbing services for residential and commercial properties. Pipe repairs, installations, drainage solutions, and emergency services available.',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    ],
    hustler: {
      id: 'h3',
      name: 'Tunde Adebayo',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
      hustleScore: 890,
      location: 'Enugu City',
      verified: true,
    },
    availability: 'available',
    rating: 4.9,
    reviews: 68,
    tags: ['24/7 Available', 'Licensed', 'Emergency Service'],
  },
  {
    id: '4',
    title: 'Custom Tailoring - Aso Ebi & Native Wear',
    category: 'service',
    subcategory: 'Tailoring',
    price: 8000,
    description: 'Professional tailoring for all occasions. Specializing in aso ebi, native wear, corporate attire, and alterations. Fast turnaround time.',
    images: [
      'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=800&q=80',
    ],
    hustler: {
      id: 'h4',
      name: 'Ada Nwosu',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      hustleScore: 810,
      location: 'Enugu GRA',
      verified: true,
    },
    availability: 'available',
    rating: 4.7,
    reviews: 95,
    tags: ['Fast Delivery', 'Custom Design', 'Alterations'],
  },
  {
    id: '5',
    title: 'Electrician - Installation & Repairs',
    category: 'service',
    subcategory: 'Electrical',
    price: 6000,
    description: 'Certified electrician for all electrical works. House wiring, solar installation, generator repairs, and electrical maintenance.',
    images: [
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    ],
    hustler: {
      id: 'h5',
      name: 'Emeka Obi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      hustleScore: 870,
      location: 'Enugu North',
      verified: true,
    },
    availability: 'available',
    rating: 4.8,
    reviews: 54,
    tags: ['Certified', 'Solar Expert', 'Generator Repairs'],
  },
  {
    id: '6',
    title: 'Handmade Leather Bags - Aba Collection',
    category: 'commodity',
    subcategory: 'Fashion',
    price: 12000,
    description: 'Stylish handmade leather bags from Aba. Available in various colors and sizes. Durable, fashionable, and affordable.',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    ],
    hustler: {
      id: 'h6',
      name: 'Blessing Eze',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      hustleScore: 780,
      location: 'Aba, Abia State',
      verified: true,
    },
    availability: 'available',
    quantity: 15,
    rating: 4.5,
    reviews: 28,
    tags: ['Made-in-Naija', 'Handmade', 'Fashion'],
  },
];

export const currentUser: User = {
  id: 'u1',
  name: 'Chinedu Okafor',
  email: 'chinedu.okafor@example.com',
  phone: '+234 803 123 4567',
  role: 'hustler',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  hustleScore: 850,
  location: 'Aba, Abia State',
  bio: 'Experienced shoemaker with 10+ years crafting premium leather footwear in Aba. Passionate about quality and customer satisfaction.',
  bankDetails: {
    accountNumber: '0123456789',
    bankName: 'First Bank',
    accountName: 'Chinedu Okafor',
  },
  verified: true,
  joinedDate: '2025-11-15',
};

export const categories = [
  { id: 'all', name: 'All', icon: 'Grid' },
  { id: 'agriculture', name: 'Agriculture', icon: 'Leaf' },
  { id: 'footwear', name: 'Footwear', icon: 'ShoppingBag' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt' },
  { id: 'plumbing', name: 'Plumbing', icon: 'Wrench' },
  { id: 'electrical', name: 'Electrical', icon: 'Zap' },
  { id: 'tailoring', name: 'Tailoring', icon: 'Scissors' },
  { id: 'carpentry', name: 'Carpentry', icon: 'Hammer' },
];

export const mockEarnings = {
  totalEarnings: 450000,
  thisMonth: 85000,
  pending: 15000,
  completed: 435000,
  transactions: [
    { id: '1', date: '2026-03-01', amount: 15000, status: 'completed', item: 'Brown Oxford Shoes' },
    { id: '2', date: '2026-02-28', amount: 12000, status: 'completed', item: 'Black Leather Loafers' },
    { id: '3', date: '2026-02-26', amount: 18000, status: 'completed', item: 'Premium Boots' },
    { id: '4', date: '2026-02-24', amount: 15000, status: 'pending', item: 'Casual Sneakers' },
  ],
};

export const mockSocialPosts = [
  {
    id: '1',
    platform: 'Instagram',
    content: '🔥 New collection alert! Premium Aba leather shoes that combine style and comfort. Get yours today! #MadeInNigeria #AbaLeather',
    scheduledFor: '2026-03-04T10:00:00',
    status: 'scheduled',
    views: 0,
    engagements: 0,
  },
  {
    id: '2',
    platform: 'Facebook',
    content: 'Quality you can trust! 🇳🇬 Our handcrafted shoes are built to last. Visit our marketplace today.',
    scheduledFor: '2026-03-03T14:30:00',
    status: 'posted',
    views: 1250,
    engagements: 87,
  },
  {
    id: '3',
    platform: 'Twitter',
    content: 'Supporting local craftsmanship one shoe at a time. Shop Made-in-Naija today! 🇳🇬 #NigeriaFirst',
    scheduledFor: '2026-03-02T09:00:00',
    status: 'posted',
    views: 890,
    engagements: 45,
  },
];
