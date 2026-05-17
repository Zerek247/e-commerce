'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { ChevronLeft, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', city: '', zip: '', country: 'United States',
    cardNumber: '', expiry: '', cvc: '', cardName: '',
  });

  const shipping = subtotal >= 50 ? 0 : 6;
  const total = subtotal + shipping;

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
          subtotal, shippingCost: shipping, total,
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

  if (items.length === 0 && !submitting) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl text-mauve-700 mb-4">Your bag is empty</h1>
        <Link href="/products" className="btn-primary">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="fade-in max-w-6xl mx-auto px-6 py-12">
      <Link href="/cart" className="inline-flex items-center gap-1 text-sm text-mauve-500 hover:text-mauve-700 mb-6">
        <ChevronLeft size={16} /> Back to bag
      </Link>
      <h1 className="text-4xl md:text-5xl text-mauve-700 mb-10">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white border border-mauve-100 rounded-2xl p-6">
            <h2 className="text-xl text-mauve-700 mb-5">Contact information</h2>
            <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
          </section>

          <section className="bg-white border border-mauve-100 rounded-2xl p-6">
            <h2 className="text-xl text-mauve-700 mb-5">Shipping address</h2>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
              <Input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
            </div>
            <Input name="address" placeholder="Street address" value={form.address} onChange={handleChange} required />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <Input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
              <Input name="zip" placeholder="ZIP / Postal code" value={form.zip} onChange={handleChange} required />
            </div>
            <select name="country" value={form.country} onChange={handleChange} className="w-full mt-3 px-4 py-3 bg-cream border border-mauve-100 rounded-xl text-sm text-mauve-700 focus:outline-none focus:border-mauve-500">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>
          </section>

          <section className="bg-white border border-mauve-100 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl text-mauve-700">Payment</h2>
              <span className="inline-flex items-center gap-1 text-xs text-mauve-500"><Lock size={12} /> Simulated</span>
            </div>
            <Input name="cardName" placeholder="Name on card" value={form.cardName} onChange={handleChange} required />
            <Input name="cardNumber" placeholder="Card number (4242 4242 4242 4242)" value={form.cardNumber} onChange={handleChange} className="mt-3" required />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <Input name="expiry" placeholder="MM / YY" value={form.expiry} onChange={handleChange} required />
              <Input name="cvc" placeholder="CVC" value={form.cvc} onChange={handleChange} required />
            </div>
            <p className="text-xs text-mauve-500 mt-3">This is a school project. No real payments are processed.</p>
          </section>
        </div>

        <div className="bg-white border border-mauve-100 rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="text-xl text-mauve-700 mb-5">Order summary</h2>
          <div className="space-y-3 mb-5 pb-5 border-b border-mauve-100 max-h-64 overflow-y-auto">
            {items.map(item => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-mauve-700">
                  {item.product.name} <span className="text-mauve-500">× {item.quantity}</span>
                </span>
                <span className="text-mauve-700">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-sm text-mauve-500 mb-5">
            <div className="flex justify-between"><span>Subtotal</span><span className="text-mauve-700">${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-mauve-700">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
          </div>
          <div className="flex justify-between mb-6 pt-4 border-t border-mauve-100">
            <span className="text-mauve-700 font-medium">Total</span>
            <span className="text-2xl text-mauve-700">${total.toFixed(2)}</span>
          </div>
          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
            {submitting ? 'Processing...' : `Place order · $${total.toFixed(2)}`}
          </button>
        </div>
      </form>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 bg-cream border border-mauve-100 rounded-xl text-sm text-mauve-700 placeholder-mauve-500 focus:outline-none focus:border-mauve-500 ${props.className ?? ''}`}
    />
  );
}
