export type Product = {
  id: string;
  name: string;
  category: 'lipsticks' | 'foundation' | 'eyeshadow' | 'skincare' | 'brushes';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  badge?: 'NEW' | 'BESTSELLER' | 'LIMITED' | 'SALE';
  ingredients?: string;
  shades?: string[];
  rating?: number;
  reviewCount?: number;
};

export const categories = [
  { slug: 'lipsticks', label: 'Lipsticks', description: 'Bold lips, soft confidence' },
  { slug: 'foundation', label: 'Foundation', description: 'Skin-like, second-skin coverage' },
  { slug: 'eyeshadow', label: 'Eyeshadow', description: 'Palettes for every mood' },
  { slug: 'skincare', label: 'Skincare', description: 'The ritual before the makeup' },
  { slug: 'brushes', label: 'Brushes', description: 'Tools made to last a lifetime' },
];

export const products: Product[] = [
  // LIPSTICKS
  {
    id: 'lip-001',
    name: 'Signature Matte Lipstick',
    category: 'lipsticks',
    categoryLabel: 'Lipsticks',
    price: 28,
    shortDescription: 'A weightless matte finish in our most-loved nudes',
    description: 'Our signature matte lipstick delivers rich, saturated color with a soft, blurred finish. Infused with hyaluronic acid and vitamin E to keep lips hydrated and comfortable for up to 8 hours of wear. Crafted in Italy.',
    image: '/images/products/lip-001.webp',
    badge: 'BESTSELLER',
    ingredients: 'Hyaluronic acid, vitamin E, jojoba oil, shea butter',
    shades: ['Bare', 'Rose Petal', 'Dusty Mauve', 'Berry Kiss', 'Classic Red'],
    rating: 4.9,
    reviewCount: 1248,
  },
  {
    id: 'lip-002',
    name: 'Glossy Lip Tint',
    category: 'lipsticks',
    categoryLabel: 'Lipsticks',
    price: 22,
    originalPrice: 28,
    shortDescription: 'Sheer, dewy color with a high-shine finish',
    description: 'A lightweight lip tint that delivers a sheer wash of color with a glossy, plump finish. Non-sticky formula enriched with peptides to enhance natural lip fullness.',
    image: '/images/products/lip-002.webp',
    badge: 'SALE',
    shades: ['Peach Blossom', 'Cherry Blush', 'Honey Nude'],
    rating: 4.8,
    reviewCount: 892,
  },
  {
    id: 'lip-003',
    name: 'Velvet Liquid Lipstick',
    category: 'lipsticks',
    categoryLabel: 'Lipsticks',
    price: 30,
    shortDescription: 'Bold, transfer-proof color in one stroke',
    description: 'A long-wearing liquid lipstick that glides on smoothly and dries to a comfortable velvet finish. Transfer-proof and waterproof for up to 12 hours.',
    image: '/images/products/lip-003.webp',
    badge: 'NEW',
    shades: ['Mauve', 'Rose', 'Plum', 'Nude', 'Burgundy'],
    rating: 4.7,
    reviewCount: 412,
  },
  {
    id: 'lip-004',
    name: 'Tinted Lip Balm',
    category: 'lipsticks',
    categoryLabel: 'Lipsticks',
    price: 18,
    shortDescription: 'Nourishing balm with a subtle pink tint',
    description: 'A deeply hydrating lip balm with a hint of natural pink tint. Made with shea butter, coconut oil, and rosehip extract for soft, supple lips.',
    image: '/images/products/lip-004.webp',
    rating: 4.6,
    reviewCount: 567,
  },

  // FOUNDATION
  {
    id: 'fnd-001',
    name: 'Luminous Silk Foundation',
    category: 'foundation',
    categoryLabel: 'Foundation',
    price: 56,
    shortDescription: 'Medium coverage with a dewy, skin-like finish',
    description: 'A lightweight, buildable foundation that delivers medium coverage with a luminous, skin-like finish. Available in 40 shades. Infused with hyaluronic acid for all-day hydration.',
    image: '/images/products/fnd-001.webp',
    badge: 'BESTSELLER',
    shades: ['Porcelain', 'Ivory', 'Beige', 'Honey', 'Caramel', 'Espresso'],
    rating: 4.9,
    reviewCount: 2103,
  },
  {
    id: 'fnd-002',
    name: 'Matte Velvet Foundation',
    category: 'foundation',
    categoryLabel: 'Foundation',
    price: 52,
    originalPrice: 62,
    shortDescription: 'Full coverage matte for a flawless finish',
    description: 'A full-coverage matte foundation with a soft-focus, velvet finish. Oil-controlling formula stays flawless for up to 16 hours without transferring.',
    image: '/images/products/fnd-002.webp',
    badge: 'SALE',
    shades: ['Light', 'Light-Medium', 'Medium', 'Tan', 'Deep'],
    rating: 4.7,
    reviewCount: 945,
  },
  {
    id: 'fnd-003',
    name: 'Skin Tint Serum',
    category: 'foundation',
    categoryLabel: 'Foundation',
    price: 48,
    shortDescription: 'Sheer coverage with skincare benefits',
    description: 'A breathable skin tint that evens skin tone while delivering active skincare. Niacinamide and squalane work to improve skin over time.',
    image: '/images/products/fnd-003.webp',
    badge: 'NEW',
    ingredients: 'Niacinamide, squalane, hyaluronic acid',
    rating: 4.8,
    reviewCount: 623,
  },
  {
    id: 'fnd-004',
    name: 'Pressed Setting Powder',
    category: 'foundation',
    categoryLabel: 'Foundation',
    price: 38,
    shortDescription: 'Translucent powder for a soft-focus finish',
    description: 'A finely-milled translucent setting powder that blurs imperfections and sets makeup for a long-wearing, soft-focus finish.',
    image: '/images/products/fnd-004.svg',
    rating: 4.6,
    reviewCount: 478,
  },

  // EYESHADOW
  {
    id: 'eye-001',
    name: 'The Nude Palette',
    category: 'eyeshadow',
    categoryLabel: 'Eyeshadow',
    price: 62,
    shortDescription: '12 silky neutrals for endless looks',
    description: 'A curated palette of 12 buttery-soft eyeshadows in warm neutrals, soft pinks, and dreamy shimmers. Highly pigmented and blendable for everyday to evening looks.',
    image: '/images/products/eye-001.svg',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviewCount: 1567,
  },
  {
    id: 'eye-002',
    name: 'Smoky Noir Palette',
    category: 'eyeshadow',
    categoryLabel: 'Eyeshadow',
    price: 58,
    originalPrice: 72,
    shortDescription: '9 deep tones for the perfect smoky eye',
    description: 'A nine-shade palette designed to master the smoky eye. From soft taupes to deep onyx, every shade is highly pigmented and crease-resistant.',
    image: '/images/products/eye-002.svg',
    badge: 'SALE',
    rating: 4.8,
    reviewCount: 834,
  },
  {
    id: 'eye-003',
    name: 'Shimmer Cream Eyeshadow',
    category: 'eyeshadow',
    categoryLabel: 'Eyeshadow',
    price: 26,
    shortDescription: 'Wearable shimmer in a creamy formula',
    description: 'A crease-proof cream eyeshadow with a buildable shimmer finish. Glides on smoothly and sets to a long-wearing finish.',
    image: '/images/products/eye-003.svg',
    badge: 'NEW',
    shades: ['Champagne', 'Rose Gold', 'Soft Bronze', 'Pearl'],
    rating: 4.7,
    reviewCount: 389,
  },
  {
    id: 'eye-004',
    name: 'Volumizing Mascara',
    category: 'eyeshadow',
    categoryLabel: 'Eyeshadow',
    price: 26,
    shortDescription: 'Length, volume, and lift without clumps',
    description: 'A buildable mascara that delivers dramatic length and volume without clumps or flakes. The curved brush lifts and separates each lash for a wide-eyed finish.',
    image: '/images/products/eye-004.svg',
    rating: 4.8,
    reviewCount: 1102,
  },

  // SKINCARE
  {
    id: 'skin-001',
    name: 'Hydrating Glow Serum',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 68,
    shortDescription: 'Hyaluronic acid serum for a dewy glow',
    description: 'A lightweight serum with three molecular weights of hyaluronic acid to hydrate skin at every level. Leaves skin plump, dewy, and glowing.',
    image: '/images/products/skin-001.svg',
    badge: 'BESTSELLER',
    ingredients: 'Hyaluronic acid, niacinamide, vitamin B5',
    rating: 4.9,
    reviewCount: 1843,
  },
  {
    id: 'skin-002',
    name: 'Rose Petal Toner',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 42,
    originalPrice: 52,
    shortDescription: 'Gentle toner with real rose petals',
    description: 'A gentle, alcohol-free toner infused with real rose petals and witch hazel to soothe, balance, and refresh skin without stripping.',
    image: '/images/products/skin-002.svg',
    badge: 'SALE',
    rating: 4.7,
    reviewCount: 567,
  },
  {
    id: 'skin-003',
    name: 'Vitamin C Brightening Cream',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 58,
    shortDescription: 'Brightening cream with stabilized vitamin C',
    description: 'A daily brightening cream with stabilized vitamin C and licorice root extract to even skin tone, fade dark spots, and boost radiance.',
    image: '/images/products/skin-003.svg',
    badge: 'NEW',
    rating: 4.8,
    reviewCount: 412,
  },
  {
    id: 'skin-004',
    name: 'Overnight Repair Mask',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 64,
    shortDescription: 'Rich overnight mask for plump skin',
    description: 'A rich, indulgent overnight mask that works while you sleep. Wake up to plump, glowing, refreshed skin every morning.',
    image: '/images/products/skin-004.svg',
    ingredients: 'Squalane, ceramides, peptides',
    rating: 4.8,
    reviewCount: 729,
  },

  // BRUSHES
  {
    id: 'br-001',
    name: 'Essential Brush Set',
    category: 'brushes',
    categoryLabel: 'Brushes',
    price: 120,
    originalPrice: 165,
    shortDescription: 'The 8 brushes every kit needs',
    description: 'A curated set of 8 essential brushes for face and eyes, crafted from soft synthetic fibers and finished with rose gold ferrules. Includes a luxury vegan leather pouch.',
    image: '/images/products/br-001.svg',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviewCount: 956,
  },
  {
    id: 'br-002',
    name: 'Powder Brush',
    category: 'brushes',
    categoryLabel: 'Brushes',
    price: 38,
    shortDescription: 'Soft-focus powder application',
    description: 'A large, fluffy brush designed for an even, soft-focus application of powders. Made with premium synthetic fibers.',
    image: '/images/products/br-002.svg',
    rating: 4.7,
    reviewCount: 312,
  },
  {
    id: 'br-003',
    name: 'Foundation Brush',
    category: 'brushes',
    categoryLabel: 'Brushes',
    price: 42,
    shortDescription: 'Dense, flat brush for seamless coverage',
    description: 'A densely-packed flat brush designed for an even, streak-free application of liquid and cream foundations.',
    image: '/images/products/br-003.svg',
    badge: 'NEW',
    rating: 4.8,
    reviewCount: 245,
  },
  {
    id: 'br-004',
    name: 'Blending Eye Brush',
    category: 'brushes',
    categoryLabel: 'Brushes',
    price: 28,
    shortDescription: 'Tapered tip for seamless eyeshadow blending',
    description: 'A tapered, fluffy brush designed for seamlessly blending eyeshadows in the crease and outer corner.',
    image: '/images/products/br-004.svg',
    rating: 4.7,
    reviewCount: 198,
  },
];

