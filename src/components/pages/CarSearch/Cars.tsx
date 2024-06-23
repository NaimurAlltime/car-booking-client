import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { TbArrowsMoveVertical } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import Card from "./Card";

const Cars = () => {
  const navcar = [
    {
      id: 1,
      text: "Medium car",
      icons: <FaCar size={25} />,
    },
    {
      id: 2,
      text: "Small car",
      icons: <FaCarSide size={25} />,
    },
    {
      id: 3,
      text: "Large car",
      icons: <FaCaravan size={25} />,
    },
    {
      id: 4,
      text: "SUVs",
      icons: <FaCarCrash size={25} />,
    },
    {
      id: 5,
      text: "People carrier",
      icons: <FaCarSide size={25} />,
    },
    {
      id: 6,
      text: "Premium car ",
      icons: <FaCarOn size={25} />,
    },
    {
      id: 7,
      text: "Estate",
      icons: <FaCarSide size={25} />,
    },
  ];
  return (
    <div>
      <div className="space-y-2">
        <h1 className="font-bold text-3xl">753 cars available</h1>
        <h1 className="flex items-center gap-1 border py-2 px-3 w-fit rounded-full text-[18px] font-semibold">
          <BiSortAlt2 size={25} /> Sort by:Recommentded
          <TbArrowsMoveVertical size={25}></TbArrowsMoveVertical>
        </h1>
        {/* nav icon menu */}
        <ul className="flex flex-wrap gap-9 py-4">
          {navcar.map((d) => (
            <li key={d.id} className="text-center flex flex-col">
              <span className="mx-auto">{d.icons}</span>
              {d.text}
            </li>
          ))}
        </ul>
      </div>
      {/* car card */}
      <Card></Card>
    </div>
  );
};

export default Cars;
