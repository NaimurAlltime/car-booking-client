"use client";
import { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

// Load your Stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51NG2obIP8PH7CQMuYWy7GZBJyXhKmKFVuM1cK5xzVDspG4GA93t6rAa9fsas1uubXSTAX81bgrD2aP38x3UoLobk009iEr7oyb"
);

const PaymentPart = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePayment = async () => {
    setError("");
    setSuccess("");

    try {
      const stripe: any = await stripePromise;
      const { error: stripeError, token } = await stripe.createToken();

      if (stripeError) {
        setError(stripeError.message);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/v1/payments/pay",
        {
          amount: parseFloat(amount) * 100, // Stripe expects the amount in cents
          currency,
          description,
          source: token.id,
        }
      );
      setSuccess("Payment successful!");
      console.log(response.data);
    } catch (error) {
      setError("Payment failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Stripe Payment</h1>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <br />
      {/* <Link href="/history">View Payment History</Link> */}
    </div>
  );
};

export default PaymentPart;