export const reviews = [
  {
    id: 'r1',
    name: 'Sophia M.',
    location: 'New York, NY',
    rating: 5,
    title: 'My new everyday foundation',
    text: 'The Luminous Silk is exactly what I have been searching for. Lightweight, looks like skin, and lasts all day. I have repurchased three times now.',
    product: 'Luminous Silk Foundation',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Camila R.',
    location: 'Los Angeles, CA',
    rating: 5,
    title: 'Worth every penny',
    text: 'I was skeptical at first about spending this much on a serum, but the glow is real. My skin has never looked better. The bottle also feels like a piece of art on my vanity.',
    product: 'Hydrating Glow Serum',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Olivia T.',
    location: 'London, UK',
    rating: 5,
    title: 'The brush set is perfection',
    text: 'I have tried dozens of brush sets and these are by far the softest and most versatile. The packaging alone makes it the most luxurious unboxing I have had.',
    product: 'Essential Brush Set',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Isabella K.',
    location: 'Paris, FR',
    rating: 5,
    title: 'Obsessed with the nude palette',
    text: 'Every shade is wearable, blendable, and lasts all day. I built my entire bridal look around this palette and got compliments all night.',
    product: 'The Nude Palette',
    verified: true,
  },
];

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category);
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}

export function getBestsellers() {
  return products.filter(p => p.badge === 'BESTSELLER');
}

export function getNewArrivals() {
  return products.filter(p => p.badge === 'NEW');
}

export function getOnSale() {
  return products.filter(p => p.badge === 'SALE');
}

export function searchProducts(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.categoryLabel.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q)
  );
}
