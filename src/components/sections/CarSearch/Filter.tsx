"use client";
import { useRouter } from "@/lib/router-events";
import { Checkbox } from "antd";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Filter = () => {
  const [checkedAc, setCheckedAc] = useState(false);
  const [checkedAutomatic, setCheckedAutomatic] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const searchQuery = Object.fromEntries(params.entries());
  const onFilter = (e: any, key: string) => {
    if (key === "ac") setCheckedAc(e.target.checked);
    if (key === "automatic") setCheckedAutomatic(e.target.checked);
    if (e.target.checked) {
      // Add the key to the search query
      const newSearchQuery = { ...searchQuery, [key]: e.target.checked };
      router.replace(`/search-result?${new URLSearchParams(newSearchQuery)}`);
    } else {
      // Remove the key from the search query
      const { [key]: removedKey, ...rest } = searchQuery;
      router.replace(`/search-result?${new URLSearchParams(rest)}`);
    }
  };

  const clearFilter = () => {
    const { ac, automatic, category , ...rest } = searchQuery;
    router.push(`/search-result?${new URLSearchParams(rest)}`);
    setCheckedAc(false);
    setCheckedAutomatic(false);
  };
  return (
    <div className="border mt-5 rounded-md p-3">
      <h1 className="flex justify-between items-center">
        <span className="font-bold text-[22px]">Filter</span>
        <span className="text-[#3083D2] cursor-pointer" onClick={clearFilter}>
          Clear All filters
        </span>
      </h1>
      <hr className="my-3 border-[1px]" />
      {/* Location */}

      {/* Car specs */}
      <div>
        <h1 className="font-bold py-2">Car specs</h1>
        <div className="flex justify-between items-center">
          <Checkbox onChange={(e) => onFilter(e, "ac")} checked={checkedAc}>
            Air Conditioning
          </Checkbox>
        </div>
        <div className="flex justify-between items-center mt-1">
          <Checkbox onChange={(e) => onFilter(e, "automatic")} checked={checkedAutomatic}>
            Automatic
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default Filter;
