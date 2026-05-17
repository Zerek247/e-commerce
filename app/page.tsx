import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { categories, getBestsellers, getOnSale, reviews } from '@/lib/products';
import { ArrowRight, Star, Leaf, Heart, Sparkles, Award } from 'lucide-react';

export default function HomePage() {
  const bestsellers = getBestsellers();
  const onSale = getOnSale();

  return (
    <div>
      {/* HERO BANNER */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-nude-100">
        <Image
          src="https://images.unsplash.com/photo-1522335789203-aaa2f6e9c84e?w=1800&h=1200&fit=crop"
          alt="Glow Beauty hero"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
            <div className="max-w-xl text-white fade-up">
              <p className="text-[11px] tracking-[0.4em] uppercase text-white/80 mb-5 delay-100">Spring · 2026 collection</p>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-white mb-6 fade-up delay-200">
                Reveal your<br />natural beauty
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-md font-light fade-up delay-300">
                Luxury beauty crafted with intention. Discover the ritual that begins with you.
              </p>
              <div className="flex gap-4 flex-wrap fade-up delay-300">
                <Link href="/products" className="btn-light">
                  Shop the collection <ArrowRight size={14} />
                </Link>
                <Link href="/offers" className="text-white text-[11px] tracking-widest uppercase border-b border-white pb-2 hover:opacity-70">
                  Discover offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-white border-y border-nude-200 py-5 overflow-hidden">
        <div className="marquee whitespace-nowrap font-display text-2xl text-ink/30 italic">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span>Clean beauty</span>
              <span className="text-pink-300">✦</span>
              <span>Cruelty free</span>
              <span className="text-pink-300">✦</span>
              <span>Made in small batches</span>
              <span className="text-pink-300">✦</span>
              <span>Crafted with intention</span>
              <span className="text-pink-300">✦</span>
              <span>Vegan formulas</span>
              <span className="text-pink-300">✦</span>
              <span>Reveal your natural beauty</span>
              <span className="text-pink-300">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">The collection</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Shop by category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {categories.map(cat => {
            const imgs: Record<string, string> = {
              lipsticks: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop',
              foundation: 'https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b6?w=600&h=800&fit=crop',
              eyeshadow: 'https://images.unsplash.com/photo-1583241800698-9c2e0c4b0540?w=600&h=800&fit=crop',
              skincare: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop',
              brushes: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=600&h=800&fit=crop',
            };
            return (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="group">
                <div className="relative aspect-[3/4] bg-nude-50 overflow-hidden mb-3">
                  <Image src={imgs[cat.slug]} alt={cat.label} fill sizes="20vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/20 transition" />
                </div>
                <h3 className="font-display text-xl text-ink text-center">{cat.label}</h3>
                <p className="text-xs text-ink-light text-center mt-1">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-bone py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="eyebrow mb-4">Customer favorites</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink">Best sellers</h2>
            </div>
            <Link href="/products" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-ink hover:text-ink-mid border-b border-ink pb-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&h=1200&fit=crop"
            alt="The ritual"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-nude-100 flex items-center px-8 md:px-16 py-20">
          <div className="max-w-md">
            <p className="eyebrow mb-5">The philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Beauty as a daily ritual
            </h2>
            <p className="text-ink-mid leading-relaxed mb-8">
              We believe makeup should feel like a gift to yourself. Every formula is crafted with clean,
              powerful ingredients. Every package is designed to feel timeless. Every shade is made to celebrate
              what is already there.
            </p>
            <Link href="/about" className="btn-secondary">
              Our story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="bg-pink-50 py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <p className="eyebrow text-pink-500 mb-4">Limited time</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink">Special offers</h2>
              <p className="text-ink-mid mt-3 max-w-md">Loved by you, on sale this season. Up to 20% off select essentials.</p>
            </div>
            <Link href="/offers" className="self-start md:self-end inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-ink hover:text-ink-mid border-b border-ink pb-1">
              All offers <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {onSale.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: Leaf, title: 'Clean ingredients', text: 'Free of parabens, sulfates, and harsh chemicals.' },
            { icon: Heart, title: 'Cruelty free', text: 'Never tested on animals. Always vegan.' },
            { icon: Award, title: 'Crafted with care', text: 'Made in small batches in our atelier.' },
            { icon: Sparkles, title: 'For every skin', text: 'Shades and formulas designed for all.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <div className="w-12 h-12 border border-nude-300 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon size={18} strokeWidth={1.5} className="text-ink" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-ink text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/60 mb-4 font-medium">Loved by thousands</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">What they are saying</h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-pink-200 text-pink-200" />)}
              </div>
              <span className="text-sm text-white/80">4.9 average from 8,400+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map(r => (
              <div key={r.id} className="border border-white/10 p-7">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={12} className="fill-pink-200 text-pink-200" />)}
                </div>
                <h3 className="font-display text-lg text-white mb-3">{r.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">"{r.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white">{r.name}</p>
                  <p className="text-xs text-white/50 mt-0.5">{r.location} · Verified buyer</p>
                  <p className="text-[11px] tracking-widest uppercase text-pink-200 mt-2">{r.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-nude-100 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow mb-4">Join the house</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-5">A gift on your inbox</h2>
          <p className="text-ink-mid mb-10 leading-relaxed">
            Receive 10% off your first order, plus first access to new releases and editorial tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-nude-200 px-5 py-4 text-sm text-ink placeholder:text-ink-light focus:border-ink"
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
