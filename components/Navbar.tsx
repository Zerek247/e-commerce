'use client';

import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-mauve-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="font-serif text-2xl text-mauve-700 tracking-wide">
            Lumière
          </Link>
          <ul className="hidden md:flex gap-7 text-sm text-mauve-500">
            <li><Link href="/products" className="hover:text-mauve-700 transition">Shop all</Link></li>
            <li><Link href="/category/lips" className="hover:text-mauve-700 transition">Lips</Link></li>
            <li><Link href="/category/eyes" className="hover:text-mauve-700 transition">Eyes</Link></li>
            <li><Link href="/category/face" className="hover:text-mauve-700 transition">Face</Link></li>
            <li><Link href="/category/skincare" className="hover:text-mauve-700 transition">Skincare</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-5 text-mauve-500">
          <button className="hidden md:block hover:text-mauve-700 transition" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="hidden md:block hover:text-mauve-700 transition" aria-label="Account">
            <User size={18} />
          </button>
          <Link href="/cart" className="relative hover:text-mauve-700 transition" aria-label="Cart">
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden hover:text-mauve-700 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-mauve-100 bg-white">
          <ul className="px-6 py-4 space-y-3 text-sm text-mauve-500">
            <li><Link href="/products" onClick={() => setMobileOpen(false)}>Shop all</Link></li>
            <li><Link href="/category/lips" onClick={() => setMobileOpen(false)}>Lips</Link></li>
            <li><Link href="/category/eyes" onClick={() => setMobileOpen(false)}>Eyes</Link></li>
            <li><Link href="/category/face" onClick={() => setMobileOpen(false)}>Face</Link></li>
            <li><Link href="/category/skincare" onClick={() => setMobileOpen(false)}>Skincare</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
