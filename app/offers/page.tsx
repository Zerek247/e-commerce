import ProductCard from '@/components/ProductCard';
import { getOnSale } from '@/lib/products';
import { Sparkles } from 'lucide-react';

export const metadata = { title: 'Offers — Glow Beauty' };

export default function OffersPage() {
  const sale = getOnSale();

  return (
    <div className="fade-in">
      <section className="bg-pink-100 py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-12 left-12 text-pink-300/40 hidden md:block">
          <Sparkles size={80} />
        </div>
        <div className="absolute bottom-12 right-12 text-pink-300/40 hidden md:block">
          <Sparkles size={60} />
        </div>
        <p className="text-[11px] tracking-[0.3em] uppercase text-pink-500 mb-4 font-medium">Limited time only</p>
        <h1 className="font-display text-5xl md:text-7xl text-ink mb-5">Special offers</h1>
        <p className="text-ink-mid max-w-md mx-auto italic font-serif text-lg">Up to 20% off on a curated selection of essentials.</p>
      </section>

      <section className="bg-bone py-6 border-b border-nude-200">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <p className="text-ink-mid">✦ Discounts applied automatically at checkout</p>
          <p className="text-ink-mid">✦ Free shipping on all orders during sale</p>
          <p className="text-ink-mid">✦ Ends in a limited time</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-16">
        {sale.length === 0 ? (
          <p className="text-center text-ink-mid py-12">No products on sale right now. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sale.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
