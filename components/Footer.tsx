import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-3xl text-white inline-block mb-4">
              GLOW<span className="font-serif font-light italic">beauty</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Luxury beauty crafted with intention. Clean ingredients, timeless design, and shades for every skin.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white"><Twitter size={18} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white"><Facebook size={18} strokeWidth={1.5} /></a>
              <a href="#" aria-label="YouTube" className="text-white/60 hover:text-white"><Youtube size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Shop</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/category/lipsticks" className="hover:text-white">Lipsticks</Link></li>
              <li><Link href="/category/foundation" className="hover:text-white">Foundation</Link></li>
              <li><Link href="/category/eyeshadow" className="hover:text-white">Eyeshadow</Link></li>
              <li><Link href="/category/skincare" className="hover:text-white">Skincare</Link></li>
              <li><Link href="/category/brushes" className="hover:text-white">Brushes</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">House</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/offers" className="hover:text-white">Offers</Link></li>
              <li><span className="hover:text-white cursor-pointer">Sustainability</span></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Stay in touch</h4>
            <p className="text-sm text-white/60 mb-4">Receive exclusive offers and first access to new releases.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-white/30 py-2 text-sm text-white placeholder:text-white/40 focus:border-white"
              />
              <button type="submit" className="text-xs uppercase tracking-widest text-white border-b border-white pb-2 hover:text-white/70">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Glow Beauty · All rights reserved</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accessibility</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
