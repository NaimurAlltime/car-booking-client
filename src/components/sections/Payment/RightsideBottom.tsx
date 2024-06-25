import { IoCheckmarkOutline } from "react-icons/io5";

const RightsideBottom = ({
  price,
  dayDiff,
}: {
  price: number;
  dayDiff: number;
}) => {
  return (
    <div className="mt-7">
      <div className="border-[1.5px] p-4 rounded-lg">
        <h2 className="text-xl font-bold">Car price breakdown</h2>
        <h3 className="xl:pl-2 lg:pl-2 flex items-center justify-between py-4">
          <span>Car hire charge</span> <span>DH {price}</span>
        </h3>
        <hr />
        <h3 className="xl:pl-2 lg:pl-2 flex items-center justify-between py-4">
          <span>Price for {dayDiff} days:</span>{" "}
          <span>DH {price * dayDiff}</span>
        </h3>
      </div>
    </div>
  );
};

export default RightsideBottom;
