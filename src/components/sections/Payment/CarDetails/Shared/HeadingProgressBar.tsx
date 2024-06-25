import PropTypes from "prop-types";

const HeadingProgressBar = ({ step }: any) => {
  return (
    <div className="flex gap-3 my-4">
      <hr className="w-1/3 border-t-2 border-[#1273c4]" />
      <hr
        className={`${
          step === "two"
            ? "w-1/3 border-t-2 border-[#1273c4]"
            : "w-1/3 border-t-2 border-[#d9d9d9]"
        }`}
      />
      <hr className="w-1/3 border-t-2 border-[#d9d9d9]" />
    </div>
  );
};

HeadingProgressBar.propTypes = {
  step: PropTypes.oneOf(["one", "two", "three", ""]).isRequired,
};

export default HeadingProgressBar;
