"use client";
import BannerCard from "./BannarCard/BannerCard";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import { FaCheck } from "react-icons/fa6";
import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Header = () => {
  return (
    <div className="backgournd-image bg-center single-bg bg-no-repeat bg-cover w-full">
      <div className="w-full h-[585px] bg-banner-bg bg-center bg-no-repeat object-bottom">
        <Navbar />
        <div className="justify-center md:mt-[210px] mt-[45px] pb-20 max-w-screen-lg mx-auto">
          <h2 className="text-center mx-3 md:mx-0 text-white font-semibold text-[22px] mb-8 md:mb-14">
            Affordable Car Rentals: Drive Your Way to Convenience and Savings
            <br />
            Today!" Car Rental -Search, Compare & Save
          </h2>
          <div className="md:px-0 px-4">
            <BannerCard />
          </div>
          <div className="text-xl ms-6 md:ms-0 font-semibold mt-3 md:flex flex-none gap-5 items-center justify-center">
            <div>
              <Checkbox onChange={onChange}>
                <span className="text-white">
                  Drop car off diffrect location
                </span>
              </Checkbox>
            </div>
            <div className="md:ms-10">
              <Checkbox onChange={onChange}>
                <span className="text-white">Driver aged 30 - 65?</span>
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
