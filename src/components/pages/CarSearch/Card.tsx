import React from "react";
import { TbManualGearbox } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";
import { PiCassetteTapeThin } from "react-icons/pi";
import { IoLogoXbox } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const Card = () => {
  return (
    <div className="border rounded-md p-3  ">
      {/* card design */}
      <div className="lg:flex  gap-2 items-center">
        <div>
          <img
            className="w-[300px] m-auto"
            src="/imgs/car-img.png"
            alt="image"
          />
        </div>
        <div className="w-full">
          <button className="bg-[#2C6EA7] p-1 rounded-md text-white">
            Top Pick
          </button>
          <div className="my-5">
            <h1 className="text-2xl font-bold mb-3">
              Toyota Aygo <sup className="text-xs">or similar small car</sup>
            </h1>

            <div className="flex flex-wrap justify-between">
              <span className="flex gap-1">
                <PiCassetteTapeThin size={25} />4 seats
              </span>
              <span className="flex gap-1">
                <TbManualGearbox size={25} />
                Manual
              </span>
              <span className="opacity-0">s</span>
            </div>

            <div className="flex flex-wrap mt-2 justify-between">
              <span className="flex gap-1">
                <IoBagOutline size={25} />1 Large bag
              </span>
              <span className="flex gap-1">
                <TiShoppingBag size={25} /> 1 Small bag
              </span>
              <span>
                <sub>Price for 3 days</sub>
              </span>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <h1 className="text-[#058123] flex gap-1 mt-1">
                  {" "}
                  <IoLogoXbox size={25} color="#058123" />
                  Unlimited mileage
                </h1>
                <h1 className="text-[#1870D5] mt-3">Paris -Etoile Foch</h1>
                <h1>4.8 km from cente</h1>
              </div>
              <div>
                <h1 className="text-3xl font-bold">HRK 1,063.53</h1>
                <button className="bg-[#068423] py-2 px-10 mt-2 text-white rounded-md">
                  View deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card fooder */}
      <hr className="my-3 border-[1px]" />
      <div className="flex justify-between flex-wrap">
        <div className="flex gap-2">
          <button className="bg-[green] text-white py-1 px-2 rounded-md">
            Enropcar
          </button>
          <button className="bg-[#2C6EA7] text-white py-1 px-2 rounded-md">
            8.1
          </button>
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
