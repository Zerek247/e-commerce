import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';
import Link from 'next/link';

export const metadata = { title: 'Shop all — Glow Beauty' };

export default function ProductsPage() {
  return (
    <div className="fade-in">
      <section className="bg-nude-50 py-20 px-6 text-center">
        <p className="eyebrow mb-4">The full edit</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink mb-4">Shop the collection</h1>
        <p className="text-ink-mid max-w-md mx-auto">Every essential for your daily ritual, made with intention.</p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-12 pb-2">
          <Link href="/products" className="bg-ink text-white text-[11px] uppercase tracking-widest px-5 py-2.5 whitespace-nowrap">All</Link>
          {categories.map(c => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="border border-nude-300 text-ink-mid hover:border-ink text-[11px] uppercase tracking-widest px-5 py-2.5 whitespace-nowrap">
              {c.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
