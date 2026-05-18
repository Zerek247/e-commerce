'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Star, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [wishlist, setWishlist] = useState(false);

  const badgeColors: Record<string, string> = {
    NEW: 'bg-ink text-white',
    BESTSELLER: 'bg-gradient-to-r from-pink-400 to-pink-500 text-white',
    LIMITED: 'bg-pink-600 text-white',
    SALE: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white',
  };

  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/5] bg-pink-50 overflow-hidden mb-3 sm:mb-4 rounded-2xl shadow-soft hover:shadow-glow transition-shadow duration-500">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-semibold ${badgeColors[product.badge]} shadow-md`}>
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlist(!wishlist);
            }}
            aria-label="Wishlist"
            className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-ink hover:text-pink-500 transition-all shadow-sm hover:shadow-md"
          >
            <Heart size={14} strokeWidth={1.5} className={wishlist ? 'fill-pink-500 text-pink-500' : ''} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-widest uppercase font-bold translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 rounded-full shadow-md"
          >
            + Quick add
          </button>
        </div>
      </Link>

      <div className="space-y-1.5 px-1">
        <p className="text-[10px] tracking-[0.2em] uppercase text-pink-500 font-semibold">{product.categoryLabel}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-display text-base sm:text-lg text-ink hover:text-pink-500 leading-snug transition">{product.name}</h3>
        </Link>
        {product.rating && (
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className={i < Math.round(product.rating!) ? 'fill-pink-400 text-pink-400' : 'text-pink-100'} />
              ))}
            </div>
            <span className="text-[11px] text-ink-light">({product.reviewCount})</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 pt-1">
          {product.originalPrice ? (
            <>
              <span className="text-pink-600 font-bold text-base sm:text-lg">${product.price.toFixed(2)}</span>
              <span className="text-ink-light line-through text-sm">${product.originalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-ink font-semibold text-base sm:text-lg">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
