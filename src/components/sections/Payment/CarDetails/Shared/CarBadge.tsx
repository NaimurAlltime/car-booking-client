import PropTypes from "prop-types";

const CarBadge = ({ badgeText }: any) => {
  return (
    <span className="bg-[#1879ca] font-Poppins font-light text-[8px] text-white p-1.5 rounded-lg my-4 capitalize">
      {badgeText}
    </span>
  );
};

export default CarBadge;

CarBadge.propTypes = { badgeText: PropTypes.string.isRequired };
