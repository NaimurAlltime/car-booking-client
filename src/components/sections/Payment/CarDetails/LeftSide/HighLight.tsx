import PropTypes from "prop-types";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";

export type THighLight = {
  highLightText?: string;
  isProtectionPage?: string;
  hightLightSpan?: string;
};

const HighLight = ({
  highLightText,
  isProtectionPage,
  hightLightSpan,
}: THighLight) => {
  return (
    <>
      {isProtectionPage === "one" ? (
        <div className="p-4 my-4 border-[1px] border-black rounded-lg flex items-center gap-4">
          <RiSecurePaymentLine size={30} color="#068323" />
          <h2 className="font-Poppins text-[17px] text-black">
            <span className="font-bold">{hightLightSpan}</span> {highLightText}
          </h2>
        </div>
      ) : isProtectionPage === "two" ? (
        <div className="bg-[#e9ffef] p-4 my-4 border-[1px] border-black rounded-lg flex items-center gap-4">
          <CiCircleInfo size={30} color="#068323" />
          <h2 className="font-Poppins text-[17px] text-black">
            <span className="font-bold">{hightLightSpan}</span> {highLightText}
          </h2>
        </div>
      ) : (
        <div className="bg-[#e9ffef] p-4 my-4 border-[1px] border-black rounded-lg flex items-center gap-4">
          <CiCircleCheck size={30} color="#068323" />
          <h2 className="font-Poppins text-[17px] text-black">
            {highLightText}
          </h2>
        </div>
      )}
    </>
  );
};

export default HighLight;

HighLight.propTypes = {
  highLightText: PropTypes.string.isRequired,
  isProtectionPage: PropTypes.string.isRequired,
  hightLightSpan: PropTypes.string.isRequired,
};
