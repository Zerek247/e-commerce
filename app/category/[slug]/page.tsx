'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { categories, getProductsByCategory } from '@/lib/products';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories.find(c => c.slug === slug);
  if (!category) return notFound();
  const items = getProductsByCategory(slug);

  return (
    <div className="fade-in">
      <section className="bg-pink-gradient py-16 sm:py-20 md:py-24 px-5 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="relative">
          <p className="eyebrow mb-3 sm:mb-4">The category</p>
          <h1 className="font-display text-fluid-hero text-ink mb-4">{category.label}</h1>
          <p className="text-ink-soft max-w-md mx-auto italic font-serif text-base sm:text-lg">{category.description}</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide mb-8 sm:mb-10 pb-2">
          <Link href="/products" className="border border-pink-200 text-ink-mid hover:border-pink-500 hover:text-pink-500 text-[10px] sm:text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full whitespace-nowrap font-semibold transition">All</Link>
          {categories.map(c => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={`text-[10px] sm:text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full whitespace-nowrap font-semibold transition ${
                c.slug === slug
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-soft'
                  : 'border border-pink-200 text-ink-mid hover:border-pink-500 hover:text-pink-500'
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="text-center text-ink-mid py-20">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {items.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
