import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27-ac", // Using a stable version
});

export async function POST(req: NextRequest) {
  try {
    const { userId, priceId } = await req.json();

    // In a real app, you'd fetch the price from Stripe or a DB
    // For now, we'll use a placeholder or create a session with a fixed price
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Initial ADHD Consultation",
              description: "Clinical review of your intake assessment by a licensed provider.",
            },
            unit_amount: 14900, // $149.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/eligibility?status=submitted`,
      metadata: {
        userId: userId || "guest",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
