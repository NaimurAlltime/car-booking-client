"use client";
import { ICar } from "@/types/ApiResponse";
import { Button } from "antd";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaDoorClosed } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiCassetteTapeThin } from "react-icons/pi";
import { TbAirConditioning, TbManualGearbox } from "react-icons/tb";

const Card = ({ car }: { car: ICar }) => {
  const params = useSearchParams();
  console.log(params);
  const pickDate = dayjs(params.get("pickDate"));
  const returnDate = dayjs(params.get("returnDate"));
  const diff = returnDate.diff(pickDate, "day");
  return (
    <div className="border rounded-md p-3  ">
      <div className="lg:flex  gap-2 items-center">
        <div>
          <img className="w-[300px] m-auto" src={car?.imageUrl} alt="image" />
        </div>
        <div className="w-full">
          <button className="bg-[#2C6EA7] p-1 rounded-md text-white">Top Pick</button>
          <div className="my-5">
            <h1 className="text-2xl font-bold mb-3">
              {car?.title} <sup className="text-xs">or similar {car?.category} car</sup>
            </h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1">
              <div>
                <span className="flex gap-1">
                  <PiCassetteTapeThin size={25} /> {car?.seats} seats
                </span>
              </div>
              <div>
                <span className="flex gap-1">
                  <TbManualGearbox size={25} /> {car?.automatic ? "Automatic" : "Manual"}
                </span>
              </div>
              <div>
                <span className="flex gap-1">
                  <IoBagOutline size={25} />
                  {car?.bags} bag
                </span>
              </div>
              <div>
                <span className="flex gap-1">
                  {" "}
                  <IoLogoXbox size={25} />
                  Unlimited mileage
                </span>
              </div>
              <div>
                <span className="flex gap-1">
                  {" "}
                  <FaDoorClosed size={25} />
                  {car?.dors} doors
                </span>
              </div>
              <div>
                <span className="flex gap-1">
                  {" "}
                  <TbAirConditioning size={25} />
                  {car?.ac ? "Air conditioning" : "No Air conditioning"}
                </span>
              </div>
              <div>
                <span className="flex gap-1">
                  {" "}
                  <BsFillFuelPumpFill size={20} />
                  {car?.fuel}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-end justify-between">
              <div>
                <span>
                  <sub>Price for {diff} days</sub>
                </span>
                <h1 className="text-3xl font-bold">USD {car?.rentPerDay * diff}</h1>
              </div>
              <div>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#068423",
                  }}
                >
                  View deal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card fooder */}
      <hr className="my-3 border-[1px]" />
      <div className="flex justify-between flex-wrap">
        <div className="flex gap-2">
          <button className="bg-[green] text-white py-1 px-2 rounded-md">Enropcar</button>
          <button className="bg-[#2C6EA7] text-white py-1 px-2 rounded-md">8.1</button>
          <div>
            <h1 className="font-semibold">Very good</h1>
            <h3 className="text-xs">200+ reviews</h3>
          </div>
        </div>
        <div></div>
        <div className="flex gap-3">
          <h1 className="text-[#2C6EA7] flex gap-1">
            {" "}
            <AiOutlineInfoCircle color="#2C6EA7" size={25} />
            Important info
          </h1>
          <h1 className="text-[#2C6EA7] flex gap-1">
            <MdOutlineEmail color="#2C6EA7" size={25} />
            Email quote
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
