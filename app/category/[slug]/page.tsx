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
      <section className="bg-nude-100 py-24 px-6 text-center">
        <p className="eyebrow mb-4">The category</p>
        <h1 className="font-display text-5xl md:text-7xl text-ink mb-4">{category.label}</h1>
        <p className="text-ink-mid max-w-md mx-auto italic font-serif text-lg">{category.description}</p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-10 pb-2">
          <Link href="/products" className="border border-nude-300 text-ink-mid hover:border-ink text-[11px] uppercase tracking-widest px-5 py-2.5 whitespace-nowrap">All</Link>
          {categories.map(c => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={`text-[11px] uppercase tracking-widest px-5 py-2.5 whitespace-nowrap ${
                c.slug === slug ? 'bg-ink text-white' : 'border border-nude-300 text-ink-mid hover:border-ink'
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="text-center text-ink-mid py-20">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
