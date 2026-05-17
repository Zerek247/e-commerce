'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, ArrowRight } from 'lucide-react';
import { Suspense } from 'react';

function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get('order') || '—';

  return (
    <div className="fade-in max-w-xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={32} className="text-mauve-700" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-mauve-500 mb-3">Order confirmed</p>
      <h1 className="text-4xl md:text-5xl text-mauve-700 mb-4">Thank you for your order</h1>
      <p className="text-mauve-500 mb-2">
        We've received your order and will start preparing it shortly.
      </p>
      <p className="text-sm text-mauve-500 mb-10">
        Order number: <span className="font-medium text-mauve-700">{orderId}</span>
      </p>
      <Link href="/" className="btn-primary">
        Back to home <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-mauve-500">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
