'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { searchProducts } from '@/lib/products';
import { Search } from 'lucide-react';

function SearchContent() {
  const params = useSearchParams();
  const query = params.get('q') || '';
  const results = searchProducts(query);

  return (
    <div className="fade-in max-w-[1400px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
      <div className="mb-10 sm:mb-12">
        <p className="eyebrow mb-3">Search results</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mb-3">
          {query ? <>Results for <span className="italic font-serif text-pink-500">"{query}"</span></> : 'Search'}
        </h1>
        <p className="text-ink-mid">
          {results.length === 0 ? 'No results found' : `${results.length} ${results.length === 1 ? 'product' : 'products'} found`}
        </p>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
            <Search size={22} strokeWidth={1.5} className="text-pink-600" />
          </div>
          <h2 className="font-display text-2xl text-ink mb-3">No results</h2>
          <p className="text-ink-mid mb-8 max-w-md mx-auto">Try different keywords or browse our full collection.</p>
          <Link href="/products" className="btn-primary">Shop all products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {results.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-ink-mid">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
