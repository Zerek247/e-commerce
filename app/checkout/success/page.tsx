'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, ArrowRight, Mail } from 'lucide-react';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get('order') || '—';

  return (
    <div className="fade-in max-w-2xl mx-auto px-5 sm:px-6 py-20 sm:py-24 text-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-glow">
        <Check size={32} strokeWidth={1.75} className="text-pink-600" />
      </div>
      <p className="eyebrow mb-3 sm:mb-4">Order confirmed</p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink mb-4 sm:mb-5">
        Thank <span className="italic font-serif text-pink-500">you</span>
      </h1>
      <p className="text-ink-mid mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
        Your order has been received and we will begin preparing it shortly. A confirmation email is on its way.
      </p>

      <div className="bg-pink-gradient p-6 sm:p-8 mb-8 sm:mb-10 text-left rounded-2xl shadow-soft">
        <div className="flex justify-between items-start mb-4 pb-4 border-b border-pink-200 gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-pink-600 mb-1 font-bold">Order number</p>
            <p className="font-display text-xl sm:text-2xl text-ink">{orderId}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-pink-600 mb-1 font-bold">Status</p>
            <p className="text-sm text-ink font-semibold">Confirmed</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-ink-soft">
          <Mail size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-pink-500" />
          <p>You will receive an email with tracking information once your order ships, typically within 1-2 business days.</p>
        </div>
      </div>

      <Link href="/" className="btn-primary">
        Continue shopping <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-ink-mid">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
