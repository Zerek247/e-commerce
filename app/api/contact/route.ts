import { NextResponse } from 'next/server';

const messages: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messageId = `MSG-${Date.now().toString(36).toUpperCase()}`;
    const message = {
      messageId,
      createdAt: new Date().toISOString(),
      status: 'received',
      ...body,
    };
    messages.push(message);
    console.log('New contact message:', messageId);
    return NextResponse.json({ success: true, messageId });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, count: messages.length, messages });
}
