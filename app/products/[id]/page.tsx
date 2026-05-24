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
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return notFound();

  const gallery = [product.image, ...(product.gallery ?? [])];
  const mainImage = gallery[Math.min(activeImage, gallery.length - 1)];

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
        <div>
          {/* Main image — zooms on hover, swaps when a thumbnail is clicked */}
          <div className="relative aspect-square bg-pink-50 overflow-hidden rounded-3xl shadow-soft group">
            <Image
              key={mainImage}
              src={mainImage}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 fade-in"
              priority
            />
            {product.badge && (
              <span className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-bold shadow-md">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-3 right-3 text-[10px] tracking-widest uppercase text-pink-600 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition pointer-events-none">
              Hover to zoom
            </div>
          </div>

          {/* Clickable thumbnail strip — only shows when there's more than one image */}
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-pressed={activeImage === i}
                  className={`relative aspect-square bg-pink-50 rounded-xl overflow-hidden border-2 transition ${
                    activeImage === i
                      ? 'border-pink-500 ring-2 ring-pink-200'
                      : 'border-transparent hover:border-pink-300 opacity-80 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} — image ${i + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
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

      {/* CUSTOMER REVIEWS */}
      <section className="bg-pink-50/40 py-16 sm:py-20 border-y border-pink-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Rating breakdown */}
          <div className="lg:sticky lg:top-32 self-start">
            <p className="eyebrow mb-3">Customer reviews</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-5">
              Loved by <span className="italic font-serif text-pink-500">{product.reviewCount?.toLocaleString() || 'many'}</span>
            </h2>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display text-5xl text-ink font-bold">{product.rating?.toFixed(1) || '5.0'}</span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className={i < Math.round(product.rating || 5) ? 'fill-pink-500 text-pink-500' : 'text-pink-100'} />
                  ))}
                </div>
                <p className="text-xs text-ink-light">Based on {product.reviewCount?.toLocaleString() || 'verified'} reviews</p>
              </div>
            </div>
            {/* Rating bars */}
            <div className="space-y-2">
              {[
                { stars: 5, pct: 78 },
                { stars: 4, pct: 16 },
                { stars: 3, pct: 4 },
                { stars: 2, pct: 1 },
                { stars: 1, pct: 1 },
              ].map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-3 text-xs">
                  <span className="text-ink-mid w-6">{stars}★</span>
                  <div className="flex-1 h-2 bg-pink-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-ink-light w-9 text-right">{pct}%</span>
                </div>
              ))}
            </div>
            <button className="btn-pink-outline mt-7 w-full">Write a review</button>
          </div>

          {/* Review cards */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                name: 'Sophia M.',
                location: 'Casablanca · Verified buyer',
                rating: 5,
                title: 'Exceeded my expectations',
                text: `Honestly the best ${product.categoryLabel.toLowerCase()} I've tried. Feels luxurious from the packaging to the formula. Will be repurchasing for sure.`,
                date: '2 weeks ago',
              },
              {
                name: 'Yasmine A.',
                location: 'Beni Mellal · Verified buyer',
                rating: 5,
                title: 'My new favorite',
                text: 'Perfect shade, lasts all day, and feels weightless. The shipping was so fast and the unboxing was a whole experience. Highly recommend.',
                date: '1 month ago',
              },
              {
                name: 'Camila R.',
                location: 'Rabat · Verified buyer',
                rating: 4,
                title: 'Beautiful product, small note',
                text: 'Love the formula and the finish. Wish it came in a couple more shades for deeper skin tones, but the quality is undeniable.',
                date: '6 weeks ago',
              },
            ].map((r, idx) => (
              <article key={idx} className="bg-white border border-pink-100 rounded-2xl p-5 sm:p-6 shadow-soft">
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className={i < r.rating ? 'fill-pink-500 text-pink-500' : 'text-pink-100'} />
                      ))}
                    </div>
                    <h3 className="font-display text-lg text-ink">{r.title}</h3>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-ink-light">{r.date}</span>
                </div>
                <p className="text-sm text-ink-mid leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-sm text-ink font-semibold">{r.name}</p>
                <p className="text-[11px] tracking-widest uppercase text-pink-500 mt-1 font-semibold">{r.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
