import React from "react";
import { AiTwotoneIdcard } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";

const PaymentPart = () => {
  return (
    <div className="border-[1.5px] p-4 rounded-lg my-5">
      <div className="lg:w-2/3 ">
        <h2 className="text-2xl font-bold mb-4">How would you like to pay?</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold">
              Cardholder&apos;s Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="firstName" className="block text-sm font-semibold">
              Card Number<span className="text-red-500"> *</span>
            </label>
            <div className="relative">
              <AiTwotoneIdcard className="absolute top-6 transform -translate-y-1/2 left-2 text-gray-500 text-2xl" />
              <input
                type="text"
                id="firstName"
                className="mt-1 p-2 ps-10 w-full border rounded-md"
                placeholder="Enter card number"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="mb-4 w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold"
              >
                Expire Date<span className="text-red-500"> *</span>
              </label>
              <div className="">
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="MM / YY"
                  required
                />
              </div>
            </div>
            <div className="mb-4 relative w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold"
                >
                  CVC<span className="text-red-500"> *</span>
                </label>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold"
                >
                  <FaRegQuestionCircle />
                </label>
              </div>
              <div className="relative">
                <AiTwotoneIdcard className="absolute top-6 transform -translate-y-1/2 left-2 text-gray-500 text-2xl" />
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 ps-10 w-full border rounded-md"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPart;
