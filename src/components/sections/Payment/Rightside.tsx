import { IoCheckmarkOutline } from "react-icons/io5";

const Rightside = ({ price, dayDiff }: { price: number; dayDiff: number }) => {
  // console.log("new price", price, dayDiff);
  return (
    <div className="mt-4">
      <div className="border-[1.5px] p-4 rounded-lg">
        <h2 className="text-xl font-bold">Car price breakdown</h2>
        <h3 className="flex items-center justify-between py-5">
          <span>Car hire charge</span> <span>Euro {price}</span>
        </h3>
        <hr />
        <h3 className="flex items-center justify-between py-5">
          <span>Price for {dayDiff || 3} days:</span>{" "}
          <span>Euro {price * 3}</span>
        </h3>
      </div>
      <div className="border-[1.5px] p-4 rounded-lg my-5">
        <h2 className="text-lg font-bold py-2">Great choice!</h2>
        <p className="flex items-center">
          <span className="text-green-500 pr-2 text-xl">
            <IoCheckmarkOutline />
          </span>
          Customer rating: 8.4 / 10
        </p>
        <p className="flex items-center">
          {" "}
          <span className="text-green-500 pr-2 text-xl py-1">
            <IoCheckmarkOutline />
          </span>
          Most popular fuel policy
        </p>
        <p className="flex items-center">
          <span className="text-green-500 pr-2 text-xl py-2">
            <IoCheckmarkOutline />
          </span>
          Short queues
        </p>
        <p className="flex items-center">
          <span className="text-green-500 pr-2 text-xl">
            <IoCheckmarkOutline />
          </span>
          Easy to find counter
        </p>
        <p className="flex items-center">
          <span className="text-green-500 pr-2 text-xl py-2">
            <IoCheckmarkOutline />
          </span>
          Helpful counter staff
        </p>
        <p className="flex items-center">
          <span className="text-green-500 pr-2 text-xl">
            <IoCheckmarkOutline />
          </span>
          Well-maintained cars
        </p>
      </div>
    </div>
  );
};

export default Rightside;
