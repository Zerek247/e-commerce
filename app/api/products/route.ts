import { NextResponse } from 'next/server';
import { products } from '@/lib/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let filtered = products;
  if (category) {
    filtered = products.filter(p => p.category === category);
  }

  return NextResponse.json({ success: true, count: filtered.length, products: filtered });
}
