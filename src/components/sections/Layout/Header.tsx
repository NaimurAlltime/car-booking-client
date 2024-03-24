"use client";
import { Link } from "@/lib/router-events";
import { Button } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import HeaderDropdown from "./HeaderDropdown";

const Header: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };
  console.log(isTop);
  useEffect(() => window.addEventListener("scroll", controlNavbar), []);
  return (
    <div className={`w-full fixed top-0 z-50   ${isTop ? "bg-primary bg-opacity-10" : "bg-white shadow-md"}`}>
      <div className=" h-full container px-5 mx-auto py-2 md:py-5 flex items-center justify-between">
        <div className="flex gap-10 items-center justify-center ">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/imgs/rental-car.png"
              alt=""
              width={45}
              height={45}
              className="text-white"
            />
            <h1 className="text-xl font-sans md:text-2xl ms-2 font-semibold">
              SHR Car Rental
            </h1>
          </Link>

          <Link
            href="/"
            className="hidden group md:flex items-center justify-center font-semibold"
          >
            <div>
              <FaPersonBreastfeeding className="text-2xl border border-gray-400 mr-2 p-[3px] rounded-full" />
            </div>
            <p className="mr-1 group-hover:underline">Help</p>
            <IoIosArrowDown />
          </Link>
          <div className="md:ms-20">
            <Link className="group-hover:underline font-semibold ms-4">
              Reservation
            </Link>
            <Link className="group-hover:underline font-semibold ms-5">
              About Us
            </Link>
            <Link className="group-hover:underline font-semibold ms-5">
              Contacts
            </Link>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center justify-center font-semibold">
            <HeaderDropdown />
            <h2 className="">EN</h2>
          </div>
          <div className="items-center hidden md:flex justify-center font-semibold">
            <Button size="large" type={!isTop ? "primary" : undefined}>
              Manage Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
