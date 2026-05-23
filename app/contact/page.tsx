'use client';

import { useState, FormEvent } from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General inquiry', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fade-in">
      <section className="bg-pink-gradient py-16 sm:py-20 px-5 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="relative">
          <p className="eyebrow mb-3 sm:mb-4">Reach out</p>
          <h1 className="font-display text-fluid-hero text-ink mb-4">
            Get in <span className="italic font-serif text-pink-600">touch</span>
          </h1>
          <p className="text-ink-soft max-w-md mx-auto text-sm sm:text-base">We would love to hear from you. Send us a note and we will respond within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-ink mb-4">Reach us directly</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-ink-mid">
                <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} strokeWidth={1.75} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-ink font-semibold mb-1">Email</p>
                  <p>hello@glowbeauty.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-ink-mid">
                <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={15} strokeWidth={1.75} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-ink font-semibold mb-1">Phone</p>
                  <p>+212 5 23 48 27 91</p>
                  <p className="text-xs text-ink-light mt-1">Mon–Fri · 9am–6pm GMT+1</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-ink-mid">
                <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} strokeWidth={1.75} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-ink font-semibold mb-1">Atelier</p>
                  <p>Villa Glow Beauty<br />42 Boulevard Mohammed V<br />Beni Mellal 23000, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl sm:text-2xl text-ink mb-4">Follow us</h3>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 bg-white border border-pink-200 rounded-full flex items-center justify-center text-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white hover:border-transparent transition shadow-soft"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-pink-gradient p-10 sm:p-12 text-center rounded-3xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-soft">
                <Check size={26} strokeWidth={1.75} className="text-pink-500" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mb-3">Message received</h3>
              <p className="text-ink-soft">Thank you for reaching out. We will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-pink-100 p-6 sm:p-8 md:p-10 space-y-5 rounded-3xl shadow-soft">
              <h3 className="font-display text-xl sm:text-2xl text-ink mb-2">Send us a message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
              </div>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-white border border-pink-200 text-sm text-ink rounded-xl"
              >
                <option>General inquiry</option>
                <option>Order question</option>
                <option>Product feedback</option>
                <option>Press / collaboration</option>
                <option>Other</option>
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us what is on your mind..."
                className="w-full px-4 py-3.5 bg-white border border-pink-200 text-sm text-ink placeholder:text-ink-light resize-none rounded-xl"
              />
              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
                {submitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
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
