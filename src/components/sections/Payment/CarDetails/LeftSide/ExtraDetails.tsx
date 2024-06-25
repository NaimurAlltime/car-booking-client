import SubHeading from "../Shared/SubHeading";

const ExtraDetails = () => {
  return (
    <div>
      <SubHeading subHeadingText="Extra" />
      <p className="font-Poppins text-sm text-[#911a1a] my-10">
        Child seats, additional drivers and more.
      </p>
      <a
        href=""
        className="cursor-pointer text-blue-600 hover:underline hover:text-blue-500"
      >
        Add Extras
      </a>
    </div>
  );
};

export default ExtraDetails;
