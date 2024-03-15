"use client";
import { FaArrowLeft, FaPersonBreastfeeding } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import "./Banner.css";
import logo from "../../../../app/rental-car.png";
import { Button } from "antd";
import en from "../../../../app/en-flag.svg";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-24 text-white ">
      <div className="max-w-screen-xl h-full mx-auto md:px-10 px-3 flex items-center justify-between">
        <div className="flex gap-16 items-center justify-center md:ms-24">
          <div className="flex justify-center items-center">
            <Image
              src={logo}
              alt="Picture of the author"
              width={45}
              height={45}
              className="text-white"
            />

            <h1 className="text-xl font-sans md:text-2xl ms-2 font-semibold">
              Car Renter
            </h1>
          </div>

          <div className="hidden md:flex items-center justify-center font-semibold">
            <div>
              <FaPersonBreastfeeding className="text-2xl border border-gray-400 mr-2 p-[3px] rounded-full" />
            </div>
            <p className="mr-1 hover:underline">Help</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="flex gap-14 md:mr-24">
          <div
            style={{ borderRadius: "100px" }}
            className="flex items-center justify-center font-semibold"
          >
            <Image
              src={en}
              alt="Picture of the author"
              width={40}
              height={40}
              className="text-white"
            />
          </div>
          <div className="items-center hidden md:flex justify-center font-semibold">
            <Button>Manage Booking</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
