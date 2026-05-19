import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Heart, Award, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = { title: 'About — Glow Beauty' };

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="relative min-h-[400px] h-[60vh] max-h-[600px] overflow-hidden">
        <Image
          src="/images/page/about-hero.webp"
          alt="Our story"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/55 via-pink-500/25 to-ink/55" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5 sm:px-6">
          <div className="text-white">
            <p className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-pink-200 mb-3 sm:mb-4 font-semibold">About us</p>
            <h1 className="font-display text-fluid-hero text-white">
              Our <span className="italic font-serif text-pink-200">story</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <p className="eyebrow mb-4 sm:mb-5">Founded in 2024</p>
        <h2 className="font-display text-fluid-h2 text-ink mb-6 sm:mb-8 leading-tight">
          Beauty crafted with <span className="italic font-serif text-pink-500">intention</span>
        </h2>
        <p className="text-ink-mid leading-relaxed text-base sm:text-lg mb-6 font-light">
          Glow Beauty was born from a simple belief: that beauty rituals should feel like a gift to yourself.
          A moment of stillness in the morning. A celebration in the evening. A reminder, every day, of your own light.
        </p>
        <p className="text-ink-mid leading-relaxed text-base sm:text-lg font-light">
          We craft luxury formulas with clean, powerful ingredients. We design packaging that feels timeless.
          We curate shades that celebrate every skin. And we do it all in small batches, by hand, in our atelier.
        </p>
      </section>

      <section className="bg-pink-gradient py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow">
            <Image
              src="/images/page/promise.webp"
              alt="Our atelier"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3 sm:mb-4">Our promise</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6 leading-tight">
              Every detail, <span className="italic font-serif text-pink-500">considered</span>
            </h2>
            <div className="space-y-5 sm:space-y-6">
              {[
                { icon: Leaf, title: 'Clean formulations', text: 'Free of parabens, sulfates, phthalates, and harsh chemicals. Always.' },
                { icon: Heart, title: 'Cruelty free, vegan', text: 'Never tested on animals. All our formulas are 100% vegan.' },
                { icon: Award, title: 'Made in small batches', text: 'Hand-crafted in our atelier to ensure quality in every product.' },
                { icon: Sparkles, title: 'Inclusive shades', text: 'Designed and developed with all skin tones in mind, always.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Icon size={18} strokeWidth={1.5} className="text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-ink mb-1">{title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ink leading-relaxed mb-6 sm:mb-8">
          "Beauty is not what you put on. It is what you <span className="text-pink-500">reveal</span>."
        </p>
        <p className="eyebrow">Camille Laurent, Founder</p>
      </section>

      <section className="bg-gradient-to-br from-ink via-ink-soft to-ink text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="max-w-xl mx-auto px-5 sm:px-6 relative">
          <h2 className="font-display text-fluid-h2 text-white mb-4 sm:mb-5">Begin your <span className="italic font-serif text-pink-300">ritual</span></h2>
          <p className="text-white/70 mb-8 sm:mb-10 text-sm sm:text-base">Explore the collection crafted just for you.</p>
          <Link href="/products" className="btn-light">
            Shop the collection <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
