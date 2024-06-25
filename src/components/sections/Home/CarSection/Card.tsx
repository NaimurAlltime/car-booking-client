import Image from "next/image";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiBigGear, GiCarDoor, GiComputerFan } from "react-icons/gi";
import { MdAirlineSeatReclineExtra, MdShoppingBag } from "react-icons/md";

export type CardTProps = {
  title: string;
  subTitle: string;
  mad: string;
  seats: string;
  bags: string;
  door: string;
  ac: string;
  cylinder: string;
  system: string;
  image: string;
};

const Card = ({ card }: any) => {
  const {
    title,
    subTitle,
    mad,
    seats,
    bags,
    door,
    ac,
    cylinder,
    system,
    image,
  } = card;
  return (
    <div className="bg-white md:px-5 px-2 border border-gray-200 rounded-md py-6 uppercase text-[#473C6B] hover:shadow-lg">
      <div className="flex justify-between">
        <div className="w-2/3">
          <h1 className="lg:text-2xl md:text-2xl text-2xl h-[55px] font-semibold">
            {title}
          </h1>
          <h2 className="lg:text-lg md:text-lg text-md font-semibold pt-3">
            {subTitle}
          </h2>
        </div>
        <div>
          <ul className="font-semibold">
            <li className="flex gap-2 items-center">
              <span className="text-xl">
                <MdAirlineSeatReclineExtra />
              </span>
              <span>{seats} seats</span>
            </li>
            {/* <li className="flex gap-2 items-center">
              <span>
                <MdShoppingBag />
              </span>
              <span>{bags} bags</span>
            </li> */}
            {/* <li className="flex gap-2 items-center">
              <span>
                <GiCarDoor />
              </span>
              <span>{door} doors</span>
            </li> */}
            <li className="flex gap-2 items-center">
              <span>
                <GiComputerFan />
              </span>
              <span>{ac}</span>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <BsFillFuelPumpDieselFill />
              </span>
              <span>{cylinder}</span>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <GiBigGear />
              </span>
              <span>{system}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* bg-[#F47322] [#00a2ff] */}
      <div className="text-center bg-[#00a2ff] hover:bg-blue-900 w-full my-5 text-white rounded-md py-2 text-xl font-semibold">
        <h3>from</h3>
        <h2>{mad} mad/day</h2>
      </div>

      <div className="text-center">
        <Image
          width={120}
          height={100}
          className="inline w-full h-40"
          src={image}
          alt=""
        />
      </div>
      <div>
        <a href="#search-bar-banner">
          <button className="uppercase mt-5 text-white w-full bg-[#00a2ff] hover:bg-blue-900 py-2 rounded-md">
            book now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
