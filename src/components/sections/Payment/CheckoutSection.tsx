"use client";
import { getSingleCar } from "@/redux/features/car/car.api";
import { BsFillFuelPumpFill, BsSpeedometer2 } from "react-icons/bs";
import { FaRegCircleCheck, FaRegUser } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { PiBagSimpleDuotone } from "react-icons/pi";
import { RxTimer } from "react-icons/rx";
import BillingAddress from "./BillingAddress";
import DriversDetails from "./DriversDetails";
import Rightside from "./Rightside";
import TermsCondition from "./TermsCondition";
import { Elements } from "@stripe/react-stripe-js";
import dayjs from "dayjs";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPart from "./PaymentPart";

// TODO publicable key

// key : pk_test_51NISv5CvtirLXdOoAJfNNhTLw1xHkqjyYa4znodKsBDc5RLMgFcbFJMOSbzDh25l5ABmjOlQw7jjvAyu5ZVIZ8pN00fBZ7yaid
const key =
  "pk_test_51NG2obIP8PH7CQMuYWy7GZBJyXhKmKFVuM1cK5xzVDspG4GA93t6rAa9fsas1uubXSTAX81bgrD2aP38x3UoLobk009iEr7oyb";
const stripePromise = loadStripe(key);

const CheckoutSection = async ({
  carId,
  queryParams,
}: {
  carId: string;
  queryParams: any;
}) => {
  const carData = await getSingleCar({
    id: carId,
    params: {
      populate: "location",
    },
  });
  const car = carData?.car;
  const pickDate = dayjs(queryParams?.pickDate);
  const returnDate = dayjs(queryParams?.returnDate);
  const diff = returnDate.diff(pickDate, "day");
  return (
    <div className="mt-5">
      {/* <div className="mt-8">
        <p className="text-blue-600 ">Back to Protection Options</p>
        <h2 className="text-3xl font-bold py-2">Checkout</h2>
        <h4>Next... Confirmation</h4>
      </div> */}
      <div className="lg:flex gap-5">
        <div className="lg:w-[70%]">
          <div className="grid grid-cols-3 gap-5">
            <div className="divider divider-primary"></div>
            <div className="divider divider-primary"></div>
            <div className="divider divider-primary"></div>
          </div>
          <div className="bg-green-100 border-[1.5px] border-green-700 p-4 rounded-md">
            <div className=" flex items-start gap-3">
              <FaRegCircleCheck className="mt-1 text-xl" />
              <div>
                <h2 className="text-xl font-bold">
                  It&apos;s almost time to hit the road
                </h2>
                <h3>
                  Book now and make sure there&apos;s a car waiting for you
                </h3>
              </div>
            </div>
          </div>
          <div className=" my-5 rounded-md p-2 border-[1.5px]">
            <div className="lg:flex gap-10">
              <figure>
                <img className="w-[300px] m-auto" src={car?.imageUrl} alt="" />
              </figure>
              <div>
                <h2 className="text-2xl font-bold">
                  {car?.title}{" "}
                  <sup className="text-xs">or similar {car?.category} car</sup>
                </h2>
                <div>
                  <div className="flex items-center gap-16 pt-4 lg:text-base text-sm">
                    <div>
                      <h2 className="flex items-center gap-2 py-2">
                        <FaRegUser /> {car?.seats} Seats
                      </h2>
                      <h2 className="flex items-center gap-2 ">
                        <PiBagSimpleDuotone /> {car?.bags} bag <RxTimer />
                      </h2>
                    </div>
                    <div>
                      <h2 className="flex items-center gap-2 py-2">
                        <GiGearStickPattern />{" "}
                        {car?.automatic ? "Automatic" : "Manual"}
                      </h2>
                      <h2 className="flex items-center gap-2 ">
                        <BsFillFuelPumpFill size={20} />
                        {car?.fuel}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h2 className="flex items-center gap-2 text-green-300 pt-3">
                      <BsSpeedometer2 /> Unlimited mileage
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3 mx-2" />
            <div className="flex gap-5 py-2 px-2">
              <img
                src="https://www.advisorkhoj.com/resources/images/articles/Countrys-Budget-Affect-Common-Man/Countrys-Budget-Affect-Common-Man.jpg"
                alt=""
                className="h-10 border p-1 px-2"
              />
              <h2 className="bg-sky-600 text-xl font-bold rounded-t-lg rounded-br-lg flex items-center justify-center p-1 text-white">
                8.4
              </h2>
              <div>
                <h1 className="font-bold">Very good</h1>
                <h2 className="text-sm ">100+ reviews</h2>
              </div>
            </div>
          </div>
          <DriversDetails />
          {/* <ProtectionPart /> */}
          <BillingAddress />
          <Elements stripe={stripePromise}>
            <PaymentPart />
          </Elements>

          {/* <TermsCondition /> */}
        </div>
        <div className="lg:w-[30%]  h-full sticky lg:top-20 top-10 lg:mt-8">
          <Rightside price={car?.rentPerDay} dayDiff={diff} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
