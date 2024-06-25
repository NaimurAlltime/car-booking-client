"use client";
import { useRouter } from "@/lib/router-events";
import { ICar } from "@/types/ApiResponse";
import { Button } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaDoorClosed } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoLogoXbox } from "react-icons/io";
import { IoBagOutline, IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiCassetteTapeThin } from "react-icons/pi";
import { TbAirConditioning, TbManualGearbox } from "react-icons/tb";

const Card = ({ car }: { car: ICar }) => {
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const searchQuery = Object.fromEntries(params.entries());
  const pickDate = dayjs(params.get("pickDate"));
  const returnDate = dayjs(params.get("returnDate"));
  const diff = returnDate.diff(pickDate, "day");
  return (
    <div className="border-[2px] rounded-md p-1 md:p-3 mt-7">
      <div className="lg:flex  gap-7 items-center">
        <div>
          <Image
            width={100}
            height={100}
            className="w-[320px] m-auto"
            src={car?.imageUrl}
            alt="image"
          />
        </div>
        <div className="w-full">
          <button className="bg-[#2C6EA7] p-1 rounded-md text-white">
            Top Pick
          </button>
          <div className="my-5">
            <h1 className="text-2xl font-semibold mb-3 uppercase">
              {car?.title}{" "}
              <sup className="text-xs md:flex hidden">
                OR Similar {car?.category} CAR
              </sup>
            </h1>
            <div className="">
              <div className="mt-2 flex justify-between items-center">
                <div className="md:block hidden">
                  <span className="flex gap-1 text-sm">
                    <PiCassetteTapeThin size={22} /> {car?.seats} SEATS
                  </span>
                </div>
                <div>
                  <span className="flex gap-1 text-sm">
                    <TbManualGearbox size={22} />{" "}
                    {car?.automatic ? "Automatic" : "Manual"}
                  </span>
                </div>
                {/* <div>
                <span className="flex gap-1 text-sm">
                  <IoBagOutline size={22} />
                  {car?.bags} BAG
                </span>
              </div> */}
                <div className="md:block hidden">
                  <span className="flex gap-1 text-sm">
                    {" "}
                    <BsFillFuelPumpFill size={20} />
                    {car?.fuel}
                  </span>
                </div>
                <div className="md:hidden block">
                  <span className="flex gap-1 text-sm">
                    {" "}
                    <TbAirConditioning size={22} />
                    {car?.ac ? "Air conditioning" : "Air conditioning"}
                  </span>
                </div>
              </div>
              <div className="flex lg:gap-[155px] md:gap-[68px] gap-2 text-sm justify-start items-center mt-2">
                <div className="md:hidden block">
                  <span className="flex gap-1 text-sm">
                    <PiCassetteTapeThin size={22} /> {car?.seats} SEATS
                  </span>
                </div>
                <div className="md:hidden block ml-[33%]">
                  <span className="flex gap-1 text-sm">
                    {" "}
                    <BsFillFuelPumpFill size={20} />
                    {car?.fuel}
                  </span>
                </div>
                <div className="md:block hidden">
                  <span className="flex gap-1 text-sm text-green-700">
                    {" "}
                    <IoLogoXbox size={22} />
                    UNLIMITED MILEAGE
                  </span>
                </div>
                {/* <div>
                  <span className="flex gap-1 text-sm">
                    {" "}
                    <FaDoorClosed size={22} />
                    {car?.dors} DOORS
                  </span>
                </div> */}
                <div className="md:block hidden">
                  <span className="flex gap-1 text-sm">
                    {" "}
                    <TbAirConditioning size={22} />
                    {car?.ac ? "Air conditioning" : "Air conditioning"}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                {/* <div className="md:block hidden">
                  <span className="flex gap-1 text-sm">
                    {" "}
                    <BsFillFuelPumpFill size={20} />
                    {car?.fuel}
                  </span>
                </div> */}

                <div className="md:hidden block">
                  <span className="flex gap-1 text-sm text-green-700">
                    {" "}
                    <IoLogoXbox size={22} />
                    UNLIMITED MILEAGE
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-1">
              <div className="">
                <span>
                  <sub>Price for {diff} days</sub>
                </span>
                <h1 className="text-2xl font-semibold text-gray-700 mr-4">
                  {car?.rentPerDay * diff} MAD/Total
                </h1>
              </div>
              {/* <div>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#068423",
                    color: "white",
                  }}
                  onClick={() =>
                    router.push(
                      `/details/${car?._id}?${new URLSearchParams(searchQuery)}`
                    )
                  }
                >
                  Book
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* card fooder */}
      <hr className="my-3 border-[1px]" />
      <div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex gap-2">
            {/* <button className="bg-[green] text-white py-1 px-2 rounded-md">
              Enropcar
            </button> */}
            <div className="flex gap-3 justify-center items-center">
              <button className="bg-[#2C6EA7] text-white py-1 px-2 rounded-md">
                8.1
              </button>
              <div>
                <h1 className="font-semibold">Very good</h1>
                <h3 className="text-xs">200+ reviews</h3>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3 hidden justify-center items-center">
            <h1
              className="text-[#2C6EA7] flex gap-1 text-sm justify-center items-center cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}
            >
              {" "}
              <AiOutlineInfoCircle color="#2C6EA7" size={22} />
              Important info
              {showInfo ? (
                <IoIosArrowUp color="#2C6EA7" size={22} />
              ) : (
                <IoIosArrowDown color="#2C6EA7" size={22} />
              )}
            </h1>
            <h1 className="text-[#2C6EA7] flex gap-1 text-sm">
              <MdOutlineEmail color="#2C6EA7" size={22} />
              Email quote
            </h1>
          </div>
          <div>
            <Button
              size="large"
              style={{
                backgroundColor: "#068423",
                color: "white",
              }}
              onClick={() =>
                router.push(
                  `/details/${car?._id}?${new URLSearchParams(searchQuery)}`
                )
              }
            >
              Book
            </Button>
          </div>
        </div>
        <div className="flex gap-3 mt-3 md:hidden justify-center items-center">
          <h1
            className="text-[#2C6EA7] flex gap-1 text-sm justify-center items-center cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
          >
            {" "}
            <AiOutlineInfoCircle color="#2C6EA7" size={22} />
            Important info
            {showInfo ? (
              <IoIosArrowUp color="#2C6EA7" size={22} />
            ) : (
              <IoIosArrowDown color="#2C6EA7" size={22} />
            )}
          </h1>
          <h1 className="text-[#2C6EA7] flex gap-1 text-sm">
            <MdOutlineEmail color="#2C6EA7" size={22} />
            Email quote
          </h1>
        </div>
        {showInfo && (
          <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              Fuel policy: Pick-up and return with the same level
            </p>
            <p className="flex items-center">
              {" "}
              <span className="text-green-500 pr-2 text-xl py-1">
                <IoCheckmarkOutline />
              </span>
              Protection in case of theft
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl py-2">
                <IoCheckmarkOutline />
              </span>
              DEPOSIT: 5,000 MAD
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              American Express cards are accepted
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl py-2">
                <IoCheckmarkOutline />
              </span>
              Minimum age: 21 years
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              Emergency roadside assistance
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              DEDUCTIBLE: 5,000 MAD
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              FREE collection delivery to your place of residence Marrakesh
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              Partial collision coverage
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              Debit cards are accepted
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              Credit cards are accepted
            </p>
            <p className="flex items-center">
              <span className="text-green-500 pr-2 text-xl">
                <IoCheckmarkOutline />
              </span>
              Airport delivery and collection included
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
