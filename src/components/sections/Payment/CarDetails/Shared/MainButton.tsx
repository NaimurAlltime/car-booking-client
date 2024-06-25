"use client";
import { useRouter } from "@/lib/router-events";
import PropTypes from "prop-types";

const MainButton = ({ mainBtnText }: any) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/protection}`)}
      className="bg-[#16b139] text-white font-Poppins font-bold tracking-wider w-1.2 px-12 py-4 rounded-lg hover:bg-[#0d6521] transition-all duration-300"
    >
      {mainBtnText}
    </button>
  );
};

export default MainButton;

MainButton.propTypes = { mainBtnText: PropTypes.string.isRequired };
