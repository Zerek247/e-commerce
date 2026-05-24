'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Search, Mail, ShoppingBag, Menu, X, Heart, Home } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { useState, FormEvent, useMemo } from 'react';
import { searchProducts } from '@/lib/products';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const desktopLinks: { href: string; label: string; icon?: typeof Home; highlight?: boolean }[] = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/products', label: 'Shop' },
    { href: '/category/lipsticks', label: 'Lips' },
    { href: '/category/foundation', label: 'Face' },
    { href: '/category/eyeshadow', label: 'Eyes' },
    { href: '/offers', label: '✦ Sale', highlight: true },
  ];

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  const liveResults = useMemo(() => {
    if (query.trim().length < 2) return [];
    return searchProducts(query).slice(0, 6);
  }, [query]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const mobileLinks = [
    { href: '/products', label: 'Shop all' },
    { href: '/category/lipsticks', label: 'Lipsticks' },
    { href: '/category/foundation', label: 'Foundation' },
    { href: '/category/eyeshadow', label: 'Eyeshadow' },
    { href: '/category/skincare', label: 'Skincare' },
    { href: '/category/brushes', label: 'Brushes' },
    { href: '/offers', label: '✦ Sale', highlight: true },
    { href: '/wishlist', label: 'Wishlist' },
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

            <ul className="hidden md:flex gap-5 lg:gap-7 text-[12px] lg:text-[13px] tracking-[0.2em] uppercase text-ink-mid font-semibold">
              {desktopLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                const baseColor = link.highlight
                  ? 'text-pink-500 hover:text-pink-600'
                  : active
                  ? 'text-pink-500'
                  : 'text-ink-soft hover:text-pink-500';
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group relative inline-flex items-center gap-1.5 py-1 transition ${baseColor}`}
                    >
                      {Icon && <Icon size={14} strokeWidth={2} />}
                      <span>{link.label}</span>
                      <span
                        className={`absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-pink-400 to-pink-600 transition-transform duration-300 origin-left ${
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
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
            <Link href="/contact" className="hidden md:block hover:text-pink-500 transition" aria-label="Contact us">
              <Mail size={18} strokeWidth={1.75} />
            </Link>
            <Link href="/wishlist" className="hidden md:block relative hover:text-pink-500 transition" aria-label="Wishlist">
              <Heart size={18} strokeWidth={1.75} className={wishlistCount > 0 ? 'fill-pink-500 text-pink-500' : ''} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-pink-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                  {wishlistCount}
                </span>
              )}
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
            searchOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-pink-100 bg-white">
            <form onSubmit={handleSearch} className="max-w-[1400px] mx-auto px-5 sm:px-6 py-4 flex items-center gap-3">
              <Search size={18} strokeWidth={1.5} className="text-pink-500 shrink-0" />
              <input
                type="text"
                autoFocus={searchOpen}
                placeholder="Search for products, ingredients, or shades..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm placeholder:text-ink-light text-ink border-0 px-0"
                style={{ borderRadius: 0 }}
              />
              <button type="button" onClick={closeSearch} className="text-ink-mid hover:text-pink-500 shrink-0">
                <X size={18} strokeWidth={1.5} />
              </button>
            </form>

            {/* Live results dropdown */}
            {query.trim().length >= 2 && (
              <div className="border-t border-pink-100 max-w-[1400px] mx-auto px-3 sm:px-4 pb-3">
                {liveResults.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-ink-light">
                    No products match <span className="italic text-ink">"{query}"</span>. Try another keyword.
                  </div>
                ) : (
                  <>
                    <p className="px-3 pt-3 pb-2 text-[10px] tracking-[0.25em] uppercase text-pink-500 font-semibold">
                      Top {liveResults.length} {liveResults.length === 1 ? 'result' : 'results'}
                    </p>
                    <ul className="divide-y divide-pink-50">
                      {liveResults.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/products/${p.id}`}
                            onClick={closeSearch}
                            className="flex items-center gap-3 sm:gap-4 px-3 py-2.5 rounded-xl hover:bg-pink-50/60 transition"
                          >
                            <div className="relative w-12 h-14 sm:w-14 sm:h-16 bg-pink-50 rounded-lg overflow-hidden shrink-0">
                              <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[10px] tracking-[0.2em] uppercase text-pink-500 font-semibold">{p.categoryLabel}</p>
                              <p className="font-display text-sm sm:text-base text-ink truncate">{p.name}</p>
                            </div>
                            <div className="text-right shrink-0">
                              {p.originalPrice ? (
                                <>
                                  <p className="text-sm font-bold text-pink-600">${p.price.toFixed(2)}</p>
                                  <p className="text-[11px] line-through text-ink-light">${p.originalPrice.toFixed(2)}</p>
                                </>
                              ) : (
                                <p className="text-sm font-semibold text-ink">${p.price.toFixed(2)}</p>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => { e.preventDefault(); handleSearch(e as unknown as FormEvent); }}
                      className="block w-full text-center text-[11px] tracking-[0.25em] uppercase text-pink-500 hover:text-pink-600 py-3 mt-1 border-t border-pink-50 font-semibold"
                    >
                      See all results →
                    </button>
                  </>
                )}
              </div>
            )}
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
