'use client';

import { useParams, notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { categories, getProductsByCategory } from '@/lib/products';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories.find(c => c.slug === slug);
  if (!category) return notFound();
  const items = getProductsByCategory(slug);

  const bg: Record<string, string> = {
    rose: 'from-rose-100 to-rose-200',
    lavender: 'from-lavender-100 to-lavender-200',
    peach: 'from-peach-100 to-peach-200',
    sage: 'from-sage-100 to-sage-200',
  };

  return (
    <div className="fade-in">
      <section className={`bg-gradient-to-b ${bg[category.color]} px-6 py-20 text-center`}>
        <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-3">Category</p>
        <h1 className="text-5xl md:text-6xl text-mauve-700 mb-3">{category.label}</h1>
        <p className="text-mauve-500 max-w-md mx-auto">{category.description}</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {items.length === 0 ? (
          <p className="text-center text-mauve-500">No products yet in this category.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
