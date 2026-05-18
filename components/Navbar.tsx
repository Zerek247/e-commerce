'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, User, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useState, FormEvent } from 'react';

export default function Navbar() {
  const router = useRouter();
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 text-white text-[10px] sm:text-[11px] tracking-widest uppercase py-2.5 text-center overflow-hidden font-semibold">
        <div className="px-4">✦ Complimentary shipping on orders over $75 · Free returns within 30 days ✦</div>
      </div>

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <button
            className="md:hidden text-ink hover:text-pink-500 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="flex-1 md:flex-none md:w-1/3">
            <ul className="hidden md:flex gap-6 lg:gap-8 text-[11px] tracking-widest uppercase text-ink-mid font-semibold">
              <li><Link href="/products" className="hover:text-pink-500 transition">Shop</Link></li>
              <li><Link href="/category/lipsticks" className="hover:text-pink-500 transition">Lips</Link></li>
              <li><Link href="/category/foundation" className="hover:text-pink-500 transition">Face</Link></li>
              <li><Link href="/category/eyeshadow" className="hover:text-pink-500 transition">Eyes</Link></li>
              <li><Link href="/offers" className="text-pink-500 hover:text-pink-600 transition">✦ Sale</Link></li>
            </ul>
          </div>

          <Link href="/" className="font-display text-[22px] sm:text-[26px] md:text-[30px] tracking-tight group">
            <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">GLOW</span>
            <span className="font-serif font-light italic text-ink">beauty</span>
          </Link>

          <div className="md:w-1/3 flex items-center justify-end gap-3 sm:gap-5 text-ink">
            <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-pink-500 transition" aria-label="Search">
              <Search size={18} strokeWidth={1.75} />
            </button>
            <Link href="/about" className="hidden md:block hover:text-pink-500 transition" aria-label="Account">
              <User size={18} strokeWidth={1.75} />
            </Link>
            <Link href="/cart" className="hidden md:block hover:text-pink-500 transition" aria-label="Wishlist">
              <Heart size={18} strokeWidth={1.75} />
            </Link>
            <button onClick={() => setIsOpen(true)} className="relative hover:text-pink-500 transition" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1.75} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-pink-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>

        {searchOpen && (
          <div className="border-t border-pink-100 bg-white">
            <form onSubmit={handleSearch} className="max-w-[1400px] mx-auto px-5 sm:px-6 py-4 flex items-center gap-3">
              <Search size={18} strokeWidth={1.5} className="text-pink-500" />
              <input
                type="text"
                autoFocus
                placeholder="Search for products, ingredients, or shades..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm placeholder:text-ink-light text-ink border-0 px-0"
                style={{ borderRadius: 0 }}
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-ink-mid hover:text-pink-500">
                <X size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden border-t border-pink-100 bg-white">
            <ul className="px-5 sm:px-6 py-5 space-y-4 text-sm uppercase tracking-widest text-ink-mid font-semibold">
              <li><Link href="/products" onClick={() => setMobileOpen(false)} className="hover:text-pink-500 block">Shop all</Link></li>
              <li><Link href="/category/lipsticks" onClick={() => setMobileOpen(false)} className="hover:text-pink-500 block">Lipsticks</Link></li>
              <li><Link href="/category/foundation" onClick={() => setMobileOpen(false)} className="hover:text-pink-500 block">Foundation</Link></li>
              <li><Link href="/category/eyeshadow" onClick={() => setMobileOpen(false)} className="hover:text-pink-500 block">Eyeshadow</Link></li>
              <li><Link href="/category/skincare" onClick={() => setMobileOpen(false)} className="hover:text-pink-500 block">Skincare</Link></li>
              <li><Link href="/category/brushes" onClick={() => setMobileOpen(false)} className="hover:text-pink-500 block">Brushes</Link></li>
              <li><Link href="/offers" onClick={() => setMobileOpen(false)} className="text-pink-500 block">✦ Sale</Link></li>
              <li className="border-t border-pink-100 pt-4"><Link href="/about" onClick={() => setMobileOpen(false)} className="text-ink hover:text-pink-500 block">About us</Link></li>
              <li><Link href="/contact" onClick={() => setMobileOpen(false)} className="text-ink hover:text-pink-500 block">Contact</Link></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
