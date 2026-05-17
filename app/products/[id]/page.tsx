'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, ChevronLeft, Heart, Truck, Shield, RefreshCw, Check } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedShade, setSelectedShade] = useState<string | null>(null);

  if (!product) return notFound();

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const bgColors: Record<string, string> = {
    lips: 'bg-rose-100',
    eyes: 'bg-lavender-100',
    face: 'bg-peach-100',
    skincare: 'bg-sage-100',
  };

  return (
    <div className="fade-in max-w-6xl mx-auto px-6 py-10">
      <Link href="/products" className="inline-flex items-center gap-1 text-sm text-mauve-500 hover:text-mauve-700 mb-8">
        <ChevronLeft size={16} /> Back to shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className={`relative aspect-square rounded-3xl overflow-hidden ${bgColors[product.category]}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {product.badge && (
            <span className="absolute top-5 left-5 bg-mauve-700 text-white text-[10px] tracking-wider px-3 py-1.5 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-3">{product.categoryLabel}</p>
          <h1 className="text-4xl md:text-5xl text-mauve-700 mb-3 leading-tight">{product.name}</h1>
          <p className="text-mauve-500 mb-5">{product.shortDescription}</p>
          <p className="text-3xl text-mauve-700 mb-8">${product.price.toFixed(2)}</p>

          {product.shades && product.shades.length > 0 && (
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-mauve-700 mb-3">Shade</p>
              <div className="flex flex-wrap gap-2">
                {product.shades.map(shade => (
                  <button
                    key={shade}
                    onClick={() => setSelectedShade(shade)}
                    className={`text-xs px-4 py-2 rounded-full border transition ${
                      selectedShade === shade
                        ? 'bg-mauve-700 text-white border-mauve-700'
                        : 'bg-white text-mauve-700 border-mauve-100 hover:border-mauve-500'
                    }`}
                  >
                    {shade}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAdd}
              className="btn-primary flex-1 justify-center"
            >
              {added ? (<><Check size={14} /> Added</>) : (<><ShoppingBag size={14} /> Add to bag</>)}
            </button>
            <button className="border border-mauve-100 hover:border-mauve-500 text-mauve-700 p-3 rounded-full transition" aria-label="Add to wishlist">
              <Heart size={16} />
            </button>
          </div>

          <p className="text-sm text-mauve-500 leading-relaxed mb-8">{product.description}</p>

          {product.ingredients && (
            <div className="mb-8 p-5 bg-cream rounded-2xl">
              <p className="text-xs uppercase tracking-widest text-mauve-700 mb-2">Key ingredients</p>
              <p className="text-sm text-mauve-500">{product.ingredients}</p>
            </div>
          )}

          <div className="border-t border-mauve-100 pt-6 space-y-3 text-sm text-mauve-500">
            <div className="flex items-center gap-3"><Truck size={16} /> Free shipping over $50</div>
            <div className="flex items-center gap-3"><RefreshCw size={16} /> 30-day easy returns</div>
            <div className="flex items-center gap-3"><Shield size={16} /> Cruelty free & vegan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
