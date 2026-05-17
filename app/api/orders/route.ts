import { NextResponse } from 'next/server';

const orders: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const orderId = `GB-${Date.now().toString(36).toUpperCase()}`;
    const order = {
      orderId,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      ...body,
    };
    orders.push(order);
    console.log('New order received:', orderId);
    await new Promise(r => setTimeout(r, 700));
    return NextResponse.json({ success: true, orderId, order });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, count: orders.length, orders });
}
