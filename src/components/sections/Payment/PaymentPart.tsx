"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const PaymentPart = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/payments/pay",
        {
          amount: parseFloat(amount) * 100, // Stripe expects the amount in cents
          currency,
          description,
          source,
        }
      );
      console.log(response.data);
    } catch (error) {
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
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
      <br />
      {/* <Link href="/history">View Payment Histor</Link> */}
    </div>
  );
};

export default PaymentPart;
