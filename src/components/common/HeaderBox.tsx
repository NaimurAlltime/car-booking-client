"use client";
import { useGetSingleLocationQuery } from "@/redux/features/location/location.api";
import { Button, Skeleton } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import SearchBox from "../sections/Home/Banner/SearchBox";

const HeadingBox = ({ queryParams }: { queryParams: any }) => {
  const [editOpen, setEditOpen] = useState(false);
  const { data } = useGetSingleLocationQuery({
    id: queryParams?.location,
  });

  const location = data?.location;
  return (
    <div className="my-5 border-[1.7px] border-yellow-500 p-2 rounded-md">
      {!editOpen ? (
        <div className="md:mx-5 mx-2 flex justify-between items-center">
          <div className="flex items-center gap-10 ">
            <div>
              <Skeleton loading={!location} active paragraph={{ rows: 0 }} />
              <h2 className="lg:text-lg font-bold py-1">{location?.name}</h2>
              <p className="text-slate-500">
                {dayjs(queryParams?.pickDate).format("ddd, DD MMM YYYY")}, {queryParams?.pickTime}
              </p>
            </div>
            <div>
              <p>
                <FaAngleRight />
              </p>
            </div>
            <div>
              <Skeleton loading={!location} active paragraph={{ rows: 0 }} />
              <h2 className="lg:text-lg font-bold py-1">{location?.name}</h2>
              <p className="text-slate-500">
                {dayjs(queryParams?.returnDate).format("ddd, DD MMM YYYY")}, {queryParams?.returnTime}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button type="primary" className="w-full" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-5">
            <h2 className="text-lg font-bold">Edit Your Search</h2>
            <div>
              <Button type="text" onClick={() => setEditOpen(false)}>
                X
              </Button>
            </div>
          </div>

          <SearchBox />
        </div>
      )}
    </div>
  );
};

export default HeadingBox;
