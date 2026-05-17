'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const badgeColors: Record<string, string> = {
    NEW: 'bg-mauve-700 text-white',
    BESTSELLER: 'bg-rose-400 text-white',
    LIMITED: 'bg-peach-400 text-white',
  };

  const bgColors: Record<string, string> = {
    lips: 'bg-rose-100',
    eyes: 'bg-lavender-100',
    face: 'bg-peach-100',
    skincare: 'bg-sage-100',
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-mauve-100 hover:shadow-lg transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className={`relative aspect-square ${bgColors[product.category]} overflow-hidden`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 text-[10px] tracking-wider px-3 py-1 rounded-full ${badgeColors[product.badge]}`}>
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="text-xs text-mauve-500 mb-1">{product.categoryLabel}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-base text-mauve-700 font-medium mb-1 hover:underline">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="text-mauve-700 font-medium">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-mauve-700 hover:bg-mauve-900 text-white p-2 rounded-full"
            aria-label="Add to cart"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
