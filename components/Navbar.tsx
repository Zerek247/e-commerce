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

  const mobileLinks = [
    { href: '/products', label: 'Shop all' },
    { href: '/category/lipsticks', label: 'Lipsticks' },
    { href: '/category/foundation', label: 'Foundation' },
    { href: '/category/eyeshadow', label: 'Eyeshadow' },
    { href: '/category/skincare', label: 'Skincare' },
    { href: '/category/brushes', label: 'Brushes' },
    { href: '/offers', label: '✦ Sale', highlight: true },
    { href: '/about', label: 'About us', divider: true },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center">
          {/* LEFT: mobile menu button + desktop nav */}
          <div className="flex-1 flex items-center">
            <button
              className="md:hidden text-ink hover:text-pink-500 transition relative w-7 h-7"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <Menu
                size={22}
                className={`absolute inset-0 m-auto transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={22}
                className={`absolute inset-0 m-auto transition-all duration-300 ${
                  mobileOpen ? 'opacity-100 rotate-0 scale-100 text-pink-500' : 'opacity-0 -rotate-90 scale-50'
                }`}
              />
            </button>

            <ul className="hidden md:flex gap-6 lg:gap-8 text-[11px] tracking-widest uppercase text-ink-mid font-semibold">
              <li><Link href="/products" className="hover:text-pink-500 transition">Shop</Link></li>
              <li><Link href="/category/lipsticks" className="hover:text-pink-500 transition">Lips</Link></li>
              <li><Link href="/category/foundation" className="hover:text-pink-500 transition">Face</Link></li>
              <li><Link href="/category/eyeshadow" className="hover:text-pink-500 transition">Eyes</Link></li>
              <li><Link href="/offers" className="text-pink-500 hover:text-pink-600 transition">✦ Sale</Link></li>
            </ul>
          </div>

          {/* CENTER: logo */}
          <Link href="/" className="font-display text-[22px] sm:text-[26px] md:text-[30px] tracking-tight shrink-0 px-2">
            <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">GLOW</span>
            <span className="font-serif font-light italic text-ink">beauty</span>
          </Link>

          {/* RIGHT: icons */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-5 text-ink">
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

        {/* SEARCH BAR */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
            searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-pink-100 bg-white">
            <form onSubmit={handleSearch} className="max-w-[1400px] mx-auto px-5 sm:px-6 py-4 flex items-center gap-3">
              <Search size={18} strokeWidth={1.5} className="text-pink-500" />
              <input
                type="text"
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
        </div>

        {/* MOBILE MENU — slide down with stagger */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-gradient-to-b from-white to-pink-50/40 border-t border-pink-100">
            <ul className="px-5 sm:px-6 py-5 space-y-1">
              {mobileLinks.map((link, i) => (
                <li
                  key={link.href + link.label}
                  className={`${link.divider ? 'pt-3 mt-3 border-t border-pink-100' : ''} transition-all duration-500 ease-out ${
                    mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${80 + i * 40}ms` : '0ms' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between py-2.5 text-sm uppercase tracking-widest font-semibold transition ${
                      link.highlight ? 'text-pink-500' : 'text-ink hover:text-pink-500'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-pink-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-30 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
    </>
  );
}
