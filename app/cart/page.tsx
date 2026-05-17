'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 6;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="fade-in max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={28} className="text-mauve-700" />
        </div>
        <h1 className="text-4xl text-mauve-700 mb-3">Your bag is empty</h1>
        <p className="text-mauve-500 mb-8">Discover our pastel essentials and start your collection.</p>
        <Link href="/products" className="btn-primary">
          Shop the collection <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="fade-in max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl text-mauve-700 mb-10">Shopping bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="flex gap-4 bg-white border border-mauve-100 rounded-2xl p-4">
              <div className="relative w-24 h-24 bg-rose-100 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={item.product.image} alt={item.product.name} fill sizes="96px" className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="text-xs text-mauve-500 mb-1">{item.product.categoryLabel}</p>
                    <Link href={`/products/${item.product.id}`} className="text-mauve-700 font-medium hover:underline">
                      {item.product.name}
                    </Link>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-mauve-500 hover:text-mauve-700"
                    aria-label="Remove"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border border-mauve-100 rounded-full">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 text-mauve-700 hover:bg-cream rounded-l-full"
                      aria-label="Decrease"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-3 text-sm text-mauve-700 min-w-[24px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 text-mauve-700 hover:bg-cream rounded-r-full"
                      aria-label="Increase"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="text-mauve-700 font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-mauve-100 rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="text-2xl text-mauve-700 mb-5">Order summary</h2>
          <div className="space-y-3 text-sm text-mauve-500 mb-5 pb-5 border-b border-mauve-100">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-mauve-700">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-mauve-700">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {subtotal < 50 && subtotal > 0 && (
              <p className="text-xs text-rose-500">Add ${(50 - subtotal).toFixed(2)} more for free shipping</p>
            )}
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-mauve-700 font-medium">Total</span>
            <span className="text-2xl text-mauve-700">${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout" className="btn-primary w-full justify-center">
            Checkout <ArrowRight size={14} />
          </Link>
          <Link href="/products" className="block text-center text-sm text-mauve-500 mt-4 hover:text-mauve-700">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
