import MainButton from "./Shared/MainButton";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const CarDetails = () => {
  return (
    <div className="grid grid-cols-8 md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col gap-8 p-4">
      <LeftSide />
      <RightSide />

      <button className="col-start-5 my-20 col-span-2">
        <MainButton mainBtnText="Continue to book" />
      </button>
    </div>
  );
};

export default CarDetails;
