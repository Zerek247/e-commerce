import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { categories, getBestsellers, getNewArrivals } from '@/lib/products';
import { ArrowRight, Sparkles, Leaf, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  const bestsellers = getBestsellers();
  const newArrivals = getNewArrivals();

  return (
    <div className="fade-in">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-rose-100 to-rose-200 px-6 py-24 md:py-32 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-4">Spring collection 2026</p>
          <h1 className="text-5xl md:text-7xl text-mauve-700 mb-6 leading-tight">
            Soft glow,<br />season after season
          </h1>
          <p className="text-mauve-500 text-base mb-10 max-w-md mx-auto">
            Curated beauty essentials in dreamy pastel tones, crafted for the modern romantic.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="btn-primary">
              Shop the collection <ArrowRight size={14} />
            </Link>
            <Link href="/category/skincare" className="btn-secondary">Discover skincare</Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-3">Shop by category</p>
          <h2 className="text-4xl text-mauve-700">Find your favorites</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => {
            const bg: Record<string, string> = {
              rose: 'bg-rose-100 hover:bg-rose-200',
              lavender: 'bg-lavender-100 hover:bg-lavender-200',
              peach: 'bg-peach-100 hover:bg-peach-200',
              sage: 'bg-sage-100 hover:bg-sage-200',
            };
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`${bg[cat.color]} rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-2xl text-mauve-700 mb-1">{cat.label}</h3>
                <p className="text-xs text-mauve-500">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-baseline mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-2">Customer favorites</p>
            <h2 className="text-4xl text-mauve-700">Bestsellers</h2>
          </div>
          <Link href="/products" className="text-sm text-mauve-500 hover:text-mauve-700 hidden md:inline-flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="bg-cream py-20 mt-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={22} className="text-mauve-700" />
            </div>
            <h3 className="text-xl text-mauve-700 mb-2">Clean ingredients</h3>
            <p className="text-sm text-mauve-500">Formulated without parabens, sulfates, or harsh chemicals.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartHandshake size={22} className="text-mauve-700" />
            </div>
            <h3 className="text-xl text-mauve-700 mb-2">Cruelty free</h3>
            <p className="text-sm text-mauve-500">Never tested on animals. Always tested on humans who love beauty.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles size={22} className="text-mauve-700" />
            </div>
            <h3 className="text-xl text-mauve-700 mb-2">Made with love</h3>
            <p className="text-sm text-mauve-500">Crafted in small batches with care for every detail.</p>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-3">Just dropped</p>
          <h2 className="text-4xl text-mauve-700">New arrivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
