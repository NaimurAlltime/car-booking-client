import PropTypes from "prop-types";

const Header = ({ headerText, paraText }: any) => {
  return (
    <>
      <h1 className="text-black font-Poppins font-bold first-letter:capitalize text-2xl">
        {headerText}
      </h1>
      <p className="text-black text-xl font-Poppins font-light first-letter:capitalize">
        {paraText}
      </p>
    </>
  );
};

export default Header;

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  paraText: PropTypes.string.isRequired,
};
