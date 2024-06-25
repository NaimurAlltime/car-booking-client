"use client";
import SearchBox from "./SearchBox";

const HomeBanner = () => {
  return (
    <div>
      <div id="search-bar-banner" className="bg-[url('/imgs/banner-bg.jpg')] relative after:bg-primary after:absolute after:h-full after:w-full after:opacity-60 after:top-0 after:left-0 after:z-30  py-20 bg-center bg-no-repeat bg-cover w-full h-full">
        <div className="container px-5 mx-auto flex justify-center items-center min-h-[80vh] z-40">
          <div className="max-w-6xl z-40">
            <h2 className="text-center md:leading-relaxed font-sans mx-3 md:mx-0 text-white md:text-3xl text-2xl font-semibold mb-5 md:mb-10">
              Marrakech Car rental
              services.
            </h2>
            <div className="md:px-0 px-4">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
