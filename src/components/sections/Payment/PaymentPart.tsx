"use client";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { message } from "antd";

const PaymentPart = () => {
  const [cardError, setCardError] = useState<any>("");
  const [paymentId, setPaymentId] = useState<string>("");
  const stripe = useStripe();
  const elements = useElements();

  // router use
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentId("");
    setCardError("");

    if (!stripe || !elements) {
      return;
    }

    // const result = await stripe.createToken(elements.getElement(CardElement));

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    // const  = await stripe.createPaymentMethod({
    //   type: "card",
    //   card
    // })

    if (error) {
      console.log("error", error);
      const err = error.message;
      setCardError(err);
    } else {
      if (paymentMethod.id) {
        message.success("Your Payment is successfull Done");
        setPaymentId(paymentMethod.id);
        router.push(`/`);
      }
      console.log("payment method", paymentMethod);
    }
  };
  return (
    <div className="md:w-2/3 w-full h-48 mt-6 mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className="">
          <CardElement />
        </div>

        <div className="text-center mt-5 ">
          <button
            className=" w-full lg:w-36 text-lg font-bold px-5 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
      {/* {paymentId && (
        <p className=" text-lg mt-6">
          your payment id: <span className="text-green-500">({paymentId})</span>
        </p>
      )} */}
      {cardError && <p className="text-red-500 mt-6 ">{cardError}</p>}
    </div>
  );
};

export default PaymentPart;
