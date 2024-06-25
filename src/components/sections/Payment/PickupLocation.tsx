import { FaRegCircleCheck } from "react-icons/fa6";

const PickupLocation = () => {
  return (
    <div className="mt-2">
      <div className="border-[1.5px] p-4 rounded-lg">
        <h2 className="text-xl font-bold">Pick-up and drop-off</h2>
        <ul className="timeline timeline-vertical">
          {/* one */}
          <li className="xl:pl-2 lg:pl-2">
            <div className="timeline-end timeline-box border-none">
              <div className="flex flex-col gap-4">
                <p className="flex justify-start items-center font-Poppins font-light text-md mt-2">
                  <span>
                    <FaRegCircleCheck className="mr-2" />
                  </span>
                  Sat, 27 Apr · 10:00
                </p>
                <h1 className="font-Poppins font-semibold text-md">
                  Paris Charles de Gaulle Airport
                </h1>
                {/* <a
              href=""
              className="cursor-pointer text-blue-600 hover:underline hover:text-blue-500"
            >
              View pick-up instructions
            </a> */}
              </div>
            </div>
            <hr />
          </li>
          {/* two */}
          <li className="xl:pl-2 lg:pl-2">
            <div className="timeline-end timeline-box border-none">
              <div className="flex flex-col gap-4">
                <p className="flex justify-start items-center font-Poppins font-light text-md mt-2">
                  <span>
                    <FaRegCircleCheck className="mr-2" />
                  </span>
                  Sat, 27 Apr · 10:00
                </p>
                <h1 className="font-Poppins font-semibold text-md">
                  Paris Charles de Gaulle Airport
                </h1>
                {/* <a
              href=""
              className="cursor-pointer text-blue-600 hover:underline hover:text-blue-500"
            >
              View pick-up instructions
            </a> */}
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PickupLocation;
