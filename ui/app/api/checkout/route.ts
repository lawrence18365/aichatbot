import { NextRequest, NextResponse } from 'next/server';

// Minimal Stripe checkout - just get it working!
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // For MVP, just redirect to a Stripe Payment Link
    // Create this in Stripe Dashboard: https://dashboard.stripe.com/payment-links
    const STRIPE_PAYMENT_LINK = process.env.STRIPE_PAYMENT_LINK || 'https://buy.stripe.com/test_YOUR_LINK';
    
    // Add email to the payment link
    const checkoutUrl = `${STRIPE_PAYMENT_LINK}?prefilled_email=${encodeURIComponent(email)}`;
    
    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 });
  }
}
