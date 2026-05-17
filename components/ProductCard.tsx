'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Star } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const badgeColors: Record<string, string> = {
    NEW: 'bg-ink text-white',
    BESTSELLER: 'bg-nude-300 text-ink',
    LIMITED: 'bg-pink-400 text-white',
    SALE: 'bg-pink-500 text-white',
  };

  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/5] bg-nude-50 overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {product.badge && (
            <span className={`absolute top-4 left-4 text-[10px] tracking-widest uppercase px-2.5 py-1 ${badgeColors[product.badge]}`}>
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="absolute bottom-0 left-0 right-0 bg-ink text-white py-3 text-[11px] tracking-widest uppercase font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            Quick add
          </button>
        </div>
      </Link>

      <div className="space-y-1.5">
        <p className="eyebrow text-[10px]">{product.categoryLabel}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-display text-lg text-ink hover:underline leading-snug">{product.name}</h3>
        </Link>
        {product.rating && (
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className={i < Math.round(product.rating!) ? 'fill-ink text-ink' : 'text-nude-300'} />
              ))}
            </div>
            <span className="text-[11px] text-ink-light">({product.reviewCount})</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 pt-1">
          {product.originalPrice ? (
            <>
              <span className="text-pink-500 font-medium">${product.price.toFixed(2)}</span>
              <span className="text-ink-light line-through text-sm">${product.originalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-ink">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
