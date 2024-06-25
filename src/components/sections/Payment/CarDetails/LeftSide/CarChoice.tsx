import SubHeading from "../Shared/SubHeading";
import CarChoiceDetails from "./CarChoiceDetails";

import ChoiceImg from "../../../../../public/assets/payment/good-choice-2x.png";
import Image from "next/image";

const CarChoice = () => {
  return (
    <div>
      <SubHeading subHeadingText="Great Choice!" />
      <section className="md:flex justify-between items-center flex-none md:p-0 p-2">
        <div className="">
          <CarChoiceDetails carChoiceText="Customer rating: 7.9 / 10" />
          <CarChoiceDetails carChoiceText="Most popular fuel policy" />
          <CarChoiceDetails carChoiceText="Easy to find counter" />
        </div>
        <div className=" my-5 md:my-0">
          <CarChoiceDetails carChoiceText="Rental counter in terminal" />
          <CarChoiceDetails carChoiceText="Short queues" />
          <CarChoiceDetails carChoiceText="Free Cancellation" />
        </div>
        <div className="">
          <Image
            src={ChoiceImg}
            width={200}
            height={200}
            alt="Good choice"
            title="good choice"
          />
        </div>
      </section>
    </div>
  );
};

export default CarChoice;
