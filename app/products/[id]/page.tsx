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
  const [wishlist, setWishlist] = useState(false);

  if (!product) return notFound();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 pt-5 sm:pt-6">
        <Link href="/products" className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-widest text-ink-mid hover:text-pink-500 transition font-semibold">
          <ChevronLeft size={14} /> Back
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square bg-pink-50 overflow-hidden rounded-3xl shadow-soft">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {product.badge && (
            <span className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-bold shadow-md">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-3 sm:mb-4">{product.categoryLabel}</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mb-3 leading-tight">{product.name}</h1>

          {product.rating && (
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < Math.round(product.rating!) ? 'fill-pink-500 text-pink-500' : 'text-pink-100'} />)}
              </div>
              <span className="text-xs text-ink-mid">{product.rating} · {product.reviewCount} reviews</span>
            </div>
          )}

          <p className="text-ink-mid mb-6 leading-relaxed text-sm sm:text-base">{product.shortDescription}</p>

          <div className="flex items-baseline gap-3 mb-8 flex-wrap">
            {product.originalPrice ? (
              <>
                <span className="font-display text-3xl bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent font-bold">${product.price.toFixed(2)}</span>
                <span className="text-ink-light line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-[10px] uppercase tracking-widest bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full font-bold">Save ${(product.originalPrice - product.price).toFixed(0)}</span>
              </>
            ) : (
              <span className="font-display text-3xl text-ink font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>

          {product.shades && (
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-ink mb-3 font-semibold">
                Shade {selectedShade && <span className="text-pink-500 normal-case tracking-normal">— {selectedShade}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.shades.map(shade => (
                  <button
                    key={shade}
                    onClick={() => setSelectedShade(shade)}
                    className={`text-xs px-4 py-2.5 border rounded-full transition font-medium ${
                      selectedShade === shade
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white border-transparent shadow-soft'
                        : 'bg-white text-ink border-pink-200 hover:border-pink-500'
                    }`}
                  >
                    {shade}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 sm:gap-3 mb-8 flex-wrap sm:flex-nowrap">
            <div className="flex items-center border border-pink-200 rounded-full">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3.5 text-ink hover:bg-pink-50 rounded-l-full transition" aria-label="Decrease">
                <Minus size={13} />
              </button>
              <span className="px-3 text-sm min-w-[28px] text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3.5 text-ink hover:bg-pink-50 rounded-r-full transition" aria-label="Increase">
                <Plus size={13} />
              </button>
            </div>
            <button onClick={handleAdd} className="btn-primary flex-1 min-w-[180px]">
              {added ? (<><Check size={14} /> Added</>) : 'Add to bag'}
            </button>
            <button
              onClick={() => setWishlist(!wishlist)}
              className="border border-pink-200 hover:border-pink-500 hover:bg-pink-50 p-3.5 rounded-full transition"
              aria-label="Wishlist"
            >
              <Heart size={16} strokeWidth={1.5} className={wishlist ? 'fill-pink-500 text-pink-500' : 'text-ink'} />
            </button>
          </div>

          {/* TABS */}
          <div className="border-t border-pink-100 pt-8">
            <div className="flex gap-4 sm:gap-6 mb-5 text-[11px] uppercase tracking-widest font-semibold flex-wrap">
              {(['description', 'ingredients', 'how'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`pb-2 border-b-2 transition ${tab === t ? 'border-pink-500 text-pink-500' : 'border-transparent text-ink-light hover:text-ink'}`}
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

          <div className="border-t border-pink-100 mt-8 pt-6 space-y-3 text-sm text-ink-mid">
            <div className="flex items-center gap-3"><Truck size={16} strokeWidth={1.5} className="text-pink-500" /> Complimentary shipping on orders over $75</div>
            <div className="flex items-center gap-3"><RefreshCw size={16} strokeWidth={1.5} className="text-pink-500" /> Free returns within 30 days</div>
            <div className="flex items-center gap-3"><Shield size={16} strokeWidth={1.5} className="text-pink-500" /> Cruelty free and vegan</div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-bone py-16 sm:py-20">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <p className="eyebrow mb-3">You may also love</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">Complete the <span className="italic font-serif text-pink-500">ritual</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
