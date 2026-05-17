import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata = { title: 'Shop all — Lumière' };

export default function ProductsPage() {
  return (
    <div className="fade-in max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-3">All products</p>
        <h1 className="text-5xl text-mauve-700 mb-3">Shop the collection</h1>
        <p className="text-mauve-500 max-w-md mx-auto">
          Every essential for your daily ritual, hand-picked and crafted with care.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
