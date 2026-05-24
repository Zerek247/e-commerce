'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/lib/wishlist-context';
import { getProductById } from '@/lib/products';
import { Heart, ArrowRight, Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const { ids, clear } = useWishlist();
  const products = ids.map(getProductById).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="fade-in">
      <section className="bg-pink-gradient py-16 sm:py-20 px-5 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="relative">
          <p className="eyebrow mb-3 sm:mb-4">Saved for later</p>
          <h1 className="font-display text-fluid-hero text-ink mb-3 sm:mb-4">
            Your <span className="italic font-serif text-pink-600">wishlist</span>
          </h1>
          <p className="text-ink-soft max-w-md mx-auto text-sm sm:text-base">
            {products.length === 0
              ? 'Tap the heart on any product to keep it here for later.'
              : `${products.length} ${products.length === 1 ? 'product' : 'products'} saved with love.`}
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        {products.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="w-20 h-20 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Heart size={26} strokeWidth={1.5} className="text-pink-600" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-3">Your wishlist is empty</h2>
            <p className="text-ink-mid mb-8 max-w-md mx-auto">
              Find your favorites by tapping the heart on any product and they will live here.
            </p>
            <Link href="/products" className="btn-primary">
              Browse the collection <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-6 sm:mb-8">
              <button
                onClick={clear}
                className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-ink-mid hover:text-pink-500 transition font-semibold"
              >
                <Trash2 size={13} /> Clear wishlist
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
