import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import { WishlistProvider } from '@/lib/wishlist-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import FormMessages from '@/components/FormMessages';
import RouteTransition from '@/components/RouteTransition';

export const metadata: Metadata = {
  title: 'Glow Beauty — Reveal your natural beauty',
  description: 'Luxury beauty essentials crafted with intention. Clean ingredients, timeless design, and shades for every skin.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FF3D7F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <FormMessages />
            <RouteTransition />
            <Navbar />
            <CartDrawer />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
