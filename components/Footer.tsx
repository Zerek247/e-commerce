import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-ink via-ink-soft to-ink text-white mt-16 sm:mt-20 md:mt-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-400/10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-12 sm:mb-16">
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-3xl inline-block mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent">GLOW</span>
              <span className="font-serif font-light italic text-white">beauty</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Luxury beauty crafted with intention. Clean ingredients, timeless design, and shades for every skin.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-300"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-pink-300 mb-5 font-semibold">Shop</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/category/lipsticks" className="hover:text-pink-300 transition">Lipsticks</Link></li>
              <li><Link href="/category/foundation" className="hover:text-pink-300 transition">Foundation</Link></li>
              <li><Link href="/category/eyeshadow" className="hover:text-pink-300 transition">Eyeshadow</Link></li>
              <li><Link href="/category/skincare" className="hover:text-pink-300 transition">Skincare</Link></li>
              <li><Link href="/category/brushes" className="hover:text-pink-300 transition">Brushes</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-pink-300 mb-5 font-semibold">House</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-pink-300 transition">About us</Link></li>
              <li><Link href="/contact" className="hover:text-pink-300 transition">Contact</Link></li>
              <li><Link href="/offers" className="hover:text-pink-300 transition">Offers</Link></li>
              <li><span className="hover:text-pink-300 cursor-pointer transition">Sustainability</span></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-pink-300 mb-5 font-semibold">Stay in touch</h4>
            <p className="text-sm text-white/70 mb-4">Receive exclusive offers and first access to new releases.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/20 py-2.5 px-4 text-sm text-white placeholder:text-white/40 rounded-full"
                style={{ borderRadius: '9999px' }}
              />
              <button type="submit" className="text-xs uppercase tracking-widest text-white bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2.5 rounded-full hover:shadow-glow transition-all font-semibold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Glow Beauty · All rights reserved</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <span className="hover:text-pink-300 cursor-pointer transition">Privacy</span>
            <span className="hover:text-pink-300 cursor-pointer transition">Terms</span>
            <span className="hover:text-pink-300 cursor-pointer transition">Accessibility</span>
            <span className="hover:text-pink-300 cursor-pointer transition">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
