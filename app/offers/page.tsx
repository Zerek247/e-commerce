import ProductCard from '@/components/ProductCard';
import { getOnSale } from '@/lib/products';
import { Sparkles } from 'lucide-react';

export const metadata = { title: 'Offers — Glow Beauty' };

export default function OffersPage() {
  const sale = getOnSale();

  return (
    <div className="fade-in">
      <section className="bg-gradient-to-br from-pink-200 via-pink-100 to-pink-200 py-20 sm:py-24 px-5 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-12 left-6 sm:left-12 text-pink-400/50 hidden md:block float">
          <Sparkles size={80} />
        </div>
        <div className="absolute bottom-12 right-6 sm:right-12 text-pink-400/50 hidden md:block float" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={60} />
        </div>
        <div className="absolute -top-10 left-1/4 w-60 h-60 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-60 h-60 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="relative">
          <p className="text-[11px] tracking-[0.3em] uppercase text-pink-600 mb-3 sm:mb-4 font-bold">✦ Limited time only ✦</p>
          <h1 className="font-display text-fluid-hero text-ink mb-4 sm:mb-5">
            Special <span className="italic font-serif text-pink-600">offers</span>
          </h1>
          <p className="text-ink-soft max-w-md mx-auto italic font-serif text-base sm:text-lg">Up to 20% off on a curated selection of essentials.</p>
        </div>
      </section>

      <section className="bg-white py-5 sm:py-6 border-b border-pink-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs sm:text-sm">
          <p className="text-ink-mid flex items-center gap-2"><span className="text-pink-500">✦</span> Discounts applied automatically at checkout</p>
          <p className="text-ink-mid flex items-center gap-2"><span className="text-pink-500">✦</span> Free shipping on all sale orders</p>
          <p className="text-ink-mid flex items-center gap-2"><span className="text-pink-500">✦</span> Ends in a limited time</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        {sale.length === 0 ? (
          <p className="text-center text-ink-mid py-12">No products on sale right now. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {sale.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
