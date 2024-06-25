import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const CarChoiceDetails = ({ carChoiceText }: any) => {
  return (
    <div className="flex justify-start items-center gap-4 p-2">
      <FaCheck color="#068323" size={20} />
      <p className="font-Poppins text-sm text-[#911a1a]">{carChoiceText}</p>
    </div>
  );
};

export default CarChoiceDetails;

CarChoiceDetails.propTypes = { carChoiceText: PropTypes.string.isRequired };
