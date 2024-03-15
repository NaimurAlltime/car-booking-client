import { DatePicker, Input, TimePicker } from "antd";
import "./BannerCard.css";
import { CiSearch } from "react-icons/ci";

function BannerCard() {
  return (
    <div className="flex-none md:flex gap-2 justify-center items-center rounded-md py-5 px-3 md:py-3 md:px-2 bg-[#ffb700]">
      <div className="flex bg-white gap-2 items-center justify-center rounded-md">
        <div className="ms-2">
          <CiSearch />
        </div>
        <div>
          <label className="text-[12px] ms-4 md:ms-0">Pick Up Location</label>
          <Input defaultValue="Paris, Ile de France, France" />
        </div>
      </div>
      <div className="md:flex flex-none items-center justify-center">
        <div className="flex gap-2 md:mt-0 mt-3">
          <div className="bg-white md:pe-0 pe-4 rounded-md block gap-3 justify-center items-center">
            <label className="text-[12px] ms-4 md:ms-2">Pick Up Date</label>
            <div>
              <DatePicker />
            </div>
          </div>
          <div className="bg-white md:w-[100px] w-[132px] rounded-md block gap-3 justify-center items-center">
            <label className="text-[12px] ms-4 md:ms-2">Time</label>
            <div>
              <TimePicker />
            </div>
          </div>
        </div>
        <div className="flex gap-2 md:mt-0 mt-3">
          <div className="bg-white md:pe-0 pe-4 rounded-md block gap-3 justify-center items-center md:ms-[10px] ms-0">
            <label className="text-[12px] ms-4 md:ms-2">Pick Up Date</label>
            <div>
              <DatePicker />
            </div>
          </div>
          <div className="bg-white md:w-[100px] w-[132px] rounded-md block gap-3 justify-center items-center">
            <label className="text-[12px] ms-4 md:ms-2">Time</label>
            <div>
              <TimePicker />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-none gap-3 justify-center items-center mt-3 md:mt-0">
        <button className="bg-button mx-auto py-4 px-36 md:px-8 text-white rounded-md">
          Search
        </button>
      </div>
    </div>
  );
}

export default BannerCard;
