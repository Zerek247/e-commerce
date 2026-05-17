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
        className={`fixed inset-0 bg-ink/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-nude-200">
            <h2 className="font-display text-2xl text-ink">Your bag</h2>
            <button onClick={() => setIsOpen(false)} className="text-ink hover:text-ink-mid" aria-label="Close">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-16 h-16 border border-nude-200 rounded-full flex items-center justify-center mb-5">
                <ShoppingBag size={22} strokeWidth={1.5} className="text-ink-mid" />
              </div>
              <p className="font-display text-2xl text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-ink-light mb-6">Begin your beauty ritual</p>
              <Link href="/products" onClick={() => setIsOpen(false)} className="btn-primary">
                Shop now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-4 pb-5 border-b border-nude-100 last:border-0">
                    <div className="relative w-20 h-24 bg-nude-100 flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="eyebrow text-[10px] mb-1">{item.product.categoryLabel}</p>
                      <Link href={`/products/${item.product.id}`} onClick={() => setIsOpen(false)} className="text-sm font-medium text-ink hover:underline block mb-2">
                        {item.product.name}
                      </Link>
                      <div className="flex justify-between items-end mt-3">
                        <div className="flex items-center border border-nude-200">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-1 text-ink hover:bg-nude-50" aria-label="Decrease">
                            <Minus size={10} />
                          </button>
                          <span className="px-3 text-xs text-ink min-w-[24px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 text-ink hover:bg-nude-50" aria-label="Increase">
                            <Plus size={10} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-ink">${(item.product.price * item.quantity).toFixed(2)}</span>
                          <button onClick={() => removeItem(item.product.id)} className="text-ink-light hover:text-ink" aria-label="Remove">
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-nude-200 px-6 py-5">
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between text-ink-mid">
                    <span>Subtotal</span>
                    <span className="text-ink">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-ink-mid">
                    <span>Shipping</span>
                    <span className="text-ink">{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {subtotal < 75 && subtotal > 0 && (
                    <p className="text-xs text-pink-500 pt-1">Add ${(75 - subtotal).toFixed(2)} for free shipping</p>
                  )}
                </div>
                <div className="flex justify-between mb-5 pt-3 border-t border-nude-100">
                  <span className="font-medium text-ink">Total</span>
                  <span className="font-display text-2xl text-ink">${total.toFixed(2)}</span>
                </div>
                <Link href="/cart" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                  Checkout <ArrowRight size={14} />
                </Link>
                <button onClick={() => setIsOpen(false)} className="block w-full text-center text-xs uppercase tracking-widest text-ink-mid hover:text-ink mt-4">
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
