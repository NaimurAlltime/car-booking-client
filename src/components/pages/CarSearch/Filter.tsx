import React from "react";

const Filter = () => {
  return (
    <div className="border mt-5 rounded-md p-3">
      <h1 className="flex justify-between items-center">
        <span className="font-bold text-[22px]">Filter</span>
        <span className="text-[#3083D2]">Clear All filters</span>
      </h1>
      <hr className="my-3 border-[1px]" />
      {/* Location filter */}
      <div>
        <h1 className="font-bold py-2">Location</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <input type="checkbox" className="w-5 h-5" />
            Train station{" "}
          </span>
          <span>243</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="flex items-center gap-1">
            <input type="checkbox" className="w-5 h-5" />
            All other locations{" "}
          </span>
          <span>510</span>
        </div>
      </div>
      <hr className="my-4 border-[1px]" />
      {/* Car specs */}
      <div>
        <h1 className="font-bold py-2">Car specs</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <input type="checkbox" className="w-5 h-5" />
            Air Conditioning{" "}
          </span>
          <span>478</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="flex items-center gap-1">
            <input type="checkbox" className="w-5 h-5" />
            4+ doors{" "}
          </span>
          <span>425</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
