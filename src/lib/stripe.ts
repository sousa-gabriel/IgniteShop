import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRET_KEY!, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Ignite Shop",
  },
});
