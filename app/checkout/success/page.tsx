'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, ArrowRight, Mail } from 'lucide-react';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get('order') || '—';

  return (
    <div className="fade-in max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 border border-ink rounded-full flex items-center justify-center mx-auto mb-8">
        <Check size={30} strokeWidth={1.5} className="text-ink" />
      </div>
      <p className="eyebrow mb-4">Order confirmed</p>
      <h1 className="font-display text-5xl md:text-6xl text-ink mb-5">Thank you</h1>
      <p className="text-ink-mid mb-10 leading-relaxed">
        Your order has been received and we will begin preparing it shortly. A confirmation email is on its way.
      </p>

      <div className="bg-bone p-8 mb-10 text-left">
        <div className="flex justify-between items-start mb-4 pb-4 border-b border-nude-200">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-light mb-1">Order number</p>
            <p className="font-display text-2xl text-ink">{orderId}</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-ink-light mb-1">Status</p>
            <p className="text-sm text-ink">Confirmed</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-ink-mid">
          <Mail size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
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
