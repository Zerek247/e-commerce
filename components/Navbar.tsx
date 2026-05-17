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
      <div className="bg-ink text-white text-[11px] tracking-widest uppercase py-2.5 text-center overflow-hidden">
        <div className="px-4">Complimentary shipping on orders over $75 · Free returns within 30 days</div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-nude-200">
        <nav className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          <button
            className="md:hidden text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex-1 md:flex-none md:w-1/3">
            <ul className="hidden md:flex gap-8 text-[11px] tracking-widest uppercase text-ink-mid font-medium">
              <li><Link href="/products" className="hover:text-ink transition">Shop</Link></li>
              <li><Link href="/category/lipsticks" className="hover:text-ink transition">Lips</Link></li>
              <li><Link href="/category/foundation" className="hover:text-ink transition">Face</Link></li>
              <li><Link href="/category/eyeshadow" className="hover:text-ink transition">Eyes</Link></li>
              <li><Link href="/offers" className="hover:text-pink-500 transition text-pink-500">Sale</Link></li>
            </ul>
          </div>

          <Link href="/" className="font-display text-[26px] md:text-[30px] text-ink tracking-tight">
            GLOW
            <span className="font-serif font-light italic">beauty</span>
          </Link>

          <div className="md:w-1/3 flex items-center justify-end gap-5 text-ink">
            <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-ink-mid transition" aria-label="Search">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link href="/about" className="hidden md:block hover:text-ink-mid transition" aria-label="Account">
              <User size={18} strokeWidth={1.5} />
            </Link>
            <Link href="/cart" className="hidden md:block hover:text-ink-mid transition" aria-label="Wishlist">
              <Heart size={18} strokeWidth={1.5} />
            </Link>
            <button onClick={() => setIsOpen(true)} className="relative hover:text-ink-mid transition" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-ink text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>

        {searchOpen && (
          <div className="border-t border-nude-200 bg-white">
            <form onSubmit={handleSearch} className="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-3">
              <Search size={18} strokeWidth={1.5} className="text-ink-mid" />
              <input
                type="text"
                autoFocus
                placeholder="Search for products, ingredients, or shades..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm placeholder:text-ink-light text-ink"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-ink-mid hover:text-ink">
                <X size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden border-t border-nude-200 bg-white">
            <ul className="px-6 py-5 space-y-4 text-sm uppercase tracking-widest text-ink-mid font-medium">
              <li><Link href="/products" onClick={() => setMobileOpen(false)}>Shop all</Link></li>
              <li><Link href="/category/lipsticks" onClick={() => setMobileOpen(false)}>Lipsticks</Link></li>
              <li><Link href="/category/foundation" onClick={() => setMobileOpen(false)}>Foundation</Link></li>
              <li><Link href="/category/eyeshadow" onClick={() => setMobileOpen(false)}>Eyeshadow</Link></li>
              <li><Link href="/category/skincare" onClick={() => setMobileOpen(false)}>Skincare</Link></li>
              <li><Link href="/category/brushes" onClick={() => setMobileOpen(false)}>Brushes</Link></li>
              <li className="text-pink-500"><Link href="/offers" onClick={() => setMobileOpen(false)}>Sale</Link></li>
              <li className="border-t border-nude-200 pt-4 text-ink"><Link href="/about" onClick={() => setMobileOpen(false)}>About us</Link></li>
              <li className="text-ink"><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
