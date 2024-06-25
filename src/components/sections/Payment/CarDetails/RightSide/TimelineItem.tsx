import { FaRegCircleCheck } from "react-icons/fa6";

const TimelineItem = () => {
  return (
    <ul className="timeline timeline-vertical">
      {/* one */}
      <li className="xl:pl-8 lg:pl-20">
        <div className="timeline-middle">
          <FaRegCircleCheck />
        </div>
        <div className="timeline-end timeline-box border-none">
          <div className="flex flex-col gap-4">
            <p className="font-Poppins font-light text-sm">
              Sat, 27 Apr · 10:00
            </p>
            <h1 className="font-Poppins font-bold text-sm">
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
      <li className="xl:pl-8 lg:pl-20">
        <hr />
        <div className="timeline-middle ">
          <FaRegCircleCheck />
        </div>
        <div className="timeline-end timeline-box border-none">
          <div className="flex flex-col gap-4">
            <p className="font-Poppins font-light text-sm">
              Sat, 27 Apr · 10:00
            </p>
            <h1 className="font-Poppins font-bold text-sm">
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
      </li>
    </ul>
  );
};

export default TimelineItem;
