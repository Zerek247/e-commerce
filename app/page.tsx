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
      <section className="relative min-h-[600px] h-[90vh] max-h-[900px] overflow-hidden bg-pink-gradient">
        <Image
          src="/images/page/hero.webp"
          alt="Glow Beauty hero — luxury beauty essentials"
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/20 to-transparent" />

        {/* Floating decorative elements */}
        <div className="hidden md:block absolute top-20 right-20 w-32 h-32 rounded-full bg-pink-300/30 blur-3xl float" />
        <div className="hidden md:block absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-pink-400/20 blur-3xl float" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-6 md:px-12">
            <div className="max-w-xl text-white fade-up">
              <p className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-pink-200 mb-4 sm:mb-5 delay-100 font-semibold">
                ✦ Spring · 2026 collection
              </p>
              <h1 className="font-display text-fluid-hero text-white mb-5 sm:mb-6 fade-up delay-200">
                Reveal your<br />
                <span className="italic font-serif text-pink-200">natural beauty</span>
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md font-light fade-up delay-300">
                Luxury beauty crafted with intention. Discover the ritual that begins with you.
              </p>
              <div className="flex gap-3 sm:gap-4 flex-wrap fade-up delay-300">
                <Link href="/products" className="btn-light">
                  Shop the collection <ArrowRight size={14} />
                </Link>
                <Link
                  href="/offers"
                  className="text-white text-[10px] sm:text-[11px] tracking-widest uppercase border-b border-pink-200 pb-2 hover:text-pink-200 self-center transition"
                >
                  Discover offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-white border-y border-pink-100 py-4 sm:py-5 overflow-hidden">
        <div className="marquee whitespace-nowrap font-display text-xl sm:text-2xl text-ink/40 italic">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 px-6">
              <span>Clean beauty</span>
              <span className="text-pink-500">✦</span>
              <span>Cruelty free</span>
              <span className="text-pink-500">✦</span>
              <span>Made in small batches</span>
              <span className="text-pink-500">✦</span>
              <span>Crafted with intention</span>
              <span className="text-pink-500">✦</span>
              <span>Vegan formulas</span>
              <span className="text-pink-500">✦</span>
              <span>Reveal your natural beauty</span>
              <span className="text-pink-500">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <p className="eyebrow mb-3 sm:mb-4">The collection</p>
          <h2 className="font-display text-fluid-h2 text-ink">Shop by category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {categories.map((cat, idx) => {
            const imgs: Record<string, string> = {
              lipsticks: '/images/categories/lipsticks.webp',
              foundation: '/images/categories/foundation.webp',
              eyeshadow: '/images/categories/eyeshadow.svg',
              skincare: '/images/categories/skincare.svg',
              brushes: '/images/categories/brushes.svg',
            };
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="relative aspect-[3/4] bg-pink-100 overflow-hidden rounded-2xl mb-3 shadow-soft">
                  <Image
                    src={imgs[cat.slug]}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent group-hover:from-pink-500/30 transition-all duration-500" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-ink text-center">{cat.label}</h3>
                <p className="text-xs text-ink-light text-center mt-1 px-2">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-bone py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 sm:mb-12 gap-4">
            <div>
              <p className="eyebrow mb-3 sm:mb-4">Customer favorites</p>
              <h2 className="font-display text-fluid-h2 text-ink">Best sellers</h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-pink-500 hover:text-pink-600 border-b-2 border-pink-500 pb-1 self-start sm:self-end font-semibold"
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:min-h-[600px]">
          <Image
            src="/images/page/ritual.svg"
            alt="The ritual"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent" />
        </div>
        <div className="bg-pink-gradient flex items-center px-6 sm:px-8 md:px-16 py-16 sm:py-20">
          <div className="max-w-md">
            <p className="eyebrow mb-4 sm:mb-5">The philosophy</p>
            <h2 className="font-display text-fluid-h2 text-ink mb-5 sm:mb-6 leading-tight">
              Beauty as a <span className="italic font-serif text-pink-600">daily ritual</span>
            </h2>
            <p className="text-ink-soft leading-relaxed mb-7 sm:mb-8 text-sm sm:text-base">
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
      <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-pink-300/30 blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <p className="eyebrow mb-3 sm:mb-4">✦ Limited time</p>
              <h2 className="font-display text-fluid-h2 text-ink">Special <span className="italic font-serif text-pink-500">offers</span></h2>
              <p className="text-ink-mid mt-3 max-w-md text-sm sm:text-base">Loved by you, on sale this season. Up to 20% off select essentials.</p>
            </div>
            <Link
              href="/offers"
              className="self-start md:self-end inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-pink-500 hover:text-pink-600 border-b-2 border-pink-500 pb-1 font-semibold"
            >
              All offers <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {onSale.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {[
            { icon: Leaf, title: 'Clean ingredients', text: 'Free of parabens, sulfates, and harsh chemicals.' },
            { icon: Heart, title: 'Cruelty free', text: 'Never tested on animals. Always vegan.' },
            { icon: Award, title: 'Crafted with care', text: 'Made in small batches in our atelier.' },
            { icon: Sparkles, title: 'For every skin', text: 'Shades and formulas designed for all.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Icon size={20} strokeWidth={1.5} className="text-pink-600" />
              </div>
              <h3 className="font-display text-lg sm:text-xl text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gradient-to-br from-ink via-ink-soft to-ink text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-pink-300 mb-3 sm:mb-4 font-semibold">Loved by thousands</p>
            <h2 className="font-display text-fluid-h2 text-white">What they are saying</h2>
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-pink-300 text-pink-300" />)}
              </div>
              <span className="text-sm text-white/80">4.9 average from 8,400+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reviews.map(r => (
              <div key={r.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:border-pink-300/30 transition-all duration-300 hover:bg-white/10">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={12} className="fill-pink-300 text-pink-300" />)}
                </div>
                <h3 className="font-display text-lg text-white mb-3">{r.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">"{r.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white">{r.name}</p>
                  <p className="text-xs text-white/50 mt-0.5">{r.location} · Verified buyer</p>
                  <p className="text-[11px] tracking-widest uppercase text-pink-300 mt-2">{r.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-pink-gradient py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 text-pink-300/40">
          <Sparkles size={80} />
        </div>
        <div className="absolute -bottom-10 -right-10 text-pink-300/40">
          <Sparkles size={100} />
        </div>
        <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative">
          <p className="eyebrow mb-3 sm:mb-4">Join the house</p>
          <h2 className="font-display text-fluid-h2 text-ink mb-4 sm:mb-5">
            A <span className="italic font-serif text-pink-600">gift</span> on your inbox
          </h2>
          <p className="text-ink-soft mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
            Receive 10% off your first order, plus first access to new releases and editorial tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-pink-200 px-5 py-4 text-sm text-ink placeholder:text-ink-light rounded-full"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
