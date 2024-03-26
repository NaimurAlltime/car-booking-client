import { FaCar, FaCarCrash, FaCarSide, FaCaravan } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import Card from "./Card";

const Cars = ({ data }: any) => {
  const navcar = [
    {
      id: 1,
      text: "Medium car",
      icons: <FaCar size={25} />,
      value: "medium",
    },
    {
      id: 2,
      text: "Small car",
      icons: <FaCarSide size={25} />,
      value: "small",
    },
    {
      id: 3,
      text: "Large car",
      icons: <FaCaravan size={25} />,
      value: "large",
    },
    {
      id: 4,
      text: "SUVs",
      icons: <FaCarCrash size={25} />,
      value: "SUVs",
    },
    {
      id: 5,
      text: "People carrier",
      icons: <FaCarSide size={25} />,
      value: "People Carrier",
    },
    {
      id: 6,
      text: "Premium car ",
      icons: <FaCarOn size={25} />,
      value: "premium",
    },
    {
      id: 7,
      text: "Estate",
      icons: <FaCarSide size={25} />,
      value: "estate",
    },
  ];
  return (
    <div>
      <div>
          <h1 className="font-bold text-3xl mb-5">{data?.meta?.total} cars available</h1>
        {/* <h1 className="flex items-center gap-1 border py-2 px-3 w-fit rounded-full text-[18px] font-semibold">
          <BiSortAlt2 size={25} /> Sort by:Recommentded<TbArrowsMoveVertical size={25}></TbArrowsMoveVertical>
        </h1> */}
        {/* nav icon menu */}
        <ul className="flex flex-wrap gap-3 ">
          {navcar.map((d) => (
            <li key={d.id} className="text-center flex p-3 rounded-md transition-all duration-300 flex-col cursor-pointer hover:bg-slate-300">
              <span className="mx-auto">{d.icons}</span>
              {d.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        {data?.cars?.map((d: any) => (
          <Card key={d.id} car={d} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
