'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal } = useCart();
  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-ink/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-pink-100 bg-pink-50/50">
            <h2 className="font-display text-xl sm:text-2xl text-ink">Your bag</h2>
            <button onClick={() => setIsOpen(false)} className="text-ink hover:text-pink-500 transition" aria-label="Close">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-20 h-20 bg-pink-gradient rounded-full flex items-center justify-center mb-5 shadow-soft">
                <ShoppingBag size={26} strokeWidth={1.5} className="text-pink-600" />
              </div>
              <p className="font-display text-2xl text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-ink-light mb-6">Begin your beauty ritual</p>
              <Link href="/products" onClick={() => setIsOpen(false)} className="btn-primary">
                Shop now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-4 pb-5 border-b border-pink-100 last:border-0">
                    <div className="relative w-20 h-24 bg-pink-50 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image src={item.product.image} alt={item.product.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-widest uppercase text-pink-500 font-semibold mb-1">{item.product.categoryLabel}</p>
                      <Link href={`/products/${item.product.id}`} onClick={() => setIsOpen(false)} className="text-sm font-medium text-ink hover:text-pink-500 block mb-2">
                        {item.product.name}
                      </Link>
                      <div className="flex justify-between items-end mt-3">
                        <div className="flex items-center border border-pink-200 rounded-full">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2.5 py-1 text-ink hover:bg-pink-50 rounded-l-full" aria-label="Decrease">
                            <Minus size={11} />
                          </button>
                          <span className="px-3 text-xs text-ink min-w-[24px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2.5 py-1 text-ink hover:bg-pink-50 rounded-r-full" aria-label="Increase">
                            <Plus size={11} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-ink">${(item.product.price * item.quantity).toFixed(2)}</span>
                          <button onClick={() => removeItem(item.product.id)} className="text-ink-light hover:text-pink-500 transition" aria-label="Remove">
                            <X size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-pink-100 px-5 sm:px-6 py-5 bg-pink-50/30">
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between text-ink-mid">
                    <span>Subtotal</span>
                    <span className="text-ink font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-ink-mid">
                    <span>Shipping</span>
                    <span className="text-ink font-semibold">{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {subtotal < 75 && subtotal > 0 && (
                    <p className="text-xs text-pink-600 pt-1 font-semibold">✦ Add ${(75 - subtotal).toFixed(2)} for free shipping</p>
                  )}
                </div>
                <div className="flex justify-between mb-5 pt-3 border-t border-pink-200">
                  <span className="font-semibold text-ink">Total</span>
                  <span className="font-display text-2xl bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">${total.toFixed(2)}</span>
                </div>
                <Link href="/cart" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                  Checkout <ArrowRight size={14} />
                </Link>
                <button onClick={() => setIsOpen(false)} className="block w-full text-center text-xs uppercase tracking-widest text-ink-mid hover:text-pink-500 mt-4 transition">
                  Continue shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
