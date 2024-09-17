import { loadStripe } from "@stripe/stripe-js";

// Load the stripe instance
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
