"use client";
import React, { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const ProtectionPart = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="border-[1.5px] p-4 border-blue-600 rounded-md my-5 border-t-8">
      <div>
        <h2 className="text-xl font-bold flex justify-between">
          Are you sure you don&apos;t want Full Protection?
          <span className="text-2xl">₹5,069.63</span>
        </h2>
        <p className="pb-5 pt-2">
          Your rental car’s basic cover has a ₹135,619.80 excess and only covers
          theft and bodywork damage. Full Protection covers so much more.
        </p>
      </div>
      <div className="collapse border">
        <input type="checkbox" className="peer" />
        <div className="collapse-title  peer-checked:bg-base-200 p-5">
          <div
            className="flex justify-between items-center "
            onClick={toggleContent}
          >
            <h2>Find out more</h2>
            {expanded ? (
              <FaAngleUp className="text-xl" />
            ) : (
              <FaAngleDown className="text-xl" />
            )}
          </div>
        </div>
        <div className="collapse-content ">
          <p className="flex items-center">
            <span className="text-green-500 pr-2 text-xl">
              <IoCheckmarkOutline />
            </span>
            Refunds damage / theft excess charges
          </p>
          <p className="flex items-center">
            {" "}
            <span className="text-green-500 pr-2 text-xl py-1">
              <IoCheckmarkOutline />
            </span>
            Refunds repair bills (excluding interior)
          </p>
          <p className="flex items-center">
            <span className="text-green-500 pr-2 text-xl">
              <IoCheckmarkOutline />
            </span>
            Refunds breakdown & admin fees
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-5">
        <div className="lg:text-base text-sm">
          <h4>Exclusions apply</h4>
          <h2 className="lg:text-lg text-blue-500">Protection Terms</h2>
        </div>
        <button className="border border-blue-500 rounded-md  lg:px-14 px-4 py-3 hover:bg-blue-200 cursor-pointer font-semibold">
          Add Full Protection
        </button>
      </div>
    </div>
  );
};

export default ProtectionPart;
