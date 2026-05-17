import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-mauve-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-2xl text-mauve-700 mb-3">Lumière</h3>
          <p className="text-sm text-mauve-500 leading-relaxed">
            Clean, modern beauty essentials crafted to bring out your natural glow.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mauve-700 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-mauve-500">
            <li><Link href="/category/lips" className="hover:text-mauve-700">Lips</Link></li>
            <li><Link href="/category/eyes" className="hover:text-mauve-700">Eyes</Link></li>
            <li><Link href="/category/face" className="hover:text-mauve-700">Face</Link></li>
            <li><Link href="/category/skincare" className="hover:text-mauve-700">Skincare</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mauve-700 mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-mauve-500">
            <li>Contact us</li>
            <li>Shipping & returns</li>
            <li>FAQ</li>
            <li>Track order</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mauve-700 mb-4">Stay in touch</h4>
          <p className="text-sm text-mauve-500 mb-3">Get exclusive offers and beauty tips.</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="text-mauve-500 hover:text-mauve-700"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="text-mauve-500 hover:text-mauve-700"><Twitter size={18} /></a>
            <a href="#" aria-label="Facebook" className="text-mauve-500 hover:text-mauve-700"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-mauve-100 py-6 text-center text-xs text-mauve-500">
        © 2026 Lumière Beauty · All rights reserved
      </div>
    </footer>
  );
}
