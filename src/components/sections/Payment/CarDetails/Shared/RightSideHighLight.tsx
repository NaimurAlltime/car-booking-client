import PropTypes from "prop-types";
import { FaHandsHelping } from "react-icons/fa";

export type reghtsideType = {
  headingText: string;
  paraText: string;
  isRightSide?: string;
};

const RightSideHighLight = ({
  headingText,
  paraText,
  isRightSide,
}: reghtsideType) => {
  return (
    <>
      {isRightSide === "true" ? (
        <div className="bg-[#e9ffef] p-4 my-4 border-[1px] border-black rounded-lg gap-4">
          <div className="flex gap-4 items-center">
            <FaHandsHelping />
            <h2 className="font-Poppins text-[17px] text-black font-semibold">
              {headingText}
            </h2>
          </div>
          <p className="font-Poppins text-[17px] text-black pl-8">{paraText}</p>
        </div>
      ) : (
        <div className="bg-[#e9ffef] p-4 my-4 border-[1px] border-black rounded-lg flex flex-col items-center gap-4">
          <h2 className="font-Poppins text-[17px] text-black font-semibold">
            {headingText}
          </h2>
          <p className="font-Poppins text-[17px] text-black ">{paraText}</p>
        </div>
      )}
    </>
  );
};

export default RightSideHighLight;

RightSideHighLight.propTypes = {
  headingText: PropTypes.string.isRequired,
  paraText: PropTypes.string.isRequired,
  isRightSide: PropTypes.string.isRequired,
};
