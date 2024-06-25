import CarImg from "../../../../../public/assets/payment/clio_lrg.jpg";

import { IoIosMan } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaRoadSolid } from "react-icons/lia";
import { TbManualGearbox } from "react-icons/tb";
import CarBadge from "../Shared/CarBadge";
import Image from "next/image";

const CarDetail = () => {
  return (
    <section className="grid grid-cols-6 sm:flex xs:flex sm:flex-col xs:flex-col">
      <div className="col-span-2 mt-10">
        <div className="flex justify-center items-center">
          <Image src={CarImg} alt="Cars" width={300} height={300} />
        </div>
      </div>

      <div className="col-span-4 mt-14 sm:pb-12 xs:pb-12">
        <CarBadge badgeText="top pick" />
        <h1 className="font-Poppins font-bold text-xl py-4">
          Renault Clio{" "}
          <span className="font-light text-sm">or similar small car</span>
        </h1>
      </div>

      {/* ---- car details----- */}
      <div className="col-start-3 col-span-3 -my-14">
        <div className="flex gap-8 sm:flex sm:flex-col xs:flex xs:flex-col xs:gap-5 sm:gap-5 pb-4">
          {/* first section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <IoIosMan />
              <div>
                <h1 className="font-Poppins text-sm">4 seats</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoBagCheckOutline />
              <div>
                <h1 className="font-Poppins text-sm">1 Large bag</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LiaRoadSolid />
              <div>
                <h1 className="font-Poppins text-sm">Unlimited mileage</h1>
              </div>
            </div>
          </div>
          {/* second section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <TbManualGearbox />
              <div>
                <h1 className="font-Poppins text-sm">Manual</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoBagCheckOutline />
              <div>
                <h1 className="font-Poppins text-sm">1 Small bag</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
