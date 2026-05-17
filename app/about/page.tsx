import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Heart, Award, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = { title: 'About — Glow Beauty' };

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-nude-100">
        <Image
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1800&h=1000&fit=crop"
          alt="Our story"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white">
            <p className="text-[11px] tracking-[0.4em] uppercase text-white/80 mb-4">About us</p>
            <h1 className="font-display text-5xl md:text-7xl text-white">Our story</h1>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="eyebrow mb-5">Founded in 2024</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-8 leading-tight">
          Beauty crafted with intention
        </h2>
        <p className="text-ink-mid leading-relaxed text-lg mb-6 font-light">
          Glow Beauty was born from a simple belief: that beauty rituals should feel like a gift to yourself.
          A moment of stillness in the morning. A celebration in the evening. A reminder, every day, of your own light.
        </p>
        <p className="text-ink-mid leading-relaxed text-lg font-light">
          We craft luxury formulas with clean, powerful ingredients. We design packaging that feels timeless.
          We curate shades that celebrate every skin. And we do it all in small batches, by hand, in our atelier.
        </p>
      </section>

      <section className="bg-bone py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=1000&fit=crop"
              alt="Our atelier"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Our promise</p>
            <h2 className="font-display text-4xl text-ink mb-6 leading-tight">
              Every detail, considered
            </h2>
            <div className="space-y-6">
              {[
                { icon: Leaf, title: 'Clean formulations', text: 'Free of parabens, sulfates, phthalates, and harsh chemicals. Always.' },
                { icon: Heart, title: 'Cruelty free, vegan', text: 'Never tested on animals. All our formulas are 100% vegan.' },
                { icon: Award, title: 'Made in small batches', text: 'Hand-crafted in our atelier to ensure quality in every product.' },
                { icon: Sparkles, title: 'Inclusive shades', text: 'Designed and developed with all skin tones in mind, always.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 border border-ink rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={16} strokeWidth={1.5} className="text-ink" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink mb-1">{title}</h3>
                    <p className="text-sm text-ink-mid leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-serif italic text-3xl md:text-4xl text-ink leading-relaxed mb-8">
          "Beauty is not what you put on. It is what you reveal."
        </p>
        <p className="eyebrow">Camille Laurent, Founder</p>
      </section>

      <section className="bg-ink text-white py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-5">Begin your ritual</h2>
          <p className="text-white/70 mb-10">Explore the collection crafted just for you.</p>
          <Link href="/products" className="btn-light">
            Shop the collection <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
