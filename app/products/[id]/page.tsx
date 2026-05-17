'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { getProductById, products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';
import { ChevronLeft, Heart, Truck, Shield, RefreshCw, Check, Star, Minus, Plus } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedShade, setSelectedShade] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<'description' | 'ingredients' | 'how'>('description');

  if (!product) return notFound();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="fade-in">
      <div className="max-w-[1400px] mx-auto px-6 pt-6">
        <Link href="/products" className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-ink-mid hover:text-ink">
          <ChevronLeft size={14} /> Back
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="relative aspect-square bg-nude-50 overflow-hidden">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          {product.badge && (
            <span className="absolute top-5 left-5 bg-ink text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">{product.categoryLabel}</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink mb-3 leading-tight">{product.name}</h1>

          {product.rating && (
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className={i < Math.round(product.rating!) ? 'fill-ink text-ink' : 'text-nude-300'} />)}
              </div>
              <span className="text-xs text-ink-mid">{product.rating} · {product.reviewCount} reviews</span>
            </div>
          )}

          <p className="text-ink-mid mb-6 leading-relaxed">{product.shortDescription}</p>

          <div className="flex items-baseline gap-3 mb-8">
            {product.originalPrice ? (
              <>
                <span className="font-display text-3xl text-pink-500">${product.price.toFixed(2)}</span>
                <span className="text-ink-light line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-[10px] uppercase tracking-widest bg-pink-100 text-pink-500 px-2 py-1">Save ${(product.originalPrice - product.price).toFixed(0)}</span>
              </>
            ) : (
              <span className="font-display text-3xl text-ink">${product.price.toFixed(2)}</span>
            )}
          </div>

          {product.shades && (
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-ink mb-3 font-medium">
                Shade {selectedShade && <span className="text-ink-light normal-case tracking-normal">— {selectedShade}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.shades.map(shade => (
                  <button
                    key={shade}
                    onClick={() => setSelectedShade(shade)}
                    className={`text-xs px-4 py-2.5 border transition ${
                      selectedShade === shade
                        ? 'bg-ink text-white border-ink'
                        : 'bg-white text-ink border-nude-300 hover:border-ink'
                    }`}
                  >
                    {shade}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 mb-8">
            <div className="flex items-center border border-nude-300">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3.5 text-ink hover:bg-nude-50" aria-label="Decrease">
                <Minus size={13} />
              </button>
              <span className="px-4 text-sm min-w-[32px] text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3.5 text-ink hover:bg-nude-50" aria-label="Increase">
                <Plus size={13} />
              </button>
            </div>
            <button onClick={handleAdd} className="btn-primary flex-1">
              {added ? (<><Check size={14} /> Added</>) : 'Add to bag'}
            </button>
            <button className="border border-nude-300 hover:border-ink p-3.5" aria-label="Wishlist">
              <Heart size={16} strokeWidth={1.5} className="text-ink" />
            </button>
          </div>

          {/* TABS */}
          <div className="border-t border-nude-200 pt-8">
            <div className="flex gap-6 mb-5 text-[11px] uppercase tracking-widest font-medium">
              {(['description', 'ingredients', 'how'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`pb-2 border-b-2 transition ${tab === t ? 'border-ink text-ink' : 'border-transparent text-ink-light hover:text-ink'}`}
                >
                  {t === 'how' ? 'How to use' : t}
                </button>
              ))}
            </div>
            {tab === 'description' && (
              <p className="text-sm text-ink-mid leading-relaxed">{product.description}</p>
            )}
            {tab === 'ingredients' && (
              <p className="text-sm text-ink-mid leading-relaxed">
                {product.ingredients || 'Crafted with clean, carefully sourced ingredients. Free of parabens, sulfates, and harsh chemicals. Vegan and cruelty-free.'}
              </p>
            )}
            {tab === 'how' && (
              <p className="text-sm text-ink-mid leading-relaxed">
                Apply to clean, dry skin. Build coverage gradually for your desired finish. For best results, use as part of your daily ritual.
              </p>
            )}
          </div>

          <div className="border-t border-nude-200 mt-8 pt-6 space-y-3 text-sm text-ink-mid">
            <div className="flex items-center gap-3"><Truck size={15} strokeWidth={1.5} /> Complimentary shipping on orders over $75</div>
            <div className="flex items-center gap-3"><RefreshCw size={15} strokeWidth={1.5} /> Free returns within 30 days</div>
            <div className="flex items-center gap-3"><Shield size={15} strokeWidth={1.5} /> Cruelty free and vegan</div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-bone py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">You may also love</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Complete the ritual</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
