import { Link, useRouter } from "@/lib/router-events";
import { useSearchParams } from "next/navigation";
import { getSingleCar } from "@/redux/features/car/car.api";
import { BsFillFuelPumpFill, BsSpeedometer2 } from "react-icons/bs";
import { FaRegCircleCheck, FaRegUser } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { PiBagSimpleDuotone } from "react-icons/pi";
import { RxTimer } from "react-icons/rx";
import dayjs from "dayjs";
import PickupLocation from "./PickupLocation";
import RightsideBottom from "./RightsideBottom";
import CarChoice from "./CarDetails/LeftSide/CarChoice";
import PriceDetails from "./CarDetails/LeftSide/PriceDetails";
import ExtraDetails from "./CarDetails/LeftSide/ExtraDetails";
import ProtectionTable from "./CarDetails/ProtectionTable";

const ProtectionSection = async ({
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

          <hr className="my-14" />

          <ProtectionTable />
        </div>
        <div className="lg:w-[30%]  h-full sticky lg:top-20 top-10 lg:mt-8">
          <PickupLocation />
          <RightsideBottom price={car?.rentPerDay} dayDiff={diff} />
        </div>
      </div>
      {/* <div className="text-center mt-5 ">
        <Link
          href={`/checkout/${car?._id}`}
          className=" w-full lg:w-36 text-lg font-bold px-5 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white"
        >
          Continue to book
        </Link>
      </div> */}
      <div className="md:flex gap-4 flex-none justify-center items-center w-full mt-4">
        <Link
          href={`/checkout/${car?._id}`}
          className="border-[1px] border-black/30 flex flex-col justify-center items-center px-8 py-2 rounded-lg bg-white hover:bg-[#f1f7fc] transition-all duration-300"
        >
          <span className="font-Poppins font-semibold text-[#1273c4] text-[17px]">
            Go to back
          </span>
          <span className="font-Poppins text-[#1273c4] text-[17px]">
            Without full protection
          </span>
        </Link>

        <Link
          href={`/checkout/${car?._id}`}
          className="border-none flex flex-col justify-center items-center px-8 py-2 rounded-lg bg-[#068323] hover:bg-[#0d6521] transition-all duration-300"
        >
          <span className="font-Poppins font-semibold text-white text-[17px]">
            Go to back
          </span>
          <span className="font-Poppins text-white text-[17px]">
            With full protection
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProtectionSection;
