import Image from "next/image";
import logo from "../../../app/car-rent.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[rgba(0,0,0,255)] mt-16">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auhref">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white"
                href="#"
                aria-label="Brand"
              >
                <div className="flex-none justify-center items-center">
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    width={45}
                    height={45}
                    className="text-white ms-10"
                  />

                  <h1 className="text-xl font-sans md:text-2xl ms-2 font-semibold">
                    SHR Car Rental
                  </h1>
                  <p className="text-sm font-medium justify-center items-center mt-5">
                    An online marriage platform connects individuals seeking
                    lifelong partnerships.
                  </p>
                </div>
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Need Help?</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Member Login
                  </a>
                </p>
                <p>
                  <a
                    href="/#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Sign Up
                  </a>
                </p>

                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Premium Memberships
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Customer Support
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Partner Search
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Company</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    href="/about-us"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    href="/contact-us"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Contact us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Awards & Recognition
                  </a>{" "}
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Success Stories
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Privacy & You</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Terms of Use
                  </a>
                </p>

                <p>
                  <a
                    href="/#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Privacy Policy
                  </a>
                </p>

                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Be Safe Online
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Report Misuse
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Partner Search
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">More</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    WOW Couple Center
                  </a>
                </p>

                <p>
                  <a
                    href="/#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Success Stories
                  </a>
                </p>

                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    WOW Couple Live
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Site map
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Partner Search
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-8 pt-5 border-t-2 border-gray-600 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 Car Renter. All rights reserved.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <p className="text-gray-400">
                Passionately created by rentcar.com org
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
