import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { PaymentButton } from "./payment-form.styles";
import { useState } from "react";

/**
 * PaymentForm component handles credit card payments using Stripe.
 * It utilizes the Stripe elements and redux selectors to process payments.
 */
const PaymentForm = () => {
  // Initialize Stripe and elements hooks
  const stripe = useStripe();
  const elements = useElements();

  // Get the total cart amount and the current user from the Redux store
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  // State to manage payment processing status
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  /**
   * Handles the payment process triggered on form submission.
   * It sends a request to the backend to create a payment intent, then confirms the card payment with Stripe.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    // Send request to backend to create a payment intent with the amount (in cents)
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    // Confirm the payment with the client secret and card details
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    // Handle the result of the payment
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("done payment!");
      }
    }
  };

  return (
    <PaymentFormContainer onSubmit={paymentHandler}>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
