import React from "react";

const TermsCondition = () => {
  return (
    <div className="">
      <div className="border-[1.5px] p-4 rounded-lg">
        <p className="text-xl font-bold pb-4">
          Ready for some money-saving ideas?
        </p>
        <div>
          <p>
            We can send you discounts and other car rental offers, saving you
            even more money in the future.
          </p>
          <div className="flex items-center text-xl gap-2 py-3">
            <input type="checkbox" className="checkbox checkbox-primary" />
            No thanks, count me out.
          </div>

          <p>
            Our{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Privacy Statement
            </span>{" "}
            tells you how to{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              unsubscribe
            </span>
            . It also explains how we use and protect your personal information.
          </p>
        </div>
      </div>
      <div className="border-[1.5px] p-4 rounded-lg my-5">
        <p className="text-xl font-bold pb-4">Terms and conditions</p>
        <h3 className="text-sm">
          By clicking ‘Book now’, you are confirming that you have read,
          understood and accepted our{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Terms of service
          </span>{" "}
          and the{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Budget rental terms
          </span>
          .
        </h3>
      </div>
      <div className="text-center mt-5 ">
        <button className=" w-full lg:w-36 text-lg font-bold px-5 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TermsCondition;
