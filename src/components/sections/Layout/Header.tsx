import BannerCard from "./BannarCard/BannerCard";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="backgournd-image bg-center single-bg bg-no-repeat bg-cover w-full">
      <div className="w-full h-[585px] bg-banner-bg bg-center bg-no-repeat object-bottom">
        <Navbar />
        <div className="justify-center mt-[300px] pb-20 max-w-screen-lg mx-auto">
          <h2 className="text-center text-white font-semibold text-2xl mb-5">
            Trusted matrimony & Matchmaking Service
          </h2>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Header;
