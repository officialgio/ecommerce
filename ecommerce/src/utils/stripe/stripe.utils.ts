import { loadStripe, Stripe } from "@stripe/stripe-js";

// Load the stripe instance
export const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ""
);
