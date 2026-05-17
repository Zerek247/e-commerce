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
      <section className="bg-nude-100 py-20 px-6 text-center">
        <p className="eyebrow mb-4">Reach out</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink mb-4">Get in touch</h1>
        <p className="text-ink-mid max-w-md mx-auto">We would love to hear from you. Send us a note and we will respond within 24 hours.</p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="font-display text-2xl text-ink mb-4">Reach us directly</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-ink-mid">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 text-ink" />
                <div>
                  <p className="text-ink font-medium mb-1">Email</p>
                  <p>hello@glowbeauty.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-ink-mid">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 text-ink" />
                <div>
                  <p className="text-ink font-medium mb-1">Phone</p>
                  <p>+1 (555) 247-3346</p>
                  <p className="text-xs text-ink-light mt-1">Mon–Fri · 9am–6pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-ink-mid">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 text-ink" />
                <div>
                  <p className="text-ink font-medium mb-1">Atelier</p>
                  <p>247 Mercer Street<br />New York, NY 10012</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-ink mb-4">Follow us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-ink rounded-full flex items-center justify-center text-ink hover:bg-ink hover:text-white transition"><Instagram size={16} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 border border-ink rounded-full flex items-center justify-center text-ink hover:bg-ink hover:text-white transition"><Twitter size={16} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-ink rounded-full flex items-center justify-center text-ink hover:bg-ink hover:text-white transition"><Facebook size={16} strokeWidth={1.5} /></a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 border border-ink rounded-full flex items-center justify-center text-ink hover:bg-ink hover:text-white transition"><Youtube size={16} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-bone p-12 text-center">
              <div className="w-16 h-16 border border-ink rounded-full flex items-center justify-center mx-auto mb-5">
                <Check size={22} strokeWidth={1.5} className="text-ink" />
              </div>
              <h3 className="font-display text-3xl text-ink mb-3">Message received</h3>
              <p className="text-ink-mid">Thank you for reaching out. We will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-bone p-8 md:p-10 space-y-5">
              <h3 className="font-display text-2xl text-ink mb-2">Send us a message</h3>
              <div className="grid grid-cols-2 gap-3">
                <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
              </div>
              <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3.5 bg-white border border-nude-300 text-sm text-ink focus:border-ink">
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
                className="w-full px-4 py-3.5 bg-white border border-nude-300 text-sm text-ink placeholder:text-ink-light focus:border-ink resize-none"
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
      className={`w-full px-4 py-3.5 bg-white border border-nude-300 text-sm text-ink placeholder:text-ink-light focus:border-ink ${props.className ?? ''}`}
    />
  );
}
