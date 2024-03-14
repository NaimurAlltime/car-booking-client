import { DatePicker } from "antd";
import "./BannerCard.css";

function BannerCard() {
  return (
    <div className="flex-none md:flex gap-2 justify-center items-center rounded-sm py-5 px-2 md:py-7 md:px-2 bg-red-300 bg-opacity-35">
      <div className="flex gap-2 items-center justify-center">
        <div className="md:flex block gap-3 justify-center items-center">
          <h2 className="font-semibold ms-4 md:ms-0">I am a</h2>
          <div className="select-trigger-wrapper dropdown-container">
            <DatePicker />
          </div>
        </div>
        <div className="md:flex block gap-3 justify-center items-center my-3 md:my-0">
          <h2 className="font-semibold ms-4 md:ms-0">Looking for a</h2>
          <div>
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="md:flex block gap-3 justify-center items-center">
          <h2 className="font-semibold ms-4 md:ms-0">From</h2>
          <div>
            <DatePicker />
          </div>
        </div>
        <div className="md:flex block gap-3 justify-center items-center my-3 md:my-0">
          <h2 className="font-semibold ms-4 md:ms-0">To</h2>
          <div>
            <DatePicker />
          </div>
        </div>
        <div className="md:flex block gap-3 justify-center items-center">
          <h2 className="font-semibold ms-4 md:ms-0"> Religion </h2>
          <div className="">
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="flex md:flex-none gap-3 justify-center items-center mt-5 md:mt-0">
        <button className="bg-button mx-auto py-2 px-12 md:px-8 text-white rounded-full">
          Lets Start
        </button>
      </div>
    </div>
  );
}

export default BannerCard;
