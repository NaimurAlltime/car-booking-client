import SubHeading from "../Shared/SubHeading";
import CarChoiceDetails from "./CarChoiceDetails";

const PriceDetails = () => {
  return (
    <div>
      <SubHeading subHeadingText="Included in the price" />
      <section className="md:flex justify-between items-center flex-none md:p-0 p-2">
        <div className="md:mt-0 mt-3">
          <CarChoiceDetails carChoiceText="Free cancellation up to 48 hours before pick-up" />
          <CarChoiceDetails carChoiceText="Theft Protection with ₹133,596 excess" />
        </div>
        <div className="md:mt-0 mt-3">
          <CarChoiceDetails carChoiceText="Collision Damage Waiver with ₹133,596 excess" />
          <CarChoiceDetails carChoiceText="Unlimited mileage" />
        </div>
      </section>
    </div>
  );
};

export default PriceDetails;
