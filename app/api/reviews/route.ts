import { NextResponse } from 'next/server';
import { reviews } from '@/lib/products';

export async function GET() {
  return NextResponse.json({ success: true, count: reviews.length, reviews });
}
