import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, country, message, source, privacyConsent } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ error: 'Privacy consent required' }, { status: 400 });
    }

    // TODO: Integrate with Resend/SendGrid email service
    // For now, just acknowledge receipt
    return NextResponse.json({ success: true, message: 'Contact form submitted successfully' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}