export type Product = {
  id: string;
  name: string;
  category: 'lips' | 'eyes' | 'face' | 'skincare';
  categoryLabel: string;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  badge?: 'NEW' | 'BESTSELLER' | 'LIMITED';
  ingredients?: string;
  shades?: string[];
};

export const categories = [
  { slug: 'lips', label: 'Lips', description: 'Lipsticks, glosses, and balms', color: 'rose' },
  { slug: 'eyes', label: 'Eyes', description: 'Eyeshadows, mascaras, and liners', color: 'lavender' },
  { slug: 'face', label: 'Face', description: 'Foundations, blushes, and powders', color: 'peach' },
  { slug: 'skincare', label: 'Skincare', description: 'Serums, creams, and treatments', color: 'sage' },
];

export const products: Product[] = [
  // LIPS
  {
    id: 'lip-001',
    name: 'Velvet Matte Lipstick',
    category: 'lips',
    categoryLabel: 'Lips',
    price: 24,
    shortDescription: 'A weightless matte finish that lasts all day',
    description: 'Our signature velvet matte lipstick delivers rich, saturated color with a soft, blurred finish. Infused with hyaluronic acid and vitamin E to keep lips hydrated and comfortable for up to 8 hours of wear.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
    badge: 'BESTSELLER',
    ingredients: 'Hyaluronic acid, vitamin E, jojoba oil',
    shades: ['Rose petal', 'Dusty mauve', 'Soft nude', 'Berry kiss'],
  },
  {
    id: 'lip-002',
    name: 'Glossy Lip Tint',
    category: 'lips',
    categoryLabel: 'Lips',
    price: 18,
    shortDescription: 'Sheer, dewy color with a high-shine finish',
    description: 'A lightweight lip tint that delivers a sheer wash of color with a glossy, plump finish. Non-sticky formula enriched with peptides to enhance natural lip fullness.',
    image: 'https://images.unsplash.com/photo-1631730486784-d09cb09c6e57?w=600&h=600&fit=crop',
    badge: 'NEW',
    shades: ['Peach blossom', 'Cherry blush', 'Honey nude'],
  },
  {
    id: 'lip-003',
    name: 'Hydrating Lip Balm',
    category: 'lips',
    categoryLabel: 'Lips',
    price: 14,
    shortDescription: 'Nourishing balm with a subtle pink tint',
    description: 'A deeply hydrating lip balm with a hint of natural pink tint. Made with shea butter, coconut oil, and rosehip extract for soft, supple lips.',
    image: 'https://images.unsplash.com/photo-1599733589046-8a35aebe6c11?w=600&h=600&fit=crop',
  },
  {
    id: 'lip-004',
    name: 'Liquid Lipstick',
    category: 'lips',
    categoryLabel: 'Lips',
    price: 26,
    shortDescription: 'Bold, transfer-proof color in one stroke',
    description: 'A long-wearing liquid lipstick that glides on smoothly and dries to a comfortable matte finish. Transfer-proof and waterproof for up to 12 hours.',
    image: 'https://images.unsplash.com/photo-1591360236480-9c6a3cef6056?w=600&h=600&fit=crop',
    shades: ['Mauve', 'Rose', 'Plum', 'Nude'],
  },

  // EYES
  {
    id: 'eye-001',
    name: 'Dreamy Eyeshadow Palette',
    category: 'eyes',
    categoryLabel: 'Eyes',
    price: 48,
    shortDescription: '12 silky shades for endless looks',
    description: 'A curated palette of 12 buttery-soft eyeshadows in warm neutrals, soft pinks, and dreamy shimmers. Highly pigmented and blendable for everyday to evening looks.',
    image: 'https://images.unsplash.com/photo-1583241800698-9c2e0c4b0540?w=600&h=600&fit=crop',
    badge: 'BESTSELLER',
  },
  {
    id: 'eye-002',
    name: 'Volumizing Mascara',
    category: 'eyes',
    categoryLabel: 'Eyes',
    price: 22,
    shortDescription: 'Length, volume, and lift without clumps',
    description: 'A buildable mascara that delivers dramatic length and volume without clumps or flakes. The curved brush lifts and separates each lash for a wide-eyed finish.',
    image: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&h=600&fit=crop',
  },
  {
    id: 'eye-003',
    name: 'Precision Eyeliner',
    category: 'eyes',
    categoryLabel: 'Eyes',
    price: 19,
    shortDescription: 'Ultra-fine tip for the perfect wing',
    description: 'A felt-tip liquid eyeliner with an ultra-fine precision tip. Smudge-proof and waterproof formula stays put for up to 24 hours.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop',
    badge: 'NEW',
  },
  {
    id: 'eye-004',
    name: 'Shimmer Cream Eyeshadow',
    category: 'eyes',
    categoryLabel: 'Eyes',
    price: 24,
    shortDescription: 'Wearable shimmer in a creamy formula',
    description: 'A crease-proof cream eyeshadow with a buildable shimmer finish. Glides on smoothly and sets to a long-wearing finish.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    shades: ['Champagne', 'Rose gold', 'Soft bronze'],
  },

  // FACE
  {
    id: 'face-001',
    name: 'Silk Blush Compact',
    category: 'face',
    categoryLabel: 'Face',
    price: 32,
    shortDescription: 'Soft-focus blush with a natural finish',
    description: 'A finely-milled powder blush that delivers a soft, natural flush of color. The silky formula blends seamlessly for a healthy, lit-from-within glow.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop',
    badge: 'BESTSELLER',
    shades: ['Peach glow', 'Rose petal', 'Coral kiss', 'Soft pink'],
  },
  {
    id: 'face-002',
    name: 'Luminous Foundation',
    category: 'face',
    categoryLabel: 'Face',
    price: 42,
    shortDescription: 'Medium coverage with a dewy finish',
    description: 'A lightweight, buildable foundation that delivers medium coverage with a luminous, skin-like finish. Infused with hyaluronic acid for all-day hydration.',
    image: 'https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b6?w=600&h=600&fit=crop',
  },
  {
    id: 'face-003',
    name: 'Glow Highlighter',
    category: 'face',
    categoryLabel: 'Face',
    price: 28,
    shortDescription: 'A liquid highlight for a soft, glassy glow',
    description: 'A liquid highlighter that delivers a soft, glassy glow. Can be mixed with foundation, applied on top of makeup, or used alone for an all-over glow.',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&h=600&fit=crop',
    badge: 'NEW',
  },
  {
    id: 'face-004',
    name: 'Setting Powder',
    category: 'face',
    categoryLabel: 'Face',
    price: 30,
    shortDescription: 'Translucent powder for a soft-focus finish',
    description: 'A finely-milled translucent setting powder that blurs imperfections and sets makeup for a long-wearing, soft-focus finish.',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop',
  },

  // SKINCARE
  {
    id: 'skin-001',
    name: 'Hydrating Glow Serum',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 56,
    shortDescription: 'Hyaluronic acid serum for a dewy glow',
    description: 'A lightweight serum with three molecular weights of hyaluronic acid to hydrate skin at every level. Leaves skin plump, dewy, and glowing.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    badge: 'BESTSELLER',
    ingredients: 'Hyaluronic acid, niacinamide, vitamin B5',
  },
  {
    id: 'skin-002',
    name: 'Rose Petal Toner',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 34,
    shortDescription: 'Gentle toner with real rose petals',
    description: 'A gentle, alcohol-free toner infused with real rose petals and witch hazel to soothe, balance, and refresh skin without stripping.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
  },
  {
    id: 'skin-003',
    name: 'Vitamin C Brightening Cream',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 48,
    shortDescription: 'Brightening cream with vitamin C',
    description: 'A daily brightening cream with stabilized vitamin C and licorice root extract to even skin tone, fade dark spots, and boost radiance.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=600&fit=crop',
    badge: 'NEW',
  },
  {
    id: 'skin-004',
    name: 'Overnight Repair Mask',
    category: 'skincare',
    categoryLabel: 'Skincare',
    price: 52,
    shortDescription: 'Rich overnight mask for plump, glowing skin',
    description: 'A rich, indulgent overnight mask that works while you sleep. Wake up to plump, glowing, refreshed skin every morning.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop',
    ingredients: 'Squalane, ceramides, peptides',
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
