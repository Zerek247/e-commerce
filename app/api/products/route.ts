import { NextResponse } from 'next/server';
import { products, searchProducts } from '@/lib/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const q = searchParams.get('q');

  let filtered = products;
  if (category) filtered = filtered.filter(p => p.category === category);
  if (q) filtered = searchProducts(q);

  return NextResponse.json({ success: true, count: filtered.length, products: filtered });
}
