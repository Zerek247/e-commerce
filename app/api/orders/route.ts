import { NextResponse } from 'next/server';

// In-memory order log (resets on server restart). For production, persist to a database.
const orders: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const orderId = `LM-${Date.now().toString(36).toUpperCase()}`;
    const order = {
      orderId,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      ...body,
    };
    orders.push(order);
    console.log('New order received:', orderId);
    // Simulated processing delay
    await new Promise(r => setTimeout(r, 600));
    return NextResponse.json({ success: true, orderId, order });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, count: orders.length, orders });
}
