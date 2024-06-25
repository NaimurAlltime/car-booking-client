import Header from "../Shared/Header";
import HeadingProgressBar from "../Shared/HeadingProgressBar";
import CarChoice from "./CarChoice";
import CarDetail from "./CarDetail";
// import CarImportant from "./CarImportant";
import ExtraDetails from "./ExtraDetails";
import HighLight from "./HighLight";
import PriceDetails from "./PriceDetails";

const LeftSide = () => {
  return (
    <div className="col-span-6 my-8 p-4">
      <Header headerText="Your deal" paraText="Next… Protection options" />

      {/* <HeadingProgressBar /> */}

      <HighLight highLightText="Free cancellation up to 48 hours before pick-up" />
      <CarDetail />

      <hr className="my-14" />
      {/* <CarImportant /> */}
      <hr className="my-14" />

      <CarChoice />
      <hr className="my-14" />
      <PriceDetails />

      <hr className="my-14" />
      <ExtraDetails />
    </div>
  );
};

export default LeftSide;
