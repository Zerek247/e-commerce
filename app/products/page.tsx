import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';
import Link from 'next/link';

export const metadata = { title: 'Shop all — Glow Beauty' };

export default function ProductsPage() {
  return (
    <div className="fade-in">
      <section className="bg-pink-gradient py-16 sm:py-20 px-5 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="relative">
          <p className="eyebrow mb-3 sm:mb-4">The full edit</p>
          <h1 className="font-display text-fluid-hero text-ink mb-4">
            Shop the <span className="italic font-serif text-pink-600">collection</span>
          </h1>
          <p className="text-ink-soft max-w-md mx-auto text-sm sm:text-base">Every essential for your daily ritual, made with intention.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide mb-10 sm:mb-12 pb-2">
          <Link href="/products" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-[10px] sm:text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full whitespace-nowrap font-semibold shadow-soft">All</Link>
          {categories.map(c => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="border border-pink-200 text-ink-mid hover:border-pink-500 hover:text-pink-500 text-[10px] sm:text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full whitespace-nowrap font-semibold transition"
            >
              {c.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
