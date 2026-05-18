'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { ChevronLeft, Lock, Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartCheckoutPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', city: '', zip: '', country: 'United States',
    cardNumber: '', expiry: '', cvc: '', cardName: '',
  });

  const shipping = subtotal >= 75 ? 0 : 8;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: { email: form.email, firstName: form.firstName, lastName: form.lastName },
          shipping: { address: form.address, city: form.city, zip: form.zip, country: form.country },
          items: items.map(i => ({ id: i.product.id, name: i.product.name, quantity: i.quantity, price: i.product.price })),
          subtotal, shippingCost: shipping, tax, total,
        }),
      });
      const data = await res.json();
      if (data.success) {
        clearCart();
        router.push(`/checkout/success?order=${data.orderId}`);
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="fade-in max-w-2xl mx-auto px-5 sm:px-6 py-24 sm:py-32 text-center">
        <div className="w-20 h-20 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
          <ShoppingBag size={24} strokeWidth={1.5} className="text-pink-600" />
        </div>
        <p className="eyebrow mb-4">Empty bag</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mb-4">Your bag is empty</h1>
        <p className="text-ink-mid mb-8 sm:mb-10">Discover our essentials and start your collection.</p>
        <Link href="/products" className="btn-primary">
          Shop now <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="fade-in max-w-[1400px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
      <button
        onClick={() => step === 'checkout' ? setStep('cart') : router.back()}
        className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-widest text-ink-mid hover:text-pink-500 transition mb-6 font-semibold"
      >
        <ChevronLeft size={14} /> {step === 'checkout' ? 'Back to bag' : 'Continue shopping'}
      </button>

      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mb-3">{step === 'cart' ? 'Shopping bag' : 'Checkout'}</h1>
      <div className="flex gap-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-ink-light mb-8 sm:mb-10 flex-wrap font-semibold">
        <span className={step === 'cart' ? 'text-pink-500' : ''}>01 Bag</span>
        <span>—</span>
        <span className={step === 'checkout' ? 'text-pink-500' : ''}>02 Checkout</span>
        <span>—</span>
        <span>03 Confirmation</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        <div className="lg:col-span-2">
          {step === 'cart' ? (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4 sm:gap-5 pb-5 border-b border-pink-100">
                  <div className="relative w-20 sm:w-24 h-28 sm:h-32 bg-pink-50 flex-shrink-0 rounded-2xl overflow-hidden">
                    <Image src={item.product.image} alt={item.product.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-3 mb-3 sm:mb-4">
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-pink-500 font-semibold mb-1">{item.product.categoryLabel}</p>
                        <Link href={`/products/${item.product.id}`} className="font-display text-base sm:text-lg text-ink hover:text-pink-500 transition">
                          {item.product.name}
                        </Link>
                      </div>
                      <button onClick={() => removeItem(item.product.id)} className="text-ink-light hover:text-pink-500 transition" aria-label="Remove">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-pink-200 rounded-full">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2.5 py-1.5 text-ink hover:bg-pink-50 rounded-l-full transition" aria-label="Decrease">
                          <Minus size={11} />
                        </button>
                        <span className="px-3 text-sm min-w-[28px] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2.5 py-1.5 text-ink hover:bg-pink-50 rounded-r-full transition" aria-label="Increase">
                          <Plus size={11} />
                        </button>
                      </div>
                      <span className="font-display text-base sm:text-lg text-ink font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
              <section>
                <h2 className="font-display text-xl text-ink mb-5">Contact</h2>
                <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
              </section>

              <section>
                <h2 className="font-display text-xl text-ink mb-5">Shipping address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <Input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
                  <Input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
                </div>
                <Input name="address" placeholder="Street address" value={form.address} onChange={handleChange} required />
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
                  <Input name="zip" placeholder="ZIP / Postal code" value={form.zip} onChange={handleChange} required />
                </div>
                <select name="country" value={form.country} onChange={handleChange} className="w-full mt-3 px-4 py-3.5 bg-white border border-pink-200 text-sm text-ink rounded-xl">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </section>

              <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display text-xl text-ink">Payment</h2>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-pink-500 font-semibold"><Lock size={11} /> Simulated</span>
                </div>
                <Input name="cardName" placeholder="Name on card" value={form.cardName} onChange={handleChange} required />
                <Input name="cardNumber" placeholder="Card number (use 4242 4242 4242 4242)" value={form.cardNumber} onChange={handleChange} className="mt-3" required />
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Input name="expiry" placeholder="MM / YY" value={form.expiry} onChange={handleChange} required />
                  <Input name="cvc" placeholder="CVC" value={form.cvc} onChange={handleChange} required />
                </div>
                <p className="text-xs text-ink-light mt-3">This is a school project. No real payments are processed.</p>
              </section>
            </form>
          )}
        </div>

        <div className="bg-pink-gradient p-6 sm:p-7 h-fit lg:sticky lg:top-32 rounded-2xl shadow-soft">
          <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">Order summary</h2>
          {step === 'checkout' && (
            <div className="space-y-3 mb-5 pb-5 border-b border-pink-200 max-h-56 overflow-y-auto">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-ink-soft">
                    {item.product.name} <span className="text-ink-light">× {item.quantity}</span>
                  </span>
                  <span className="text-ink font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
          <div className="space-y-3 text-sm mb-5">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span className="text-ink font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Shipping</span>
              <span className="text-ink font-semibold">{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {step === 'checkout' && (
              <div className="flex justify-between text-ink-soft">
                <span>Tax</span>
                <span className="text-ink font-semibold">${tax.toFixed(2)}</span>
              </div>
            )}
            {subtotal < 75 && (
              <p className="text-xs text-pink-600 pt-1 font-semibold">✦ Add ${(75 - subtotal).toFixed(2)} for free shipping</p>
            )}
          </div>
          <div className="flex justify-between mb-6 pt-4 border-t border-pink-200">
            <span className="font-semibold text-ink">Total</span>
            <span className="font-display text-2xl sm:text-3xl bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent font-bold">${(step === 'checkout' ? total : subtotal + shipping).toFixed(2)}</span>
          </div>
          {step === 'cart' ? (
            <button onClick={() => setStep('checkout')} className="btn-primary w-full">
              Proceed to checkout <ArrowRight size={14} />
            </button>
          ) : (
            <button type="submit" form="checkout-form" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? 'Processing...' : `Place order · $${total.toFixed(2)}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3.5 bg-white border border-pink-200 text-sm text-ink placeholder:text-ink-light rounded-xl ${props.className ?? ''}`}
    />
  );
}
